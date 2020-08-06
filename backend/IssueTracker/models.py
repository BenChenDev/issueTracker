from django.db import models
from django.utils import timezone

class Issue(models.Model):
    creator = models.CharField(max_length=100, blank=False, default='')
    title = models.CharField(max_length=100, blank=False, default='New issue')
    description = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
