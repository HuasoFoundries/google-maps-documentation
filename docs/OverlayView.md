<h2 id="OverlayView"> OverlayView class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">OverlayView</span></code>
class
</p><p>You can implement this class if you want to display custom types of overlay objects on the map. <br><br>Inherit from this class by setting your overlay's prototype: <code>MyOverlay.prototype = new google.maps.OverlayView();</code>. The <code>OverlayView</code> constructor is guaranteed to be an empty function. <br><br>You must implement three methods: <code>onAdd()</code>, <code>draw()</code>, and <code>onRemove()</code>. </p><ul> <li>In the <code>onAdd()</code> method, you should create DOM objects and append them as children of the panes.</li> <li>In the <code>draw()</code> method, you should position these elements.</li> <li>In the <code>onRemove()</code> method, you should remove the objects from the DOM.</li> </ul><code>setMap()</code><code>Map</code><code>onAdd()</code><code>setMap(null)</code><code>onRemove()</code><code>setMap()</code><code>draw()</code><p></p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class OverlayView - Constructor">
<thead>
<tr><th colspan="2" id="OverlayView.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>OverlayView</span></code></td>
<td><div><code>OverlayView()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc">Creates an <code>OverlayView</code>.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class OverlayView - Static Methods">
<thead>
<tr><th colspan="2">Static Methods</th>
</tr></thead>
<tbody>
<tr id="OverlayView.preventMapHitsAndGesturesFrom">
<td><code><span>preventMapHitsAndGesturesFrom</span></code></td>
<td><div><code>preventMapHitsAndGesturesFrom(element)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>element</code>:&nbsp; <code>Element</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Stops click, tap, drag, and wheel events on the element from bubbling up to the map. Use this to prevent map dragging and zooming, as well as map "click" events.</div></td>
</tr>
<tr id="OverlayView.preventMapHitsFrom">
<td><code><span>preventMapHitsFrom</span></code></td>
<td><div><code>preventMapHitsFrom(element)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>element</code>:&nbsp; <code>Element</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Stops click or tap on the element from bubbling up to the map. Use this to prevent the map from triggering "click" events.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class OverlayView - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="OverlayView.draw">
<td><code><span>draw</span></code></td>
<td><div><code>draw()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Implement this method to draw or update the overlay. Use the position from projection.fromLatLngToDivPixel() to correctly position the overlay relative to the MapPanes. This method is called after onAdd(), and is called on change of zoom or center. It is not recommended to do computationally expensive work in this method.</div></td>
</tr>
<tr id="OverlayView.getMap">
<td><code><span>getMap</span></code></td>
<td><div><code>getMap()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPanorama.md">StreetViewPanorama</a></code></div>
<div class="desc"></div></td>
</tr>
<tr id="OverlayView.getPanes">
<td><code><span>getPanes</span></code></td>
<td><div><code>getPanes()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapPanes.md">MapPanes</a></code></div>
<div class="desc">Returns the panes in which this OverlayView can be rendered. The panes are not initialized until <code>onAdd</code> is called by the API.</div></td>
</tr>
<tr id="OverlayView.getProjection">
<td><code><span>getProjection</span></code></td>
<td><div><code>getProjection()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapCanvasProjection.md">MapCanvasProjection</a></code></div>
<div class="desc">Returns the <code>MapCanvasProjection</code> object associated with this <code>OverlayView</code>. The projection is not initialized until <code>onAdd</code> is called by the API.</div></td>
</tr>
<tr id="OverlayView.onAdd">
<td><code><span>onAdd</span></code></td>
<td><div><code>onAdd()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Implement this method to initialize the overlay DOM elements. This method is called once after setMap() is called with a valid map. At this point, panes and projection will have been initialized.</div></td>
</tr>
<tr id="OverlayView.onRemove">
<td><code><span>onRemove</span></code></td>
<td><div><code>onRemove()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Implement this method to remove your elements from the DOM. This method is called once following a call to setMap(null).</div></td>
</tr>
<tr id="OverlayView.setMap">
<td><code><span>setMap</span></code></td>
<td><div><code>setMap(map)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>map</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPanorama.md">StreetViewPanorama</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Adds the overlay to the map or panorama.</div></td>
</tr>
</tbody>
</table></div>