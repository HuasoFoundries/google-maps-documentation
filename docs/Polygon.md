[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/Polygon.html)

Polygon class
-------------

google.maps.Polygon class

A polygon (like a polyline) defines a series of connected coordinates in an ordered sequence. Additionally, polygons form a closed loop and define a filled region. See the samples in the developer's guide, starting with a [simple polygon](/maps/documentation/javascript/examples/polygon-simple), a [polygon with a hole](/maps/documentation/javascript/examples/polygon-hole), and more. Note that you can also use the [Data layer](#Data.Polygon) to create a polygon. The Data layer offers a simpler way of creating holes because it handles the order of the inner and outer paths for you.

This class extends [MVCObject](/maps/documentation/javascript/reference/3.40/event#MVCObject).

Constructor

[undefined](#Polygon.constructor)

Polygon(\[opts\])

**Parameters:** 

*   opts:  [PolygonOptions](/maps/documentation/javascript/reference/3.40/polygon#PolygonOptions) optional

Create a polygon using the passed _[PolygonOptions](#PolygonOptions)_, which specify the polygon's path, the stroke style for the polygon's edges, and the fill style for the polygon's interior regions. A polygon may contain one or more paths, where each path consists of an array of LatLngs. You may pass either an array of LatLngs or an [MVCArray](#MVCArray) of LatLngs when constructing these paths. Arrays are converted to MVCArrays within the polygon upon instantiation.

Methods

[undefined](#Polygon.getDraggable)

getDraggable()

**Parameters:**  None

**Return Value:**  boolean

Returns whether this shape can be dragged by the user.

[undefined](#Polygon.getEditable)

getEditable()

**Parameters:**  None

**Return Value:**  boolean

Returns whether this shape can be edited by the user.

[undefined](#Polygon.getMap)

getMap()

**Parameters:**  None

**Return Value:**  [Map](/maps/documentation/javascript/reference/3.40/map#Map)

Returns the map on which this shape is attached.

[undefined](#Polygon.getPath)

getPath()

**Parameters:**  None

**Return Value:**  [MVCArray](/maps/documentation/javascript/reference/3.40/event#MVCArray)<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)\>

Retrieves the first path.

[undefined](#Polygon.getPaths)

getPaths()

**Parameters:**  None

**Return Value:**  [MVCArray](/maps/documentation/javascript/reference/3.40/event#MVCArray)<[MVCArray](/maps/documentation/javascript/reference/3.40/event#MVCArray)<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)\>>

Retrieves the paths for this polygon.

[undefined](#Polygon.getVisible)

getVisible()

**Parameters:**  None

**Return Value:**  boolean

Returns whether this poly is visible on the map.

[undefined](#Polygon.setDraggable)

setDraggable(draggable)

**Parameters:** 

*   draggable:  boolean

**Return Value:**  None

If set to true, the user can drag this shape over the map. The geodesic property defines the mode of dragging.

[undefined](#Polygon.setEditable)

setEditable(editable)

**Parameters:** 

*   editable:  boolean

**Return Value:**  None

If set to true, the user can edit this shape by dragging the control points shown at the vertices and on each segment.

[undefined](#Polygon.setMap)

setMap(map)

**Parameters:** 

*   map:  [Map](/maps/documentation/javascript/reference/3.40/map#Map)

**Return Value:**  None

Renders this shape on the specified map. If map is set to null, the shape will be removed.

[undefined](#Polygon.setOptions)

setOptions(options)

**Parameters:** 

*   options:  [PolygonOptions](/maps/documentation/javascript/reference/3.40/polygon#PolygonOptions)

**Return Value:**  None

[undefined](#Polygon.setPath)

setPath(path)

**Parameters:** 

*   path:  [MVCArray](/maps/documentation/javascript/reference/3.40/event#MVCArray)<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)\>|Array<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral)\>

**Return Value:**  None

Sets the first path. See _[PolygonOptions](#PolygonOptions)_ for more details.

[undefined](#Polygon.setPaths)

setPaths(paths)

**Parameters:** 

*   paths:  [MVCArray](/maps/documentation/javascript/reference/3.40/event#MVCArray)<[MVCArray](/maps/documentation/javascript/reference/3.40/event#MVCArray)<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)\>>|[MVCArray](/maps/documentation/javascript/reference/3.40/event#MVCArray)<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)\>|Array<Array<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral)\>>|Array<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral)\>

**Return Value:**  None

Sets the path for this polygon.

[undefined](#Polygon.setVisible)

setVisible(visible)

**Parameters:** 

*   visible:  boolean

**Return Value:**  None

Hides this poly if set to false.

Events

[undefined](#Polygon.click)

function(event)

**Arguments:** 

*   event:  [PolyMouseEvent](/maps/documentation/javascript/reference/3.40/polygon#PolyMouseEvent)

This event is fired when the DOM click event is fired on the Polygon.

[undefined](#Polygon.dblclick)

function(event)

**Arguments:** 

*   event:  [PolyMouseEvent](/maps/documentation/javascript/reference/3.40/polygon#PolyMouseEvent)

This event is fired when the DOM dblclick event is fired on the Polygon.

[undefined](#Polygon.drag)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is repeatedly fired while the user drags the polygon.

[undefined](#Polygon.dragend)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the user stops dragging the polygon.

[undefined](#Polygon.dragstart)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the user starts dragging the polygon.

[undefined](#Polygon.mousedown)

function(event)

**Arguments:** 

*   event:  [PolyMouseEvent](/maps/documentation/javascript/reference/3.40/polygon#PolyMouseEvent)

This event is fired when the DOM mousedown event is fired on the Polygon.

[undefined](#Polygon.mousemove)

function(event)

**Arguments:** 

*   event:  [PolyMouseEvent](/maps/documentation/javascript/reference/3.40/polygon#PolyMouseEvent)

This event is fired when the DOM mousemove event is fired on the Polygon.

[undefined](#Polygon.mouseout)

function(event)

**Arguments:** 

*   event:  [PolyMouseEvent](/maps/documentation/javascript/reference/3.40/polygon#PolyMouseEvent)

This event is fired on Polygon mouseout.

[undefined](#Polygon.mouseover)

function(event)

**Arguments:** 

*   event:  [PolyMouseEvent](/maps/documentation/javascript/reference/3.40/polygon#PolyMouseEvent)

This event is fired on Polygon mouseover.

[undefined](#Polygon.mouseup)

function(event)

**Arguments:** 

*   event:  [PolyMouseEvent](/maps/documentation/javascript/reference/3.40/polygon#PolyMouseEvent)

This event is fired when the DOM mouseup event is fired on the Polygon.

[undefined](#Polygon.rightclick)

function(event)

**Arguments:** 

*   event:  [PolyMouseEvent](/maps/documentation/javascript/reference/3.40/polygon#PolyMouseEvent)

This event is fired when the Polygon is right-clicked on.