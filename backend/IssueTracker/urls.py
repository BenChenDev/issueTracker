from rest_framework import routers
from .api import IssueViewSet

router = routers.DefaultRouter()
router.register('api/issues', IssueViewSet)

urlpatterns = router.urls