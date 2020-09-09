[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/MarkerOptions.html)

MarkerOptions interface
-----------------------

google.maps.MarkerOptions interface

MarkerOptions object used to define the properties that can be set on a Marker.

Properties

[undefined](#MarkerOptions.anchorPoint)

**Type:**  [Point](/maps/documentation/javascript/reference/3.40/coordinates#Point) optional

The offset from the marker's position to the tip of an InfoWindow that has been opened with the marker as anchor.

[undefined](#MarkerOptions.animation)

**Type:**  [Animation](/maps/documentation/javascript/reference/3.40/marker#Animation) optional

Which animation to play when marker is added to a map.

[undefined](#MarkerOptions.clickable)

**Type:**  boolean optional

If true, the marker receives mouse and touch events. Default value is true.

[undefined](#MarkerOptions.crossOnDrag)

**Type:**  boolean optional

If false, disables cross that appears beneath the marker when dragging. This option is true by default.

[undefined](#MarkerOptions.cursor)

**Type:**  string optional

Mouse cursor to show on hover

[undefined](#MarkerOptions.draggable)

**Type:**  boolean optional

If true, the marker can be dragged. Default value is false.

[undefined](#MarkerOptions.icon)

**Type:**  string|[Icon](/maps/documentation/javascript/reference/3.40/marker#Icon)|[Symbol](/maps/documentation/javascript/reference/3.40/marker#Symbol) optional

Icon for the foreground. If a string is provided, it is treated as though it were an Icon with the string as url.

[undefined](#MarkerOptions.label)

**Type:**  string|[MarkerLabel](/maps/documentation/javascript/reference/3.40/marker#MarkerLabel) optional

Adds a label to the marker. The label can either be a string, or a MarkerLabel object.

[undefined](#MarkerOptions.map)

**Type:**  [Map](/maps/documentation/javascript/reference/3.40/map#Map)|[StreetViewPanorama](/maps/documentation/javascript/reference/3.40/street-view#StreetViewPanorama) optional

Map on which to display Marker.

[undefined](#MarkerOptions.opacity)

**Type:**  number optional

The marker's opacity between 0.0 and 1.0.

[undefined](#MarkerOptions.optimized)

**Type:**  boolean optional

Optimization renders many markers as a single static element. Optimized rendering is enabled by default. Disable optimized rendering for animated GIFs or PNGs, or when each marker must be rendered as a separate DOM element (advanced usage only).

[undefined](#MarkerOptions.position)

**Type:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral) optional

Marker position. Required.

[undefined](#MarkerOptions.shape)

**Type:**  [MarkerShape](/maps/documentation/javascript/reference/3.40/marker#MarkerShape) optional

Image map region definition used for drag/click.

[undefined](#MarkerOptions.title)

**Type:**  string optional

Rollover text

[undefined](#MarkerOptions.visible)

**Type:**  boolean optional

If true, the marker is visible

[undefined](#MarkerOptions.zIndex)

**Type:**  number optional

All markers are displayed on the map in order of their zIndex, with higher values displaying in front of markers with lower values. By default, markers are displayed according to their vertical position on screen, with lower markers appearing in front of markers further up the screen.