from django.db import models

# Create your models here.
from django.db import models

#Modelo Carro
class Carro(models.Model):
    placa = models.CharField(max_length=10, unique=True)
    color = models.CharField(max_length=30)
    fecha_ingreso = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.placa} - {self.color}"
#Modelo Ciudad
class Ciudad(models.Model):
    nombre = models.CharField(max_length=100)
    activo = models.BooleanField(default=True)

    # class Meta:
    #     verbose_name_plural = "Ciudades"

    def __str__(self):
        return self.nombre

#Modelo Viaje
class Viaje(models.Model):
    carro = models.ForeignKey(Carro, on_delete=models.CASCADE)
    ciudad_origen = models.ForeignKey(
        Ciudad, 
        on_delete=models.CASCADE, 
        related_name='viajes_origen'
    )
    ciudad_destino = models.ForeignKey(
        Ciudad, 
        on_delete=models.CASCADE, 
        related_name='viajes_destino'
    )
    tiempo_horas = models.PositiveIntegerField(help_text="Duración en horas enteras")
    fecha = models.DateField()

    def __str__(self):
        return f"Viaje de {self.ciudad_origen} a {self.ciudad_destino} ({self.carro})"