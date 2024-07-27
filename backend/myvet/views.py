from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product, User, Vaccine, Pet
from .serializers import ProductSerializer, PetSerializer, UserSerializer, VaccineSerializer

@api_view(['GET'])
def homepage(request):
    data = {'message': 'Wololo'}
    return Response(data)

@api_view(['GET'])
def products(request):
    productType = request.query_params.get('productType', None)
    match (productType):
        case "alimento":
            data = Product.objects.filter(type=1)
        case "accesorios":
            data = Product.objects.filter(type=2)
        case _:
            data = Product.objects.all()
            
    serializer = ProductSerializer(data, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def product(request, id):
    data = Product.objects.filter(id=id)
    serializer = ProductSerializer(data, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def pets(request):
    petType = request.query_params.get('petType', None)
    match (petType):
        case "perro":
            data = Pet.objects.filter(type=1)
        case "gato":
            data = Pet.objects.filter(type=2)
        case _:
            data = Pet.objects.all()
            
    serializer = PetSerializer(data, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def pet(request, id):
    data = Pet.objects.filter(id=id)
    serializer = PetSerializer(data, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def users(request):
    role = request.query_params.get('role', None)
    match (role):
        case "cliente":
            data = User.objects.filter(type=1)
        case "veterinario":
            data = User.objects.filter(type=2)
        case _:
            data = User.objects.all()
            
    serializer = UserSerializer(data, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def user(request, id):
    data = User.objects.filter(id=id)
    serializer = UserSerializer(data, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def vaccines(request):
    vaccineType = request.query_params.get('vaccineType', None)
    match (vaccineType):
        case "perro":
            data = Vaccine.objects.filter(type=1)
        case "gato":
            data = Vaccine.objects.filter(type=2)
        case _:
            data = Vaccine.objects.all()
            
    serializer = VaccineSerializer(data, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def vaccine(request, id):
    data = Vaccine.objects.filter(id=id)
    serializer = VaccineSerializer(data, many=True)
    return Response(serializer.data)