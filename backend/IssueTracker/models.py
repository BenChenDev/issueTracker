from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from django.utils import timezone

from .userManager import CustomUserManager

class Issue(models.Model):
    creator = models.CharField(max_length=100, blank=False, default='')
    title = models.CharField(max_length=100, blank=False, default='New issue')
    description = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

class CustomUser(AbstractUser):
    ##username field is from AbstractUser class

    email = models.EmailField(_('email address'), unique=True)

    display_name = models.CharField(
        _('display_name'),
        max_length=150,
        unique=True,
        help_text=_('Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.'),
        error_messages={
            'unique': _("A user with that username already exists."),
        },
    )

    USERNAME_FIELD = 'email'
    ##below fields will be required when creating superuser, but no effect in other part of Django, like creating a user in the admin
    REQUIRED_FIELDS = ['display_name','username']
    EMAIL_FIELD = 'email'

    objects = CustomUserManager()

    def __str__(self):
        return self.email
