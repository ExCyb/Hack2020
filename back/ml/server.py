import json

import cv2
import jsonpickle
import numpy as np
from flask import Flask, request, Response

from rcnnService import detectCars

app = Flask(__name__)


@app.route("/api/v1/detectCars", methods=["POST"])
def test():
    r = request
    nparr = np.fromstring(r.data, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    response = {
        'message': 'image received. size={}x{}'.format(img.shape[1], img.shape[0]),
        "boxList": json.dumps(detectCars(img))
    }
    response_pickled = jsonpickle.encode(response)

    return Response(response=response_pickled, status=200, mimetype="application/json")


if __name__ == "__main__":
    app.run(app.run(host='0.0.0.0'))
