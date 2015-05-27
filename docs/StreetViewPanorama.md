<h2 id="StreetViewPanorama">
StreetViewPanorama
class
</h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">StreetViewPanorama</span></code>
class
</p><p>Displays the panorama for a given <code>LatLng</code> or panorama ID. A <code>StreetViewPanorama</code> object provides a Street View "viewer" which can be stand-alone within a separate <code>&lt;div&gt;</code> or bound to a <code>Map</code>.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><table class="constructors responsive" summary="class StreetViewPanorama - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code>StreetViewPanorama(container:Node, opts?:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPanoramaOptions.md"><em>StreetViewPanoramaOptions</em></a>)</code></td>
<td>Creates a panorama with the passed <code>StreetViewPanoramaOptions</code>.</td>
</tr>
</tbody>
</table><table class="methods responsive" summary="class StreetViewPanorama - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code>getLinks()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewLink.md">StreetViewLink</a>&gt;</code></div>
<div class="desc">Returns the set of navigation links for the Street View panorama.</div></td>
</tr>
<tr>
<td><code>getLocation()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewLocation.md">StreetViewLocation</a></code></div>
<div class="desc">Returns the StreetViewLocation of the current panorama.</div></td>
</tr>
<tr>
<td><code>getPano()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the current panorama ID for the Street View panorama. This id is stable within the browser's current session only.</div></td>
</tr>
<tr>
<td><code>getPhotographerPov()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPov.md">StreetViewPov</a></code></div>
<div class="desc">Returns the heading and pitch of the photographer when this panorama was taken. For Street View panoramas on the road, this also reveals in which direction the car was travelling. This data is available after the <code>pano_changed</code> event.</div></td>
</tr>
<tr>
<td><code>getPosition()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc">Returns the current <code>LatLng</code> position for the Street View panorama.</div></td>
</tr>
<tr>
<td><code>getPov()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPov.md">StreetViewPov</a></code></div>
<div class="desc">Returns the current point of view for the Street View panorama.</div></td>
</tr>
<tr>
<td><code>getStatus()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewStatus.md">StreetViewStatus</a></code></div>
<div class="desc">Returns the status of the panorama on completion of the <code>setPosition()</code> or <code>setPano()</code> request.</div></td>
</tr>
<tr>
<td><code>getVisible()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns <code>true</code> if the panorama is visible. It does not specify whether Street View imagery is available at the specified position.</div></td>
</tr>
<tr>
<td><code>getZoom()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the zoom level of the panorama. Fully zoomed-out is level 0, where the field of view is 180 degrees. Zooming in increases the zoom level.</div></td>
</tr>
<tr>
<td><code>registerPanoProvider(provider:function(string):<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPanoramaData.md">StreetViewPanoramaData</a>)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Set the custom panorama provider called on pano change to load custom panoramas.</div></td>
</tr>
<tr>
<td><code>setLinks(links:Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewLink.md">StreetViewLink</a>&gt;)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the set of navigation links for the Street View panorama.</div></td>
</tr>
<tr>
<td><code>setOptions(options:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPanoramaOptions.md"><em>StreetViewPanoramaOptions</em></a>)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets a collection of key-value pairs.</div></td>
</tr>
<tr>
<td><code>setPano(pano:string)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the current panorama ID for the Street View panorama.</div></td>
</tr>
<tr>
<td><code>setPosition(latLng:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md">LatLngLiteral</a>)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the current <code>LatLng</code> position for the Street View panorama.</div></td>
</tr>
<tr>
<td><code>setPov(pov:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPov.md"><em>StreetViewPov</em></a>)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the point of view for the Street View panorama.</div></td>
</tr>
<tr>
<td><code>setVisible(flag:boolean)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets to <code>true</code> to make the panorama visible. If set to <code>false</code>, the panorama will be hidden whether it is embedded in the map or in its own <code>&lt;div&gt;</code>.</div></td>
</tr>
<tr>
<td><code>setZoom(zoom:number)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the zoom level of the panorama. Fully zoomed-out is level 0, where the field of view is 180 degrees. Zooming in increases the zoom level.</div></td>
</tr>
</tbody>
</table><table class="properties responsive" summary="class StreetViewPanorama - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code>controls</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md">MVCArray</a>&lt;Node&gt;&gt;</code></div>
<div class="desc">Additional controls to attach to the panorama. To add a control to the panorama, add the control's <code>&lt;div&gt;</code> to the <code>MVCArray</code> corresponding to the <code>ControlPosition</code> where it should be rendered.</div></td>
</tr>
</tbody>
</table><table class="details responsive" summary="class StreetViewPanorama - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr>
<td><code>clicktogo_changed</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the panorama's clickToGo is enabled or disabled.</div></td>
</tr>
<tr>
<td><code>closeclick</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>Event</code></div>
<div class="desc">This event is fired when the close button is clicked.</div></td>
</tr>
<tr>
<td><code>links_changed</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the panorama's links change. The links change asynchronously following a pano id change.</div></td>
</tr>
<tr>
<td><code>pano_changed</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the panorama's pano id changes. The pano may change as the user navigates through the panorama or the position is manually set. Note that not all position changes trigger a <code>pano_changed</code>.</div></td>
</tr>
<tr>
<td><code>position_changed</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the panorama's position changes. The position changes as the user navigates through the panorama or the position is set manually.</div></td>
</tr>
<tr>
<td><code>pov_changed</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the panorama's point-of-view changes. The point of view changes as the pitch, zoom, or heading changes.</div></td>
</tr>
<tr>
<td><code>resize</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">Developers should trigger this event on the panorama when its div changes size: <code> <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/event.md">google.maps.event.trigger</a>(panorama, 'resize')</code>.</div></td>
</tr>
<tr>
<td><code>scrollwheel_changed</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the panorama's scrollWheel is enabled or disabled.</div></td>
</tr>
<tr>
<td><code>status_changed</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired after every panorama lookup by id or location, via <code>setPosition()</code> or <code>setPano()</code>.</div></td>
</tr>
<tr>
<td><code>visible_changed</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the panorama's visibility changes. The visibility is changed when the Pegman is dragged onto the map, the close button is clicked, or <code>setVisible()</code> is called.</div></td>
</tr>
<tr>
<td><code>zoom_changed</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the panorama's zoom level changes.</div></td>
</tr>
</tbody>
</table>