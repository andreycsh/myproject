from rest_framework import serializers
from mysite.models import Pubcater, Reviews
from rest_framework_gis.serializers import GeoFeatureModelSerializer, GeometrySerializerMethodField
from django.contrib.gis.geos import Point
import json


class PubcaterSerializer(GeoFeatureModelSerializer):

    point = GeometrySerializerMethodField()

    def get_point(self, obj):
        return Point(obj.lat, obj.lon)

    class Meta:
        model = Pubcater
        geo_field = "point"
        fields = ('address', 'name', 'type', 'rating', 'rec_id')
        
class ReviewsSerializer():
	pucater = Pubcater
	reviews = Reviews
	def get_review(self, obj):
		o = str(obj)
		print('serializer, ', Reviews.objects.filter(review_id = o))
		return Reviews.objects.filter(review_id = o)
	class Meta:
		model = Reviews
		fields = ('review_id', 'review')
		


