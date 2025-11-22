from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(["POST"])
def login_view(request):
    username = request.data.get("username")
    password = request.data.get("password")

    # Usuario fijo para pruebas técnicas
    if username == "administrador" and password == "root":
        return Response({"message": "Login exitoso"}, status=status.HTTP_200_OK)

    return Response({"error": "Credenciales inválidas"}, status=status.HTTP_401_UNAUTHORIZED)
