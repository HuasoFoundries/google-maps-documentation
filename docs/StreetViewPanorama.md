[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/StreetViewPanorama.html)

StreetViewPanorama class
------------------------

google.maps.StreetViewPanorama class

Displays the panorama for a given LatLng or panorama ID. A StreetViewPanorama object provides a Street View "viewer" which can be stand-alone within a separate <div> or bound to a Map.

This class extends [MVCObject](/maps/documentation/javascript/reference/3.40/event#MVCObject).

Constructor

[undefined](#StreetViewPanorama.constructor)

StreetViewPanorama(container\[, opts\])

**Parameters:** 

*   container:  Element
*   opts:  [StreetViewPanoramaOptions](/maps/documentation/javascript/reference/3.40/street-view#StreetViewPanoramaOptions) optional

Creates a panorama with the passed StreetViewPanoramaOptions.

Methods

[undefined](#StreetViewPanorama.getLinks)

getLinks()

**Parameters:**  None

**Return Value:**  Array<[StreetViewLink](/maps/documentation/javascript/reference/3.40/street-view-service#StreetViewLink)\>

Returns the set of navigation links for the Street View panorama.

[undefined](#StreetViewPanorama.getLocation)

getLocation()

**Parameters:**  None

**Return Value:**  [StreetViewLocation](/maps/documentation/javascript/reference/3.40/street-view-service#StreetViewLocation)

Returns the StreetViewLocation of the current panorama.

[undefined](#StreetViewPanorama.getMotionTracking)

getMotionTracking()

**Parameters:**  None

**Return Value:**  boolean

Returns the state of motion tracker. If true when the user physically moves the device and the browser supports it, the Street View Panorama tracks the physical movements.

[undefined](#StreetViewPanorama.getPano)

getPano()

**Parameters:**  None

**Return Value:**  string

Returns the current panorama ID for the Street View panorama. This id is stable within the browser's current session only.

[undefined](#StreetViewPanorama.getPhotographerPov)

getPhotographerPov()

**Parameters:**  None

**Return Value:**  [StreetViewPov](/maps/documentation/javascript/reference/3.40/street-view#StreetViewPov)

Returns the heading and pitch of the photographer when this panorama was taken. For Street View panoramas on the road, this also reveals in which direction the car was travelling. This data is available after the pano\_changed event.

[undefined](#StreetViewPanorama.getPosition)

getPosition()

**Parameters:**  None

**Return Value:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)

Returns the current LatLng position for the Street View panorama.

[undefined](#StreetViewPanorama.getPov)

getPov()

**Parameters:**  None

**Return Value:**  [StreetViewPov](/maps/documentation/javascript/reference/3.40/street-view#StreetViewPov)

Returns the current point of view for the Street View panorama.

[undefined](#StreetViewPanorama.getStatus)

getStatus()

**Parameters:**  None

**Return Value:**  [StreetViewStatus](/maps/documentation/javascript/reference/3.40/street-view-service#StreetViewStatus)

Returns the status of the panorama on completion of the setPosition() or setPano() request.

[undefined](#StreetViewPanorama.getVisible)

getVisible()

**Parameters:**  None

**Return Value:**  boolean

Returns true if the panorama is visible. It does not specify whether Street View imagery is available at the specified position.

[undefined](#StreetViewPanorama.getZoom)

getZoom()

**Parameters:**  None

**Return Value:**  number

Returns the zoom level of the panorama. Fully zoomed-out is level 0, where the field of view is 180 degrees. Zooming in increases the zoom level.

[undefined](#StreetViewPanorama.registerPanoProvider)

registerPanoProvider(provider\[, opt\_options\])

**Parameters:** 

*   provider:  function(string): ([StreetViewPanoramaData](/maps/documentation/javascript/reference/3.40/street-view-service#StreetViewPanoramaData) optional)
*   opt\_options:  [PanoProviderOptions](/maps/documentation/javascript/reference/3.40/street-view#PanoProviderOptions) optional

**Return Value:**  None

Set the custom panorama provider called on pano change to load custom panoramas.

[undefined](#StreetViewPanorama.setLinks)

setLinks(links)

**Parameters:** 

*   links:  Array<[StreetViewLink](/maps/documentation/javascript/reference/3.40/street-view-service#StreetViewLink)\>

**Return Value:**  None

Sets the set of navigation links for the Street View panorama.

[undefined](#StreetViewPanorama.setMotionTracking)

setMotionTracking(motionTracking)

**Parameters:** 

*   motionTracking:  boolean

**Return Value:**  None

Sets the state of motion tracker. If true when the user physically moves the device and the browser supports it, the Street View Panorama tracks the physical movements.

[undefined](#StreetViewPanorama.setOptions)

setOptions(options)

**Parameters:** 

*   options:  [StreetViewPanoramaOptions](/maps/documentation/javascript/reference/3.40/street-view#StreetViewPanoramaOptions)

**Return Value:**  None

Sets a collection of key-value pairs.

[undefined](#StreetViewPanorama.setPano)

setPano(pano)

**Parameters:** 

*   pano:  string

**Return Value:**  None

Sets the current panorama ID for the Street View panorama.

[undefined](#StreetViewPanorama.setPosition)

setPosition(latLng)

**Parameters:** 

*   latLng:  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral)

**Return Value:**  None

Sets the current LatLng position for the Street View panorama.

[undefined](#StreetViewPanorama.setPov)

setPov(pov)

**Parameters:** 

*   pov:  [StreetViewPov](/maps/documentation/javascript/reference/3.40/street-view#StreetViewPov)

**Return Value:**  None

Sets the point of view for the Street View panorama.

[undefined](#StreetViewPanorama.setVisible)

setVisible(flag)

**Parameters:** 

*   flag:  boolean

**Return Value:**  None

Sets to true to make the panorama visible. If set to false, the panorama will be hidden whether it is embedded in the map or in its own <div>.

[undefined](#StreetViewPanorama.setZoom)

setZoom(zoom)

**Parameters:** 

*   zoom:  number

**Return Value:**  None

Sets the zoom level of the panorama. Fully zoomed-out is level 0, where the field of view is 180 degrees. Zooming in increases the zoom level.

Properties

[undefined](#StreetViewPanorama.controls)

**Type:**  Array<[MVCArray](/maps/documentation/javascript/reference/3.40/event#MVCArray)<Node>>

Additional controls to attach to the panorama. To add a control to the panorama, add the control's <div> to the MVCArray corresponding to the ControlPosition where it should be rendered.

Events

[undefined](#StreetViewPanorama.closeclick)

function(event)

**Arguments:** 

*   event:  Event

This event is fired when the close button is clicked.

[undefined](#StreetViewPanorama.pano_changed)

function()

**Arguments:**  None

This event is fired when the panorama's pano id changes. The pano may change as the user navigates through the panorama or the position is manually set. Note that not all position changes trigger a pano\_changed.

[undefined](#StreetViewPanorama.position_changed)

function()

**Arguments:**  None

This event is fired when the panorama's position changes. The position changes as the user navigates through the panorama or the position is set manually.

[undefined](#StreetViewPanorama.pov_changed)

function()

**Arguments:**  None

This event is fired when the panorama's point-of-view changes. The point of view changes as the pitch, zoom, or heading changes.

[undefined](#StreetViewPanorama.resize)

function()

**Arguments:**  None

Developers should trigger this event on the panorama when its div changes size: [google.maps.event.trigger](#event)(panorama, 'resize').

[undefined](#StreetViewPanorama.status_changed)

function()

**Arguments:**  None

This event is fired after every panorama lookup by id or location, via setPosition() or setPano().

[undefined](#StreetViewPanorama.visible_changed)

function()

**Arguments:**  None

This event is fired when the panorama's visibility changes. The visibility is changed when the Pegman is dragged onto the map, the close button is clicked, or setVisible() is called.

[undefined](#StreetViewPanorama.zoom_changed)

function()

**Arguments:**  None

This event is fired when the panorama's zoom level changes.