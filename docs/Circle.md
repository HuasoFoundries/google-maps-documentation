[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/Circle.html)

Circle class
------------

google.maps.Circle class

A circle on the Earth's surface; also known as a "spherical cap".

This class extends [MVCObject](/maps/documentation/javascript/reference/3.40/event#MVCObject).

Constructor

[undefined](#Circle.constructor)

Circle(\[opts\])

**Parameters:** 

*   opts:  [CircleOptions](/maps/documentation/javascript/reference/3.40/polygon#CircleOptions) optional

Create a circle using the passed [CircleOptions](/maps/documentation/javascript/reference/3.40/polygon#CircleOptions), which specify the center, radius, and style.

Methods

[undefined](#Circle.getBounds)

getBounds()

**Parameters:**  None

**Return Value:**  [LatLngBounds](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBounds)

Gets the LatLngBounds of this Circle.

[undefined](#Circle.getCenter)

getCenter()

**Parameters:**  None

**Return Value:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)

Returns the center of this circle.

[undefined](#Circle.getDraggable)

getDraggable()

**Parameters:**  None

**Return Value:**  boolean

Returns whether this circle can be dragged by the user.

[undefined](#Circle.getEditable)

getEditable()

**Parameters:**  None

**Return Value:**  boolean

Returns whether this circle can be edited by the user.

[undefined](#Circle.getMap)

getMap()

**Parameters:**  None

**Return Value:**  [Map](/maps/documentation/javascript/reference/3.40/map#Map)

Returns the map on which this circle is displayed.

[undefined](#Circle.getRadius)

getRadius()

**Parameters:**  None

**Return Value:**  number

Returns the radius of this circle (in meters).

[undefined](#Circle.getVisible)

getVisible()

**Parameters:**  None

**Return Value:**  boolean

Returns whether this circle is visible on the map.

[undefined](#Circle.setCenter)

setCenter(center)

**Parameters:** 

*   center:  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral)

**Return Value:**  None

Sets the center of this circle.

[undefined](#Circle.setDraggable)

setDraggable(draggable)

**Parameters:** 

*   draggable:  boolean

**Return Value:**  None

If set to true, the user can drag this circle over the map.

[undefined](#Circle.setEditable)

setEditable(editable)

**Parameters:** 

*   editable:  boolean

**Return Value:**  None

If set to true, the user can edit this circle by dragging the control points shown at the center and around the circumference of the circle.

[undefined](#Circle.setMap)

setMap(map)

**Parameters:** 

*   map:  [Map](/maps/documentation/javascript/reference/3.40/map#Map)

**Return Value:**  None

Renders the circle on the specified map. If map is set to null, the circle will be removed.

[undefined](#Circle.setOptions)

setOptions(options)

**Parameters:** 

*   options:  [CircleOptions](/maps/documentation/javascript/reference/3.40/polygon#CircleOptions)

**Return Value:**  None

[undefined](#Circle.setRadius)

setRadius(radius)

**Parameters:** 

*   radius:  number

**Return Value:**  None

Sets the radius of this circle (in meters).

[undefined](#Circle.setVisible)

setVisible(visible)

**Parameters:** 

*   visible:  boolean

**Return Value:**  None

Hides this circle if set to false.

Events

[undefined](#Circle.center_changed)

function()

**Arguments:**  None

This event is fired when the circle's center is changed.

[undefined](#Circle.click)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the DOM click event is fired on the circle.

[undefined](#Circle.dblclick)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the DOM dblclick event is fired on the circle.

[undefined](#Circle.drag)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is repeatedly fired while the user drags the circle.

[undefined](#Circle.dragend)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the user stops dragging the circle.

[undefined](#Circle.dragstart)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the user starts dragging the circle.

[undefined](#Circle.mousedown)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the DOM mousedown event is fired on the circle.

[undefined](#Circle.mousemove)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the DOM mousemove event is fired on the circle.

[undefined](#Circle.mouseout)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired on circle mouseout.

[undefined](#Circle.mouseover)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired on circle mouseover.

[undefined](#Circle.mouseup)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the DOM mouseup event is fired on the circle.

[undefined](#Circle.radius_changed)

function()

**Arguments:**  None

This event is fired when the circle's radius is changed.

[undefined](#Circle.rightclick)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the circle is right-clicked on.