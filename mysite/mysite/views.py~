from rest_framework.views import APIView
from mysite.models import Pubcater, Reviews
from mysite.serializers import PubcaterSerializer, ReviewsSerializer
from rest_framework.response import Response
from django.views.generic import TemplateView
from django.views.decorators.clickjacking import xframe_options_exempt
from django.utils.decorators import method_decorator
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponse
import json
from django.core.serializers.json import DjangoJSONEncoder

class SearchView(APIView):
	renderer_classes = (JSONRenderer,)
	def get(self, request):
		term = request.GET.get('text')
		addrs = Pubcater.es_search(term)
		pubcater_serialiser = PubcaterSerializer(addrs, many = True)
		response = {}
		review_serializer = ReviewsSerializer()
		#response['text'] = term
		response['addrs'] = pubcater_serialiser.data
		l = {}
		#l['reviews'] =  json.dumps({"reviews": review_serializer.get_review(str(response['addrs']['features'][0]['properties']['rec_id']))})
		l = review_serializer.get_review(str(response['addrs']['features'][0]['properties']['rec_id']))
		s = ''
		for i in l:
		#	print i.review
			s += i.review
		print s
		response['reviews'] = json.dumps(s)
	#	print ('VIUHA  ',str(response['reviews']))
		
		#l = list(response['reviews'])
		
		#print l
		#print l
		#print('Viuha ', response['addrs']['features'][0]['properties']['rec_id'])
		#([('type', 'FeatureCollection'), ('features', [OrderedDict([('type', 'Feature'), ('geometry', GeoJsonDict([('type', u'Point'), ('coordinates', (43.2535209655762, 76.95263671875))])), ('properties', OrderedDict([('address', u'\u0443\u043b. \u0411\u043e\u0433\u0435\u043d\u0431\u0430\u0439 \u0431\u0430\u0442\u044b\u0440\u0430, 104'), ('name', u'\u0428\u0415\u0424'), ('type', u'restaurant'), ('rating', 8.19999980926514), ('rec_id', u'56017da0498e90c3072faa4d')]))])])]))

		
		return Response(response)


class IndexView(TemplateView):
	
    template_name = 'index.html'
    
class ReviewsView(APIView):
	def get(self, request):
		response = {}
		model = Reviews
		response['reviews'] = models.get(request)
		return Response(response)
