<h2 id="Polyline"> Polyline class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Polyline</span></code>
class
</p><p>A polyline is a linear overlay of connected line segments on the map.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Polyline - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>Polyline(<wbr>opts?:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolylineOptions.md"><em><span>PolylineOptions</span></em></a><span>)</span></code></td>
<td>Create a polyline using the passed <code><em><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolylineOptions.md"><span>PolylineOptions</span></a></em></code>, which specify both the path of the polyline and the stroke style to use when drawing the polyline. You may pass either an array of <code><span>LatLng</span></code>s or an <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md"><span>MVCArray</span></a></code> of <code><span>LatLng</span></code>s when constructing a polyline, though simple arrays are converted to <code><span>MVCArray</span></code>s within the polyline upon instantiation.</td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class Polyline - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>getDraggable()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns whether this shape can be dragged by the user.</div></td>
</tr>
<tr>
<td><code><span>getEditable()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns whether this shape can be edited by the user.</div></td>
</tr>
<tr>
<td><code><span>getMap()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc">Returns the map on which this shape is attached.</div></td>
</tr>
<tr>
<td><code><span>getPath()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>&gt;</code></div>
<div class="desc">Retrieves the path.</div></td>
</tr>
<tr>
<td><code><span>getVisible()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns whether this poly is visible on the map.</div></td>
</tr>
<tr>
<td><code><span>setDraggable(<wbr>draggable:boolean)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">If set to true, the user can drag this shape over the map. The <code>geodesic</code> property defines the mode of dragging.</div></td>
</tr>
<tr>
<td><code><span>setEditable(<wbr>editable:boolean)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">If set to true, the user can edit this shape by dragging the control points shown at the vertices and on each segment.</div></td>
</tr>
<tr>
<td><code><span>setMap(<wbr>map:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md"><span>Map</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Renders this shape on the specified map. If map is set to null, the shape will be removed.</div></td>
</tr>
<tr>
<td><code><span>setOptions(<wbr>options:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolylineOptions.md"><em><span>PolylineOptions</span></em></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>setPath(<wbr>path:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md"><span>MVCArray</span></a><span>&lt;</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>&gt;|<wbr>Array&lt;</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md"><span>LatLngLiteral</span></a><span>&gt;)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the path. See <em><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolylineOptions.md">PolylineOptions</a></code></em> for more details.</div></td>
</tr>
<tr>
<td><code><span>setVisible(<wbr>visible:boolean)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Hides this poly if set to <code>false</code>.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="details responsive" summary="class Polyline - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>click</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolyMouseEvent.md"><em>PolyMouseEvent</em></a></code></div>
<div class="desc">This event is fired when the DOM click event is fired on the Polyline.</div></td>
</tr>
<tr>
<td><code><span>dblclick</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolyMouseEvent.md"><em>PolyMouseEvent</em></a></code></div>
<div class="desc">This event is fired when the DOM dblclick event is fired on the Polyline.</div></td>
</tr>
<tr>
<td><code><span>drag</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is repeatedly fired while the user drags the polyline.</div></td>
</tr>
<tr>
<td><code><span>dragend</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired when the user stops dragging the polyline.</div></td>
</tr>
<tr>
<td><code><span>dragstart</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired when the user starts dragging the polyline.</div></td>
</tr>
<tr>
<td><code><span>mousedown</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolyMouseEvent.md"><em>PolyMouseEvent</em></a></code></div>
<div class="desc">This event is fired when the DOM mousedown event is fired on the Polyline.</div></td>
</tr>
<tr>
<td><code><span>mousemove</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolyMouseEvent.md"><em>PolyMouseEvent</em></a></code></div>
<div class="desc">This event is fired when the DOM mousemove event is fired on the Polyline.</div></td>
</tr>
<tr>
<td><code><span>mouseout</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolyMouseEvent.md"><em>PolyMouseEvent</em></a></code></div>
<div class="desc">This event is fired on Polyline mouseout.</div></td>
</tr>
<tr>
<td><code><span>mouseover</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolyMouseEvent.md"><em>PolyMouseEvent</em></a></code></div>
<div class="desc">This event is fired on Polyline mouseover.</div></td>
</tr>
<tr>
<td><code><span>mouseup</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolyMouseEvent.md"><em>PolyMouseEvent</em></a></code></div>
<div class="desc">This event is fired when the DOM mouseup event is fired on the Polyline.</div></td>
</tr>
<tr>
<td><code><span>rightclick</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolyMouseEvent.md"><em>PolyMouseEvent</em></a></code></div>
<div class="desc">This event is fired when the Polyline is right-clicked on.</div></td>
</tr>
</tbody>
</table></div>