[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/PanoramioLayer.html)

## PanoramioLayer class

google.maps.panoramio.PanoramioLayer class

A PanoramioLayer displays photos from Panoramio as a rendered layer.

This class extends [MVCObject](MVCObject.md).

#### Library

panoramio

Constructor

PanoramioLayer(opts?:[_PanoramioLayerOptions_](PanoramioLayerOptions.md))

A layer that displays data from Panoramio.

Methods

getMap()

**Return Value:**  [Map](Map.md)

Returns the map on which this layer is displayed.

getTag()

**Return Value:**  string

getUserId()

**Return Value:**  string

setMap(map:[Map](Map.md))

**Return Value:**  None

Renders the layer on the specified map. If map is set to null, the layer will be removed.

setOptions(options:[_PanoramioLayerOptions_](PanoramioLayerOptions.md))

**Return Value:**  None

setTag(tag:string)

**Return Value:**  None

setUserId(userId:string)

**Return Value:**  None

Events

click

**Arguments:**  [_PanoramioMouseEvent_](PanoramioMouseEvent.md)

This event is fired when a feature in the layer is clicked.
