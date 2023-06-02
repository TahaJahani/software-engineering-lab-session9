from django.db import models


# Create your models here.
class HistoryItem(models.Model):
    parameters = models.CharField(max_length=100)
    result = models.BigIntegerField()

    created_at = models.DateTimeField(auto_now_add=True)

    def to_dict(self):
        return {
            "params": self.parameters,
            "result": self.result
        }
