[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/GroundOverlay.html)

GroundOverlay class
-------------------

google.maps.GroundOverlay class

A rectangular image overlay on the map.

This class extends [MVCObject](/maps/documentation/javascript/reference/3.40/event#MVCObject).

Constructor

[undefined](#GroundOverlay.constructor)

GroundOverlay(url, bounds\[, opts\])

**Parameters:** 

*   url:  string
*   bounds:  [LatLngBounds](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBounds)|[LatLngBoundsLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBoundsLiteral)
*   opts:  [GroundOverlayOptions](/maps/documentation/javascript/reference/3.40/image-overlay#GroundOverlayOptions) optional

Creates a ground overlay from the provided image URL and its LatLngBounds. The image is scaled to fit the current bounds, and projected using the current map projection.

Methods

[undefined](#GroundOverlay.getBounds)

getBounds()

**Parameters:**  None

**Return Value:**  [LatLngBounds](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBounds)

Gets the LatLngBounds of this overlay.

[undefined](#GroundOverlay.getMap)

getMap()

**Parameters:**  None

**Return Value:**  [Map](/maps/documentation/javascript/reference/3.40/map#Map)

Returns the map on which this ground overlay is displayed.

[undefined](#GroundOverlay.getOpacity)

getOpacity()

**Parameters:**  None

**Return Value:**  number

Returns the opacity of this ground overlay.

[undefined](#GroundOverlay.getUrl)

getUrl()

**Parameters:**  None

**Return Value:**  string

Gets the url of the projected image.

[undefined](#GroundOverlay.setMap)

setMap(map)

**Parameters:** 

*   map:  [Map](/maps/documentation/javascript/reference/3.40/map#Map)

**Return Value:**  None

Renders the ground overlay on the specified map. If map is set to null, the overlay is removed.

[undefined](#GroundOverlay.setOpacity)

setOpacity(opacity)

**Parameters:** 

*   opacity:  number

**Return Value:**  None

Sets the opacity of this ground overlay.

Events

[undefined](#GroundOverlay.click)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the DOM click event is fired on the GroundOverlay.

[undefined](#GroundOverlay.dblclick)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the DOM dblclick event is fired on the GroundOverlay.