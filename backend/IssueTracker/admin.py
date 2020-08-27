from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .userForm import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser
from .models import Issue

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser

    ##below part overwrite the display fields that will display on admin page when creating or editing user informations
    list_display = ('username','email', 'is_staff', 'is_active',)
    list_filter = ('email', 'is_staff', 'is_active',)
    fieldsets = (
        (None, {'fields': ('username','email', 'password')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('display_name', 'username', 'email', 'password1', 'password2', 'is_staff', 'is_active')}
        ),
    )
    search_fields = ('email',)
    ordering = ('email',)

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Issue)