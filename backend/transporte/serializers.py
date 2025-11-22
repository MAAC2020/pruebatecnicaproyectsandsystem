from rest_framework import serializers
from .models import Carro,Ciudad,Viaje

#Serializador de Carro
class CarroSerializer(serializers.ModelSerializer):
    class Meta:
        model=Carro
        fields = ['id', 'placa', 'color', 'fecha_ingreso']
        read_only_fields=['fecha_ingreso'] #read_only_fields es para solo leer el campo fecha de ingreso y evitar que se sobreescriba

#Serializador de Ciudad
class CiudadSerializer(serializers.ModelSerializer):
    class Meta:
        model=Ciudad
        fields = ['id', 'nombre', 'activo']
        

#Serializador de Viaje
class ViajeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Viaje
        fields = ['id', 'carro', 'ciudad_origen', 'ciudad_destino', 'tiempo_horas', 'fecha']
        
    #la funcion debe estar al mismo nivel de indentación que 'class Meta:'
    def validate_tiempo_horas(self, value):
        # funcion para validar el tiempo en horas, si es cero retorna un error
        # @param {object} self:es todo el objeto 
        # @param {string} self:es el valor de tiempo horas
        if value <= 0:
            raise serializers.ValidationError("El tiempo en horas debe ser un valor positivo.")
        return value