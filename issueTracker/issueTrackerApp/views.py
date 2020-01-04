#from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from issueTrackerApp.models import Issue
from issueTrackerApp.serializers import IssueSerializer

# class IssueViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allow issues to be edited and viewed
#     """
#     queryset = Issue.objects.all().order_by('-date_joined')
#     serializer_class = IssueSerializer

#responses are no longer hardwired to a single content type let's add support for format suffixes to our API endpoints
@api_view(['GET', 'POST'])
def issue_list(request, format=None):
    """
    List all issues or create an new issue
    """

    if request.method == 'GET':
        issues = Issue.objects.all()
        serializer = IssueSerializer(issues, many = True)
        return Response(serializer.data)
    
    elif request.methos == 'POST':
        serializer = IssueSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
