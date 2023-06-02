import json

from django.http import JsonResponse
from django.views import View

from history.models import HistoryItem


# Create your views here.
class HistoryView(View):
    http_method_names = ['get', 'post']

    def post(self, request):
        data = json.loads(self.request.body)
        parameters = data.get('params', None)
        result = data.get('result', None)
        if parameters is None or result is None:
            return JsonResponse(data={"error": "Invalid values"}, status=400)
        HistoryItem.objects.create(
            parameters=parameters,
            result=result
        )
        return JsonResponse(data={"message": "OK"})

    def get(self, request):
        items = HistoryItem.objects.order_by('-created_at').all()
        items = list(map(lambda x: x.to_dict(), items))
        return JsonResponse(items, safe=False)
