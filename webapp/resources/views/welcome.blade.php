<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
<link rel="manifest" href="parking.webmanifest">
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>

<script src="https://api-maps.yandex.ru/2.1/?lang=en_RU&amp;apikey=<your API-key>" type="text/javascript"></script>
<link rel="stylesheet" href="{{asset('/css/app.css')}}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title></title>

</head>
<body>
<div id="map"></div>

<script src="{{asset('/js/app.js')}}"></script>
</body>

</html>
