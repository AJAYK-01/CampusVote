from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [

    # for admin panel
    path('admin/', admin.site.urls),

    # for authentication
    path('auth/', include("accounts.urls"), name=''),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
