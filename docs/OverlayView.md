<h2 id="OverlayView">
google.maps.OverlayView
class
</h2><p>You can implement this class if you want to display custom types of overlay objects on the map. <br><br>Inherit from this class by setting your overlay's prototype: <code>MyOverlay.prototype = new google.maps.OverlayView();</code>. The <code>OverlayView</code> constructor is guaranteed to be an empty function. <br><br>You must implement three methods: <code>onAdd()</code>, <code>draw()</code>, and <code>onRemove()</code>. </p><ul> <li>In the <code>onAdd()</code> method, you should create DOM objects and append them as children of the panes.</li> <li>In the <code>draw()</code> method, you should position these elements.</li> <li>In the <code>onRemove()</code> method, you should remove the objects from the DOM.</li> </ul><code>setMap()</code><code>Map</code><code>onAdd()</code><code>setMap(null)</code><code>onRemove()</code><code>setMap()</code><code>draw()</code><p></p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCObject.md">MVCObject</a></code>.
</p><h3>Constructor</h3><table summary="class OverlayView - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>OverlayView()</code></td>
<td>Creates an <code>OverlayView</code>.</td>
</tr>
</tbody>
</table><h3>Methods</h3><table summary="class OverlayView - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>draw()</code></td>
<td><code>None</code></td>
<td>Implement this method to draw or update the overlay. This method is called after onAdd() and when the position from projection.fromLatLngToPixel() would return a new value for a given LatLng. This can happen on change of zoom, center, or map type. It is not necessarily called on drag or resize.</td>
</tr>
<tr>
<td><code>getMap()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.StreetViewPanorama.md">StreetViewPanorama</a></code></td>
<td></td>
</tr>
<tr>
<td><code>getPanes()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MapPanes.md">MapPanes</a></code></td>
<td>Returns the panes in which this OverlayView can be rendered. The panes are not initialized until <code>onAdd</code> is called by the API.</td>
</tr>
<tr>
<td><code>getProjection()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MapCanvasProjection.md">MapCanvasProjection</a></code></td>
<td>Returns the <code>MapCanvasProjection</code> object associated with this <code>OverlayView</code>. The projection is not initialized until <code>onAdd</code> is called by the API.</td>
</tr>
<tr>
<td><code>onAdd()</code></td>
<td><code>None</code></td>
<td>Implement this method to initialize the overlay DOM elements. This method is called once after setMap() is called with a valid map. At this point, panes and projection will have been initialized.</td>
</tr>
<tr>
<td><code>onRemove()</code></td>
<td><code>None</code></td>
<td>Implement this method to remove your elements from the DOM. This method is called once following a call to setMap(null).</td>
</tr>
<tr>
<td><code>setMap(map:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.StreetViewPanorama.md">StreetViewPanorama</a>)</code></td>
<td><code>None</code></td>
<td>Adds the overlay to the map or panorama.</td>
</tr>
</tbody>
</table>