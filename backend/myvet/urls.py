from django.urls import path
from . import views
from .views import Pets_ApiView, Pet_ApiView

urlpatterns = [
    path('', views.homepage),
    path('pets', Pets_ApiView.as_view()),
    path('pet/<int:id>', Pet_ApiView.as_view()),

]