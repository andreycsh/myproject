#encoding: utf-8
from rest_framework import serializers
from seccase.models import place
from rest_framework_gis.serializers import GeoFeatureModelSerializer, GeometrySerializerMethodField
from django.contrib.gis.geos import Point

class placeSerializer(GeoFeatureModelSerializer):

   	point = GeometrySerializerMethodField()

    	def get_point(self, obj):
             return Point (obj.lat, obj.lon)

    	class Meta:
   	     model = place
             geo_field = "point"
             fields = ('city', 'district', 'street', 'house')
