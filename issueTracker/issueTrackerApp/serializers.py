from rest_framework import serializers
from issueTrackerApp.models import Issue

#issues serializer
class IssueSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Issue
        field = ['name','email','message']