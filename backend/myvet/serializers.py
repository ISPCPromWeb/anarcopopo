from rest_framework import serializers
from .models import Product, Pet, User, Vaccine

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class VaccineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vaccine
        fields = '__all__'