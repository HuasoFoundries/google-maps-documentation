<h2 id="GroundOverlay">
google.maps.GroundOverlay
class
</h2><p>A rectangular image overlay on the map.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCObject.md">MVCObject</a></code>.
</p><h3>Constructor</h3><table summary="class GroundOverlay - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>GroundOverlay(url:string, bounds:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngBounds.md">LatLngBounds</a>, opts?:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.GroundOverlayOptions.md"><em>GroundOverlayOptions</em></a>)</code></td>
<td>Creates a ground overlay from the provided image URL and its <code>LatLngBounds</code>. The image is scaled to fit the current bounds, and projected using the current map projection.</td>
</tr>
</tbody>
</table><h3>Methods</h3><table summary="class GroundOverlay - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getBounds()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngBounds.md">LatLngBounds</a></code></td>
<td>Gets the <code>LatLngBounds</code> of this overlay.</td>
</tr>
<tr>
<td><code>getMap()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a></code></td>
<td>Returns the map on which this ground overlay is displayed.</td>
</tr>
<tr>
<td><code>getOpacity()</code></td>
<td><code>number</code></td>
<td>Returns the opacity of this ground overlay.</td>
</tr>
<tr>
<td><code>getUrl()</code></td>
<td><code>string</code></td>
<td>Gets the url of the projected image.</td>
</tr>
<tr>
<td><code>setMap(map:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a>)</code></td>
<td><code>None</code></td>
<td>Renders the ground overlay on the specified map. If map is set to null, the overlay is removed.</td>
</tr>
<tr>
<td><code>setOpacity(opacity:number)</code></td>
<td><code>None</code></td>
<td>Sets the opacity of this ground overlay.</td>
</tr>
</tbody>
</table><h3>Events</h3><table summary="class GroundOverlay - Events" width="100%">
<thead>
<tr><th>Events</th>
<th>Arguments</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>click</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the DOM click event is fired on the <code>GroundOverlay</code>.</td>
</tr>
<tr>
<td><code>dblclick</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the DOM dblclick event is fired on the <code>GroundOverlay</code>.</td>
</tr>
</tbody>
</table>