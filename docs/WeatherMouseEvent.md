[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/WeatherMouseEvent.html)

## WeatherMouseEvent object specification

google.maps.weather.WeatherMouseEvent object specification

The properties of a mouse event on a WeatherLayer.

#### Library

weather

Properties

featureDetails

**Type:**  [WeatherFeature](WeatherFeature.md)

A WeatherFeature object containing information about the clicked feature.

infoWindowHtml

**Type:**  string

Pre-rendered HTML content to display within a feature's InfoWindow when clicked.

latLng

**Type:**  [LatLng](LatLng.md)

The position at which to anchor an info window on the clicked feature.

pixelOffset

**Type:**  [Size](Size.md)

The offset to apply to an info window anchored on the clicked feature.
