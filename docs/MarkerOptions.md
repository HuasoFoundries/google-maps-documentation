[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/MarkerOptions.html)


MarkerOptions interface
-----------------------

google.maps.MarkerOptions interface

MarkerOptions object used to define the properties that can be set on a Marker.

Properties

[anchorPoint](#MarkerOptions.anchorPoint)

**Type:**  [Point](Point.md) optional

The offset from the marker's position to the tip of an InfoWindow that has been opened with the marker as anchor.

[animation](#MarkerOptions.animation)

**Type:**  [Animation](Animation.md) optional

Which animation to play when marker is added to a map.

[clickable](#MarkerOptions.clickable)

**Type:**  boolean optional

If true, the marker receives mouse and touch events. Default value is true.

[crossOnDrag](#MarkerOptions.crossOnDrag)

**Type:**  boolean optional

If false, disables cross that appears beneath the marker when dragging. This option is true by default.

[cursor](#MarkerOptions.cursor)

**Type:**  string optional

Mouse cursor to show on hover

[draggable](#MarkerOptions.draggable)

**Type:**  boolean optional

If true, the marker can be dragged. Default value is false.

[icon](#MarkerOptions.icon)

**Type:**  string|[Icon](Icon.md)|[Symbol](Symbol.md) optional

Icon for the foreground. If a string is provided, it is treated as though it were an Icon with the string as url.

[label](#MarkerOptions.label)

**Type:**  string|[MarkerLabel](MarkerLabel.md) optional

Adds a label to the marker. The label can either be a string, or a MarkerLabel object.

[map](#MarkerOptions.map)

**Type:**  [Map](Map.md)|[StreetViewPanorama](StreetViewPanorama.md) optional

Map on which to display Marker.

[opacity](#MarkerOptions.opacity)

**Type:**  number optional

The marker's opacity between 0.0 and 1.0.

[optimized](#MarkerOptions.optimized)

**Type:**  boolean optional

Optimization renders many markers as a single static element. Optimized rendering is enabled by default. Disable optimized rendering for animated GIFs or PNGs, or when each marker must be rendered as a separate DOM element (advanced usage only).

[position](#MarkerOptions.position)

**Type:**  [LatLng](LatLng.md)|[LatLngLiteral](LatLngLiteral.md) optional

Marker position. Required.

[shape](#MarkerOptions.shape)

**Type:**  [MarkerShape](MarkerShape.md) optional

Image map region definition used for drag/click.

[title](#MarkerOptions.title)

**Type:**  string optional

Rollover text

[visible](#MarkerOptions.visible)

**Type:**  boolean optional

If true, the marker is visible

[zIndex](#MarkerOptions.zIndex)

**Type:**  number optional

All markers are displayed on the map in order of their zIndex, with higher values displaying in front of markers with lower values. By default, markers are displayed according to their vertical position on screen, with lower markers appearing in front of markers further up the screen.