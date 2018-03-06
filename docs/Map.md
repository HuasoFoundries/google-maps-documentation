<h2 id="Map"> Map class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Map</span></code>
class
</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Map - Constructor">
<thead>
<tr><th colspan="2" id="Map.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>Map</span></code></td>
<td><div><code>Map(mapDiv[, opts])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>mapDiv</code>:&nbsp; <code>Element</code></li>
<li><code>opts</code> (optional):&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapOptions.md">MapOptions</a></code></li>
</ul></div>
<div class="desc">Creates a new map inside of the given HTML container, which is typically a <code>DIV</code> element.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class Map - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Map.fitBounds">
<td><code><span>fitBounds</span></code></td>
<td><div><code>fitBounds(bounds[, padding])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>bounds</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBoundsLiteral.md">LatLngBoundsLiteral</a></code></li>
<li><code>padding</code> (optional):&nbsp; <code>number|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Padding.md">Padding</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the viewport to contain the given bounds.<br> <strong>Note:</strong> When the map is set to <code>display: none</code>, the <code>fitBounds</code> function reads the map's size as 0x0, and therefore does not do anything. To change the viewport while the map is hidden, set the map to <code>visibility: hidden</code>, thereby ensuring the map div has an actual size.</div></td>
</tr>
<tr id="Map.getBounds">
<td><code><span>getBounds</span></code></td>
<td><div><code>getBounds()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">Returns the lat/lng bounds of the current viewport. If more than one copy of the world is visible, the bounds range in longitude from -180 to 180 degrees inclusive. If the map is not yet initialized (i.e. the mapType is still null), or center and zoom have not been set then the result is <code>null</code> or <code>undefined</code>.</div></td>
</tr>
<tr id="Map.getCenter">
<td><code><span>getCenter</span></code></td>
<td><div><code>getCenter()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc">Returns the position displayed at the center of the map. Note that this <code>LatLng</code> object is <em>not</em> wrapped. See <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code> for more information.</div></td>
</tr>
<tr id="Map.getClickableIcons">
<td><code><span>getClickableIcons</span></code></td>
<td><div><code>getClickableIcons()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns the clickability of the map icons. A map icon represents a point of interest, also known as a POI. If the returned value is true, then the icons are clickable on the map.</div></td>
</tr>
<tr id="Map.getDiv">
<td><code><span>getDiv</span></code></td>
<td><div><code>getDiv()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>Element</code></div>
<div class="desc"></div></td>
</tr>
<tr id="Map.getHeading">
<td><code><span>getHeading</span></code></td>
<td><div><code>getHeading()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the compass heading of aerial imagery. The heading value is measured in degrees (clockwise) from cardinal direction North.</div></td>
</tr>
<tr id="Map.getMapTypeId">
<td><code><span>getMapTypeId</span></code></td>
<td><div><code>getMapTypeId()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapTypeId.md">MapTypeId</a>|string</code></div>
<div class="desc"></div></td>
</tr>
<tr id="Map.getProjection">
<td><code><span>getProjection</span></code></td>
<td><div><code>getProjection()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Projection.md">Projection</a></code></div>
<div class="desc">Returns the current <code>Projection</code>. If the map is not yet initialized (i.e. the mapType is still null) then the result is null. Listen to <code>projection_changed</code> and check its value to ensure it is not null.</div></td>
</tr>
<tr id="Map.getStreetView">
<td><code><span>getStreetView</span></code></td>
<td><div><code>getStreetView()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPanorama.md">StreetViewPanorama</a></code></div>
<div class="desc">Returns the default <code>StreetViewPanorama</code> bound to the map, which may be a default panorama embedded within the map, or the panorama set using <code>setStreetView()</code>. Changes to the map's <code>streetViewControl</code> will be reflected in the display of such a bound panorama.</div></td>
</tr>
<tr id="Map.getTilt">
<td><code><span>getTilt</span></code></td>
<td><div><code>getTilt()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the current angle of incidence of the map, in degrees from the viewport plane to the map plane. The result will be <code>0</code> for imagery taken directly overhead or <code>45</code> for 45&#xB0; imagery. 45&#xB0; imagery is only available for <code>satellite</code> and <code>hybrid</code> map types, within some locations, and at some zoom levels. <b>Note:</b> This method does not return the value set by <code>setTilt</code>. See <code>setTilt</code> for details.</div></td>
</tr>
<tr id="Map.getZoom">
<td><code><span>getZoom</span></code></td>
<td><div><code>getZoom()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc"></div></td>
</tr>
<tr id="Map.panBy">
<td><code><span>panBy</span></code></td>
<td><div><code>panBy(x, y)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>x</code>:&nbsp; <code>number</code></li>
<li><code>y</code>:&nbsp; <code>number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Changes the center of the map by the given distance in pixels. If the distance is less than both the width and height of the map, the transition will be smoothly animated. Note that the map coordinate system increases from west to east (for x values) and north to south (for y values).</div></td>
</tr>
<tr id="Map.panTo">
<td><code><span>panTo</span></code></td>
<td><div><code>panTo(latLng)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>latLng</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md">LatLngLiteral</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Changes the center of the map to the given <code>LatLng</code>. If the change is less than both the width and height of the map, the transition will be smoothly animated.</div></td>
</tr>
<tr id="Map.panToBounds">
<td><code><span>panToBounds</span></code></td>
<td><div><code>panToBounds(latLngBounds)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>latLngBounds</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBoundsLiteral.md">LatLngBoundsLiteral</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Pans the map by the minimum amount necessary to contain the given <code>LatLngBounds</code>. It makes no guarantee where on the map the bounds will be, except that as much of the bounds as possible will be visible. The bounds will be positioned inside the area bounded by the map type and navigation (pan, zoom, and Street View) controls, if they are present on the map. If the bounds is larger than the map, the map will be shifted to include the northwest corner of the bounds. If the change in the map's position is less than both the width and height of the map, the transition will be smoothly animated.</div></td>
</tr>
<tr id="Map.setCenter">
<td><code><span>setCenter</span></code></td>
<td><div><code>setCenter(latlng)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>latlng</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md">LatLngLiteral</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Map.setClickableIcons">
<td><code><span>setClickableIcons</span></code></td>
<td><div><code>setClickableIcons(value)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>value</code>:&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Controls whether the map icons are clickable or not. A map icon represents a point of interest, also known as a POI. To disable the clickability of map icons, pass a value of <code>false</code> to this method.</div></td>
</tr>
<tr id="Map.setHeading">
<td><code><span>setHeading</span></code></td>
<td><div><code>setHeading(heading)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>heading</code>:&nbsp; <code>number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the compass heading for aerial imagery measured in degrees from cardinal direction North.</div></td>
</tr>
<tr id="Map.setMapTypeId">
<td><code><span>setMapTypeId</span></code></td>
<td><div><code>setMapTypeId(mapTypeId)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>mapTypeId</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapTypeId.md">MapTypeId</a>|string</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Map.setOptions">
<td><code><span>setOptions</span></code></td>
<td><div><code>setOptions(options)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>options</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapOptions.md">MapOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Map.setStreetView">
<td><code><span>setStreetView</span></code></td>
<td><div><code>setStreetView(panorama)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>panorama</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPanorama.md">StreetViewPanorama</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Binds a <code>StreetViewPanorama</code> to the map. This panorama overrides the default <code>StreetViewPanorama</code>, allowing the map to bind to an external panorama outside of the map. Setting the panorama to <code>null</code> binds the default embedded panorama back to the map.</div></td>
</tr>
<tr id="Map.setTilt">
<td><code><span>setTilt</span></code></td>
<td><div><code>setTilt(tilt)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>tilt</code>:&nbsp; <code>number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Controls the automatic switching behavior for the angle of incidence of the map. The only allowed values are <code>0</code> and <code>45</code>. <code>setTilt(0)</code> causes the map to always use a 0&#xB0; overhead view regardless of the zoom level and viewport. <code>setTilt(45)</code> causes the tilt angle to automatically switch to 45 whenever 45&#xB0; imagery is available for the current zoom level and viewport, and switch back to 0 whenever 45&#xB0; imagery is not available (this is the default behavior). 45&#xB0; imagery is only available for <code>satellite</code> and <code>hybrid</code> map types, within some locations, and at some zoom levels. <b>Note:</b> <code>getTilt</code> returns the current tilt angle, not the value set by <code>setTilt</code>. Because <code>getTilt</code> and <code>setTilt</code> refer to different things, do not <code>bind()</code> the <code>tilt</code> property; doing so may yield unpredictable effects.</div></td>
</tr>
<tr id="Map.setZoom">
<td><code><span>setZoom</span></code></td>
<td><div><code>setZoom(zoom)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>zoom</code>:&nbsp; <code>number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="properties responsive" summary="class Map - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="Map.controls">
<td><code><span>controls</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md">MVCArray</a>&lt;Node&gt;&gt;</code></div>
<div class="desc">Additional controls to attach to the map. To add a control to the map, add the control's <code>&lt;div&gt;</code> to the <code>MVCArray</code> corresponding to the <code>ControlPosition</code> where it should be rendered.</div></td>
</tr>
<tr id="Map.data">
<td><code><span>data</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.md">Data</a></code></div>
<div class="desc">An instance of <code>Data</code>, bound to the map. Add features to this <code>Data</code> object to conveniently display them on this map.</div></td>
</tr>
<tr id="Map.mapTypes">
<td><code><span>mapTypes</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapTypeRegistry.md">MapTypeRegistry</a></code></div>
<div class="desc">A registry of <code>MapType</code> instances by string ID.</div></td>
</tr>
<tr id="Map.overlayMapTypes">
<td><code><span>overlayMapTypes</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapType.md">MapType</a>&gt;</code></div>
<div class="desc">Additional map types to overlay. Overlay map types will display on top of the base map they are attached to, in the order in which they appear in the <code>overlayMapTypes</code> array (overlays with higher index values are displayed in front of overlays with lower index values).</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="details responsive" summary="class Map - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="Map.bounds_changed">
<td><code><span>bounds_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the viewport bounds have changed.</div></td>
</tr>
<tr id="Map.center_changed">
<td><code><span>center_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the map center property changes.</div></td>
</tr>
<tr id="Map.click">
<td><code><span>click</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/IconMouseEvent.md">IconMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user clicks on the map. An ApiMouseEvent with properties for the clicked location is returned unless a place icon was clicked, in which case an IconMouseEvent with a placeid is returned. IconMouseEvent and ApiMouseEvent are identical, except that IconMouseEvent has the placeid field. The event can always be treated as an ApiMouseEvent when the placeid is not important. The click event is not fired if a marker or infowindow was clicked.</div></td>
</tr>
<tr id="Map.dblclick">
<td><code><span>dblclick</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user double-clicks on the map. Note that the click event will also fire, right before this one.</div></td>
</tr>
<tr id="Map.drag">
<td><code><span>drag</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is repeatedly fired while the user drags the map.</div></td>
</tr>
<tr id="Map.dragend">
<td><code><span>dragend</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the user stops dragging the map.</div></td>
</tr>
<tr id="Map.dragstart">
<td><code><span>dragstart</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the user starts dragging the map.</div></td>
</tr>
<tr id="Map.heading_changed">
<td><code><span>heading_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the map heading property changes.</div></td>
</tr>
<tr id="Map.idle">
<td><code><span>idle</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the map becomes idle after panning or zooming.</div></td>
</tr>
<tr id="Map.maptypeid_changed">
<td><code><span>maptypeid_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the mapTypeId property changes.</div></td>
</tr>
<tr id="Map.mousemove">
<td><code><span>mousemove</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired whenever the user's mouse moves over the map container.</div></td>
</tr>
<tr id="Map.mouseout">
<td><code><span>mouseout</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user's mouse exits the map container.</div></td>
</tr>
<tr id="Map.mouseover">
<td><code><span>mouseover</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user's mouse enters the map container.</div></td>
</tr>
<tr id="Map.projection_changed">
<td><code><span>projection_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the projection has changed.</div></td>
</tr>
<tr id="Map.resize">
<td><code><span>resize</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">Developers should trigger this event on the map when the div changes size: <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/event.md">google.maps.event.trigger</a>(map, 'resize') </code>.</div></td>
</tr>
<tr id="Map.rightclick">
<td><code><span>rightclick</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM contextmenu event is fired on the map container.</div></td>
</tr>
<tr id="Map.tilesloaded">
<td><code><span>tilesloaded</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the visible tiles have finished loading.</div></td>
</tr>
<tr id="Map.tilt_changed">
<td><code><span>tilt_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the map tilt property changes.</div></td>
</tr>
<tr id="Map.zoom_changed">
<td><code><span>zoom_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the map zoom property changes.</div></td>
</tr>
</tbody>
</table></div>