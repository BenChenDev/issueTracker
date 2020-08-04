from django.db import models

class Issue(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    message = models.CharField(max_length=500, blank=True)
    created_at = models.DateField(auto_now_add=True)