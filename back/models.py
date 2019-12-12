from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator


# Create your models here.


class Profile(models.Model):
    GENDER = [
        ('m', 'Male'),
        ('f', 'Female'),
    ]

    region = models.IntegerField(null=True, blank=True)
    first_name = models.CharField('نام', max_length=200)
    last_name = models.CharField('نام خانوادگی', max_length=200)
    gender = models.CharField('جنسیت', max_length=1, choices=GENDER)
    lat = models.CharField(max_length=100, null=True, blank=True)
    lng = models.CharField(max_length=100, null=True, blank=True)
    address = models.TextField('آدرس')
    coordinate_mobile = models.CharField('موبایل', max_length=20, validators=[RegexValidator(regex='^[0-9]{11}$', message='فقط ۱۱ عدد میتوانید وارد کنید!', code='nomatch')])
    coordinate_phone_number = models.CharField('تلفن ثابت',max_length=20, validators=[RegexValidator(regex='^[0-9]{11}$', message='فقط ۱۱ عدد میتوانید وارد کنید!', code='nomatch')])

    def __str__(self):
        return (self.user.username)

    class Meta:
        verbose_name = 'profile'
        verbose_name_plural = 'پروفایل'
