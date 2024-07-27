from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404, get_list_or_404
from .models import Product, User, Vaccine, Pet, PetType
from .serializers import ProductSerializer, PetSerializer, UserSerializer, VaccineSerializer

@api_view(['GET'])
def homepage(request):
    data = { 'message': 'Wololo' }
    return Response(data)

class Pets_ApiView(APIView):
    def get(self, request):
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

    def post(self, request):
        name = request.POST['name']
        type = request.POST['type']
        breed = request.POST['breed']
        age = request.POST['age']
        vaccines = request.POST['vaccines']

        try:
            pet_type = PetType.objects.get(id=type)
        except PetType.DoesNotExist:
            return Response({'error': 'Invalid pet type'}, status=400)

        new_pet = Pet.objects.create(name=name, type=pet_type, breed=breed, age=age, vaccines=vaccines)
        new_pet.save()

        return Response({'message': 'Pet added successfully'}, status=200)
    
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