#from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from issueTrackerApp.models import Issue
from issueTrackerApp.serializers import IssueSerializer

@csrf_exempt
def issue_list(request):
    """
    Create, get an issue.
    """
    if request.method == 'GET':
        issues = Issue.objects.all()
        serializer = IssueSerializer(issues, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = IssueSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def issue_detail(request, pk):
    """
    Retrieve, update or delete an issue.
    corresponds to an individual issue.
    """
    try:
        issue = Issue.objects.get(pk=pk)
    except Issue.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = IssueSerializer(issue)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = IssueSerializer(issue, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        issue.delete()
        return HttpResponse(status=204)