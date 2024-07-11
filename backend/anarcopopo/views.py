from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Products

@api_view(['GET'])
def homepage(request):
    data = Products.objects.all().values()
    print(data)
    return Response(data)

@api_view(['GET'])
def hola(request):
    data = {'message': 'Hola'}
    return Response(data)