[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/Polyline.html)

Polyline class
--------------

google.maps.Polyline class

A polyline is a linear overlay of connected line segments on the map.

This class extends [MVCObject](/maps/documentation/javascript/reference/3.40/event#MVCObject).

Constructor

[undefined](#Polyline.constructor)

Polyline(\[opts\])

**Parameters:** 

*   opts:  [PolylineOptions](/maps/documentation/javascript/reference/3.40/polygon#PolylineOptions) optional

Create a polyline using the passed _[PolylineOptions](#PolylineOptions)_, which specify both the path of the polyline and the stroke style to use when drawing the polyline. You may pass either an array of LatLngs or an [MVCArray](#MVCArray) of LatLngs when constructing a polyline, though simple arrays are converted to MVCArrays within the polyline upon instantiation.

Methods

[undefined](#Polyline.getDraggable)

getDraggable()

**Parameters:**  None

**Return Value:**  boolean

Returns whether this shape can be dragged by the user.

[undefined](#Polyline.getEditable)

getEditable()

**Parameters:**  None

**Return Value:**  boolean

Returns whether this shape can be edited by the user.

[undefined](#Polyline.getMap)

getMap()

**Parameters:**  None

**Return Value:**  [Map](/maps/documentation/javascript/reference/3.40/map#Map)

Returns the map on which this shape is attached.

[undefined](#Polyline.getPath)

getPath()

**Parameters:**  None

**Return Value:**  [MVCArray](/maps/documentation/javascript/reference/3.40/event#MVCArray)<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)\>

Retrieves the path.

[undefined](#Polyline.getVisible)

getVisible()

**Parameters:**  None

**Return Value:**  boolean

Returns whether this poly is visible on the map.

[undefined](#Polyline.setDraggable)

setDraggable(draggable)

**Parameters:** 

*   draggable:  boolean

**Return Value:**  None

If set to true, the user can drag this shape over the map. The geodesic property defines the mode of dragging.

[undefined](#Polyline.setEditable)

setEditable(editable)

**Parameters:** 

*   editable:  boolean

**Return Value:**  None

If set to true, the user can edit this shape by dragging the control points shown at the vertices and on each segment.

[undefined](#Polyline.setMap)

setMap(map)

**Parameters:** 

*   map:  [Map](/maps/documentation/javascript/reference/3.40/map#Map)

**Return Value:**  None

Renders this shape on the specified map. If map is set to null, the shape will be removed.

[undefined](#Polyline.setOptions)

setOptions(options)

**Parameters:** 

*   options:  [PolylineOptions](/maps/documentation/javascript/reference/3.40/polygon#PolylineOptions)

**Return Value:**  None

[undefined](#Polyline.setPath)

setPath(path)

**Parameters:** 

*   path:  [MVCArray](/maps/documentation/javascript/reference/3.40/event#MVCArray)<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)\>|Array<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral)\>

**Return Value:**  None

Sets the path. See _[PolylineOptions](#PolylineOptions)_ for more details.

[undefined](#Polyline.setVisible)

setVisible(visible)

**Parameters:** 

*   visible:  boolean

**Return Value:**  None

Hides this poly if set to false.

Events

[undefined](#Polyline.click)

function(event)

**Arguments:** 

*   event:  [PolyMouseEvent](/maps/documentation/javascript/reference/3.40/polygon#PolyMouseEvent)

This event is fired when the DOM click event is fired on the Polyline.

[undefined](#Polyline.dblclick)

function(event)

**Arguments:** 

*   event:  [PolyMouseEvent](/maps/documentation/javascript/reference/3.40/polygon#PolyMouseEvent)

This event is fired when the DOM dblclick event is fired on the Polyline.

[undefined](#Polyline.drag)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is repeatedly fired while the user drags the polyline.

[undefined](#Polyline.dragend)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the user stops dragging the polyline.

[undefined](#Polyline.dragstart)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the user starts dragging the polyline.

[undefined](#Polyline.mousedown)

function(event)

**Arguments:** 

*   event:  [PolyMouseEvent](/maps/documentation/javascript/reference/3.40/polygon#PolyMouseEvent)

This event is fired when the DOM mousedown event is fired on the Polyline.

[undefined](#Polyline.mousemove)

function(event)

**Arguments:** 

*   event:  [PolyMouseEvent](/maps/documentation/javascript/reference/3.40/polygon#PolyMouseEvent)

This event is fired when the DOM mousemove event is fired on the Polyline.

[undefined](#Polyline.mouseout)

function(event)

**Arguments:** 

*   event:  [PolyMouseEvent](/maps/documentation/javascript/reference/3.40/polygon#PolyMouseEvent)

This event is fired on Polyline mouseout.

[undefined](#Polyline.mouseover)

function(event)

**Arguments:** 

*   event:  [PolyMouseEvent](/maps/documentation/javascript/reference/3.40/polygon#PolyMouseEvent)

This event is fired on Polyline mouseover.

[undefined](#Polyline.mouseup)

function(event)

**Arguments:** 

*   event:  [PolyMouseEvent](/maps/documentation/javascript/reference/3.40/polygon#PolyMouseEvent)

This event is fired when the DOM mouseup event is fired on the Polyline.

[undefined](#Polyline.rightclick)

function(event)

**Arguments:** 

*   event:  [PolyMouseEvent](/maps/documentation/javascript/reference/3.40/polygon#PolyMouseEvent)

This event is fired when the Polyline is right-clicked on.