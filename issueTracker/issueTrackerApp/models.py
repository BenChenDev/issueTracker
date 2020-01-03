from django.db import models

class Issue(models.Model):
    issueId = models.IntegerField(unique=True,auto_created=True)
    issueName = models.CharField(max_length=100)
    issueCreator = models.CharField(max_length=100)
    describtion = models.CharField(max_length=500)
    contactEmail = models.EmailField(max_length=100)
    Created_at = models.DateField(auto_now_add=True)
