from django import forms
from .models import Pet, PetType

class PetForm(forms.ModelForm):
    pet_type_name = forms.CharField(label='Pet Type Name', required=False)

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
