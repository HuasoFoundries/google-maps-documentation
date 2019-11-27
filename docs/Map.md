
<devsite-heading text=" Map class" for="Map" level="h2" link="" toc="" back-to-top=""><h2 id="Map" is-upgraded="">Map class </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">Map</span></code>
class
</p>
<p>This class extends
<code translate="no" dir="ltr"><a href="MVCObject.md">MVCObject</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Map - Constructor">
<thead>
<tr><th colspan="2" id="Map.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code translate="no" dir="ltr"><a class="secret-link" href="#Map.constructor"><span>Map</span></a></code></td>
<td><div><code translate="no" dir="ltr">Map(mapDiv[, opts])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">mapDiv</code>:&nbsp; <code translate="no" dir="ltr">Element</code></li>
<li><code translate="no" dir="ltr">opts</code>:&nbsp; <code translate="no" dir="ltr"><a href="MapOptions.md">MapOptions</a> <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc">Creates a new map inside of the given HTML container, which is typically a <code translate="no" dir="ltr">DIV</code> element.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class Map - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Map.fitBounds">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.fitBounds"><span>fitBounds</span></a></code></td>
<td><div><code translate="no" dir="ltr">fitBounds(bounds[, padding])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">bounds</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLngBounds.md">LatLngBounds</a>|<a href="LatLngBoundsLiteral.md">LatLngBoundsLiteral</a></code></li>
<li><code translate="no" dir="ltr">padding</code>:&nbsp; <code translate="no" dir="ltr">number|<a href="Padding.md">Padding</a> <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the viewport to contain the given bounds.<br> <strong>Note:</strong> When the map is set to <code translate="no" dir="ltr">display: none</code>, the <code translate="no" dir="ltr">fitBounds</code> function reads the map's size as 0x0, and therefore does not do anything. To change the viewport while the map is hidden, set the map to <code translate="no" dir="ltr">visibility: hidden</code>, thereby ensuring the map div has an actual size.</div></td>
</tr>
<tr id="Map.getBounds">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.getBounds"><span>getBounds</span></a></code></td>
<td><div><code translate="no" dir="ltr">getBounds()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">Returns the lat/lng bounds of the current viewport. If more than one copy of the world is visible, the bounds range in longitude from -180 to 180 degrees inclusive. If the map is not yet initialized (i.e. the mapType is still null), or center and zoom have not been set then the result is <code translate="no" dir="ltr">null</code> or <code translate="no" dir="ltr">undefined</code>.</div></td>
</tr>
<tr id="Map.getCenter">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.getCenter"><span>getCenter</span></a></code></td>
<td><div><code translate="no" dir="ltr">getCenter()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a></code></div>
<div class="desc">Returns the position displayed at the center of the map. Note that this <code translate="no" dir="ltr">LatLng</code> object is <em>not</em> wrapped. See <code translate="no" dir="ltr"><a href="#LatLng">LatLng</a></code> for more information.</div></td>
</tr>
<tr id="Map.getClickableIcons">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.getClickableIcons"><span>getClickableIcons</span></a></code></td>
<td><div><code translate="no" dir="ltr">getClickableIcons()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">boolean</code></div>
<div class="desc">Returns the clickability of the map icons. A map icon represents a point of interest, also known as a POI. If the returned value is true, then the icons are clickable on the map.</div></td>
</tr>
<tr id="Map.getDiv">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.getDiv"><span>getDiv</span></a></code></td>
<td><div><code translate="no" dir="ltr">getDiv()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">Element</code></div>
<div class="desc"></div></td>
</tr>
<tr id="Map.getHeading">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.getHeading"><span>getHeading</span></a></code></td>
<td><div><code translate="no" dir="ltr">getHeading()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">Returns the compass heading of aerial imagery. The heading value is measured in degrees (clockwise) from cardinal direction North.</div></td>
</tr>
<tr id="Map.getMapTypeId">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.getMapTypeId"><span>getMapTypeId</span></a></code></td>
<td><div><code translate="no" dir="ltr">getMapTypeId()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="MapTypeId.md">MapTypeId</a>|string</code></div>
<div class="desc"></div></td>
</tr>
<tr id="Map.getProjection">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.getProjection"><span>getProjection</span></a></code></td>
<td><div><code translate="no" dir="ltr">getProjection()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Projection.md">Projection</a></code></div>
<div class="desc">Returns the current <code translate="no" dir="ltr">Projection</code>. If the map is not yet initialized (i.e. the mapType is still null) then the result is null. Listen to <code translate="no" dir="ltr">projection_changed</code> and check its value to ensure it is not null.</div></td>
</tr>
<tr id="Map.getStreetView">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.getStreetView"><span>getStreetView</span></a></code></td>
<td><div><code translate="no" dir="ltr">getStreetView()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="StreetViewPanorama.md">StreetViewPanorama</a></code></div>
<div class="desc">Returns the default <code translate="no" dir="ltr">StreetViewPanorama</code> bound to the map, which may be a default panorama embedded within the map, or the panorama set using <code translate="no" dir="ltr">setStreetView()</code>. Changes to the map's <code translate="no" dir="ltr">streetViewControl</code> will be reflected in the display of such a bound panorama.</div></td>
</tr>
<tr id="Map.getTilt">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.getTilt"><span>getTilt</span></a></code></td>
<td><div><code translate="no" dir="ltr">getTilt()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">Returns the current angle of incidence of the map, in degrees from the viewport plane to the map plane. The result will be <code translate="no" dir="ltr">0</code> for imagery taken directly overhead or <code translate="no" dir="ltr">45</code> for 45° imagery. 45° imagery is only available for <code translate="no" dir="ltr">satellite</code> and <code translate="no" dir="ltr">hybrid</code> map types, within some locations, and at some zoom levels. <b>Note:</b> This method does not return the value set by <code translate="no" dir="ltr">setTilt</code>. See <code translate="no" dir="ltr">setTilt</code> for details.</div></td>
</tr>
<tr id="Map.getZoom">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.getZoom"><span>getZoom</span></a></code></td>
<td><div><code translate="no" dir="ltr">getZoom()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc"></div></td>
</tr>
<tr id="Map.panBy">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.panBy"><span>panBy</span></a></code></td>
<td><div><code translate="no" dir="ltr">panBy(x, y)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">x</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
<li><code translate="no" dir="ltr">y</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Changes the center of the map by the given distance in pixels. If the distance is less than both the width and height of the map, the transition will be smoothly animated. Note that the map coordinate system increases from west to east (for x values) and north to south (for y values).</div></td>
</tr>
<tr id="Map.panTo">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.panTo"><span>panTo</span></a></code></td>
<td><div><code translate="no" dir="ltr">panTo(latLng)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">latLng</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Changes the center of the map to the given <code translate="no" dir="ltr">LatLng</code>. If the change is less than both the width and height of the map, the transition will be smoothly animated.</div></td>
</tr>
<tr id="Map.panToBounds">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.panToBounds"><span>panToBounds</span></a></code></td>
<td><div><code translate="no" dir="ltr">panToBounds(latLngBounds[, padding])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">latLngBounds</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLngBounds.md">LatLngBounds</a>|<a href="LatLngBoundsLiteral.md">LatLngBoundsLiteral</a></code></li>
<li><code translate="no" dir="ltr">padding</code>:&nbsp; <code translate="no" dir="ltr">number|<a href="Padding.md">Padding</a> <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Pans the map by the minimum amount necessary to contain the given <code translate="no" dir="ltr">LatLngBounds</code>. It makes no guarantee where on the map the bounds will be, except that the map will be panned to show as much of the bounds as possible inside <code translate="no" dir="ltr">{currentMapSizeInPx} - {padding}</code>.</div></td>
</tr>
<tr id="Map.setCenter">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.setCenter"><span>setCenter</span></a></code></td>
<td><div><code translate="no" dir="ltr">setCenter(latlng)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">latlng</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Map.setClickableIcons">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.setClickableIcons"><span>setClickableIcons</span></a></code></td>
<td><div><code translate="no" dir="ltr">setClickableIcons(value)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">value</code>:&nbsp; <code translate="no" dir="ltr">boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Controls whether the map icons are clickable or not. A map icon represents a point of interest, also known as a POI. To disable the clickability of map icons, pass a value of <code translate="no" dir="ltr">false</code> to this method.</div></td>
</tr>
<tr id="Map.setHeading">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.setHeading"><span>setHeading</span></a></code></td>
<td><div><code translate="no" dir="ltr">setHeading(heading)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">heading</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the compass heading for aerial imagery measured in degrees from cardinal direction North.</div></td>
</tr>
<tr id="Map.setMapTypeId">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.setMapTypeId"><span>setMapTypeId</span></a></code></td>
<td><div><code translate="no" dir="ltr">setMapTypeId(mapTypeId)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">mapTypeId</code>:&nbsp; <code translate="no" dir="ltr"><a href="MapTypeId.md">MapTypeId</a>|string</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Map.setOptions">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.setOptions"><span>setOptions</span></a></code></td>
<td><div><code translate="no" dir="ltr">setOptions(options)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">options</code>:&nbsp; <code translate="no" dir="ltr"><a href="MapOptions.md">MapOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Map.setStreetView">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.setStreetView"><span>setStreetView</span></a></code></td>
<td><div><code translate="no" dir="ltr">setStreetView(panorama)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">panorama</code>:&nbsp; <code translate="no" dir="ltr"><a href="StreetViewPanorama.md">StreetViewPanorama</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Binds a <code translate="no" dir="ltr">StreetViewPanorama</code> to the map. This panorama overrides the default <code translate="no" dir="ltr">StreetViewPanorama</code>, allowing the map to bind to an external panorama outside of the map. Setting the panorama to <code translate="no" dir="ltr">null</code> binds the default embedded panorama back to the map.</div></td>
</tr>
<tr id="Map.setTilt">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.setTilt"><span>setTilt</span></a></code></td>
<td><div><code translate="no" dir="ltr">setTilt(tilt)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">tilt</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Controls the automatic switching behavior for the angle of incidence of the map. The only allowed values are <code translate="no" dir="ltr">0</code> and <code translate="no" dir="ltr">45</code>. <code translate="no" dir="ltr">setTilt(0)</code> causes the map to always use a 0° overhead view regardless of the zoom level and viewport. <code translate="no" dir="ltr">setTilt(45)</code> causes the tilt angle to automatically switch to 45 whenever 45° imagery is available for the current zoom level and viewport, and switch back to 0 whenever 45° imagery is not available (this is the default behavior). 45° imagery is only available for <code translate="no" dir="ltr">satellite</code> and <code translate="no" dir="ltr">hybrid</code> map types, within some locations, and at some zoom levels. <b>Note:</b> <code translate="no" dir="ltr">getTilt</code> returns the current tilt angle, not the value set by <code translate="no" dir="ltr">setTilt</code>. Because <code translate="no" dir="ltr">getTilt</code> and <code translate="no" dir="ltr">setTilt</code> refer to different things, do not <code translate="no" dir="ltr">bind()</code> the <code translate="no" dir="ltr">tilt</code> property; doing so may yield unpredictable effects.</div></td>
</tr>
<tr id="Map.setZoom">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.setZoom"><span>setZoom</span></a></code></td>
<td><div><code translate="no" dir="ltr">setZoom(zoom)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">zoom</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="class Map - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="Map.controls">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.controls"><span>controls</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="MVCArray.md">MVCArray</a>&lt;Node&gt;&gt;</code></div>
<div class="desc">Additional controls to attach to the map. To add a control to the map, add the control's <code translate="no" dir="ltr">&lt;div&gt;</code> to the <code translate="no" dir="ltr">MVCArray</code> corresponding to the <code translate="no" dir="ltr">ControlPosition</code> where it should be rendered.</div></td>
</tr>
<tr id="Map.data">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.data"><span>data</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Data.md">Data</a></code></div>
<div class="desc">An instance of <code translate="no" dir="ltr">Data</code>, bound to the map. Add features to this <code translate="no" dir="ltr">Data</code> object to conveniently display them on this map.</div></td>
</tr>
<tr id="Map.mapTypes">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.mapTypes"><span>mapTypes</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="MapTypeRegistry.md">MapTypeRegistry</a></code></div>
<div class="desc">A registry of <code translate="no" dir="ltr">MapType</code> instances by string ID.</div></td>
</tr>
<tr id="Map.overlayMapTypes">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.overlayMapTypes"><span>overlayMapTypes</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="MVCArray.md">MVCArray</a>&lt;<a href="MapType.md">MapType</a> <span class="optional-type-annotation">optional</span>&gt;</code></div>
<div class="desc">Additional map types to overlay. Overlay map types will display on top of the base map they are attached to, in the order in which they appear in the <code translate="no" dir="ltr">overlayMapTypes</code> array (overlays with higher index values are displayed in front of overlays with lower index values).</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="details responsive" summary="class Map - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="Map.bounds_changed">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.bounds_changed"><span>bounds_changed</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the viewport bounds have changed.</div></td>
</tr>
<tr id="Map.center_changed">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.center_changed"><span>center_changed</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the map center property changes.</div></td>
</tr>
<tr id="Map.click">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.click"><span>click</span></a></code></td>
<td><div><code translate="no" dir="ltr">function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">event</code>:&nbsp; <code translate="no" dir="ltr"><a href="MouseEvent.md">MouseEvent</a>|<a href="IconMouseEvent.md">IconMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user clicks on the map. An ApiMouseEvent with properties for the clicked location is returned unless a place icon was clicked, in which case an IconMouseEvent with a placeid is returned. IconMouseEvent and ApiMouseEvent are identical, except that IconMouseEvent has the placeid field. The event can always be treated as an ApiMouseEvent when the placeid is not important. The click event is not fired if a marker or infowindow was clicked.</div></td>
</tr>
<tr id="Map.dblclick">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.dblclick"><span>dblclick</span></a></code></td>
<td><div><code translate="no" dir="ltr">function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">event</code>:&nbsp; <code translate="no" dir="ltr"><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user double-clicks on the map. Note that the click event will also fire, right before this one.</div></td>
</tr>
<tr id="Map.drag">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.drag"><span>drag</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is repeatedly fired while the user drags the map.</div></td>
</tr>
<tr id="Map.dragend">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.dragend"><span>dragend</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the user stops dragging the map.</div></td>
</tr>
<tr id="Map.dragstart">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.dragstart"><span>dragstart</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the user starts dragging the map.</div></td>
</tr>
<tr id="Map.heading_changed">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.heading_changed"><span>heading_changed</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the map heading property changes.</div></td>
</tr>
<tr id="Map.idle">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.idle"><span>idle</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the map becomes idle after panning or zooming.</div></td>
</tr>
<tr id="Map.maptypeid_changed">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.maptypeid_changed"><span>maptypeid_changed</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the mapTypeId property changes.</div></td>
</tr>
<tr id="Map.mousemove">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.mousemove"><span>mousemove</span></a></code></td>
<td><div><code translate="no" dir="ltr">function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">event</code>:&nbsp; <code translate="no" dir="ltr"><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired whenever the user's mouse moves over the map container.</div></td>
</tr>
<tr id="Map.mouseout">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.mouseout"><span>mouseout</span></a></code></td>
<td><div><code translate="no" dir="ltr">function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">event</code>:&nbsp; <code translate="no" dir="ltr"><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user's mouse exits the map container.</div></td>
</tr>
<tr id="Map.mouseover">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.mouseover"><span>mouseover</span></a></code></td>
<td><div><code translate="no" dir="ltr">function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">event</code>:&nbsp; <code translate="no" dir="ltr"><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user's mouse enters the map container.</div></td>
</tr>
<tr id="Map.projection_changed">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.projection_changed"><span>projection_changed</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the projection has changed.</div></td>
</tr>
<tr id="Map.rightclick">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.rightclick"><span>rightclick</span></a></code></td>
<td><div><code translate="no" dir="ltr">function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">event</code>:&nbsp; <code translate="no" dir="ltr"><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM contextmenu event is fired on the map container.</div></td>
</tr>
<tr id="Map.tilesloaded">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.tilesloaded"><span>tilesloaded</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the visible tiles have finished loading.</div></td>
</tr>
<tr id="Map.tilt_changed">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.tilt_changed"><span>tilt_changed</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the map tilt property changes.</div></td>
</tr>
<tr id="Map.zoom_changed">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Map.zoom_changed"><span>zoom_changed</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the map zoom property changes.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
