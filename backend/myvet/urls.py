from django.urls import path
from . import views

urlpatterns = [
    path('', views.homepage),

    path('products', views.products),
    path('product/<int:id>', views.product),

    path('pets', views.pets),
    path('pet/<int:id>', views.pet),

    path('users', views.users),
    path('user/<int:id>', views.user),
    
    path('vaccines', views.vaccines),
    path('vaccine/<int:id>', views.vaccine)
]