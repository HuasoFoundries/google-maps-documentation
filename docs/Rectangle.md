[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/Rectangle.html)

Rectangle class
---------------

google.maps.Rectangle class

A rectangle overlay.

This class extends [MVCObject](/maps/documentation/javascript/reference/3.40/event#MVCObject).

Constructor

[undefined](#Rectangle.constructor)

Rectangle(\[opts\])

**Parameters:** 

*   opts:  [RectangleOptions](/maps/documentation/javascript/reference/3.40/polygon#RectangleOptions) optional

Create a rectangle using the passed _[RectangleOptions](#RectangleOptions)_, which specify the bounds and style.

Methods

[undefined](#Rectangle.getBounds)

getBounds()

**Parameters:**  None

**Return Value:**  [LatLngBounds](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBounds)

Returns the bounds of this rectangle.

[undefined](#Rectangle.getDraggable)

getDraggable()

**Parameters:**  None

**Return Value:**  boolean

Returns whether this rectangle can be dragged by the user.

[undefined](#Rectangle.getEditable)

getEditable()

**Parameters:**  None

**Return Value:**  boolean

Returns whether this rectangle can be edited by the user.

[undefined](#Rectangle.getMap)

getMap()

**Parameters:**  None

**Return Value:**  [Map](/maps/documentation/javascript/reference/3.40/map#Map)

Returns the map on which this rectangle is displayed.

[undefined](#Rectangle.getVisible)

getVisible()

**Parameters:**  None

**Return Value:**  boolean

Returns whether this rectangle is visible on the map.

[undefined](#Rectangle.setBounds)

setBounds(bounds)

**Parameters:** 

*   bounds:  [LatLngBounds](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBounds)|[LatLngBoundsLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBoundsLiteral)

**Return Value:**  None

Sets the bounds of this rectangle.

[undefined](#Rectangle.setDraggable)

setDraggable(draggable)

**Parameters:** 

*   draggable:  boolean

**Return Value:**  None

If set to true, the user can drag this rectangle over the map.

[undefined](#Rectangle.setEditable)

setEditable(editable)

**Parameters:** 

*   editable:  boolean

**Return Value:**  None

If set to true, the user can edit this rectangle by dragging the control points shown at the corners and on each edge.

[undefined](#Rectangle.setMap)

setMap(map)

**Parameters:** 

*   map:  [Map](/maps/documentation/javascript/reference/3.40/map#Map)

**Return Value:**  None

Renders the rectangle on the specified map. If map is set to null, the rectangle will be removed.

[undefined](#Rectangle.setOptions)

setOptions(options)

**Parameters:** 

*   options:  [RectangleOptions](/maps/documentation/javascript/reference/3.40/polygon#RectangleOptions)

**Return Value:**  None

[undefined](#Rectangle.setVisible)

setVisible(visible)

**Parameters:** 

*   visible:  boolean

**Return Value:**  None

Hides this rectangle if set to false.

Events

[undefined](#Rectangle.bounds_changed)

function()

**Arguments:**  None

This event is fired when the rectangle's bounds are changed.

[undefined](#Rectangle.click)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the DOM click event is fired on the rectangle.

[undefined](#Rectangle.dblclick)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the DOM dblclick event is fired on the rectangle.

[undefined](#Rectangle.drag)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is repeatedly fired while the user drags the rectangle.

[undefined](#Rectangle.dragend)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the user stops dragging the rectangle.

[undefined](#Rectangle.dragstart)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the user starts dragging the rectangle.

[undefined](#Rectangle.mousedown)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the DOM mousedown event is fired on the rectangle.

[undefined](#Rectangle.mousemove)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the DOM mousemove event is fired on the rectangle.

[undefined](#Rectangle.mouseout)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired on rectangle mouseout.

[undefined](#Rectangle.mouseover)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired on rectangle mouseover.

[undefined](#Rectangle.mouseup)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the DOM mouseup event is fired on the rectangle.

[undefined](#Rectangle.rightclick)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the rectangle is right-clicked on.