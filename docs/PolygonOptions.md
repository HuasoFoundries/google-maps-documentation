
<h2 id="PolygonOptions">PolygonOptions interface</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">PolygonOptions</span></code>
interface
</p>
<p>PolygonOptions object used to define the properties that can be set on a Polygon.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface PolygonOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="PolygonOptions.clickable">
<td itemprop="property"><code><a class="secret-link" href="#PolygonOptions.clickable"><span>clickable</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Indicates whether this <code>Polygon</code> handles mouse events. Defaults to <code>true</code>.</div></td>
</tr>
<tr id="PolygonOptions.draggable">
<td itemprop="property"><code><a class="secret-link" href="#PolygonOptions.draggable"><span>draggable</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If set to true, the user can drag this shape over the map. The <code>geodesic</code> property defines the mode of dragging. Defaults to <code>false</code>.</div></td>
</tr>
<tr id="PolygonOptions.editable">
<td itemprop="property"><code><a class="secret-link" href="#PolygonOptions.editable"><span>editable</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If set to true, the user can edit this shape by dragging the control points shown at the vertices and on each segment. Defaults to <code>false</code>.</div></td>
</tr>
<tr id="PolygonOptions.fillColor">
<td itemprop="property"><code><a class="secret-link" href="#PolygonOptions.fillColor"><span>fillColor</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The fill color. All CSS3 colors are supported except for extended named colors.</div></td>
</tr>
<tr id="PolygonOptions.fillOpacity">
<td itemprop="property"><code><a class="secret-link" href="#PolygonOptions.fillOpacity"><span>fillOpacity</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The fill opacity between 0.0 and 1.0</div></td>
</tr>
<tr id="PolygonOptions.geodesic">
<td itemprop="property"><code><a class="secret-link" href="#PolygonOptions.geodesic"><span>geodesic</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">When true, edges of the polygon are interpreted as geodesic and will follow the curvature of the Earth. When false, edges of the polygon are rendered as straight lines in screen space. Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions are maintained relative to the surface of the earth. Defaults to <code>false</code>.</div></td>
</tr>
<tr id="PolygonOptions.map">
<td itemprop="property"><code><a class="secret-link" href="#PolygonOptions.map"><span>map</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="Map.md">Map</a></code></div>
<div class="desc">Map on which to display Polygon.</div></td>
</tr>
<tr id="PolygonOptions.paths">
<td itemprop="property"><code><a class="secret-link" href="#PolygonOptions.paths"><span>paths</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="MVCArray.md">MVCArray</a>&lt;<a href="MVCArray.md">MVCArray</a>&lt;<a href="LatLng.md">LatLng</a>&gt;&gt;|<a href="MVCArray.md">MVCArray</a>&lt;<a href="LatLng.md">LatLng</a>&gt;|Array&lt;Array&lt;<a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a>&gt;&gt;|Array&lt;<a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a>&gt;</code></div>
<div class="desc">The ordered sequence of coordinates that designates a closed loop. Unlike polylines, a polygon may consist of one or more paths. As a result, the paths property may specify one or more arrays of <code>LatLng</code> coordinates. Paths are closed automatically; do not repeat the first vertex of the path as the last vertex. Simple polygons may be defined using a single array of <code>LatLng</code>s. More complex polygons may specify an array of arrays. Any simple arrays are converted into <code><a href="#MVCArray">MVCArray</a></code>s. Inserting or removing <code>LatLng</code>s from the <code>MVCArray</code> will automatically update the polygon on the map.</div></td>
</tr>
<tr id="PolygonOptions.strokeColor">
<td itemprop="property"><code><a class="secret-link" href="#PolygonOptions.strokeColor"><span>strokeColor</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The stroke color. All CSS3 colors are supported except for extended named colors.</div></td>
</tr>
<tr id="PolygonOptions.strokeOpacity">
<td itemprop="property"><code><a class="secret-link" href="#PolygonOptions.strokeOpacity"><span>strokeOpacity</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The stroke opacity between 0.0 and 1.0</div></td>
</tr>
<tr id="PolygonOptions.strokePosition">
<td itemprop="property"><code><a class="secret-link" href="#PolygonOptions.strokePosition"><span>strokePosition</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="StrokePosition.md">StrokePosition</a></code></div>
<div class="desc">The stroke position. Defaults to CENTER. This property is not supported on Internet Explorer 8 and earlier.</div></td>
</tr>
<tr id="PolygonOptions.strokeWeight">
<td itemprop="property"><code><a class="secret-link" href="#PolygonOptions.strokeWeight"><span>strokeWeight</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The stroke width in pixels.</div></td>
</tr>
<tr id="PolygonOptions.visible">
<td itemprop="property"><code><a class="secret-link" href="#PolygonOptions.visible"><span>visible</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Whether this polygon is visible on the map. Defaults to <code>true</code>.</div></td>
</tr>
<tr id="PolygonOptions.zIndex">
<td itemprop="property"><code><a class="secret-link" href="#PolygonOptions.zIndex"><span>zIndex</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The zIndex compared to other polys.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
