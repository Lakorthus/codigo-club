# Generated by Django 4.1.3 on 2022-11-21 22:34

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, unique=True)),
                ('slug', models.SlugField(max_length=200, unique=True)),
                ('content', models.TextField(default='', max_length=3000)),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('post_picture_0', models.CharField(default='', max_length=500)),
                ('post_picture_1', models.CharField(default='', max_length=500)),
                ('post_picture_2', models.CharField(default='', max_length=500)),
                ('title_thumbnail', models.CharField(max_length=200, unique=True)),
                ('thumbnail_picture', models.CharField(default='', max_length=500)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='blog_posts', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['-created_on'],
            },
        ),
    ]
