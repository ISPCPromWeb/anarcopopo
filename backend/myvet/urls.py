from django.urls import path
from . import views
from .views import Pets_ApiView, Pet_ApiView, Client_ApiView, Clients_ApiView, Product_ApiView, Products_ApiView, Vaccines_ApiView, Vaccine_ApiView

urlpatterns = [
    path('', views.homepage),

    path('pets', Pets_ApiView.as_view()),
    path('pet/<int:id>', Pet_ApiView.as_view()),

    path('products', Products_ApiView.as_view()),
    path('product/<int:id>', Product_ApiView.as_view()),

    path('clients', Clients_ApiView.as_view()),
    path('client/<int:id>', Client_ApiView.as_view()),

    path('vaccines', Vaccines_ApiView.as_view()),
    path('vaccine/<int:id>', Vaccine_ApiView.as_view()),

    path('login', views.custom_login),
    path('logout', views.custom_logout),
    path('register', views.custom_register),
]