from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    image = models.FileField(upload_to='files/')
    
    def __str__(self):
        return self.image