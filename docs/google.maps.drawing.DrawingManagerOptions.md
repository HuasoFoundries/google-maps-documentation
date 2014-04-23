<h2 id="DrawingManagerOptions">
google.maps.drawing.DrawingManagerOptions
object specification
</h2><p>Options for the drawing manager.</p><h3>Library</h3><p>drawing</p><h3>Properties</h3><table summary="interface DrawingManagerOptions - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>circleOptions</code></td>
<td><code><a href="#CircleOptions">CircleOptions</a></code></td>
<td>Options to apply to any new circles created with this <code>DrawingManager</code>. The <code>center</code> and <code>radius</code> properties are ignored, and the <code>map</code> property of a new circle is always set to the <code>DrawingManager</code>'s map.</td>
</tr>
<tr>
<td><code>drawingControl</code></td>
<td><code>boolean</code></td>
<td>The enabled/disabled state of the drawing control. Defaults to <code>true</code>.</td>
</tr>
<tr>
<td><code>drawingControlOptions</code></td>
<td><code><a href="#DrawingControlOptions">DrawingControlOptions</a></code></td>
<td>The display options for the drawing control.</td>
</tr>
<tr>
<td><code>drawingMode</code></td>
<td><code><a href="#OverlayType">OverlayType</a></code></td>
<td>The <code>DrawingManager</code>'s drawing mode, which defines the type of overlay to be added on the map. Accepted values are <code>MARKER</code>, <code>POLYGON</code>, <code>POLYLINE</code>, <code>RECTANGLE</code>, <code>CIRCLE</code>, or <code>null</code>. A drawing mode of <code>null</code> means that the user can interact with the map as normal, and clicks do not draw anything.</td>
</tr>
<tr>
<td><code>map</code></td>
<td><code><a href="#Map">Map</a></code></td>
<td>The <code>Map</code> to which the <code>DrawingManager</code> is attached, which is the <code>Map</code> on which the overlays created will be placed.</td>
</tr>
<tr>
<td><code>markerOptions</code></td>
<td><code><a href="#MarkerOptions">MarkerOptions</a></code></td>
<td>Options to apply to any new markers created with this <code>DrawingManager</code>. The <code>position</code> property is ignored, and the <code>map</code> property of a new marker is always set to the <code>DrawingManager</code>'s map.</td>
</tr>
<tr>
<td><code>polygonOptions</code></td>
<td><code><a href="#PolygonOptions">PolygonOptions</a></code></td>
<td>Options to apply to any new polygons created with this <code>DrawingManager</code>. The <code>paths</code> property is ignored, and the <code>map</code> property of a new polygon is always set to the <code>DrawingManager</code>'s map.</td>
</tr>
<tr>
<td><code>polylineOptions</code></td>
<td><code><a href="#PolylineOptions">PolylineOptions</a></code></td>
<td>Options to apply to any new polylines created with this <code>DrawingManager</code>. The <code>path</code> property is ignored, and the <code>map</code> property of a new polyline is always set to the <code>DrawingManager</code>'s map.</td>
</tr>
<tr>
<td><code>rectangleOptions</code></td>
<td><code><a href="#RectangleOptions">RectangleOptions</a></code></td>
<td>Options to apply to any new rectangles created with this <code>DrawingManager</code>. The <code>bounds</code> property is ignored, and the <code>map</code> property of a new rectangle is always set to the <code>DrawingManager</code>'s map.</td>
</tr>
</tbody>
</table>