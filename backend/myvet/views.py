from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404, get_list_or_404
from .models import Product, User, Vaccine, Pet, PetType, ProductType, UserType, VaccineType
from .serializers import ProductSerializer, PetSerializer, UserSerializer, VaccineSerializer

@api_view(['GET'])
def homepage(request):
    data = { 'message': 'Wololo' }
    return Response(data)

class Pets_ApiView(APIView):
    def get(self, request):
        pet_type = request.query_params.get('petType', None)
        match (pet_type):
            case "perro":
                data = Pet.objects.filter(type=1)
            case "gato":
                data = Pet.objects.filter(type=2)
            case _:
                data = Pet.objects.all()
                
        serializer = PetSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PetSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Pet added successfully'}, status=200)

        return Response(serializer.errors, status=400)
    
class Pet_ApiView(APIView):
    def get(self, request, id):
        pet = get_list_or_404(Pet, id=id)
        serializer = PetSerializer(pet, many=True)
        return Response(serializer.data)
    
    def put(self, request, id):
        pet = get_object_or_404(Pet, id=id)
        serializer = PetSerializer(pet, data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Pet updated successfully'}, status=200)
            
        return Response(serializer.errors, status=400)
        
    def delete(self, request, id):
        pet = get_object_or_404(Pet, id=id)
        pet.delete()

        return Response({'message': 'Pet removed successfully'}, status=200)
    
class Products_ApiView(APIView):
    def get(self, request):
        product_type = request.query_params.get('productType', None)
        match (product_type):
            case "alimento":
                data = Product.objects.filter(type=1)
            case "accesorios":
                data = Product.objects.filter(type=2)
            case _:
                data = Product.objects.all()
                
        serializer = ProductSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ProductSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Product added successfully'}, status=200)

        return Response(serializer.errors, status=400)
    
class Product_ApiView(APIView):
    def get(self, request, id):
        product = get_list_or_404(Product, id=id)
        serializer = ProductSerializer(product, many=True)
        return Response(serializer.data)
    
    def put(self, request, id):
        product = get_object_or_404(Product, id=id)
        serializer = ProductSerializer(product, data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Product updated successfully'}, status=200)
            
        return Response(serializer.errors, status=400)
        
    def delete(self, request, id):
        product = get_object_or_404(Product, id=id)
        product.delete()

        return Response({'message': 'Product removed successfully'}, status=200)
    
class Users_ApiView(APIView):
    def get(self, request):
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

    def post(self, request):
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User added successfully'}, status=200)

        return Response(serializer.errors, status=400)
    
class User_ApiView(APIView):
    def get(self, request, id):
        user = get_list_or_404(User, id=id)
        serializer = UserSerializer(user, many=True)
        return Response(serializer.data)
    
    def put(self, request, id):
        user = get_object_or_404(User, id=id)
        serializer = UserSerializer(user, data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User updated successfully'}, status=200)
            
        return Response(serializer.errors, status=400)
        
    def delete(self, request, id):
        user = get_object_or_404(User, id=id)
        user.delete()

        return Response({'message': 'User removed successfully'}, status=200)
    
class Vaccines_ApiView(APIView):
    def get(self, request):
        vaccine_type = request.query_params.get('vaccineType', None)
        match (vaccine_type):
            case "VIF":
                data = Vaccine.objects.filter(type=1)
            case "Antirábica Dog":
                data = Vaccine.objects.filter(type=2)
            case _:
                data = Vaccine.objects.all()
                
        serializer = VaccineSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VaccineSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User added successfully'}, status=200)

        return Response(serializer.errors, status=400)
    
class Vaccine_ApiView(APIView):
    def get(self, request, id):
        vaccine = get_list_or_404(Vaccine, id=id)
        serializer = VaccineSerializer(vaccine, many=True)
        return Response(serializer.data)
    
    def put(self, request, id):
        vaccine = get_object_or_404(Vaccine, id=id)
        serializer = VaccineSerializer(vaccine, data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Vaccine updated successfully'}, status=200)
            
        return Response(serializer.errors, status=400)
        
    def delete(self, request, id):
        vaccine = get_object_or_404(Vaccine, id=id)
        vaccine.delete()

        return Response({'message': 'Vaccine removed successfully'}, status=200)