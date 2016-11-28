es_mappings = {
    "place": {
        "properties": {
            "city": {
                "type": "string",
                "analyzer": "my_analyzer"
            },
            'district': {
                "type": "string",
                "analyzer": "my_analyzer"
            },
            'street': {
                "type": "string",
                "analyzer": "my_analyzer"
            },
            'house': {
                "type": "string",
                "analyzer": "my_analyzer"
            },
          }
    }
}
model_es_indices = {
    "place": {
        'index_name': "seccase",
        "type": "place"
    }
}
