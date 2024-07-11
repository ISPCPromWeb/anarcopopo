from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse
from .models import Products

@api_view(['GET'])
def homepage(request):
    data = Products.objects.all()
    return HttpResponse(data)

@api_view(['GET'])
def hola(request):
    data = {'message': 'Hola'}
    return Response(data)