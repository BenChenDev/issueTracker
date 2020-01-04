#from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from issueTrackerApp.models import Issue
from issueTrackerApp.serializers import IssueSerializer

@csrf_exempt
def issue_list(request):
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
