<h2 id="Polygon">
google.maps.Polygon
class
</h2><p>A polygon (like a polyline) defines a series of connected coordinates in an ordered sequence; additionally, polygons form a closed loop and define a filled region.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCObject.md">MVCObject</a></code>.
</p><h3 id="devsite_header_75">Constructor</h3><table summary="class Polygon - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>Polygon(opts?:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.PolygonOptions.md"><em>PolygonOptions</em></a>)</code></td>
<td>Create a polygon using the passed <code><em><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.PolygonOptions.md">PolygonOptions</a></em></code>, which specify the polygon's path, the stroke style for the polygon's edges, and the fill style for the polygon's interior regions. A polygon may contain one or more paths, where each path consists of an array of <code>LatLng</code>s. You may pass either an array of LatLngs or an <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCArray.md">MVCArray</a></code> of <code>LatLng</code>s when constructing these paths. Arrays are converted to <code>MVCArray</code>s within the polygon upon instantiation.</td>
</tr>
</tbody>
</table><h3 id="devsite_header_76">Methods</h3><table summary="class Polygon - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getDraggable()</code></td>
<td><code>boolean</code></td>
<td>Returns whether this shape can be dragged by the user.</td>
</tr>
<tr>
<td><code>getEditable()</code></td>
<td><code>boolean</code></td>
<td>Returns whether this shape can be edited by the user.</td>
</tr>
<tr>
<td><code>getMap()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a></code></td>
<td>Returns the map on which this shape is attached.</td>
</tr>
<tr>
<td><code>getPath()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>&gt;</code></td>
<td>Retrieves the first path.</td>
</tr>
<tr>
<td><code>getPaths()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>&gt;&gt;</code></td>
<td>Retrieves the paths for this polygon.</td>
</tr>
<tr>
<td><code>getVisible()</code></td>
<td><code>boolean</code></td>
<td>Returns whether this poly is visible on the map.</td>
</tr>
<tr>
<td><code>setDraggable(draggable:boolean)</code></td>
<td><code>None</code></td>
<td>If set to true, the user can drag this shape over the map. The <code>geodesic</code> property defines the mode of dragging.</td>
</tr>
<tr>
<td><code>setEditable(editable:boolean)</code></td>
<td><code>None</code></td>
<td>If set to true, the user can edit this shape by dragging the control points shown at the vertices and on each segment.</td>
</tr>
<tr>
<td><code>setMap(map:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a>)</code></td>
<td><code>None</code></td>
<td>Renders this shape on the specified map. If map is set to null, the shape will be removed.</td>
</tr>
<tr>
<td><code>setOptions(options:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.PolygonOptions.md"><em>PolygonOptions</em></a>)</code></td>
<td><code>None</code></td>
<td></td>
</tr>
<tr>
<td><code>setPath(path:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>&gt;|Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngLiteral.md">LatLngLiteral</a>&gt;)</code></td>
<td><code>None</code></td>
<td>Sets the first path. See <em><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.PolygonOptions.md">PolygonOptions</a></code></em> for more details.</td>
</tr>
<tr>
<td><code>setPaths(paths:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>&gt;&gt;|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>&gt;|Array&lt;Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngLiteral.md">LatLngLiteral</a>&gt;&gt;|Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngLiteral.md">LatLngLiteral</a>&gt;)</code></td>
<td><code>None</code></td>
<td>Sets the path for this polygon.</td>
</tr>
<tr>
<td><code>setVisible(visible:boolean)</code></td>
<td><code>None</code></td>
<td>Hides this poly if set to <code>false</code>.</td>
</tr>
</tbody>
</table><h3 id="devsite_header_77">Events</h3><table summary="class Polygon - Events" width="100%">
<thead>
<tr><th>Events</th>
<th>Arguments</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>click</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.PolyMouseEvent.md"><em>PolyMouseEvent</em></a></code></td>
<td>This event is fired when the DOM click event is fired on the Polygon.</td>
</tr>
<tr>
<td><code>dblclick</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.PolyMouseEvent.md"><em>PolyMouseEvent</em></a></code></td>
<td>This event is fired when the DOM dblclick event is fired on the Polygon.</td>
</tr>
<tr>
<td><code>drag</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is repeatedly fired while the user drags the polygon.</td>
</tr>
<tr>
<td><code>dragend</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the user stops dragging the polygon.</td>
</tr>
<tr>
<td><code>dragstart</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the user starts dragging the polygon.</td>
</tr>
<tr>
<td><code>mousedown</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.PolyMouseEvent.md"><em>PolyMouseEvent</em></a></code></td>
<td>This event is fired when the DOM mousedown event is fired on the Polygon.</td>
</tr>
<tr>
<td><code>mousemove</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.PolyMouseEvent.md"><em>PolyMouseEvent</em></a></code></td>
<td>This event is fired when the DOM mousemove event is fired on the Polygon.</td>
</tr>
<tr>
<td><code>mouseout</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.PolyMouseEvent.md"><em>PolyMouseEvent</em></a></code></td>
<td>This event is fired on Polygon mouseout.</td>
</tr>
<tr>
<td><code>mouseover</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.PolyMouseEvent.md"><em>PolyMouseEvent</em></a></code></td>
<td>This event is fired on Polygon mouseover.</td>
</tr>
<tr>
<td><code>mouseup</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.PolyMouseEvent.md"><em>PolyMouseEvent</em></a></code></td>
<td>This event is fired when the DOM mouseup event is fired on the Polygon.</td>
</tr>
<tr>
<td><code>rightclick</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.PolyMouseEvent.md"><em>PolyMouseEvent</em></a></code></td>
<td>This event is fired when the Polygon is right-clicked on.</td>
</tr>
</tbody>
</table>