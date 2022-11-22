from django.shortcuts import render
from .serializers import PostSerializer
from rest_framework import generics
from .models import Post


# Create your views here.
class BlogPostView(generics.ListAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()