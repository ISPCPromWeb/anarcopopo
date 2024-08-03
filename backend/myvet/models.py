from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.hashers import make_password, check_password

class ProductType(models.Model):
    name = models.CharField(max_length=200)
    def __str__(self):
        return self.name

class PetType(models.Model):
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
    img = models.ImageField(max_length=10000)
    pub_date = models.DateTimeField("Date Published")
    def __str__(self):
        return self.name

class Pet(models.Model):
    name = models.CharField(max_length=200)
    type = models.ForeignKey(PetType, on_delete=models.CASCADE)
    breed = models.CharField(max_length=200, default="")
    age = models.IntegerField(default=100)
    owner = models.ForeignKey('Client', null=True, on_delete=models.CASCADE)
    vaccines = models.JSONField(blank=True, null=True, default=dict)
    pub_date = models.DateTimeField("Date Published")
    def __str__(self):
        return self.name

class Client(models.Model):
    name = models.CharField(max_length=200, default="")
    surname = models.CharField(max_length=200, default="")
    dni = models.IntegerField(default=0)
    address = models.CharField(max_length=200, default="")
    email = models.EmailField()   
    password = models.CharField()
    pets = models.JSONField(blank=True, null=True, default=dict)
    is_active = models.BooleanField(default=False)
    last_login = models.DateTimeField("Last Login", null=True, default=None)
    pub_date = models.DateTimeField("Date Published")

    def __str__(self):
        return self.name
    
    def set_password(self, raw_password):
        self.password = make_password(raw_password)
        self.save()
    
class Vaccine(models.Model):
    type = models.ForeignKey('VaccineType', on_delete=models.CASCADE)
    app_date = models.DateTimeField("Application Date")
    pet = models.ForeignKey('Pet', on_delete=models.CASCADE)
    def __str__(self):
        return self.type.name
    
class Appointment(models.Model):
    date = models.DateTimeField("Date Published")
    client = models.ForeignKey('Client', on_delete=models.CASCADE)
    pet = models.ForeignKey('Pet', on_delete=models.CASCADE)
    pub_date = models.DateTimeField("Date Published")
    def __str__(self):
        return self.client.name
    
@receiver(post_save, sender=Vaccine)
def update_pet_vaccines(sender, instance, **kwargs):
    pet = instance.pet
    if pet.vaccines is None or pet.vaccines is []:
        pet.vaccines = []
    current_vaccines = pet.vaccines
    current_vaccines.append(instance.type.name)
    pet.vaccines = current_vaccines
    pet.save()