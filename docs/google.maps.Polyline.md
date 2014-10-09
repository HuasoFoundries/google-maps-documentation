<h2 id="Polyline">
google.maps.Polyline
class
</h2><p>A polyline is a linear overlay of connected line segments on the map.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCObject.md">MVCObject</a></code>.
</p><h3>Constructor</h3><table summary="class Polyline - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>Polyline(opts?:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.PolylineOptions.md"><em>PolylineOptions</em></a>)</code></td>
<td>Create a polyline using the passed <code><em><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.PolylineOptions.md">PolylineOptions</a></em></code>, which specify both the path of the polyline and the stroke style to use when drawing the polyline. You may pass either an array of <code>LatLng</code>s or an <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCArray.md">MVCArray</a></code> of <code>LatLng</code>s when constructing a polyline, though simple arrays are converted to <code>MVCArray</code>s within the polyline upon instantiation.</td>
</tr>
</tbody>
</table><h3>Methods</h3><table summary="class Polyline - Methods" width="100%">
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
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCArray.md">MVCArray</a>.&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>&gt;</code></td>
<td>Retrieves the path.</td>
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
<td><code>setOptions(options:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.PolylineOptions.md"><em>PolylineOptions</em></a>)</code></td>
<td><code>None</code></td>
<td></td>
</tr>
<tr>
<td><code>setPath(path:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCArray.md">MVCArray</a>.&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>&gt;|Array.&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngLiteral.md">LatLngLiteral</a>&gt;)</code></td>
<td><code>None</code></td>
<td>Sets the path. See <em><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.PolylineOptions.md">PolylineOptions</a></code></em> for more details.</td>
</tr>
<tr>
<td><code>setVisible(visible:boolean)</code></td>
<td><code>None</code></td>
<td>Hides this poly if set to <code>false</code>.</td>
</tr>
</tbody>
</table><h3>Events</h3><table summary="class Polyline - Events" width="100%">
<thead>
<tr><th>Events</th>
<th>Arguments</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>click</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.PolyMouseEvent.md"><em>PolyMouseEvent</em></a></code></td>
<td>This event is fired when the DOM click event is fired on the Polyline.</td>
</tr>
<tr>
<td><code>dblclick</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.PolyMouseEvent.md"><em>PolyMouseEvent</em></a></code></td>
<td>This event is fired when the DOM dblclick event is fired on the Polyline.</td>
</tr>
<tr>
<td><code>drag</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is repeatedly fired while the user drags the polyline.</td>
</tr>
<tr>
<td><code>dragend</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the user stops dragging the polyline.</td>
</tr>
<tr>
<td><code>dragstart</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the user starts dragging the polyline.</td>
</tr>
<tr>
<td><code>mousedown</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.PolyMouseEvent.md"><em>PolyMouseEvent</em></a></code></td>
<td>This event is fired when the DOM mousedown event is fired on the Polyline.</td>
</tr>
<tr>
<td><code>mousemove</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.PolyMouseEvent.md"><em>PolyMouseEvent</em></a></code></td>
<td>This event is fired when the DOM mousemove event is fired on the Polyline.</td>
</tr>
<tr>
<td><code>mouseout</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.PolyMouseEvent.md"><em>PolyMouseEvent</em></a></code></td>
<td>This event is fired on Polyline mouseout.</td>
</tr>
<tr>
<td><code>mouseover</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.PolyMouseEvent.md"><em>PolyMouseEvent</em></a></code></td>
<td>This event is fired on Polyline mouseover.</td>
</tr>
<tr>
<td><code>mouseup</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.PolyMouseEvent.md"><em>PolyMouseEvent</em></a></code></td>
<td>This event is fired when the DOM mouseup event is fired on the Polyline.</td>
</tr>
<tr>
<td><code>rightclick</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.PolyMouseEvent.md"><em>PolyMouseEvent</em></a></code></td>
<td>This event is fired when the Polyline is right-clicked on.</td>
</tr>
</tbody>
</table>