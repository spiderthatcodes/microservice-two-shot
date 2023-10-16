from django.urls import path

from .views import api_list_shoes, delete_shoe

urlpatterns = [
    path("shoes/", api_list_shoes, name='api_list_shoes'),
    path("bins/<int:bin_vo_id>/shoes/", api_list_shoes, name="create_shoes"),
    path("shoes/<int:id>/", delete_shoe, name="delete_shoes")
]
