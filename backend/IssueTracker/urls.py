from rest_framework import routers
from .api import IssueViewSet

router = routers.DefaultRouter()
router.register('issues', IssueViewSet)

urlpatterns = router.urls