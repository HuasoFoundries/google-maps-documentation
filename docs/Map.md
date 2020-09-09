[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/Map.html)

Map class
---------

google.maps.Map class

This class extends [MVCObject](/maps/documentation/javascript/reference/3.40/event#MVCObject).

Constructor

[undefined](#Map.constructor)

Map(mapDiv\[, opts\])

**Parameters:** 

*   mapDiv:  Element
*   opts:  [MapOptions](/maps/documentation/javascript/reference/3.40/map#MapOptions) optional

Creates a new map inside of the given HTML container, which is typically a DIV element.

Methods

[undefined](#Map.fitBounds)

fitBounds(bounds\[, padding\])

**Parameters:** 

*   bounds:  [LatLngBounds](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBounds)|[LatLngBoundsLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBoundsLiteral)
*   padding:  number|[Padding](/maps/documentation/javascript/reference/3.40/coordinates#Padding) optional

**Return Value:**  None

Sets the viewport to contain the given bounds.  
**Note:** When the map is set to display: none, the fitBounds function reads the map's size as 0x0, and therefore does not do anything. To change the viewport while the map is hidden, set the map to visibility: hidden, thereby ensuring the map div has an actual size.

[undefined](#Map.getBounds)

getBounds()

**Parameters:**  None

**Return Value:**  [LatLngBounds](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBounds)

Returns the lat/lng bounds of the current viewport. If more than one copy of the world is visible, the bounds range in longitude from -180 to 180 degrees inclusive. If the map is not yet initialized (i.e. the mapType is still null), or center and zoom have not been set then the result is null or undefined.

[undefined](#Map.getCenter)

getCenter()

**Parameters:**  None

**Return Value:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)

Returns the position displayed at the center of the map. Note that this LatLng object is _not_ wrapped. See [LatLng](#LatLng) for more information.

[undefined](#Map.getClickableIcons)

getClickableIcons()

**Parameters:**  None

**Return Value:**  boolean

Returns the clickability of the map icons. A map icon represents a point of interest, also known as a POI. If the returned value is true, then the icons are clickable on the map.

[undefined](#Map.getDiv)

getDiv()

**Parameters:**  None

**Return Value:**  Element

[undefined](#Map.getHeading)

getHeading()

**Parameters:**  None

**Return Value:**  number

Returns the compass heading of aerial imagery. The heading value is measured in degrees (clockwise) from cardinal direction North.

[undefined](#Map.getMapTypeId)

getMapTypeId()

**Parameters:**  None

**Return Value:**  [MapTypeId](/maps/documentation/javascript/reference/3.40/map#MapTypeId)|string

[undefined](#Map.getProjection)

getProjection()

**Parameters:**  None

**Return Value:**  [Projection](/maps/documentation/javascript/reference/3.40/image-overlay#Projection)

Returns the current Projection. If the map is not yet initialized (i.e. the mapType is still null) then the result is null. Listen to projection\_changed and check its value to ensure it is not null.

[undefined](#Map.getStreetView)

getStreetView()

**Parameters:**  None

**Return Value:**  [StreetViewPanorama](/maps/documentation/javascript/reference/3.40/street-view#StreetViewPanorama)

Returns the default StreetViewPanorama bound to the map, which may be a default panorama embedded within the map, or the panorama set using setStreetView(). Changes to the map's streetViewControl will be reflected in the display of such a bound panorama.

[undefined](#Map.getTilt)

getTilt()

**Parameters:**  None

**Return Value:**  number

Returns the current angle of incidence of the map, in degrees from the viewport plane to the map plane. The result will be 0 for imagery taken directly overhead or 45 for 45° imagery. 45° imagery is only available for satellite and hybrid map types, within some locations, and at some zoom levels. **Note:** This method does not return the value set by setTilt. See setTilt for details.

[undefined](#Map.getZoom)

getZoom()

**Parameters:**  None

**Return Value:**  number

[undefined](#Map.panBy)

panBy(x, y)

**Parameters:** 

*   x:  number
*   y:  number

**Return Value:**  None

Changes the center of the map by the given distance in pixels. If the distance is less than both the width and height of the map, the transition will be smoothly animated. Note that the map coordinate system increases from west to east (for x values) and north to south (for y values).

[undefined](#Map.panTo)

panTo(latLng)

**Parameters:** 

*   latLng:  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral)

**Return Value:**  None

Changes the center of the map to the given LatLng. If the change is less than both the width and height of the map, the transition will be smoothly animated.

[undefined](#Map.panToBounds)

panToBounds(latLngBounds\[, padding\])

**Parameters:** 

*   latLngBounds:  [LatLngBounds](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBounds)|[LatLngBoundsLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBoundsLiteral)
*   padding:  number|[Padding](/maps/documentation/javascript/reference/3.40/coordinates#Padding) optional

**Return Value:**  None

Pans the map by the minimum amount necessary to contain the given LatLngBounds. It makes no guarantee where on the map the bounds will be, except that the map will be panned to show as much of the bounds as possible inside {currentMapSizeInPx} - {padding}.

[undefined](#Map.setCenter)

setCenter(latlng)

**Parameters:** 

*   latlng:  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral)

**Return Value:**  None

[undefined](#Map.setClickableIcons)

setClickableIcons(value)

**Parameters:** 

*   value:  boolean

**Return Value:**  None

Controls whether the map icons are clickable or not. A map icon represents a point of interest, also known as a POI. To disable the clickability of map icons, pass a value of false to this method.

[undefined](#Map.setHeading)

setHeading(heading)

**Parameters:** 

*   heading:  number

**Return Value:**  None

Sets the compass heading for aerial imagery measured in degrees from cardinal direction North.

[undefined](#Map.setMapTypeId)

setMapTypeId(mapTypeId)

**Parameters:** 

*   mapTypeId:  [MapTypeId](/maps/documentation/javascript/reference/3.40/map#MapTypeId)|string

**Return Value:**  None

[undefined](#Map.setOptions)

setOptions(options)

**Parameters:** 

*   options:  [MapOptions](/maps/documentation/javascript/reference/3.40/map#MapOptions)

**Return Value:**  None

[undefined](#Map.setStreetView)

setStreetView(panorama)

**Parameters:** 

*   panorama:  [StreetViewPanorama](/maps/documentation/javascript/reference/3.40/street-view#StreetViewPanorama)

**Return Value:**  None

Binds a StreetViewPanorama to the map. This panorama overrides the default StreetViewPanorama, allowing the map to bind to an external panorama outside of the map. Setting the panorama to null binds the default embedded panorama back to the map.

[undefined](#Map.setTilt)

setTilt(tilt)

**Parameters:** 

*   tilt:  number

**Return Value:**  None

Controls the automatic switching behavior for the angle of incidence of the map. The only allowed values are 0 and 45. setTilt(0) causes the map to always use a 0° overhead view regardless of the zoom level and viewport. setTilt(45) causes the tilt angle to automatically switch to 45 whenever 45° imagery is available for the current zoom level and viewport, and switch back to 0 whenever 45° imagery is not available (this is the default behavior). 45° imagery is only available for satellite and hybrid map types, within some locations, and at some zoom levels. **Note:** getTilt returns the current tilt angle, not the value set by setTilt. Because getTilt and setTilt refer to different things, do not bind() the tilt property; doing so may yield unpredictable effects.

[undefined](#Map.setZoom)

setZoom(zoom)

**Parameters:** 

*   zoom:  number

**Return Value:**  None

Properties

[undefined](#Map.controls)

**Type:**  Array<[MVCArray](/maps/documentation/javascript/reference/3.40/event#MVCArray)<Node>>

Additional controls to attach to the map. To add a control to the map, add the control's <div> to the MVCArray corresponding to the ControlPosition where it should be rendered.

[undefined](#Map.data)

**Type:**  [Data](/maps/documentation/javascript/reference/3.40/data#Data)

An instance of Data, bound to the map. Add features to this Data object to conveniently display them on this map.

[undefined](#Map.mapTypes)

**Type:**  [MapTypeRegistry](/maps/documentation/javascript/reference/3.40/map#MapTypeRegistry)

A registry of MapType instances by string ID.

[undefined](#Map.overlayMapTypes)

**Type:**  [MVCArray](/maps/documentation/javascript/reference/3.40/event#MVCArray)<[MapType](/maps/documentation/javascript/reference/3.40/image-overlay#MapType) optional\>

Additional map types to overlay. Overlay map types will display on top of the base map they are attached to, in the order in which they appear in the overlayMapTypes array (overlays with higher index values are displayed in front of overlays with lower index values).

Events

[undefined](#Map.bounds_changed)

function()

**Arguments:**  None

This event is fired when the viewport bounds have changed.

[undefined](#Map.center_changed)

function()

**Arguments:**  None

This event is fired when the map center property changes.

[undefined](#Map.click)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)|[IconMouseEvent](/maps/documentation/javascript/reference/3.40/map#IconMouseEvent)

This event is fired when the user clicks on the map. An ApiMouseEvent with properties for the clicked location is returned unless a place icon was clicked, in which case an IconMouseEvent with a placeid is returned. IconMouseEvent and ApiMouseEvent are identical, except that IconMouseEvent has the placeid field. The event can always be treated as an ApiMouseEvent when the placeid is not important. The click event is not fired if a marker or infowindow was clicked.

[undefined](#Map.dblclick)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the user double-clicks on the map. Note that the click event will also fire, right before this one.

[undefined](#Map.drag)

function()

**Arguments:**  None

This event is repeatedly fired while the user drags the map.

[undefined](#Map.dragend)

function()

**Arguments:**  None

This event is fired when the user stops dragging the map.

[undefined](#Map.dragstart)

function()

**Arguments:**  None

This event is fired when the user starts dragging the map.

[undefined](#Map.heading_changed)

function()

**Arguments:**  None

This event is fired when the map heading property changes.

[undefined](#Map.idle)

function()

**Arguments:**  None

This event is fired when the map becomes idle after panning or zooming.

[undefined](#Map.maptypeid_changed)

function()

**Arguments:**  None

This event is fired when the mapTypeId property changes.

[undefined](#Map.mousemove)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired whenever the user's mouse moves over the map container.

[undefined](#Map.mouseout)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the user's mouse exits the map container.

[undefined](#Map.mouseover)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the user's mouse enters the map container.

[undefined](#Map.projection_changed)

function()

**Arguments:**  None

This event is fired when the projection has changed.

[undefined](#Map.rightclick)

function(event)

**Arguments:** 

*   event:  [MouseEvent](/maps/documentation/javascript/reference/3.40/map#MouseEvent)

This event is fired when the DOM contextmenu event is fired on the map container.

[undefined](#Map.tilesloaded)

function()

**Arguments:**  None

This event is fired when the visible tiles have finished loading.

[undefined](#Map.tilt_changed)

function()

**Arguments:**  None

This event is fired when the map tilt property changes.

[undefined](#Map.zoom_changed)

function()

**Arguments:**  None

This event is fired when the map zoom property changes.