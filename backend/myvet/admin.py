from django.contrib import admin
from .models import Product, Pet, User, ProductType, PetType, UserType, Vaccine, VaccineType
from .forms import PetForm

class VaccineInline(admin.TabularInline):
    model = Vaccine
    extra = 1

class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'get_product_type_name', 'get_pet_type_name']
    list_filter = ['name', 'type__name', 'pet_type__name']

    def get_product_type_name(self, obj):
        return obj.type.name
    get_product_type_name.short_description = 'Product Type'

    def get_pet_type_name(self, obj):
        return obj.pet_type.name
    get_pet_type_name.short_description = 'Pet Type'

class PetAdmin(admin.ModelAdmin):
    form: PetForm
    list_display = ['name', 'breed', 'get_pet_type_name']
    list_filter = ['name', 'breed', 'type__name']
    inlines = [VaccineInline]

    def get_pet_type_name(self, obj):
        return obj.type.name
    get_pet_type_name.short_description = 'Type'

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        form.base_fields['vaccines'] = PetForm.base_fields['vaccines']
        return form

class UserAdmin(admin.ModelAdmin):
    list_display = ['name', 'address', 'get_user_type_name']
    list_filter = ['name', 'address', 'type__name']

    def get_user_type_name(self, obj):
        return obj.type.name
    get_user_type_name.short_description = 'Type'


class VaccineAdmin(admin.ModelAdmin):
    list_display = ['get_vaccine_type_name', 'pet', 'app_date']
    list_filter = ('type', 'pet', 'pet__type', 'app_date')

    def get_vaccine_type_name(self, obj):
        return obj.type.name
    get_vaccine_type_name.short_description = 'Vaccine Name'

admin.site.register(Product, ProductAdmin)
admin.site.register(Pet, PetAdmin)
admin.site.register(User, UserAdmin)
admin.site.register(ProductType)
admin.site.register(PetType)
admin.site.register(UserType)
admin.site.register(Vaccine, VaccineAdmin)
admin.site.register(VaccineType)