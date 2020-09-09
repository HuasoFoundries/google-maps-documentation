[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/PolylineOptions.html)

PolylineOptions interface
-------------------------

google.maps.PolylineOptions interface

PolylineOptions object used to define the properties that can be set on a Polyline.

Properties

[undefined](#PolylineOptions.clickable)

**Type:**  boolean optional

Indicates whether this Polyline handles mouse events. Defaults to true.

[undefined](#PolylineOptions.draggable)

**Type:**  boolean optional

If set to true, the user can drag this shape over the map. The geodesic property defines the mode of dragging. Defaults to false.

[undefined](#PolylineOptions.editable)

**Type:**  boolean optional

If set to true, the user can edit this shape by dragging the control points shown at the vertices and on each segment. Defaults to false.

[undefined](#PolylineOptions.geodesic)

**Type:**  boolean optional

When true, edges of the polygon are interpreted as geodesic and will follow the curvature of the Earth. When false, edges of the polygon are rendered as straight lines in screen space. Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions are maintained relative to the surface of the earth. Defaults to false.

[undefined](#PolylineOptions.icons)

**Type:**  Array<[IconSequence](/maps/documentation/javascript/reference/3.40/polygon#IconSequence)\> optional

The icons to be rendered along the polyline.

[undefined](#PolylineOptions.map)

**Type:**  [Map](/maps/documentation/javascript/reference/3.40/map#Map) optional

Map on which to display Polyline.

[undefined](#PolylineOptions.path)

**Type:**  [MVCArray](/maps/documentation/javascript/reference/3.40/event#MVCArray)<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)\>|Array<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral)\> optional

The ordered sequence of coordinates of the Polyline. This path may be specified using either a simple array of LatLngs, or an MVCArray of LatLngs. Note that if you pass a simple array, it will be converted to an MVCArray Inserting or removing LatLngs in the MVCArray will automatically update the polyline on the map.

[undefined](#PolylineOptions.strokeColor)

**Type:**  string optional

The stroke color. All CSS3 colors are supported except for extended named colors.

[undefined](#PolylineOptions.strokeOpacity)

**Type:**  number optional

The stroke opacity between 0.0 and 1.0.

[undefined](#PolylineOptions.strokeWeight)

**Type:**  number optional

The stroke width in pixels.

[undefined](#PolylineOptions.visible)

**Type:**  boolean optional

Whether this polyline is visible on the map. Defaults to true.

[undefined](#PolylineOptions.zIndex)

**Type:**  number optional

The zIndex compared to other polys.