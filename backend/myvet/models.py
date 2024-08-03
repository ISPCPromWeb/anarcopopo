from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User, AbstractBaseUser
from django.utils import timezone

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
    pub_date = models.DateTimeField("Date Published", default=timezone.now)
    def __str__(self):
        return self.name

class Pet(models.Model):
    name = models.CharField(max_length=200)
    type = models.ForeignKey(PetType, on_delete=models.CASCADE)
    breed = models.CharField(max_length=200, default="")
    age = models.IntegerField(default=100)
    owner = models.ForeignKey('Client', null=True, on_delete=models.CASCADE)
    vaccines = models.JSONField(blank=True, null=True, default=dict)
    pub_date = models.DateTimeField("Date Published", default=timezone.now)
    def __str__(self):
        return self.name

class Client(AbstractBaseUser):
    name = models.CharField(max_length=200, default="")
    surname = models.CharField(max_length=200, default="")
    dni = models.IntegerField(default=0)
    address = models.CharField(max_length=200, default="")
    email = models.EmailField()
    phone = models.CharField(default="")
    password = models.CharField()
    pets = models.JSONField(blank=True, null=True, default=dict)
    level = models.IntegerField(default=0)
    last_login = models.DateTimeField("Last Login", null=True, default=None)
    pub_date = models.DateTimeField("Date Published", default=timezone.now)

    def __str__(self):
        return self.name
    
    def set_password(self, raw_password):
        self.password = make_password(raw_password)
        self.save()

    def check_password(self, raw_password):
        is_correct = super().check_password(raw_password)
        return is_correct
    
class Vaccine(models.Model):
    type = models.ForeignKey('VaccineType', on_delete=models.CASCADE)
    app_date = models.DateTimeField("Application Date")
    pet = models.ForeignKey('Pet', on_delete=models.CASCADE)
    def __str__(self):
        return self.type.name
    
class Appointment(models.Model):
    date = models.DateTimeField("Appointment Date", default=timezone.now)
    client = models.ForeignKey('Client', on_delete=models.CASCADE)
    pet = models.ForeignKey('Pet', on_delete=models.CASCADE)
    pub_date = models.DateTimeField("Date Published", default=timezone.now)
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

@receiver(post_save, sender=User)
def create_or_update_client(sender, instance, created, **kwargs):
    if created:
        Client.objects.create(
            name=instance.first_name,
            surname=instance.last_name,
            email=instance.username,
            password=instance.password,
            pub_date=timezone.now()
        )
    else:
        try:
            client = Client.objects.get(email=instance.email)
            client.name = instance.first_name
            client.surname = instance.last_name
            client.email = instance.email
            client.password = instance.password
            client.save()
        except Client.DoesNotExist:
            pass