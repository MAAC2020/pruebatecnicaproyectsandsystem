from .models import Carro,Ciudad,Viaje
from rest_framework import viewsets,permissions 
from .serializers import CarroSerializer,CiudadSerializer,ViajeSerializer

class CarroViewSet(viewsets.ModelViewSet):
    queryset=Carro.objects.all() #obtener todo los tipos de peticiones
    permission_classes=[permissions.AllowAny] #accesible desde cualquier punto, no se requiere autentificacion
    serializer_class=CarroSerializer #se llama el serializador para traducir en json

class CiudadViewSet(viewsets.ModelViewSet):
    queryset=Ciudad.objects.all() #obtener todo los tipos de peticiones
    permission_classes=[permissions.AllowAny] #accesible desde cualquier punto, no se requiere autentificacion
    serializer_class=CiudadSerializer #se llama el serializador para traducir en json


# ViewSet para Viaje (CON FILTRADO POR PLACA)
class ViajeViewSet(viewsets.ModelViewSet):
    # La línea de queryset ya no es estrictamente necesaria al usar get_queryset
    permission_classes=[permissions.AllowAny] 
    serializer_class=ViajeSerializer 

    # funcion para query set
    def get_queryset(self):
        # Obtiene la consulta base de todos los viajes.
        queryset = Viaje.objects.all()
        
        # se recibe el valor del parámetro 'placa' de la URL (ej: ?placa=AAA123).
        placa = self.request.query_params.get('placa')
        
        # si existe el parametro placa entonces procede a hacer una query interna para obtener la placa del carro hace un filter como en js
        if placa:
            # Filtra: accede a través de la relación 'carro' y verifica el campo 'placa'.
            queryset = queryset.filter(carro__placa__iexact=placa)
        
        # Devuelve la lista de viajes filtrada o completa.
        return queryset

