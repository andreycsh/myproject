
es_mappings = {
    "Pubcater": {
        "properties": {
            "name": {
                "type": "string",
                "analyzer": "my_analyzer"
            },
            'address': {
                "type": "string",
                "analyzer": "my_analyzer"
            },
            'phone': {
                "type": "string",
                "analyzer": "my_analyzer"
            },
            'lon': {
                "type": "string",
                "analyzer": "my_analyzer"
            },
            'lat': {
                "type": "string",
                "analyzer": "my_analyzer"
            },
            'rating': {
                "type": "string",
                "analyzer": "my_analyzer"
            },
            'rec_id': {
                "type": "string",
                "analyzer": "my_analyzer"
            },
            'type': {
                "type": "string",
                "analyzer": "my_analyzer"
            }
        }
    }
}

 
model_es_indices = {
    "Pubcater": {
        'index_name': "mysite",
        "type": "Pubcater"
    }
}
 
fields_weights = {
    'name': 5,
    'address': 3
}
fuzzy_fields_weights = {
    'name': 1,
    'address': 1,
}
