from django.contrib import admin
from .models import Product, Pet, User, ProductType, PetType, UserType 
from .forms import PetForm


class PetAdmin(admin.ModelAdmin):
    form = PetForm


admin.site.register(Product)
admin.site.register(Pet, PetAdmin)
admin.site.register(User)
admin.site.register(ProductType)
admin.site.register(PetType)
admin.site.register(UserType)


