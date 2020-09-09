[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/InfoWindow.html)

InfoWindow class
----------------

google.maps.InfoWindow class

An overlay that looks like a bubble and is often connected to a marker.

This class extends [MVCObject](/maps/documentation/javascript/reference/3.40/event#MVCObject).

Constructor

[undefined](#InfoWindow.constructor)

InfoWindow(\[opts\])

**Parameters:** 

*   opts:  [InfoWindowOptions](/maps/documentation/javascript/reference/3.40/info-window#InfoWindowOptions) optional

Creates an info window with the given options. An InfoWindow can be placed on a map at a particular position or above a marker, depending on what is specified in the options. Unless auto-pan is disabled, an InfoWindow will pan the map to make itself visible when it is opened. After constructing an InfoWindow, you must call open to display it on the map. The user can click the close button on the InfoWindow to remove it from the map, or the developer can call close() for the same effect.

Methods

[undefined](#InfoWindow.close)

close()

**Parameters:**  None

**Return Value:**  None

Closes this InfoWindow by removing it from the DOM structure.

[undefined](#InfoWindow.getContent)

getContent()

**Parameters:**  None

**Return Value:**  string|Node

[undefined](#InfoWindow.getPosition)

getPosition()

**Parameters:**  None

**Return Value:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)

[undefined](#InfoWindow.getZIndex)

getZIndex()

**Parameters:**  None

**Return Value:**  number

[undefined](#InfoWindow.open)

open(\[map, anchor\])

**Parameters:** 

*   map:  [Map](/maps/documentation/javascript/reference/3.40/map#Map)|[StreetViewPanorama](/maps/documentation/javascript/reference/3.40/street-view#StreetViewPanorama) optional
*   anchor:  [MVCObject](/maps/documentation/javascript/reference/3.40/event#MVCObject) optional

**Return Value:**  None

Opens this InfoWindow on the given map. Optionally, an InfoWindow can be associated with an anchor. In the core API, the only anchor is the Marker class. However, an anchor can be any MVCObject that exposes a LatLng position property and optionally a Point anchorPoint property for calculating the pixelOffset (see InfoWindowOptions). The anchorPoint is the offset from the anchor's position to the tip of the InfoWindow.

[undefined](#InfoWindow.setContent)

setContent(content)

**Parameters:** 

*   content:  string|Node

**Return Value:**  None

[undefined](#InfoWindow.setOptions)

setOptions(options)

**Parameters:** 

*   options:  [InfoWindowOptions](/maps/documentation/javascript/reference/3.40/info-window#InfoWindowOptions)

**Return Value:**  None

[undefined](#InfoWindow.setPosition)

setPosition(position)

**Parameters:** 

*   position:  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral)

**Return Value:**  None

[undefined](#InfoWindow.setZIndex)

setZIndex(zIndex)

**Parameters:** 

*   zIndex:  number

**Return Value:**  None

Events

[undefined](#InfoWindow.closeclick)

function()

**Arguments:**  None

This event is fired when the close button was clicked.

[undefined](#InfoWindow.content_changed)

function()

**Arguments:**  None

This event is fired when the content property changes.

[undefined](#InfoWindow.domready)

function()

**Arguments:**  None

This event is fired when the <div> containing the **InfoWindow**'s content is attached to the DOM. You may wish to monitor this event if you are building out your info window content dynamically.

[undefined](#InfoWindow.position_changed)

function()

**Arguments:**  None

This event is fired when the position property changes.

[undefined](#InfoWindow.zindex_changed)

function()

**Arguments:**  None

This event is fired when the InfoWindow's zIndex changes.