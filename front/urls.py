from django.conf.urls import url, include
from . import views
from django.views.decorators.csrf import csrf_exempt

app_name = 'front'

urlpatterns = [
    url(r'^$', views.register, name='register'),
    url(r'^info/$', views.info, name='info'),

]
