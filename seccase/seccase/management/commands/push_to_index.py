# -*- coding: utf-8 -*-
from django.core.management.base import BaseCommand
from seccase.models import place
from elasticsearch import Elasticsearch
from elasticsearch.client import IndicesClient
from django.conf import settings
from elasticsearch.helpers import bulk
from seccase.es_mappings import model_es_indices, es_mappings
from django.contrib.gis import geos
import json
 
class Command(BaseCommand):
    
    es_index_name = 'seccase'
    es_ind_settings = {
        "settings": {
            "analysis": {
                "analyzer": {
                    "my_analyzer": {
                        "type": "custom",
                        "tokenizer": "standard",
                        "filter": ["lowercase", "standard", "my_stopwords"]
                    }
                },
                "filter": {
                    "my_stopwords": {
                        "type": "stop",
                        "stopwords": "дом,строение,район,город,улица,область,микрорайон"
                    }
                }
            }
        }
    }
	
    def handle(self, *args, **options):
        self.recreate_index()
        self.push_db_to_index()
 
    def push_db_to_index(self):
        data = [
            self.convert_for_bulk(s, 'create') for s in place.objects.all()[:1000]
            ]
        bulk(client=settings.ES_CLIENT, actions=data, stats_only=True)
 
    def convert_for_bulk(self, django_object, action=None):
        data = django_object.es_repr()
        metadata = {
            '_op_type': action,
            "_index": model_es_indices[django_object.__class__.__name__]['index_name'],
            "_type": model_es_indices[django_object.__class__.__name__]['type'],
        }
        data.update(**metadata)
        return data
 
    def recreate_index(self):
        indices_client = IndicesClient(client=settings.ES_CLIENT)
        index_name = self.es_index_name
        if indices_client.exists(index_name):
            indices_client.delete(index=index_name)
        indices_client.create(index=index_name, body = self.es_ind_settings)
## create mapping for one model only for now
        model_name = 'place'
        indices_client.put_mapping(
            doc_type=model_es_indices[model_name]['type'],
            body=es_mappings[model_name],
            index=index_name
        )
    def es_repr(self):
        data = {}
        mapping = es_mappings[self.__class__.__name__]
        data['_id'] = self.pk
        for field_name in mapping['properties'].keys():
            data[field_name] = self.field_es_repr(field_name)
        return data
 
    def field_es_repr(self, field_name):
        mapping = es_mappings[self.__class__.__name__]
        config = mapping['properties'][field_name]
 
        field_es_value = getattr(self, field_name)
 
        return field_es_value
 
 
    @classmethod
    def get_es_index(cls):
        return model_es_indices[cls.__name__]['index_name']
 
    @classmethod
    def get_es_type(cls):
        return model_es_indices[cls.__name__]['type']



