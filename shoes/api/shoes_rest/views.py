from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import BinVO, Shoes


class BinVODetailEncoder(ModelEncoder):
    model = BinVO
    propeties = ["closet_name", "import_href", "section_number"]


class ShoeListEncoder(ModelEncoder):
    model = Shoes
    properties = ["manufacturer",
                  "model_name",
                  "color",
                  "image"]

    encoders = {
        "bin": BinVODetailEncoder
    }


@require_http_methods(["GET", "POST"])
def api_list_shoes(request, bin_vo_id=None):
    if request.method == 'GET':
        if bin_vo_id is not None:
            shoes = Shoes.objects.filter(bin=bin_vo_id)
        else:
            shoes = Shoes.objects.all()

        return JsonResponse(
            {"shoes": shoes},
            encoder=ShoeListEncoder,
            safe=False
        )
