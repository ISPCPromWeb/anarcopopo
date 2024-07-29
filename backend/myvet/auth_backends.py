from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.models import User
from django.db.models import Q
from .models import Client

class EmailBackend(BaseBackend):
    def authenticate(request, user, email=None, password=None, **kwargs):
        if user.check_password(password):
            return user

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            pass
        
        try:
            return Client.objects.get(id=user_id)
        except Client.DoesNotExist:
            return None
