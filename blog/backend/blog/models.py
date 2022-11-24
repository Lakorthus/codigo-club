from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=200, unique=True)
    author = models.ForeignKey(User, on_delete= models.CASCADE,related_name='blog_posts')

    content = models.TextField(max_length=3000, default='')
    created_on = models.DateTimeField(auto_now_add=True)
    post_picture_0 = models.CharField(max_length=500, default='')
    post_picture_1 = models.CharField(max_length=500, default='')
    post_picture_2 = models.CharField(max_length=500, default='')
    title_thumbnail = models.CharField(max_length=200, unique=True)
    thumbnail_picture = models.CharField(max_length=500, default='')
  
    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.title