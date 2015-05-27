<h2 id="DrawingManager">
google.maps.drawing.DrawingManager
class
</h2><p>Allows users to draw markers, polygons, polylines, rectangles, and circles on the map. The <code>DrawingManager</code>'s drawing mode defines the type of overlay that will be created by the user. Adds a control to the map, allowing the user to switch drawing mode.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCObject.md">MVCObject</a></code>.
</p><h3>Library</h3><p>drawing</p><h3>Constructor</h3><table summary="class DrawingManager - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>DrawingManager(options?:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.drawing.DrawingManagerOptions.md"><em>DrawingManagerOptions</em></a>)</code></td>
<td>Creates a <code>DrawingManager</code> that allows users to draw overlays on the map, and switch between the type of overlay to be drawn with a drawing control.</td>
</tr>
</tbody>
</table><h3>Methods</h3><table summary="class DrawingManager - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getDrawingMode()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.drawing.OverlayType.md">OverlayType</a></code></td>
<td>Returns the <code>DrawingManager</code>'s drawing mode.</td>
</tr>
<tr>
<td><code>getMap()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a></code></td>
<td>Returns the <code>Map</code> to which the <code>DrawingManager</code> is attached, which is the <code>Map</code> on which the overlays created will be placed.</td>
</tr>
<tr>
<td><code>setDrawingMode(drawingMode:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.drawing.OverlayType.md">OverlayType</a>)</code></td>
<td><code>None</code></td>
<td>Changes the <code>DrawingManager</code>'s drawing mode, which defines the type of overlay to be added on the map. Accepted values are <code>MARKER</code>, <code>POLYGON</code>, <code>POLYLINE</code>, <code>RECTANGLE</code>, <code>CIRCLE</code>, or <code>null</code>. A drawing mode of <code>null</code> means that the user can interact with the map as normal, and clicks do not draw anything.</td>
</tr>
<tr>
<td><code>setMap(map:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a>)</code></td>
<td><code>None</code></td>
<td>Attaches the <code>DrawingManager</code> object to the specified <code>Map</code>.</td>
</tr>
<tr>
<td><code>setOptions(options:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.drawing.DrawingManagerOptions.md"><em>DrawingManagerOptions</em></a>)</code></td>
<td><code>None</code></td>
<td>Sets the <code>DrawingManager</code>'s options.</td>
</tr>
</tbody>
</table><h3>Events</h3><table summary="class DrawingManager - Events" width="100%">
<thead>
<tr><th>Events</th>
<th>Arguments</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>circlecomplete</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Circle.md">Circle</a></code></td>
<td>This event is fired when the user has finished drawing a circle.</td>
</tr>
<tr>
<td><code>markercomplete</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Marker.md">Marker</a></code></td>
<td>This event is fired when the user has finished drawing a marker.</td>
</tr>
<tr>
<td><code>overlaycomplete</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.drawing.OverlayCompleteEvent.md"><em>OverlayCompleteEvent</em></a></code></td>
<td>This event is fired when the user has finished drawing an overlay of any type.</td>
</tr>
<tr>
<td><code>polygoncomplete</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Polygon.md">Polygon</a></code></td>
<td>This event is fired when the user has finished drawing a polygon.</td>
</tr>
<tr>
<td><code>polylinecomplete</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Polyline.md">Polyline</a></code></td>
<td>This event is fired when the user has finished drawing a polyline.</td>
</tr>
<tr>
<td><code>rectanglecomplete</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Rectangle.md">Rectangle</a></code></td>
<td>This event is fired when the user has finished drawing a rectangle.</td>
</tr>
</tbody>
</table>