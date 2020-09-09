[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/HeatmapLayerOptions.html)

HeatmapLayerOptions interface
-----------------------------

google.maps.visualization.HeatmapLayerOptions interface

This object defines the properties that can be set on a HeatmapLayer object.

#### Library

visualization

Properties

[undefined](#HeatmapLayerOptions.data)

**Type:**  [MVCArray](/maps/documentation/javascript/reference/3.40/event#MVCArray)<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[WeightedLocation](/maps/documentation/javascript/reference/3.40/visualization#WeightedLocation)\>|Array<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[WeightedLocation](/maps/documentation/javascript/reference/3.40/visualization#WeightedLocation)\> optional

The data points to display. Required.

[undefined](#HeatmapLayerOptions.dissipating)

**Type:**  boolean optional

Specifies whether heatmaps dissipate on zoom. By default, the radius of influence of a data point is specified by the radius option only. When dissipating is disabled, the radius option is interpreted as a radius at zoom level 0.

[undefined](#HeatmapLayerOptions.gradient)

**Type:**  Array<string> optional

The color gradient of the heatmap, specified as an array of CSS color strings. All CSS3 colors are supported except for extended named colors.

[undefined](#HeatmapLayerOptions.map)

**Type:**  [Map](/maps/documentation/javascript/reference/3.40/map#Map) optional

The map on which to display the layer.

[undefined](#HeatmapLayerOptions.maxIntensity)

**Type:**  number optional

The maximum intensity of the heatmap. By default, heatmap colors are dynamically scaled according to the greatest concentration of points at any particular pixel on the map. This property allows you to specify a fixed maximum.

[undefined](#HeatmapLayerOptions.opacity)

**Type:**  number optional

The opacity of the heatmap, expressed as a number between 0 and 1. Defaults to 0.6.

[undefined](#HeatmapLayerOptions.radius)

**Type:**  number optional

The radius of influence for each data point, in pixels.