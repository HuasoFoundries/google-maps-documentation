[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/Marker.html)

Marker class
------------

google.maps.Marker class

This class extends [MVCObject](/maps/documentation/javascript/reference/3.40/event#MVCObject).

Constructor

[undefined](#Marker.constructor)

Marker(\[opts\])

**Parameters:** 

*   opts:  [MarkerOptions](/maps/documentation/javascript/reference/3.40/marker#MarkerOptions) optional

Creates a marker with the options specified. If a map is specified, the marker is added to the map upon construction. Note that the position must be set for the marker to display.

Methods

[undefined](#Marker.getAnimation)

getAnimation()

**Parameters:**  None

**Return Value:**  [Animation](/maps/documentation/javascript/reference/3.40/marker#Animation) optional

[undefined](#Marker.getClickable)

getClickable()

**Parameters:**  None

**Return Value:**  boolean

[undefined](#Marker.getCursor)

getCursor()

**Parameters:**  None

**Return Value:**  string

[undefined](#Marker.getDraggable)

getDraggable()

**Parameters:**  None

**Return Value:**  boolean

[undefined](#Marker.getIcon)

getIcon()

**Parameters:**  None

**Return Value:**  string|[Icon](/maps/documentation/javascript/reference/3.40/marker#Icon)|[Symbol](/maps/documentation/javascript/reference/3.40/marker#Symbol)

[undefined](#Marker.getLabel)

getLabel()

**Parameters:**  None

**Return Value:**  [MarkerLabel](/maps/documentation/javascript/reference/3.40/marker#MarkerLabel)

[undefined](#Marker.getMap)

getMap()

**Parameters:**  None

**Return Value:**  [Map](/maps/documentation/javascript/reference/3.40/map#Map)|[StreetViewPanorama](/maps/documentation/javascript/reference/3.40/street-view#StreetViewPanorama)

[undefined](#Marker.getOpacity)

getOpacity()

**Parameters:**  None

**Return Value:**  number

[undefined](#Marker.getPosition)

getPosition()

**Parameters:**  None

**Return Value:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)

[undefined](#Marker.getShape)

getShape()

**Parameters:**  None

**Return Value:**  [MarkerShape](/maps/documentation/javascript/reference/3.40/marker#MarkerShape)

[undefined](#Marker.getTitle)

getTitle()

**Parameters:**  None

**Return Value:**  string

[undefined](#Marker.getVisible)

getVisible()

**Parameters:**  None

**Return Value:**  boolean

[undefined](#Marker.getZIndex)

getZIndex()

**Parameters:**  None

**Return Value:**  number

[undefined](#Marker.setAnimation)

setAnimation(animation)

**Parameters:** 

*   animation:  [Animation](/maps/documentation/javascript/reference/3.40/marker#Animation) optional

**Return Value:**  None

Start an animation. Any ongoing animation will be cancelled. Currently supported animations are: BOUNCE, DROP. Passing in null will cause any animation to stop.

[undefined](#Marker.setClickable)

setClickable(flag)

**Parameters:** 

*   flag:  boolean

**Return Value:**  None

[undefined](#Marker.setCursor)

setCursor(cursor)

**Parameters:** 

*   cursor:  string

**Return Value:**  None

[undefined](#Marker.setDraggable)

setDraggable(flag)

**Parameters:** 

*   flag:  boolean optional

**Return Value:**  None

[undefined](#Marker.setIcon)

setIcon(icon)

**Parameters:** 

*   icon:  string|[Icon](/maps/documentation/javascript/reference/3.40/marker#Icon)|[Symbol](/maps/documentation/javascript/reference/3.40/marker#Symbol)

**Return Value:**  None

[undefined](#Marker.setLabel)

setLabel(label)

**Parameters:** 

*   label:  string|[MarkerLabel](/maps/documentation/javascript/reference/3.40/marker#MarkerLabel)

**Return Value:**  None

[undefined](#Marker.setMap)

setMap(map)

**Parameters:** 

*   map:  [Map](/maps/documentation/javascript/reference/3.40/map#Map)|[StreetViewPanorama](/maps/documentation/javascript/reference/3.40/street-view#StreetViewPanorama)

**Return Value:**  None

Renders the marker on the specified map or panorama. If map is set to null, the marker will be removed.

[undefined](#Marker.setOpacity)

setOpacity(opacity)

**Parameters:** 

*   opacity:  number

**Return Value:**  None

[undefined](#Marker.setOptions)

setOptions(options)

**Parameters:** 

*   options:  [MarkerOptions](/maps/documentation/javascript/reference/3.40/marker#MarkerOptions)

**Return Value:**  None

[undefined](#Marker.setPosition)

setPosition(latlng)

**Parameters:** 

*   latlng:  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral)

**Return Value:**  None

[undefined](#Marker.setShape)

setShape(shape)

**Parameters:** 

*   shape:  [MarkerShape](/maps/documentation/javascript/reference/3.40/marker#MarkerShape)

**Return Value:**  None

[undefined](#Marker.setTitle)

setTitle(title)

**Parameters:** 

*   title:  string

**Return Value:**  None

[undefined](#Marker.setVisible)

setVisible(visible)

**Parameters:** 

*   visible:  boolean

**Return Value:**  None

[undefined](#Marker.setZIndex)

setZIndex(zIndex)

**Parameters:** 

*   zIndex:  number

**Return Value:**  None

Constants

[undefined](#Marker.MAX_ZINDEX)

The maximum default z-index that the API will assign to a marker. You may set a higher z-index to bring a marker to the front.

Events

[undefined](#Marker.animation_changed)

function()

**Arguments:**  None

This event is fired when the marker's animation property changes.

[undefined](#Marker.click)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the marker icon was clicked.

[undefined](#Marker.clickable_changed)

function()

**Arguments:**  None

This event is fired when the marker's clickable property changes.

[undefined](#Marker.cursor_changed)

function()

**Arguments:**  None

This event is fired when the marker's cursor property changes.

[undefined](#Marker.dblclick)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the marker icon was double clicked.

[undefined](#Marker.drag)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is repeatedly fired while the user drags the marker.

[undefined](#Marker.dragend)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the user stops dragging the marker.

[undefined](#Marker.draggable_changed)

function()

**Arguments:**  None

This event is fired when the marker's draggable property changes.

[undefined](#Marker.dragstart)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the user starts dragging the marker.

[undefined](#Marker.flat_changed)

function()

**Arguments:**  None

This event is fired when the marker's flat property changes.

[undefined](#Marker.icon_changed)

function()

**Arguments:**  None

This event is fired when the marker icon property changes.

[undefined](#Marker.mousedown)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired for a mousedown on the marker.

[undefined](#Marker.mouseout)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the mouse leaves the area of the marker icon.

[undefined](#Marker.mouseover)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the mouse enters the area of the marker icon.

[undefined](#Marker.mouseup)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired for a mouseup on the marker.

[undefined](#Marker.position_changed)

function()

**Arguments:**  None

This event is fired when the marker position property changes.

[undefined](#Marker.rightclick)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired for a rightclick on the marker.

[undefined](#Marker.shape_changed)

function()

**Arguments:**  None

This event is fired when the marker's shape property changes.

[undefined](#Marker.title_changed)

function()

**Arguments:**  None

This event is fired when the marker title property changes.

[undefined](#Marker.visible_changed)

function()

**Arguments:**  None

This event is fired when the marker's visible property changes.

[undefined](#Marker.zindex_changed)

function()

**Arguments:**  None

This event is fired when the marker's zIndex property changes.