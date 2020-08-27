from django.contrib.auth.forms import UserCreationForm, UserChangeForm

#subclass the UserCreationForm and UserChangeForm forms so that they use the new CustomUser model
from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):
  class Meta:
    model = CustomUser
    fields = []

class CustomUserChangeForm(UserChangeForm):
  class Meta:
    model = CustomUser
    fields = []