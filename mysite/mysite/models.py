# -*- coding: utf-8 -*-
from django.utils import timezone
from django.contrib.gis.db import models
from django.contrib.gis import geos
from mysite.maps import model_es_indices, es_mappings

import settings
import json

class Pubcater(models.Model):
	name = models.CharField(max_length=50, blank=True, null=True)
	address = models.CharField(max_length=50, blank=True, null=True)
	phone = models.CharField(max_length=50, blank=True, null=True)
	lat = models.FloatField(blank=True, null=True)
	lon = models.FloatField(blank=True, null=True)
	rating = models.FloatField(blank=True, null=True)
	rec_id = models.CharField(max_length=50, blank=True, null=True)
	type = models.CharField(max_length=50, blank=True, null=True)
    

	def __unicode__(self):
		name = self.name
		return unicode(name)
	
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
 
	@classmethod
	def es_search(cls, term, srch_fields=['address', 'name', 'type', 'rec_id']):
		es = settings.ES_CLIENT
		query = cls.gen_query(term, srch_fields)
		print json.dumps(query, ensure_ascii=False)
		recs = []
		res = es.search(index=cls.get_es_index(), doc_type=cls.get_es_type(), body=query)
		if res['hits']['total'] > 0:
			print 'found %s' % res['hits']['total']
			ids = [
				c['_id'] for c in res['hits']['hits']
				]
			clauses = ' '.join(['WHEN id=%s THEN %s' % (pk, i) for i, pk in enumerate(ids)])
			ordering = 'CASE %s END' % clauses
			recs = cls.objects.filter(id__in=ids).extra(select={'ordering': ordering}, order_by=('ordering',))
			print recs[0]

		return recs
	
	@classmethod
	def gen_query(cls, term, srch_fields):
		val = term
		query = {
			"query": {
				"filtered": {
					"query": {
						"bool": {
							"should": [
								{ "multi_match": {
									"type": "cross_fields",
									"fields": ["name"],
									"fuzziness": "AUTO",
									"query": term,
									"boost": 10
								} },
								{ "multi_match": {
									"type": "cross_fields",
									"fields": ["address"],
									"fuzziness": "AUTO",
									"query": term,
									"boost": 5
                                } },
                                { "multi_match": {
									"type": "cross_fields",
									"fields": ["type"],
									"fuzziness": "AUTO",
									"query": term,
									"boost": 5
                                } },
                                { "multi_match": {
									"type": "cross_fields",
									"fields": ["rec_id"],
									"fuzziness": "AUTO",
									"query": term,
									"boost": 5
                                } }
                            ]
                        }
                    }
                }
            },
            "size": 10,
        }
		return json.dumps(query)
    
class Reviews(models.Model):
	review_id = models.CharField(max_length=25, blank=True, null=True)
	review = models.TextField(blank = True, null = True)
	
	def get(_id):
		return Reviews.objects.all(review_id = _id)
