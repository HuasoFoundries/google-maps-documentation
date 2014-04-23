<h2 id="PolygonOptions">
google.maps.PolygonOptions
object specification
</h2><h3>Properties</h3><table summary="interface PolygonOptions - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>clickable</code></td>
<td><code>boolean</code></td>
<td>Indicates whether this <code>Polygon</code> handles mouse events. Defaults to <code>true</code>.</td>
</tr>
<tr>
<td><code>draggable</code></td>
<td><code>boolean</code></td>
<td>If set to true, the user can drag this shape over the map. The <code>geodesic</code> property defines the mode of dragging. Defaults to <code>false</code>.</td>
</tr>
<tr>
<td><code>editable</code></td>
<td><code>boolean</code></td>
<td>If set to true, the user can edit this shape by dragging the control points shown at the vertices and on each segment. Defaults to <code>false</code>.</td>
</tr>
<tr>
<td><code>fillColor</code></td>
<td><code>string</code></td>
<td>The fill color. All CSS3 colors are supported except for extended named colors.</td>
</tr>
<tr>
<td><code>fillOpacity</code></td>
<td><code>number</code></td>
<td>The fill opacity between 0.0 and 1.0</td>
</tr>
<tr>
<td><code>geodesic</code></td>
<td><code>boolean</code></td>
<td>When true, edges of the polygon are interpreted as geodesic and will follow the curvature of the Earth. When false, edges of the polygon are rendered as straight lines in screen space. Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions are maintained relative to the surface of the earth. Defaults to <code>false</code>.</td>
</tr>
<tr>
<td><code>map</code></td>
<td><code><a href="#Map">Map</a></code></td>
<td>Map on which to display Polygon.</td>
</tr>
<tr>
<td><code>paths</code></td>
<td><code><a href="#MVCArray">MVCArray</a>.&lt;<a href="#MVCArray">MVCArray</a>.&lt;<a href="#LatLng">LatLng</a>&gt;&gt;|<a href="#MVCArray">MVCArray</a>.&lt;<a href="#LatLng">LatLng</a>&gt;|Array.&lt;Array.&lt;<a href="#LatLng">LatLng</a>|<a href="#LatLngLiteral">LatLngLiteral</a>&gt;&gt;|Array.&lt;<a href="#LatLng">LatLng</a>|<a href="#LatLngLiteral">LatLngLiteral</a>&gt;</code></td>
<td>The ordered sequence of coordinates that designates a closed loop. Unlike polylines, a polygon may consist of one or more paths. As a result, the paths property may specify one or more arrays of <code>LatLng</code> coordinates. Paths are closed automatically; do not repeat the first vertex of the path as the last vertex. Simple polygons may be defined using a single array of <code>LatLng</code>s. More complex polygons may specify an array of arrays. Any simple arrays are converted into <code><a href="#MVCArray">MVCArray</a></code>s. Inserting or removing <code>LatLng</code>s from the <code>MVCArray</code> will automatically update the polygon on the map.</td>
</tr>
<tr>
<td><code>strokeColor</code></td>
<td><code>string</code></td>
<td>The stroke color. All CSS3 colors are supported except for extended named colors.</td>
</tr>
<tr>
<td><code>strokeOpacity</code></td>
<td><code>number</code></td>
<td>The stroke opacity between 0.0 and 1.0</td>
</tr>
<tr>
<td><code>strokePosition</code></td>
<td><code><a href="#StrokePosition">StrokePosition</a></code></td>
<td>The stroke position. Defaults to CENTER. This property is not supported on Internet Explorer 8 and earlier.</td>
</tr>
<tr>
<td><code>strokeWeight</code></td>
<td><code>number</code></td>
<td>The stroke width in pixels.</td>
</tr>
<tr>
<td><code>visible</code></td>
<td><code>boolean</code></td>
<td>Whether this polygon is visible on the map. Defaults to <code>true</code>.</td>
</tr>
<tr>
<td><code>zIndex</code></td>
<td><code>number</code></td>
<td>The zIndex compared to other polys.</td>
</tr>
</tbody>
</table>