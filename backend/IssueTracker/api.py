from .models import Issue;
from rest_framework import viewsets, permissions;
from .serializers import IssueSerializer;

# issue tracker viewset 
class IssueViewSet(viewsets.ModelViewSet):
  queryset = Issue.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = IssueSerializer