from rest_framework import serializers, exceptions
from .models import *
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password


class LoginSerilizer(serializers.Serializer):
    username = serializers.CharField()

    password = serializers.CharField()

    def validate(self, data):

        username = data.get("username", "")

        password = data.get("password", "")

        if username and password:

            user = authenticate(username=username, password=password)

            if user:

                if user.is_active:

                    data["user"] = user

                else:

                    msg = "کاربر غیرفعال می باشد"

                    raise exceptions.ValidationError(msg)

            else:

                msg = "نام کاربری یا گذرواژه اشتباه است"

                raise exceptions.ValidationError(msg)

        else:

            msg = "نام کاربری و کلمه عبور اجباری می باشد"

            raise exceptions.ValidationError(msg)

        return data


class ProfileListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('address', 'first_name', 'last_name', 'coordinate_mobile')



class ProfileCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"

