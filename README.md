![Цифровой прорыв](https://leadersofdigital.ru/adb6f1da03e109f49d899a5d6305c7d2.svg)
![Россия](https://leadersofdigital.ru/89e34a592e531d209b4a83f1fb649425.svg)
# Команда Киборги - Кейс Росстелекома 
_Благоустройство городов \\ Digital Мобильная система парковок_
## Live App
**https://parking.volkv.com**
## ML Endpoint (Mask R-CNN)
**http://parking.volkv.com:5000/api/v1/detectCars** (POST Binary File [JPG/PNG])
```json
{
    "message": "image received. size=1296x972",
    "boxList": "[[464, 917, 877, 1286], [397, 440, 680, 809], [452, 641, 809, 1012], [377, 280, 630, 616]]"
}
```
## Darknet YOLOv3:
```shell
cd darknet && ./darknet detector test cfg/coco.data cfg/yolov3.cfg weights/yolov3.weights data/3.jpg
```
```php
data/3.jpg: Predicted in 17.768377 seconds.
[
class:67, prob:0.920423, x:0.751140, y:0.646822, w:0.294911, h:0.396240
class:61, prob:0.559607, x:0.200499, y:0.348093, w:0.278171, h:0.318460
class:2, prob:0.924000, x:0.542274, y:0.558784, w:0.251182, h:0.376381
]
cell phone: 92%
toilet: 56%
car: 92%

```
## Обработчик запросов Алисы (webhook) (навык: Парковки у дома)
**https://parking.volkv.com:3000**
## Webapp local init:
```shell
cd webapp
make docker-up
make composer-install
make npm-install
make npm-dev
```
```shell
echo "127.0.0.1  parking.test" >> /etc/hosts
```
https://parking.test:8080