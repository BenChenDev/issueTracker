from rest_framework import serializers
from issueTrackerApp.models import Issue

#issues serializer
class IssueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Issue
        fields = '__all__'
#     name = serializers.CharField(max_length=100)
#     email = serializers.EmailField(max_length=100, unique=True)
#     message = serializers.CharField(max_length=500, blank=True)
#     created_at = serializers.DateField(auto_now_add=True)

# def create(self, validated_data):
#     """
#     Create and return a nre issue instance, given the validated data.
#     """
#     return Issue.objects.create(validated_data)

# def update(self, instance, validated_data):
#     """
#     Update and return an existing issue instance, given the validated data
#     """
#     instance.name = validated_data.get('name', instance.name)
#     instance.email = validated_data.get('email', instance.email)
#     instance.message = validated_data.get('message', instance.message)
#     instance.created_at = validated_data.get('created_at', instance.created_at)
#     instance.save()
#     return instance
