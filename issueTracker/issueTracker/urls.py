
#from django.contrib import admin
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from issueTrackerApp import views

# urlpatterns = [
#     path('admin/', admin.site.urls),
# ]

#router = routers.DefaultRouter()
#router.register(r'issues', views.IssueViewSet)

#the root
urlpatterns = [
    path('issues/', views.issue_list)
]

urlpatterns = format_suffix_patterns(urlpatterns)