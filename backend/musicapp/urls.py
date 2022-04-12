from django.urls import path
from . import views

urlpatterns = [
    path('posts/', views.PostView.post, name= 'posts_list'),
]