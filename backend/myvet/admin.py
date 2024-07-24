from django.contrib import admin
from .models import Product, Pet, User, ProductType, PetType, UserType, Vaccine, VaccineType
from .forms import PetForm, ProductForm, UserForm


class PetAdmin(admin.ModelAdmin):
    form = PetForm
class ProductAdmin(admin.ModelAdmin):
    form = ProductForm
class UserAdmin(admin.ModelAdmin):
    form = UserForm
# class VaccineAdmin(admin.ModelAdmin):
#     form = VaccineForm

admin.site.register(Product, ProductAdmin)
admin.site.register(Pet, PetAdmin)
admin.site.register(User, UserAdmin)
admin.site.register(ProductType)
admin.site.register(PetType)
admin.site.register(UserType)
admin.site.register(Vaccine)
admin.site.register(VaccineType)