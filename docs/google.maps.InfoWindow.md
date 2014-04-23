<h2 id="InfoWindow">
google.maps.InfoWindow
class
</h2><p>An overlay that looks like a bubble and is often connected to a marker.</p><p>This class extends
<code><a href="#MVCObject">MVCObject</a></code>.
</p><h3>Constructor</h3><table summary="class InfoWindow - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>InfoWindow(opts?:<a href="#InfoWindowOptions"><em>InfoWindowOptions</em></a>)</code></td>
<td>Creates an info window with the given options. An InfoWindow can be placed on a map at a particular position or above a marker, depending on what is specified in the options. Unless auto-pan is disabled, an InfoWindow will pan the map to make itself visible when it is opened. After constructing an InfoWindow, you must call open to display it on the map. The user can click the close button on the InfoWindow to remove it from the map, or the developer can call close() for the same effect.</td>
</tr>
</tbody>
</table><h3>Methods</h3><table summary="class InfoWindow - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>close()</code></td>
<td><code>None</code></td>
<td>Closes this InfoWindow by removing it from the DOM structure.</td>
</tr>
<tr>
<td><code>getContent()</code></td>
<td><code>string|Node</code></td>
<td></td>
</tr>
<tr>
<td><code>getPosition()</code></td>
<td><code><a href="#LatLng">LatLng</a></code></td>
<td></td>
</tr>
<tr>
<td><code>getZIndex()</code></td>
<td><code>number</code></td>
<td></td>
</tr>
<tr>
<td><code>open(map?:<a href="#Map">Map</a>|<a href="#StreetViewPanorama">StreetViewPanorama</a>, anchor?:<a href="#MVCObject">MVCObject</a>)</code></td>
<td><code>None</code></td>
<td>Opens this InfoWindow on the given map. Optionally, an InfoWindow can be associated with an anchor. In the core API, the only anchor is the Marker class. However, an anchor can be any MVCObject that exposes a LatLng <code>position</code> property and optionally a Point <code>anchorPoint</code> property for calculating the <code>pixelOffset</code> (see InfoWindowOptions). The <code>anchorPoint</code> is the offset from the anchor's position to the tip of the InfoWindow.</td>
</tr>
<tr>
<td><code>setContent(content:string|Node)</code></td>
<td><code>None</code></td>
<td></td>
</tr>
<tr>
<td><code>setOptions(options:<a href="#InfoWindowOptions"><em>InfoWindowOptions</em></a>)</code></td>
<td><code>None</code></td>
<td></td>
</tr>
<tr>
<td><code>setPosition(position:<a href="#LatLng">LatLng</a>)</code></td>
<td><code>None</code></td>
<td></td>
</tr>
<tr>
<td><code>setZIndex(zIndex:number)</code></td>
<td><code>None</code></td>
<td></td>
</tr>
</tbody>
</table><h3>Events</h3><table summary="class InfoWindow - Events" width="100%">
<thead>
<tr><th>Events</th>
<th>Arguments</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>closeclick</code></td>
<td><code>None</code></td>
<td>This event is fired when the close button was clicked.</td>
</tr>
<tr>
<td><code>content_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the content property changes.</td>
</tr>
<tr>
<td><code>domready</code></td>
<td><code>None</code></td>
<td>This event is fired when the <code>&lt;div&gt;</code> containing the <b><code>InfoWindow</code></b>'s content is attached to the DOM. You may wish to monitor this event if you are building out your info window content dynamically.</td>
</tr>
<tr>
<td><code>position_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the position property changes.</td>
</tr>
<tr>
<td><code>zindex_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the InfoWindow's zIndex changes.</td>
</tr>
</tbody>
</table>