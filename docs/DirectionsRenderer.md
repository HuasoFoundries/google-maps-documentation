[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/DirectionsRenderer.html)

DirectionsRenderer class
------------------------

google.maps.DirectionsRenderer class

Renders directions obtained from the [DirectionsService](#DirectionsService).

This class extends [MVCObject](/maps/documentation/javascript/reference/3.40/event#MVCObject).

Constructor

[undefined](#DirectionsRenderer.constructor)

DirectionsRenderer(\[opts\])

**Parameters:** 

*   opts:  [DirectionsRendererOptions](/maps/documentation/javascript/reference/3.40/directions#DirectionsRendererOptions) optional

Creates the renderer with the given options. Directions can be rendered on a map (as visual overlays) or additionally on a <div> panel (as textual instructions).

Methods

[undefined](#DirectionsRenderer.getDirections)

getDirections()

**Parameters:**  None

**Return Value:**  [DirectionsResult](/maps/documentation/javascript/reference/3.40/directions#DirectionsResult)

Returns the renderer's current set of directions.

[undefined](#DirectionsRenderer.getMap)

getMap()

**Parameters:**  None

**Return Value:**  [Map](/maps/documentation/javascript/reference/3.40/map#Map)

Returns the map on which the DirectionsResult is rendered.

[undefined](#DirectionsRenderer.getPanel)

getPanel()

**Parameters:**  None

**Return Value:**  Node

Returns the panel <div> in which the DirectionsResult is rendered.

[undefined](#DirectionsRenderer.getRouteIndex)

getRouteIndex()

**Parameters:**  None

**Return Value:**  number

Returns the current (zero-based) route index in use by this DirectionsRenderer object.

[undefined](#DirectionsRenderer.setDirections)

setDirections(directions)

**Parameters:** 

*   directions:  [DirectionsResult](/maps/documentation/javascript/reference/3.40/directions#DirectionsResult)

**Return Value:**  None

Set the renderer to use the result from the DirectionsService. Setting a valid set of directions in this manner will display the directions on the renderer's designated map and panel.

[undefined](#DirectionsRenderer.setMap)

setMap(map)

**Parameters:** 

*   map:  [Map](/maps/documentation/javascript/reference/3.40/map#Map)

**Return Value:**  None

This method specifies the map on which directions will be rendered. Pass null to remove the directions from the map.

[undefined](#DirectionsRenderer.setOptions)

setOptions(options)

**Parameters:** 

*   options:  [DirectionsRendererOptions](/maps/documentation/javascript/reference/3.40/directions#DirectionsRendererOptions)

**Return Value:**  None

Change the options settings of this DirectionsRenderer after initialization.

[undefined](#DirectionsRenderer.setPanel)

setPanel(panel)

**Parameters:** 

*   panel:  Node

**Return Value:**  None

This method renders the directions in a <div>. Pass null to remove the content from the panel.

[undefined](#DirectionsRenderer.setRouteIndex)

setRouteIndex(routeIndex)

**Parameters:** 

*   routeIndex:  number

**Return Value:**  None

Set the (zero-based) index of the route in the DirectionsResult object to render. By default, the first route in the array will be rendered.

Events

[undefined](#DirectionsRenderer.directions_changed)

function()

**Arguments:**  None

This event is fired when the rendered directions change, either when a new DirectionsResult is set or when the user finishes dragging a change to the directions path.