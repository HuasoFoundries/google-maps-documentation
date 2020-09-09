[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/DirectionsRendererOptions.html)

DirectionsRendererOptions interface
-----------------------------------

google.maps.DirectionsRendererOptions interface

This object defines the properties that can be set on a DirectionsRenderer object.

Properties

[undefined](#DirectionsRendererOptions.directions)

**Type:**  [DirectionsResult](/maps/documentation/javascript/reference/3.40/directions#DirectionsResult) optional

The directions to display on the map and/or in a <div> panel, retrieved as a DirectionsResult object from DirectionsService.

[undefined](#DirectionsRendererOptions.draggable)

**Type:**  boolean optional

If true, allows the user to drag and modify the paths of routes rendered by this DirectionsRenderer.

[undefined](#DirectionsRendererOptions.hideRouteList)

**Type:**  boolean optional

This property indicates whether the renderer should provide UI to select amongst alternative routes. By default, this flag is false and a user-selectable list of routes will be shown in the directions' associated panel. To hide that list, set hideRouteList to true.

[undefined](#DirectionsRendererOptions.infoWindow)

**Type:**  [InfoWindow](/maps/documentation/javascript/reference/3.40/info-window#InfoWindow) optional

The InfoWindow in which to render text information when a marker is clicked. Existing info window content will be overwritten and its position moved. If no info window is specified, the DirectionsRenderer will create and use its own info window. This property will be ignored if suppressInfoWindows is set to true.

[undefined](#DirectionsRendererOptions.map)

**Type:**  [Map](/maps/documentation/javascript/reference/3.40/map#Map) optional

Map on which to display the directions.

[undefined](#DirectionsRendererOptions.markerOptions)

**Type:**  [MarkerOptions](/maps/documentation/javascript/reference/3.40/marker#MarkerOptions) optional

Options for the markers. All markers rendered by the DirectionsRenderer will use these options.

[undefined](#DirectionsRendererOptions.panel)

**Type:**  Node optional

The <div> in which to display the directions steps.

[undefined](#DirectionsRendererOptions.polylineOptions)

**Type:**  [PolylineOptions](/maps/documentation/javascript/reference/3.40/polygon#PolylineOptions) optional

Options for the polylines. All polylines rendered by the DirectionsRenderer will use these options.

[undefined](#DirectionsRendererOptions.preserveViewport)

**Type:**  boolean optional

By default, the input map is centered and zoomed to the bounding box of this set of directions. If this option is set to true, the viewport is left unchanged, unless the map's center and zoom were never set.

[undefined](#DirectionsRendererOptions.routeIndex)

**Type:**  number optional

The index of the route within the DirectionsResult object. The default value is 0.

[undefined](#DirectionsRendererOptions.suppressBicyclingLayer)

**Type:**  boolean optional

Suppress the rendering of the BicyclingLayer when bicycling directions are requested.

[undefined](#DirectionsRendererOptions.suppressInfoWindows)

**Type:**  boolean optional

Suppress the rendering of info windows.

[undefined](#DirectionsRendererOptions.suppressMarkers)

**Type:**  boolean optional

Suppress the rendering of markers.

[undefined](#DirectionsRendererOptions.suppressPolylines)

**Type:**  boolean optional

Suppress the rendering of polylines.