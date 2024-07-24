from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product

@api_view(['GET'])
def homepage(request):
    data = Product.objects.all().values()
    print(data)
    return Response(data)

@api_view(['GET'])
def hola(request):
    data = {'message': 'Hola'}
    return Response(data)

