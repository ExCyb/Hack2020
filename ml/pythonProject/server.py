import cv2
import jsonpickle
import numpy as np
from flask import Flask, request, Response

from rcnnService import parseImage

app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello World!"


@app.route("/api/test", methods=["POST"])
def test():
    r = request
    nparr = np.fromstring(r.data, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    response = {'message': 'image received. size={}x{}, boxList={}'.format(img.shape[1], img.shape[0], parseImage(img))}
    response_pickled = jsonpickle.encode(response)

    return Response(response=response_pickled, status=200, mimetype="application/json")

if __name__ == "__main__":
    app.run()
