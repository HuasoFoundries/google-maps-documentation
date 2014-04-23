<h2 id="Map">
google.maps.Map
class
</h2><p>This class extends
<code><a href="#MVCObject">MVCObject</a></code>.
</p><h3>Constructor</h3><table summary="class Map - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>Map(mapDiv:Node, opts?:<a href="#MapOptions"><em>MapOptions</em></a>)</code></td>
<td>Creates a new map inside of the given HTML container, which is typically a <code>DIV</code> element.</td>
</tr>
</tbody>
</table><h3>Methods</h3><table summary="class Map - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>fitBounds(bounds:<a href="#LatLngBounds">LatLngBounds</a>)</code></td>
<td><code>None</code></td>
<td>Sets the viewport to contain the given bounds.</td>
</tr>
<tr>
<td><code>getBounds()</code></td>
<td><code><a href="#LatLngBounds">LatLngBounds</a></code></td>
<td>Returns the lat/lng bounds of the current viewport. If more than one copy of the world is visible, the bounds range in longitude from -180 to 180 degrees inclusive. If the map is not yet initialized (i.e. the mapType is still null), or center and zoom have not been set then the result is <code>null</code> or <code>undefined</code>.</td>
</tr>
<tr>
<td><code>getCenter()</code></td>
<td><code><a href="#LatLng">LatLng</a></code></td>
<td>Returns the position displayed at the center of the map. Note that this <code>LatLng</code> object is <em>not</em> wrapped. See <code><a href="#LatLng">LatLng</a></code> for more information.</td>
</tr>
<tr>
<td><code>getDiv()</code></td>
<td><code>Node</code></td>
<td></td>
</tr>
<tr>
<td><code>getHeading()</code></td>
<td><code>number</code></td>
<td>Returns the compass heading of aerial imagery. The heading value is measured in degrees (clockwise) from cardinal direction North.</td>
</tr>
<tr>
<td><code>getMapTypeId()</code></td>
<td><code><a href="#MapTypeId">MapTypeId</a>|string</code></td>
<td></td>
</tr>
<tr>
<td><code>getProjection()</code></td>
<td><code><a href="#Projection">Projection</a></code></td>
<td>Returns the current <code>Projection</code>. If the map is not yet initialized (i.e. the mapType is still null) then the result is null. Listen to <code>projection_changed</code> and check its value to ensure it is not null.</td>
</tr>
<tr>
<td><code>getStreetView()</code></td>
<td><code><a href="#StreetViewPanorama">StreetViewPanorama</a></code></td>
<td>Returns the default <code>StreetViewPanorama</code> bound to the map, which may be a default panorama embedded within the map, or the panorama set using <code>setStreetView()</code>. Changes to the map's <code>streetViewControl</code> will be reflected in the display of such a bound panorama.</td>
</tr>
<tr>
<td><code>getTilt()</code></td>
<td><code>number</code></td>
<td>Returns the current angle of incidence of the map, in degrees from the viewport plane to the map plane. The result will be <code>0</code> for imagery taken directly overhead or <code>45</code> for 45° imagery. 45° imagery is only available for <code>SATELLITE</code> and <code>HYBRID</code> map types, within some locations, and at some zoom levels. <b>Note:</b> This method does not return the value set by <code>setTilt</code>. See <code>setTilt</code> for details.</td>
</tr>
<tr>
<td><code>getZoom()</code></td>
<td><code>number</code></td>
<td></td>
</tr>
<tr>
<td><code>panBy(x:number, y:number)</code></td>
<td><code>None</code></td>
<td>Changes the center of the map by the given distance in pixels. If the distance is less than both the width and height of the map, the transition will be smoothly animated. Note that the map coordinate system increases from west to east (for x values) and north to south (for y values).</td>
</tr>
<tr>
<td><code>panTo(latLng:<a href="#LatLng">LatLng</a>|<a href="#LatLngLiteral">LatLngLiteral</a>)</code></td>
<td><code>None</code></td>
<td>Changes the center of the map to the given <code>LatLng</code>. If the change is less than both the width and height of the map, the transition will be smoothly animated.</td>
</tr>
<tr>
<td><code>panToBounds(latLngBounds:<a href="#LatLngBounds">LatLngBounds</a>)</code></td>
<td><code>None</code></td>
<td>Pans the map by the minimum amount necessary to contain the given <code>LatLngBounds</code>. It makes no guarantee where on the map the bounds will be, except that as much of the bounds as possible will be visible. The bounds will be positioned inside the area bounded by the map type and navigation (pan, zoom, and Street View) controls, if they are present on the map. If the bounds is larger than the map, the map will be shifted to include the northwest corner of the bounds. If the change in the map's position is less than both the width and height of the map, the transition will be smoothly animated.</td>
</tr>
<tr>
<td><code>setCenter(latlng:<a href="#LatLng">LatLng</a>|<a href="#LatLngLiteral">LatLngLiteral</a>)</code></td>
<td><code>None</code></td>
<td></td>
</tr>
<tr>
<td><code>setHeading(heading:number)</code></td>
<td><code>None</code></td>
<td>Sets the compass heading for aerial imagery measured in degrees from cardinal direction North.</td>
</tr>
<tr>
<td><code>setMapTypeId(mapTypeId:<a href="#MapTypeId">MapTypeId</a>|string)</code></td>
<td><code>None</code></td>
<td></td>
</tr>
<tr>
<td><code>setOptions(options:<a href="#MapOptions"><em>MapOptions</em></a>)</code></td>
<td><code>None</code></td>
<td></td>
</tr>
<tr>
<td><code>setStreetView(panorama:<a href="#StreetViewPanorama">StreetViewPanorama</a>)</code></td>
<td><code>None</code></td>
<td>Binds a <code>StreetViewPanorama</code> to the map. This panorama overrides the default <code>StreetViewPanorama</code>, allowing the map to bind to an external panorama outside of the map. Setting the panorama to <code>null</code> binds the default embedded panorama back to the map.</td>
</tr>
<tr>
<td><code>setTilt(tilt:number)</code></td>
<td><code>None</code></td>
<td>Controls the automatic switching behavior for the angle of incidence of the map. The only allowed values are <code>0</code> and <code>45</code>. <code>setTilt(0)</code> causes the map to always use a 0° overhead view regardless of the zoom level and viewport. <code>setTilt(45)</code> causes the tilt angle to automatically switch to 45 whenever 45° imagery is available for the current zoom level and viewport, and switch back to 0 whenever 45° imagery is not available (this is the default behavior). 45° imagery is only available for <code>SATELLITE</code> and <code>HYBRID</code> map types, within some locations, and at some zoom levels. <b>Note:</b> <code>getTilt</code> returns the current tilt angle, not the value set by <code>setTilt</code>. Because <code>getTilt</code> and <code>setTilt</code> refer to different things, do not <code>bind()</code> the <code>tilt</code> property; doing so may yield unpredictable effects.</td>
</tr>
<tr>
<td><code>setZoom(zoom:number)</code></td>
<td><code>None</code></td>
<td></td>
</tr>
</tbody>
</table><h3>Properties</h3><table summary="class Map - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>controls</code></td>
<td><code>Array.&lt;<a href="#MVCArray">MVCArray</a>.&lt;Node&gt;&gt;</code></td>
<td>Additional controls to attach to the map. To add a control to the map, add the control's <code>&lt;div&gt;</code> to the <code>MVCArray</code> corresponding to the <code>ControlPosition</code> where it should be rendered.</td>
</tr>
<tr>
<td><code>data</code></td>
<td><code><a href="#Data">Data</a></code></td>
<td>An instance of <code>Data</code>, bound to the map. Add features to this <code>Data</code> object to conveniently display them on this map.</td>
</tr>
<tr>
<td><code>mapTypes</code></td>
<td><code><a href="#MapTypeRegistry">MapTypeRegistry</a></code></td>
<td>A registry of <code>MapType</code> instances by string ID.</td>
</tr>
<tr>
<td><code>overlayMapTypes</code></td>
<td><code><a href="#MVCArray">MVCArray</a>.&lt;<a href="#MapType">MapType</a>&gt;</code></td>
<td>Additional map types to overlay.</td>
</tr>
</tbody>
</table><h3>Events</h3><table summary="class Map - Events" width="100%">
<thead>
<tr><th>Events</th>
<th>Arguments</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>bounds_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the viewport bounds have changed.</td>
</tr>
<tr>
<td><code>center_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the map center property changes.</td>
</tr>
<tr>
<td><code>click</code></td>
<td><code><a href="#MouseEvent"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the user clicks on the map (but not when they click on a marker or infowindow).</td>
</tr>
<tr>
<td><code>dblclick</code></td>
<td><code><a href="#MouseEvent"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the user double-clicks on the map. Note that the click event will also fire, right before this one.</td>
</tr>
<tr>
<td><code>drag</code></td>
<td><code>None</code></td>
<td>This event is repeatedly fired while the user drags the map.</td>
</tr>
<tr>
<td><code>dragend</code></td>
<td><code>None</code></td>
<td>This event is fired when the user stops dragging the map.</td>
</tr>
<tr>
<td><code>dragstart</code></td>
<td><code>None</code></td>
<td>This event is fired when the user starts dragging the map.</td>
</tr>
<tr>
<td><code>heading_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the map heading property changes.</td>
</tr>
<tr>
<td><code>idle</code></td>
<td><code>None</code></td>
<td>This event is fired when the map becomes idle after panning or zooming.</td>
</tr>
<tr>
<td><code>maptypeid_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the mapTypeId property changes.</td>
</tr>
<tr>
<td><code>mousemove</code></td>
<td><code><a href="#MouseEvent"><em>MouseEvent</em></a></code></td>
<td>This event is fired whenever the user's mouse moves over the map container.</td>
</tr>
<tr>
<td><code>mouseout</code></td>
<td><code><a href="#MouseEvent"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the user's mouse exits the map container.</td>
</tr>
<tr>
<td><code>mouseover</code></td>
<td><code><a href="#MouseEvent"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the user's mouse enters the map container.</td>
</tr>
<tr>
<td><code>projection_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the projection has changed.</td>
</tr>
<tr>
<td><code>resize</code></td>
<td><code>None</code></td>
<td>Developers should trigger this event on the map when the div changes size: <code><a href="#event">google.maps.event.trigger</a>(map, 'resize') </code>.</td>
</tr>
<tr>
<td><code>rightclick</code></td>
<td><code><a href="#MouseEvent"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the DOM contextmenu event is fired on the map container.</td>
</tr>
<tr>
<td><code>tilesloaded</code></td>
<td><code>None</code></td>
<td>This event is fired when the visible tiles have finished loading.</td>
</tr>
<tr>
<td><code>tilt_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the map tilt property changes.</td>
</tr>
<tr>
<td><code>zoom_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the map zoom property changes.</td>
</tr>
</tbody>
</table>