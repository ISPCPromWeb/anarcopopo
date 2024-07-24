from django import forms
from .models import Pet, PetType, Product, ProductType, User, UserType, Vaccine, VaccineType

class PetForm(forms.ModelForm):
    pet_type_name = forms.CharField(label='Pet Type', required=False)

    class Meta:
        model = Pet
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        super(PetForm, self).__init__(*args, **kwargs)
        if self.instance and hasattr(self.instance, 'type') and self.instance.type:
            self.fields['pet_type_name'].initial = self.instance.type.name

    def save(self, commit=True):
        pet = super(PetForm, self).save(commit=False)
        pet_type_name = self.cleaned_data.get('pet_type_name')
        if pet_type_name:
            pet_type, created = PetType.objects.get_or_create(name=pet_type_name)
            pet.type = pet_type
        if commit:
            pet.save()
        return pet

class ProductForm(forms.ModelForm):
    product_type_name = forms.CharField(label='Product Type', required=False)

    class Meta:
        model = Product
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        super(ProductForm, self).__init__(*args, **kwargs)
        if self.instance and hasattr(self.instance, 'type') and self.instance.type:
            self.fields['product_type_name'].initial = self.instance.type.name

    def save(self, commit=True):
        product = super(ProductForm, self).save(commit=False)
        product_type_name = self.cleaned_data.get('product_type_name')
        if product_type_name:
            product_type, created = ProductType.objects.get_or_create(name=product_type_name)
            product.type = product_type
        if commit:
            product.save()
        return product
    
class UserForm(forms.ModelForm):
    user_type_name = forms.CharField(label='User Type', required=False)

    class Meta:
        model = User
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        super(UserForm, self).__init__(*args, **kwargs)
        if self.instance and hasattr(self.instance, 'type') and self.instance.type:
            self.fields['user_type_name'].initial = self.instance.type.name

    def save(self, commit=True):
        user = super(UserForm, self).save(commit=False)
        user_type_name = self.cleaned_data.get('user_type_name')
        if user_type_name:
            user_type, created = UserType.objects.get_or_create(name=user_type_name)
            user.type = user_type
        if commit:
            user.save()
        return user
    
# class VaccineForm(forms.ModelForm):
#     vacc_type_name = forms.CharField(label='Vaccine Name', required=False)

#     class Meta:
#         model = Vaccine
#         fields = '__all__'

#     def __init__(self, *args, **kwargs):
#         super(VaccineForm, self).__init__(*args, **kwargs)
#         if self.instance and hasattr(self.instance, 'type') and self.instance.type:
#             self.fields['vacc_type_name'].initial = self.instance.type.name

#     def save(self, commit=True):
#         vacc = super(VaccineForm, self).save(commit=False)
#         vacc_type_name = self.cleaned_data.get('vacc_type_name')
#         if vacc_type_name:
#             vacc_type, created = VaccineType.objects.get_or_create(name=vacc_type_name)
#             vacc.type = vacc_type
#         if commit:
#             vacc.save()
#         return vacc