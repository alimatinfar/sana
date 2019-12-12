from rest_framework import generics
from .serializers import *
from rest_framework.permissions import IsAuthenticated


# Create your views here.


class ProfileListCreateAPIView(generics.ListCreateAPIView):
    queryset = Profile.objects.all()

    # authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    lookup_field = 'id'

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return ProfileCreateSerializer
        return ProfileListSerializer

