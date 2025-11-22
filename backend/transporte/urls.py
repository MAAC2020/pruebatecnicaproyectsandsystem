from django.urls import path
from rest_framework import routers
from .api import CarroViewSet,CiudadViewSet,ViajeViewSet
from .api_login import login_view   

#se almacena en la variable ruta
router=routers.DefaultRouter()

router.register('api/carros',CarroViewSet,basename='carros')
router.register('api/ciudades',CiudadViewSet,basename='ciudades')
router.register('api/viajes',ViajeViewSet,basename='viajes')

urlpatterns = [
    path('api/login/', login_view), #Login sin router
]

urlpatterns += router.urls