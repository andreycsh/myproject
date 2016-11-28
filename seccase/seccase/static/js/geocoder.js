
var Geocoder = {
	
	 /*  var a = {"YO":"Ё","I":"Й","TS":"Ц","U":"У","K":"К","E":"Е","N":"Н","G":"Г","SH":"Ш","SCH":"Щ","Z":"З","H":"Х","'":"Ъ","yo":"ё","i":"й","ts":"ц","u":"у","k":"к","e":"е","n":"н","g":"г","sh":"ш","sch":"щ","z":"з","h":"х","'":"ъ","F":"Ф","I":"Ы","V":"В","a":"А","P":"П","R":"Р","O":"О","L":"Л","D":"Д","ZH":"Ж","E":"Э","f":"ф","i":"ы","v":"в","a":"а","p":"п","r":"р","o":"о","l":"л","d":"д","zh":"ж","e":"э","Ya":"Я","CH":"Ч","S":"С","M":"М","I":"И","T":"Т","'":"Ь","B":"Б","YU":"Ю","ya":"я","ch":"ч","s":"с","m":"м","i":"и",:"t","ь":"'","б":"b","ю":"yu"};
    function transliterate (tl){
 	 	return word.split('').map(function (char) { 
  	 	 return a[char] || char; 
  		}).join("");
		}*/
    init: function (map) {
        this._map = map;
        this.bindElements();
        this.bindEvents();

        this.markerGroup = L.featureGroup().addTo(this._map);
    },

    bindEvents: function () {
		
       this.searchField.typeahead({
            minLength: 1,
            highlight: true
        }, {
            limit: 6,
            displayKey: 'name',
            
            source: this.sendRequest.bind(this),

            templates: {
                suggestion: this.renderTemplate.bind(this),
                notFound: function () {
                    return '<div class="tt-no-result">Нет результатов...</div>';
                }
            }
        });

     
        this.searchField.bind('typeahead:select', this.onResultItemClick.bind(this));
        
    },

    bindElements: function () {
        this.searchField = $('.js-search');
    },

    sendRequest: function (q, sync, async) {
         $.ajax({
            type: 'GET',
            url: 'http://localhost:8000/api/search/',
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            data: {
                'text': q
            },
            success: function (response) {
                  var data = new Array();

                  var itemCollection =  response.addrs.features;

                  $.each(itemCollection, function(index, value){

                        var prop = value.properties;

                        var name =  prop.city + ', ' +
                                    prop.district + ', ' +
                                    prop.street + ', ' +
                                    prop.house;

                        data.push({
                            coordinates: value.geometry.coordinates,
                            name: name
                        });

                    });
		
                async(data);
            }
        });
    },




     renderTemplate: function (data) {

		
        var suggestion = '<div id="list-ite-str" class="list-item clearfix">' +
                          '<div class="list-item-r">' +
                            '<h4 class="list-item-name item-name" title="' + data.name + '">' + data.name +  '</h4>' +
                          '</div>' +
                        '</div>';

        return suggestion;
    },

    
    
    onResultItemClick: function(ev, suggestion){

        var coordinates = suggestion.coordinates;
        var marker = L.marker(coordinates);

        this.clearMap();
        this.markerGroup.addLayer(marker);
        this._map.setView(new L.LatLng(coordinates[0], coordinates[1]), 15)
    },
    
    onEnterKeyDown: function(ev){
/*
        var coordinates = suggestion.coordinates;
        var marker = L.marker(coordinates);

        this.clearMap();
        this.markerGroup.addLayer(marker);
        this._map.setView(new L.LatLng(coordinates[0], coordinates[1]), 15)
  */
	alert("fasdfsdafasdf");      
    },

    clearMap: function () {
        this.markerGroup.clearLayers();
    }
};

