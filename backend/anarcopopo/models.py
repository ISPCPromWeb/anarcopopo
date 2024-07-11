from django.db import models

class Products(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    quantity = models.IntegerField()
    price = models.IntegerField(default=100)
    pub_date = models.DateTimeField("date published")
