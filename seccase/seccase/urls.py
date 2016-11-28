from django.conf.urls import include, url
from django.contrib import admin
from rest_framework.urlpatterns import format_suffix_patterns
from seccase import views

urlpatterns = [
    # Examples:
    # url(r'^$', 'seccase.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', views.IndexView.as_view()),
    url(r'^api/search/$', views.SearchView.as_view(), name='search'),

]

urlpatterns = format_suffix_patterns(urlpatterns, allowed=['html', 'json'])
