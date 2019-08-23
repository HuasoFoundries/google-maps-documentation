[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/RectangleOptions.html)


RectangleOptions interface
--------------------------

google.maps.RectangleOptions interface

RectangleOptions object used to define the properties that can be set on a Rectangle.

Properties

[bounds](#RectangleOptions.bounds)

**Type:**  [LatLngBounds](LatLngBounds.md)|[LatLngBoundsLiteral](LatLngBoundsLiteral.md) optional

The bounds.

[clickable](#RectangleOptions.clickable)

**Type:**  boolean optional

Indicates whether this Rectangle handles mouse events. Defaults to true.

[draggable](#RectangleOptions.draggable)

**Type:**  boolean optional

If set to true, the user can drag this rectangle over the map. Defaults to false.

[editable](#RectangleOptions.editable)

**Type:**  boolean optional

If set to true, the user can edit this rectangle by dragging the control points shown at the corners and on each edge. Defaults to false.

[fillColor](#RectangleOptions.fillColor)

**Type:**  string optional

The fill color. All CSS3 colors are supported except for extended named colors.

[fillOpacity](#RectangleOptions.fillOpacity)

**Type:**  number optional

The fill opacity between 0.0 and 1.0

[map](#RectangleOptions.map)

**Type:**  [Map](Map.md) optional

Map on which to display Rectangle.

[strokeColor](#RectangleOptions.strokeColor)

**Type:**  string optional

The stroke color. All CSS3 colors are supported except for extended named colors.

[strokeOpacity](#RectangleOptions.strokeOpacity)

**Type:**  number optional

The stroke opacity between 0.0 and 1.0

[strokePosition](#RectangleOptions.strokePosition)

**Type:**  [StrokePosition](StrokePosition.md) optional

The stroke position. Defaults to CENTER. This property is not supported on Internet Explorer 8 and earlier.

[strokeWeight](#RectangleOptions.strokeWeight)

**Type:**  number optional

The stroke width in pixels.

[visible](#RectangleOptions.visible)

**Type:**  boolean optional

Whether this rectangle is visible on the map. Defaults to true.

[zIndex](#RectangleOptions.zIndex)

**Type:**  number optional

The zIndex compared to other polys.