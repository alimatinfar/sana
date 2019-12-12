from django.contrib import admin
from .models import *
# Register your models here.

class ProfileAdmin(admin.ModelAdmin):
    list_display = ('first_name',)
    search_fields = ('first_name',)


admin.site.register(Profile, ProfileAdmin)