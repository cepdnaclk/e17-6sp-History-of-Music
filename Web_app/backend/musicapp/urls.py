from django.urls import path
from . import views

urlpatterns = [
    path('posts/', views.PostView.my_view, name= 'posts_list'),
]