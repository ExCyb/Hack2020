import numpy as np
from matplotlib import pyplot
from matplotlib.patches import Rectangle
from mrcnn.config import Config
from mrcnn.model import MaskRCNN

def get_car_boxes(boxes, class_ids):
    car_boxes = []
    for i, box in enumerate(boxes):
        if class_ids[i] in [3, 8, 6]:
            car_boxes.append(box)
    return np.array(car_boxes)

def draw_image_with_boxes(data, boxes_list):
    pyplot.imshow(data)
    ax = pyplot.gca()
    for box in boxes_list:
        y1, x1, y2, x2 = box
        width, height = x2 - x1, y2 - y1
        rect = Rectangle((x1, y1), width, height, fill=False, color='red')
        ax.add_patch(rect)
    pyplot.show()

def parseImage(image):
    class TestConfig(Config):
        NAME = "test"
        GPU_COUNT = 1
        IMAGES_PER_GPU = 1
        NUM_CLASSES = 1 + 80

    rcnn = MaskRCNN(mode='inference', model_dir='./', config=TestConfig())
    rcnn.load_weights('mask_rcnn_coco.h5', by_name=True)
    results = rcnn.detect([image], verbose=0)
    r = results[0]
    draw_image_with_boxes(image, get_car_boxes(r['rois'], r['class_ids']))
    return np.array(get_car_boxes(r['rois'], r['class_ids']))
