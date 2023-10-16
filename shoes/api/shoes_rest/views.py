from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import BinVO, Shoes


class BinVODetailEncoder(ModelEncoder):
    model = BinVO
    properties = ["closet_name", "import_href"]


class ShoeListEncoder(ModelEncoder):
    model = Shoes
    properties = ["manufacturer",
                  "model_name",
                  "color",
                  "image",
                  "id",
                  "bin"]

    encoders = {
        "bin": BinVODetailEncoder()
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
    else:
        content = json.loads(request.body)
        try:
            bin_href = f'/api/bins/{bin_vo_id}/'
            bin = BinVO.objects.get(import_href=bin_href)

            content["bin"] = bin
        except BinVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid bin id"},
                status=400,
            )

        shoe = Shoes.objects.create(**content)
        return JsonResponse(
            shoe,
            encoder=ShoeListEncoder,
            safe=False
        )


def delete_shoe(request, id):
    count, _ = Shoes.objects.filter(id=id).delete()
    return JsonResponse({"deleted": count > 0})
