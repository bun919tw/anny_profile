from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^(?P<design_group>\w+)$', views.design_group, name='design_group'),
]
