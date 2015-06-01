<h2 id="OverlayView"> OverlayView class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">OverlayView</span></code>
class
</p><p>You can implement this class if you want to display custom types of overlay objects on the map. <br><br>Inherit from this class by setting your overlay's prototype: <code>MyOverlay.prototype = new google.maps.OverlayView();</code>. The <code>OverlayView</code> constructor is guaranteed to be an empty function. <br><br>You must implement three methods: <code>onAdd()</code>, <code>draw()</code>, and <code>onRemove()</code>. </p><ul> <li>In the <code>onAdd()</code> method, you should create DOM objects and append them as children of the panes.</li> <li>In the <code>draw()</code> method, you should position these elements.</li> <li>In the <code>onRemove()</code> method, you should remove the objects from the DOM.</li> </ul><code>setMap()</code><code>Map</code><code>onAdd()</code><code>setMap(null)</code><code>onRemove()</code><code>setMap()</code><code>draw()</code><p></p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class OverlayView - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>OverlayView()</span></code></td>
<td>Creates an <code><span>OverlayView</span></code>.</td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class OverlayView - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>draw()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Implement this method to draw or update the overlay. This method is called after onAdd() and when the position from projection.fromLatLngToPixel() would return a new value for a given LatLng. This can happen on change of zoom, center, or map type. It is not necessarily called on drag or resize.</div></td>
</tr>
<tr>
<td><code><span>getMap()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPanorama.md">StreetViewPanorama</a></code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>getPanes()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapPanes.md">MapPanes</a></code></div>
<div class="desc">Returns the panes in which this OverlayView can be rendered. The panes are not initialized until <code>onAdd</code> is called by the API.</div></td>
</tr>
<tr>
<td><code><span>getProjection()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapCanvasProjection.md">MapCanvasProjection</a></code></div>
<div class="desc">Returns the <code>MapCanvasProjection</code> object associated with this <code>OverlayView</code>. The projection is not initialized until <code>onAdd</code> is called by the API.</div></td>
</tr>
<tr>
<td><code><span>onAdd()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Implement this method to initialize the overlay DOM elements. This method is called once after setMap() is called with a valid map. At this point, panes and projection will have been initialized.</div></td>
</tr>
<tr>
<td><code><span>onRemove()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Implement this method to remove your elements from the DOM. This method is called once following a call to setMap(null).</div></td>
</tr>
<tr>
<td><code><span>setMap(<wbr>map:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md"><span>Map</span></a><span>|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPanorama.md"><span>StreetViewPanorama</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Adds the overlay to the map or panorama.</div></td>
</tr>
</tbody>
</table></div>