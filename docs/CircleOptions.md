[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/CircleOptions.html)

CircleOptions interface
-----------------------

google.maps.CircleOptions interface

CircleOptions object used to define the properties that can be set on a Circle.

Properties

[undefined](#CircleOptions.center)

**Type:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral) optional

The center of the Circle.

[undefined](#CircleOptions.clickable)

**Type:**  boolean optional

Indicates whether this Circle handles mouse events. Defaults to true.

[undefined](#CircleOptions.draggable)

**Type:**  boolean optional

If set to true, the user can drag this circle over the map. Defaults to false.

[undefined](#CircleOptions.editable)

**Type:**  boolean optional

If set to true, the user can edit this circle by dragging the control points shown at the center and around the circumference of the circle. Defaults to false.

[undefined](#CircleOptions.fillColor)

**Type:**  string optional

The fill color. All CSS3 colors are supported except for extended named colors.

[undefined](#CircleOptions.fillOpacity)

**Type:**  number optional

The fill opacity between 0.0 and 1.0.

[undefined](#CircleOptions.map)

**Type:**  [Map](/maps/documentation/javascript/reference/3.40/map#Map) optional

Map on which to display the Circle.

[undefined](#CircleOptions.radius)

**Type:**  number optional

The radius in meters on the Earth's surface.

[undefined](#CircleOptions.strokeColor)

**Type:**  string optional

The stroke color. All CSS3 colors are supported except for extended named colors.

[undefined](#CircleOptions.strokeOpacity)

**Type:**  number optional

The stroke opacity between 0.0 and 1.0.

[undefined](#CircleOptions.strokePosition)

**Type:**  [StrokePosition](/maps/documentation/javascript/reference/3.40/polygon#StrokePosition) optional

The stroke position. Defaults to CENTER. This property is not supported on Internet Explorer 8 and earlier.

[undefined](#CircleOptions.strokeWeight)

**Type:**  number optional

The stroke width in pixels.

[undefined](#CircleOptions.visible)

**Type:**  boolean optional

Whether this circle is visible on the map. Defaults to true.

[undefined](#CircleOptions.zIndex)

**Type:**  number optional

The zIndex compared to other polys.