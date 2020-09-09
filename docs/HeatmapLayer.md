[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/HeatmapLayer.html)

HeatmapLayer class
------------------

google.maps.visualization.HeatmapLayer class

A layer that provides a client-side rendered heatmap, depicting the intensity of data at geographical points.

This class extends [MVCObject](/maps/documentation/javascript/reference/3.40/event#MVCObject).

#### Library

visualization

Constructor

[undefined](#HeatmapLayer.constructor)

HeatmapLayer(\[opts\])

**Parameters:** 

*   opts:  [HeatmapLayerOptions](/maps/documentation/javascript/reference/3.40/visualization#HeatmapLayerOptions) optional

Creates a new instance of HeatmapLayer.

Methods

[undefined](#HeatmapLayer.getData)

getData()

**Parameters:**  None

**Return Value:**  [MVCArray](/maps/documentation/javascript/reference/3.40/event#MVCArray)<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[WeightedLocation](/maps/documentation/javascript/reference/3.40/visualization#WeightedLocation)\>

Returns the data points currently displayed by this heatmap.

[undefined](#HeatmapLayer.getMap)

getMap()

**Parameters:**  None

**Return Value:**  [Map](/maps/documentation/javascript/reference/3.40/map#Map)

[undefined](#HeatmapLayer.setData)

setData(data)

**Parameters:** 

*   data:  [MVCArray](/maps/documentation/javascript/reference/3.40/event#MVCArray)<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[WeightedLocation](/maps/documentation/javascript/reference/3.40/visualization#WeightedLocation)\>|Array<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[WeightedLocation](/maps/documentation/javascript/reference/3.40/visualization#WeightedLocation)\>

**Return Value:**  None

Sets the data points to be displayed by this heatmap.

[undefined](#HeatmapLayer.setMap)

setMap(map)

**Parameters:** 

*   map:  [Map](/maps/documentation/javascript/reference/3.40/map#Map)

**Return Value:**  None

Renders the heatmap on the specified map. If map is set to null, the heatmap will be removed.

[undefined](#HeatmapLayer.setOptions)

setOptions(options)

**Parameters:** 

*   options:  [HeatmapLayerOptions](/maps/documentation/javascript/reference/3.40/visualization#HeatmapLayerOptions)

**Return Value:**  None