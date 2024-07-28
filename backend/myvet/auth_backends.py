from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.models import User
from django.db.models import Q
from .models import Client

class EmailBackend(BaseBackend):
    def authenticate(request, user, email=None, password=None, **kwargs):
        if user.check_password(password):
            return user
        """ try:
            user = User.objects.get(Q(email=email) | Q(username=email))
            print(user)
            if user.check_password(password):
                print(user)
                return user
        except User.DoesNotExist:
            pass

        try:
            client = Client.objects.get(email=email)
            print(client)
            if client.check_password(password):
                print(client)
                return client
        except Client.DoesNotExist:
            return None """

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            pass
        
        try:
            return Client.objects.get(id=user_id)
        except Client.DoesNotExist:
            return None
