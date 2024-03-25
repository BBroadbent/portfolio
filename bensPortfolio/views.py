from django.shortcuts import render
from django.views.generic import View

# Create your views here.
class mainView(View):
    def get(self, request, *args, **kwargs):
        path = kwargs.get('path', 'home')
        return render(request, template_name=f'{path}.html')
