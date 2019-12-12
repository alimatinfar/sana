from django.conf.urls import url, include
from . import views
from django.views.decorators.csrf import csrf_exempt

app_name = 'back'

urlpatterns = [
    url(r'^profile/$', views.ProfileListCreateAPIView.as_view(), name='profile'),

]
