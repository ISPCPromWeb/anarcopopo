from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

class ProductType(models.Model):
    name = models.CharField(max_length=200)
    def __str__(self):
        return self.name

class PetType(models.Model):
    name = models.CharField(max_length=200)
    def __str__(self):
        return self.name

class UserType(models.Model):
    name = models.CharField(max_length=200)
    def __str__(self):
        return self.name

class VaccineType(models.Model):
    name = models.CharField(max_length=200)
    pet_type = models.ForeignKey('PetType', on_delete=models.CASCADE)
    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    quantity = models.IntegerField()
    price = models.IntegerField(default=100)
    type = models.ForeignKey('ProductType', on_delete=models.CASCADE)
    pet_type = models.ForeignKey('PetType', on_delete=models.CASCADE)
    img = models.CharField(default=10) #modificar luego
    pub_date = models.DateTimeField("date published")
    def __str__(self):
        return self.name

class Pet(models.Model):
    name = models.CharField(max_length=200)
    type = models.ForeignKey(PetType, on_delete=models.CASCADE)
    breed = models.CharField(max_length=200, default="")
    age = models.IntegerField(default=100)
    vaccines = models.JSONField(null=True)
    pub_date = models.DateTimeField("date published")
    def __str__(self):
        return self.name

class User(models.Model):
    type = models.ForeignKey('UserType', on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    dni = models.IntegerField(max_length=8)
    address = models.CharField(max_length=200, default="")
    email = models.EmailField()   
    password = models.CharField(default=8, max_length=8)
    pet = models.ForeignKey('Pet', null=True, on_delete=models.CASCADE)
    pub_date = models.DateTimeField("date published")
    def __str__(self):
        return self.name
    
class Vaccine(models.Model):
    type = models.ForeignKey('VaccineType', on_delete=models.CASCADE)
    app_date = models.DateTimeField("application date")
    pet = models.ForeignKey('Pet', on_delete=models.CASCADE)
    def __str__(self):
        return self.type.name
    
@receiver(post_save, sender=Vaccine)
def update_pet_vaccines(sender, instance, **kwargs):
    pet = instance.pet
    if pet.vaccines is None or pet.vaccines is "":
        pet.vaccines = []
    pet.vaccines.append(instance.type.name)
    pet.save()