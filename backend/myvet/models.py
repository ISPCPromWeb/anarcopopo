from django.db import models

class ProductType(models.Model):
    name = models.CharField(max_length=200)

class PetType(models.Model):
    name = models.CharField(max_length=200)

class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    quantity = models.IntegerField()
    price = models.IntegerField(default=100)
    type = models.ForeignKey(ProductType, on_delete=models.CASCADE)
    pet_type = models.ForeignKey(PetType, on_delete=models.CASCADE)
    img = models.CharField(default=10) #modificar luego
    pub_date = models.DateTimeField("date published")
    
class UserType(models.Model):
    name = models.CharField(max_length=200)

class Pet(models.Model):
    name = models.CharField(max_length=200)
    type = models.ForeignKey(PetType, on_delete=models.CASCADE)
    breed = models.CharField(max_length=200, default="")
    age = models.IntegerField(default=100)
    vaccines = models.JSONField()
    pub_date = models.DateTimeField("date published")

class User(models.Model):
    type = models.ForeignKey(UserType, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    dni = models.IntegerField(max_length=8)
    adress = models.CharField(max_length=200, default="")
    email = models.EmailField()   
    password = models.CharField(default=8, max_length=8)
    pet = models.ForeignKey(Pet, null=True, on_delete=models.CASCADE)
    pub_date = models.DateTimeField("date published")