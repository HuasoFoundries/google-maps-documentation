[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/PolygonOptions.html)

PolygonOptions interface
------------------------

google.maps.PolygonOptions interface

PolygonOptions object used to define the properties that can be set on a Polygon.

Properties

[undefined](#PolygonOptions.clickable)

**Type:**  boolean optional

Indicates whether this Polygon handles mouse events. Defaults to true.

[undefined](#PolygonOptions.draggable)

**Type:**  boolean optional

If set to true, the user can drag this shape over the map. The geodesic property defines the mode of dragging. Defaults to false.

[undefined](#PolygonOptions.editable)

**Type:**  boolean optional

If set to true, the user can edit this shape by dragging the control points shown at the vertices and on each segment. Defaults to false.

[undefined](#PolygonOptions.fillColor)

**Type:**  string optional

The fill color. All CSS3 colors are supported except for extended named colors.

[undefined](#PolygonOptions.fillOpacity)

**Type:**  number optional

The fill opacity between 0.0 and 1.0

[undefined](#PolygonOptions.geodesic)

**Type:**  boolean optional

When true, edges of the polygon are interpreted as geodesic and will follow the curvature of the Earth. When false, edges of the polygon are rendered as straight lines in screen space. Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions are maintained relative to the surface of the earth. Defaults to false.

[undefined](#PolygonOptions.map)

**Type:**  [Map](/maps/documentation/javascript/reference/3.40/map#Map) optional

Map on which to display Polygon.

[undefined](#PolygonOptions.paths)

**Type:**  [MVCArray](/maps/documentation/javascript/reference/3.40/event#MVCArray)<[MVCArray](/maps/documentation/javascript/reference/3.40/event#MVCArray)<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)\>>|[MVCArray](/maps/documentation/javascript/reference/3.40/event#MVCArray)<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)\>|Array<Array<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral)\>>|Array<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral)\> optional

The ordered sequence of coordinates that designates a closed loop. Unlike polylines, a polygon may consist of one or more paths. As a result, the paths property may specify one or more arrays of LatLng coordinates. Paths are closed automatically; do not repeat the first vertex of the path as the last vertex. Simple polygons may be defined using a single array of LatLngs. More complex polygons may specify an array of arrays. Any simple arrays are converted into [MVCArray](#MVCArray)s. Inserting or removing LatLngs from the MVCArray will automatically update the polygon on the map.

[undefined](#PolygonOptions.strokeColor)

**Type:**  string optional

The stroke color. All CSS3 colors are supported except for extended named colors.

[undefined](#PolygonOptions.strokeOpacity)

**Type:**  number optional

The stroke opacity between 0.0 and 1.0

[undefined](#PolygonOptions.strokePosition)

**Type:**  [StrokePosition](/maps/documentation/javascript/reference/3.40/polygon#StrokePosition) optional

The stroke position. Defaults to CENTER. This property is not supported on Internet Explorer 8 and earlier.

[undefined](#PolygonOptions.strokeWeight)

**Type:**  number optional

The stroke width in pixels.

[undefined](#PolygonOptions.visible)

**Type:**  boolean optional

Whether this polygon is visible on the map. Defaults to true.

[undefined](#PolygonOptions.zIndex)

**Type:**  number optional

The zIndex compared to other polys.