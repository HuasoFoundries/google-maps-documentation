<h2 id="StreetViewPanorama">
google.maps.StreetViewPanorama
class
</h2><p>Displays the panorama for a given <code>LatLng</code> or panorama ID. A <code>StreetViewPanorama</code> object provides a Street View "viewer" which can be stand-alone within a separate <code>&lt;div&gt;</code> or bound to a <code>Map</code>.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCObject.md">MVCObject</a></code>.
</p><h3>Constructor</h3><table summary="class StreetViewPanorama - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>StreetViewPanorama(container:Node, opts?:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.StreetViewPanoramaOptions.md"><em>StreetViewPanoramaOptions</em></a>)</code></td>
<td>Creates a panorama with the passed <code>StreetViewPanoramaOptions</code>.</td>
</tr>
</tbody>
</table><h3>Methods</h3><table summary="class StreetViewPanorama - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getLinks()</code></td>
<td><code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.StreetViewLink.md">StreetViewLink</a>&gt;</code></td>
<td>Returns the set of navigation links for the Street View panorama.</td>
</tr>
<tr>
<td><code>getLocation()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.StreetViewLocation.md">StreetViewLocation</a></code></td>
<td>Returns the StreetViewLocation of the current panorama.</td>
</tr>
<tr>
<td><code>getPano()</code></td>
<td><code>string</code></td>
<td>Returns the current panorama ID for the Street View panorama. This id is stable within the browser's current session only.</td>
</tr>
<tr>
<td><code>getPhotographerPov()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.StreetViewPov.md">StreetViewPov</a></code></td>
<td>Returns the heading and pitch of the photographer when this panorama was taken. For Street View panoramas on the road, this also reveals in which direction the car was travelling. This data is available after the <code>pano_changed</code> event.</td>
</tr>
<tr>
<td><code>getPosition()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a></code></td>
<td>Returns the current <code>LatLng</code> position for the Street View panorama.</td>
</tr>
<tr>
<td><code>getPov()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.StreetViewPov.md">StreetViewPov</a></code></td>
<td>Returns the current point of view for the Street View panorama.</td>
</tr>
<tr>
<td><code>getStatus()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.StreetViewStatus.md">StreetViewStatus</a></code></td>
<td>Returns the status of the panorama on completion of the <code>setPosition()</code> or <code>setPano()</code> request.</td>
</tr>
<tr>
<td><code>getVisible()</code></td>
<td><code>boolean</code></td>
<td>Returns <code>true</code> if the panorama is visible. It does not specify whether Street View imagery is available at the specified position.</td>
</tr>
<tr>
<td><code>getZoom()</code></td>
<td><code>number</code></td>
<td>Returns the zoom level of the panorama. Fully zoomed-out is level 0, where the field of view is 180 degrees. Zooming in increases the zoom level.</td>
</tr>
<tr>
<td><code>registerPanoProvider(provider:function(string):<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.StreetViewPanoramaData.md">StreetViewPanoramaData</a>)</code></td>
<td><code>None</code></td>
<td>Set the custom panorama provider called on pano change to load custom panoramas.</td>
</tr>
<tr>
<td><code>setLinks(links:Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.StreetViewLink.md">StreetViewLink</a>&gt;)</code></td>
<td><code>None</code></td>
<td>Sets the set of navigation links for the Street View panorama.</td>
</tr>
<tr>
<td><code>setOptions(options:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.StreetViewPanoramaOptions.md"><em>StreetViewPanoramaOptions</em></a>)</code></td>
<td><code>None</code></td>
<td>Sets a collection of key-value pairs.</td>
</tr>
<tr>
<td><code>setPano(pano:string)</code></td>
<td><code>None</code></td>
<td>Sets the current panorama ID for the Street View panorama.</td>
</tr>
<tr>
<td><code>setPosition(latLng:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngLiteral.md">LatLngLiteral</a>)</code></td>
<td><code>None</code></td>
<td>Sets the current <code>LatLng</code> position for the Street View panorama.</td>
</tr>
<tr>
<td><code>setPov(pov:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.StreetViewPov.md"><em>StreetViewPov</em></a>)</code></td>
<td><code>None</code></td>
<td>Sets the point of view for the Street View panorama.</td>
</tr>
<tr>
<td><code>setVisible(flag:boolean)</code></td>
<td><code>None</code></td>
<td>Sets to <code>true</code> to make the panorama visible. If set to <code>false</code>, the panorama will be hidden whether it is embedded in the map or in its own <code>&lt;div&gt;</code>.</td>
</tr>
<tr>
<td><code>setZoom(zoom:number)</code></td>
<td><code>None</code></td>
<td>Sets the zoom level of the panorama. Fully zoomed-out is level 0, where the field of view is 180 degrees. Zooming in increases the zoom level.</td>
</tr>
</tbody>
</table><h3>Properties</h3><table summary="class StreetViewPanorama - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>controls</code></td>
<td><code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCArray.md">MVCArray</a>&lt;Node&gt;&gt;</code></td>
<td>Additional controls to attach to the panorama. To add a control to the panorama, add the control's <code>&lt;div&gt;</code> to the <code>MVCArray</code> corresponding to the <code>ControlPosition</code> where it should be rendered.</td>
</tr>
</tbody>
</table><h3>Events</h3><table summary="class StreetViewPanorama - Events" width="100%">
<thead>
<tr><th>Events</th>
<th>Arguments</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>clicktogo_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the panorama's clickToGo is enabled or disabled.</td>
</tr>
<tr>
<td><code>closeclick</code></td>
<td><code>Event</code></td>
<td>This event is fired when the close button is clicked.</td>
</tr>
<tr>
<td><code>links_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the panorama's links change. The links change asynchronously following a pano id change.</td>
</tr>
<tr>
<td><code>pano_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the panorama's pano id changes. The pano may change as the user navigates through the panorama or the position is manually set. Note that not all position changes trigger a <code>pano_changed</code>.</td>
</tr>
<tr>
<td><code>position_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the panorama's position changes. The position changes as the user navigates through the panorama or the position is set manually.</td>
</tr>
<tr>
<td><code>pov_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the panorama's point-of-view changes. The point of view changes as the pitch, zoom, or heading changes.</td>
</tr>
<tr>
<td><code>resize</code></td>
<td><code>None</code></td>
<td>Developers should trigger this event on the panorama when its div changes size: <code> <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.event.md">google.maps.event.trigger</a>(panorama, 'resize')</code>.</td>
</tr>
<tr>
<td><code>scrollwheel_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the panorama's scrollWheel is enabled or disabled.</td>
</tr>
<tr>
<td><code>status_changed</code></td>
<td><code>None</code></td>
<td>This event is fired after every panorama lookup by id or location, via <code>setPosition()</code> or <code>setPano()</code>.</td>
</tr>
<tr>
<td><code>visible_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the panorama's visibility changes. The visibility is changed when the Pegman is dragged onto the map, the close button is clicked, or <code>setVisible()</code> is called.</td>
</tr>
<tr>
<td><code>zoom_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the panorama's zoom level changes.</td>
</tr>
</tbody>
</table>