#encoding: utf-8
from django.http import HttpResponse
from django.shortcuts import render
from seccase.models import place
from django.views.generic import View
from rest_framework.renderers import JSONRenderer
from django.views.generic import TemplateView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from seccase.serializers import placeSerializer
from django.views.decorators.clickjacking import xframe_options_exempt
from django.utils.decorators import method_decorator


class IndexView(TemplateView):
    	template_name = 'index.html'

class SearchView(APIView):
	renderer_classes = (JSONRenderer,)
        @method_decorator(xframe_options_exempt)
        def get(self, request):
            term = request.GET.get('text')
            addrs = place.es_search(term)
            place_serializer = placeSerializer(addrs, many=True)
            response = {}
            response['addrs'] = place_serializer.data
 
 
            return Response(response)
