This class extends
`[MVCObject](#MVCObject)`.

### Constructor
<table summary="class Map - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td>`Map(mapDiv:Node, opts?:[_MapOptions_](#MapOptions))`</td>
<td>Creates a new map inside of the given HTML container, which is typically a `DIV` element.</td>
</tr>
</tbody>
</table>

### Methods
<table summary="class Map - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td>`fitBounds(bounds:[LatLngBounds](#LatLngBounds))`</td>
<td>`None`</td>
<td>Sets the viewport to contain the given bounds.</td>
</tr>
<tr>
<td>`getBounds()`</td>
<td>`[LatLngBounds](#LatLngBounds)`</td>
<td>Returns the lat/lng bounds of the current viewport. If more than one copy of the world is visible, the bounds range in longitude from -180 to 180 degrees inclusive. If the map is not yet initialized (i.e. the mapType is still null), or center and zoom have not been set then the result is `null` or `undefined`.</td>
</tr>
<tr>
<td>`getCenter()`</td>
<td>`[LatLng](#LatLng)`</td>
<td>Returns the position displayed at the center of the map. Note that this `LatLng` object is _not_ wrapped. See `[LatLng](#LatLng)` for more information.</td>
</tr>
<tr>
<td>`getDiv()`</td>
<td>`Node`</td>
<td></td>
</tr>
<tr>
<td>`getHeading()`</td>
<td>`number`</td>
<td>Returns the compass heading of aerial imagery. The heading value is measured in degrees (clockwise) from cardinal direction North.</td>
</tr>
<tr>
<td>`getMapTypeId()`</td>
<td>`[MapTypeId](#MapTypeId)|string`</td>
<td></td>
</tr>
<tr>
<td>`getProjection()`</td>
<td>`[Projection](#Projection)`</td>
<td>Returns the current `Projection`. If the map is not yet initialized (i.e. the mapType is still null) then the result is null. Listen to `projection_changed` and check its value to ensure it is not null.</td>
</tr>
<tr>
<td>`getStreetView()`</td>
<td>`[StreetViewPanorama](#StreetViewPanorama)`</td>
<td>Returns the default `StreetViewPanorama` bound to the map, which may be a default panorama embedded within the map, or the panorama set using `setStreetView()`. Changes to the map's `streetViewControl` will be reflected in the display of such a bound panorama.</td>
</tr>
<tr>
<td>`getTilt()`</td>
<td>`number`</td>
<td>Returns the current angle of incidence of the map, in degrees from the viewport plane to the map plane. The result will be `0` for imagery taken directly overhead or `45` for 45° imagery. 45° imagery is only available for `SATELLITE` and `HYBRID` map types, within some locations, and at some zoom levels. **Note:** This method does not return the value set by `setTilt`. See `setTilt` for details.</td>
</tr>
<tr>
<td>`getZoom()`</td>
<td>`number`</td>
<td></td>
</tr>
<tr>
<td>`panBy(x:number, y:number)`</td>
<td>`None`</td>
<td>Changes the center of the map by the given distance in pixels. If the distance is less than both the width and height of the map, the transition will be smoothly animated. Note that the map coordinate system increases from west to east (for x values) and north to south (for y values).</td>
</tr>
<tr>
<td>`panTo(latLng:[LatLng](#LatLng)|[LatLngLiteral](#LatLngLiteral))`</td>
<td>`None`</td>
<td>Changes the center of the map to the given `LatLng`. If the change is less than both the width and height of the map, the transition will be smoothly animated.</td>
</tr>
<tr>
<td>`panToBounds(latLngBounds:[LatLngBounds](#LatLngBounds))`</td>
<td>`None`</td>
<td>Pans the map by the minimum amount necessary to contain the given `LatLngBounds`. It makes no guarantee where on the map the bounds will be, except that as much of the bounds as possible will be visible. The bounds will be positioned inside the area bounded by the map type and navigation (pan, zoom, and Street View) controls, if they are present on the map. If the bounds is larger than the map, the map will be shifted to include the northwest corner of the bounds. If the change in the map's position is less than both the width and height of the map, the transition will be smoothly animated.</td>
</tr>
<tr>
<td>`setCenter(latlng:[LatLng](#LatLng)|[LatLngLiteral](#LatLngLiteral))`</td>
<td>`None`</td>
<td></td>
</tr>
<tr>
<td>`setHeading(heading:number)`</td>
<td>`None`</td>
<td>Sets the compass heading for aerial imagery measured in degrees from cardinal direction North.</td>
</tr>
<tr>
<td>`setMapTypeId(mapTypeId:[MapTypeId](#MapTypeId)|string)`</td>
<td>`None`</td>
<td></td>
</tr>
<tr>
<td>`setOptions(options:[_MapOptions_](#MapOptions))`</td>
<td>`None`</td>
<td></td>
</tr>
<tr>
<td>`setStreetView(panorama:[StreetViewPanorama](#StreetViewPanorama))`</td>
<td>`None`</td>
<td>Binds a `StreetViewPanorama` to the map. This panorama overrides the default `StreetViewPanorama`, allowing the map to bind to an external panorama outside of the map. Setting the panorama to `null` binds the default embedded panorama back to the map.</td>
</tr>
<tr>
<td>`setTilt(tilt:number)`</td>
<td>`None`</td>
<td>Controls the automatic switching behavior for the angle of incidence of the map. The only allowed values are `0` and `45`. `setTilt(0)` causes the map to always use a 0° overhead view regardless of the zoom level and viewport. `setTilt(45)` causes the tilt angle to automatically switch to 45 whenever 45° imagery is available for the current zoom level and viewport, and switch back to 0 whenever 45° imagery is not available (this is the default behavior). 45° imagery is only available for `SATELLITE` and `HYBRID` map types, within some locations, and at some zoom levels. **Note:** `getTilt` returns the current tilt angle, not the value set by `setTilt`. Because `getTilt` and `setTilt` refer to different things, do not `bind()` the `tilt` property; doing so may yield unpredictable effects.</td>
</tr>
<tr>
<td>`setZoom(zoom:number)`</td>
<td>`None`</td>
<td></td>
</tr>
</tbody>
</table>

### Properties
<table summary="class Map - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td>`controls`</td>
<td>`Array.&lt;[MVCArray](#MVCArray).&lt;Node&gt;&gt;`</td>
<td>Additional controls to attach to the map. To add a control to the map, add the control's `&lt;div&gt;` to the `MVCArray` corresponding to the `ControlPosition` where it should be rendered.</td>
</tr>
<tr>
<td>`data`</td>
<td>`[Data](#Data)`</td>
<td>An instance of `Data`, bound to the map. Add features to this `Data` object to conveniently display them on this map.</td>
</tr>
<tr>
<td>`mapTypes`</td>
<td>`[MapTypeRegistry](#MapTypeRegistry)`</td>
<td>A registry of `MapType` instances by string ID.</td>
</tr>
<tr>
<td>`overlayMapTypes`</td>
<td>`[MVCArray](#MVCArray).&lt;[MapType](#MapType)&gt;`</td>
<td>Additional map types to overlay.</td>
</tr>
</tbody>
</table>

### Events
<table summary="class Map - Events" width="100%">
<thead>
<tr><th>Events</th>
<th>Arguments</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td>`bounds_changed`</td>
<td>`None`</td>
<td>This event is fired when the viewport bounds have changed.</td>
</tr>
<tr>
<td>`center_changed`</td>
<td>`None`</td>
<td>This event is fired when the map center property changes.</td>
</tr>
<tr>
<td>`click`</td>
<td>`[_MouseEvent_](#MouseEvent)`</td>
<td>This event is fired when the user clicks on the map (but not when they click on a marker or infowindow).</td>
</tr>
<tr>
<td>`dblclick`</td>
<td>`[_MouseEvent_](#MouseEvent)`</td>
<td>This event is fired when the user double-clicks on the map. Note that the click event will also fire, right before this one.</td>
</tr>
<tr>
<td>`drag`</td>
<td>`None`</td>
<td>This event is repeatedly fired while the user drags the map.</td>
</tr>
<tr>
<td>`dragend`</td>
<td>`None`</td>
<td>This event is fired when the user stops dragging the map.</td>
</tr>
<tr>
<td>`dragstart`</td>
<td>`None`</td>
<td>This event is fired when the user starts dragging the map.</td>
</tr>
<tr>
<td>`heading_changed`</td>
<td>`None`</td>
<td>This event is fired when the map heading property changes.</td>
</tr>
<tr>
<td>`idle`</td>
<td>`None`</td>
<td>This event is fired when the map becomes idle after panning or zooming.</td>
</tr>
<tr>
<td>`maptypeid_changed`</td>
<td>`None`</td>
<td>This event is fired when the mapTypeId property changes.</td>
</tr>
<tr>
<td>`mousemove`</td>
<td>`[_MouseEvent_](#MouseEvent)`</td>
<td>This event is fired whenever the user's mouse moves over the map container.</td>
</tr>
<tr>
<td>`mouseout`</td>
<td>`[_MouseEvent_](#MouseEvent)`</td>
<td>This event is fired when the user's mouse exits the map container.</td>
</tr>
<tr>
<td>`mouseover`</td>
<td>`[_MouseEvent_](#MouseEvent)`</td>
<td>This event is fired when the user's mouse enters the map container.</td>
</tr>
<tr>
<td>`projection_changed`</td>
<td>`None`</td>
<td>This event is fired when the projection has changed.</td>
</tr>
<tr>
<td>`resize`</td>
<td>`None`</td>
<td>Developers should trigger this event on the map when the div changes size: `[google.maps.event.trigger](#event)(map, 'resize') `.</td>
</tr>
<tr>
<td>`rightclick`</td>
<td>`[_MouseEvent_](#MouseEvent)`</td>
<td>This event is fired when the DOM contextmenu event is fired on the map container.</td>
</tr>
<tr>
<td>`tilesloaded`</td>
<td>`None`</td>
<td>This event is fired when the visible tiles have finished loading.</td>
</tr>
<tr>
<td>`tilt_changed`</td>
<td>`None`</td>
<td>This event is fired when the map tilt property changes.</td>
</tr>
<tr>
<td>`zoom_changed`</td>
<td>`None`</td>
<td>This event is fired when the map zoom property changes.</td>
</tr>
</tbody>
</table>