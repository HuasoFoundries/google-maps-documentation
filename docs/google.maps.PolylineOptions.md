<h2 id="PolylineOptions">
google.maps.PolylineOptions
object specification
</h2><h3>Properties</h3><table summary="interface PolylineOptions - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>clickable</code></td>
<td><code>boolean</code></td>
<td>Indicates whether this <code>Polyline</code> handles mouse events. Defaults to <code>true</code>.</td>
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
<td><code>geodesic</code></td>
<td><code>boolean</code></td>
<td>When true, edges of the polygon are interpreted as geodesic and will follow the curvature of the Earth. When false, edges of the polygon are rendered as straight lines in screen space. Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions are maintained relative to the surface of the earth. Defaults to <code>false</code>.</td>
</tr>
<tr>
<td><code>icons</code></td>
<td><code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.IconSequence.md">IconSequence</a>&gt;</code></td>
<td>The icons to be rendered along the polyline.</td>
</tr>
<tr>
<td><code>map</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a></code></td>
<td>Map on which to display Polyline.</td>
</tr>
<tr>
<td><code>path</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>&gt;|Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngLiteral.md">LatLngLiteral</a>&gt;</code></td>
<td>The ordered sequence of coordinates of the Polyline. This path may be specified using either a simple array of <code>LatLng</code>s, or an <code>MVCArray</code> of <code>LatLng</code>s. Note that if you pass a simple array, it will be converted to an <code>MVCArray</code> Inserting or removing LatLngs in the <code>MVCArray</code> will automatically update the polyline on the map.</td>
</tr>
<tr>
<td><code>strokeColor</code></td>
<td><code>string</code></td>
<td>The stroke color. All CSS3 colors are supported except for extended named colors.</td>
</tr>
<tr>
<td><code>strokeOpacity</code></td>
<td><code>number</code></td>
<td>The stroke opacity between 0.0 and 1.0.</td>
</tr>
<tr>
<td><code>strokeWeight</code></td>
<td><code>number</code></td>
<td>The stroke width in pixels.</td>
</tr>
<tr>
<td><code>visible</code></td>
<td><code>boolean</code></td>
<td>Whether this polyline is visible on the map. Defaults to <code>true</code>.</td>
</tr>
<tr>
<td><code>zIndex</code></td>
<td><code>number</code></td>
<td>The zIndex compared to other polys.</td>
</tr>
</tbody>
</table>