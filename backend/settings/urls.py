from django.contrib import admin
from django.urls import path,re_path
from django.views.generic import TemplateView
from algo.views import general_number,lossgain_graph

urlpatterns = [
    path('admin/', admin.site.urls),
    # re_path('', TemplateView.as_view(template_name='index.html')),
    path('general-number-api/', general_number),
    path('loss-gain-api/', lossgain_graph),
]
