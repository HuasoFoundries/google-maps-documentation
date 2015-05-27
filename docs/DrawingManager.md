<h2 id="DrawingManager">
DrawingManager
class
</h2><p>
<code><span itemprop="path">google.maps.drawing</span>.<span itemprop="name">DrawingManager</span></code>
class
</p><p>Allows users to draw markers, polygons, polylines, rectangles, and circles on the map. The <code>DrawingManager</code>'s drawing mode defines the type of overlay that will be created by the user. Adds a control to the map, allowing the user to switch drawing mode.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><h4>Library</h4><p>drawing</p><table class="constructors responsive" summary="class DrawingManager - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code>DrawingManager(options?:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DrawingManagerOptions.md"><em>DrawingManagerOptions</em></a>)</code></td>
<td>Creates a <code>DrawingManager</code> that allows users to draw overlays on the map, and switch between the type of overlay to be drawn with a drawing control.</td>
</tr>
</tbody>
</table><table class="methods responsive" summary="class DrawingManager - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code>getDrawingMode()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/OverlayType.md">OverlayType</a></code></div>
<div class="desc">Returns the <code>DrawingManager</code>'s drawing mode.</div></td>
</tr>
<tr>
<td><code>getMap()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc">Returns the <code>Map</code> to which the <code>DrawingManager</code> is attached, which is the <code>Map</code> on which the overlays created will be placed.</div></td>
</tr>
<tr>
<td><code>setDrawingMode(drawingMode:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/OverlayType.md">OverlayType</a>)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Changes the <code>DrawingManager</code>'s drawing mode, which defines the type of overlay to be added on the map. Accepted values are <code>MARKER</code>, <code>POLYGON</code>, <code>POLYLINE</code>, <code>RECTANGLE</code>, <code>CIRCLE</code>, or <code>null</code>. A drawing mode of <code>null</code> means that the user can interact with the map as normal, and clicks do not draw anything.</div></td>
</tr>
<tr>
<td><code>setMap(map:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a>)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Attaches the <code>DrawingManager</code> object to the specified <code>Map</code>.</div></td>
</tr>
<tr>
<td><code>setOptions(options:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DrawingManagerOptions.md"><em>DrawingManagerOptions</em></a>)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the <code>DrawingManager</code>'s options.</div></td>
</tr>
</tbody>
</table><table class="details responsive" summary="class DrawingManager - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr>
<td><code>circlecomplete</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Circle.md">Circle</a></code></div>
<div class="desc">This event is fired when the user has finished drawing a circle.</div></td>
</tr>
<tr>
<td><code>markercomplete</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Marker.md">Marker</a></code></div>
<div class="desc">This event is fired when the user has finished drawing a marker.</div></td>
</tr>
<tr>
<td><code>overlaycomplete</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/OverlayCompleteEvent.md"><em>OverlayCompleteEvent</em></a></code></div>
<div class="desc">This event is fired when the user has finished drawing an overlay of any type.</div></td>
</tr>
<tr>
<td><code>polygoncomplete</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Polygon.md">Polygon</a></code></div>
<div class="desc">This event is fired when the user has finished drawing a polygon.</div></td>
</tr>
<tr>
<td><code>polylinecomplete</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Polyline.md">Polyline</a></code></div>
<div class="desc">This event is fired when the user has finished drawing a polyline.</div></td>
</tr>
<tr>
<td><code>rectanglecomplete</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Rectangle.md">Rectangle</a></code></div>
<div class="desc">This event is fired when the user has finished drawing a rectangle.</div></td>
</tr>
</tbody>
</table>