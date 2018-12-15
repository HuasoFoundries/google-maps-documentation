[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/WeatherLayer.html)

## WeatherLayer class

google.maps.weather.WeatherLayer class

A layer that displays weather icons.

This class extends [MVCObject](MVCObject.md).

#### Library

weather

Constructor

WeatherLayer(opts?:[_WeatherLayerOptions_](WeatherLayerOptions.md))

Creates a new WeatherLayer instance that displays weather icons.

Methods

getMap()

**Return Value:**  [Map](Map.md)

Returns the map on which this layer is displayed.

setMap(map:[Map](Map.md))

**Return Value:**  None

Renders the layer on the specified map. If map is set to null, the layer will be removed.

setOptions(options:[_WeatherLayerOptions_](WeatherLayerOptions.md))

**Return Value:**  None

Sets the WeatherLayer's options.

Events

click

**Arguments:**  [_WeatherMouseEvent_](WeatherMouseEvent.md)

This event is fired when a feature in the weather layer is clicked.
