from django import forms
from django.utils.safestring import mark_safe
from .models import Pet, Vaccine

class VaccineListWidget(forms.Widget):
    def render(self, name, value, attrs=None, renderer=None):
        if value is None or value is "":
            return mark_safe(f'<p>No vaccines</p>')
        elif isinstance(value, str):
            value = value.split(', ')
        list_items = ''.join([f'<li>{vaccine}</li>' for vaccine in value])
        return mark_safe(f'<ul style="margin-left: 0; border: 1px solid #fff; border-radius: 5px">{list_items}</ul>')

class PetForm(forms.ModelForm):
    vaccines = forms.CharField(label='Vaccines', required=False, widget=VaccineListWidget)

    class Meta:
        model = Pet
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        if self.instance and self.instance.vaccines:
            self.fields['vaccines'].initial = ', '.join(self.instance.vaccines)