from django.urls import path
from issueTrackerApp import views

urlpatterns = [
    path('issues/', views.issue_list),
    path('issues/<int:pk>/', views.issue_detail),
]