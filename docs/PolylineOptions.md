<h2 id="PolylineOptions"> PolylineOptions interface </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">PolylineOptions</span></code>
interface
</p><p>PolylineOptions object used to define the properties that can be set on a Polyline.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface PolylineOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="PolylineOptions.clickable">
<td><code><span>clickable</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Indicates whether this <code>Polyline</code> handles mouse events. Defaults to <code>true</code>.</div></td>
</tr>
<tr id="PolylineOptions.draggable">
<td><code><span>draggable</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If set to true, the user can drag this shape over the map. The <code>geodesic</code> property defines the mode of dragging. Defaults to <code>false</code>.</div></td>
</tr>
<tr id="PolylineOptions.editable">
<td><code><span>editable</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If set to true, the user can edit this shape by dragging the control points shown at the vertices and on each segment. Defaults to <code>false</code>.</div></td>
</tr>
<tr id="PolylineOptions.geodesic">
<td><code><span>geodesic</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">When true, edges of the polygon are interpreted as geodesic and will follow the curvature of the Earth. When false, edges of the polygon are rendered as straight lines in screen space. Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions are maintained relative to the surface of the earth. Defaults to <code>false</code>.</div></td>
</tr>
<tr id="PolylineOptions.icons">
<td><code><span>icons</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/IconSequence.md">IconSequence</a>&gt;</code></div>
<div class="desc">The icons to be rendered along the polyline.</div></td>
</tr>
<tr id="PolylineOptions.map">
<td><code><span>map</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc">Map on which to display Polyline.</div></td>
</tr>
<tr id="PolylineOptions.path">
<td><code><span>path</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>&gt;|Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md">LatLngLiteral</a>&gt;</code></div>
<div class="desc">The ordered sequence of coordinates of the Polyline. This path may be specified using either a simple array of <code>LatLng</code>s, or an <code>MVCArray</code> of <code>LatLng</code>s. Note that if you pass a simple array, it will be converted to an <code>MVCArray</code> Inserting or removing LatLngs in the <code>MVCArray</code> will automatically update the polyline on the map.</div></td>
</tr>
<tr id="PolylineOptions.strokeColor">
<td><code><span>strokeColor</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The stroke color. All CSS3 colors are supported except for extended named colors.</div></td>
</tr>
<tr id="PolylineOptions.strokeOpacity">
<td><code><span>strokeOpacity</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The stroke opacity between 0.0 and 1.0.</div></td>
</tr>
<tr id="PolylineOptions.strokeWeight">
<td><code><span>strokeWeight</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The stroke width in pixels.</div></td>
</tr>
<tr id="PolylineOptions.visible">
<td><code><span>visible</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Whether this polyline is visible on the map. Defaults to <code>true</code>.</div></td>
</tr>
<tr id="PolylineOptions.zIndex">
<td><code><span>zIndex</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The zIndex compared to other polys.</div></td>
</tr>
</tbody>
</table></div>