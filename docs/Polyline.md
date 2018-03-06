<h2 id="Polyline"> Polyline class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Polyline</span></code>
class
</p><p>A polyline is a linear overlay of connected line segments on the map.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Polyline - Constructor">
<thead>
<tr><th colspan="2" id="Polyline.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>Polyline</span></code></td>
<td><div><code>Polyline([opts])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>opts</code> (optional):&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolylineOptions.md">PolylineOptions</a></code></li>
</ul></div>
<div class="desc">Create a polyline using the passed <code><em><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolylineOptions.md">PolylineOptions</a></em></code>, which specify both the path of the polyline and the stroke style to use when drawing the polyline. You may pass either an array of <code>LatLng</code>s or an <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md">MVCArray</a></code> of <code>LatLng</code>s when constructing a polyline, though simple arrays are converted to <code>MVCArray</code>s within the polyline upon instantiation.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class Polyline - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Polyline.getDraggable">
<td><code><span>getDraggable</span></code></td>
<td><div><code>getDraggable()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns whether this shape can be dragged by the user.</div></td>
</tr>
<tr id="Polyline.getEditable">
<td><code><span>getEditable</span></code></td>
<td><div><code>getEditable()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns whether this shape can be edited by the user.</div></td>
</tr>
<tr id="Polyline.getMap">
<td><code><span>getMap</span></code></td>
<td><div><code>getMap()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc">Returns the map on which this shape is attached.</div></td>
</tr>
<tr id="Polyline.getPath">
<td><code><span>getPath</span></code></td>
<td><div><code>getPath()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>&gt;</code></div>
<div class="desc">Retrieves the path.</div></td>
</tr>
<tr id="Polyline.getVisible">
<td><code><span>getVisible</span></code></td>
<td><div><code>getVisible()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns whether this poly is visible on the map.</div></td>
</tr>
<tr id="Polyline.setDraggable">
<td><code><span>setDraggable</span></code></td>
<td><div><code>setDraggable(draggable)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>draggable</code>:&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">If set to true, the user can drag this shape over the map. The <code>geodesic</code> property defines the mode of dragging.</div></td>
</tr>
<tr id="Polyline.setEditable">
<td><code><span>setEditable</span></code></td>
<td><div><code>setEditable(editable)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>editable</code>:&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">If set to true, the user can edit this shape by dragging the control points shown at the vertices and on each segment.</div></td>
</tr>
<tr id="Polyline.setMap">
<td><code><span>setMap</span></code></td>
<td><div><code>setMap(map)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>map</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Renders this shape on the specified map. If map is set to null, the shape will be removed.</div></td>
</tr>
<tr id="Polyline.setOptions">
<td><code><span>setOptions</span></code></td>
<td><div><code>setOptions(options)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>options</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolylineOptions.md">PolylineOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Polyline.setPath">
<td><code><span>setPath</span></code></td>
<td><div><code>setPath(path)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>path</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>&gt;|Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md">LatLngLiteral</a>&gt;</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the path. See <em><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolylineOptions.md">PolylineOptions</a></code></em> for more details.</div></td>
</tr>
<tr id="Polyline.setVisible">
<td><code><span>setVisible</span></code></td>
<td><div><code>setVisible(visible)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>visible</code>:&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Hides this poly if set to <code>false</code>.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="details responsive" summary="class Polyline - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="Polyline.click">
<td><code><span>click</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM click event is fired on the Polyline.</div></td>
</tr>
<tr id="Polyline.dblclick">
<td><code><span>dblclick</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM dblclick event is fired on the Polyline.</div></td>
</tr>
<tr id="Polyline.drag">
<td><code><span>drag</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is repeatedly fired while the user drags the polyline.</div></td>
</tr>
<tr id="Polyline.dragend">
<td><code><span>dragend</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user stops dragging the polyline.</div></td>
</tr>
<tr id="Polyline.dragstart">
<td><code><span>dragstart</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user starts dragging the polyline.</div></td>
</tr>
<tr id="Polyline.mousedown">
<td><code><span>mousedown</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM mousedown event is fired on the Polyline.</div></td>
</tr>
<tr id="Polyline.mousemove">
<td><code><span>mousemove</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM mousemove event is fired on the Polyline.</div></td>
</tr>
<tr id="Polyline.mouseout">
<td><code><span>mouseout</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired on Polyline mouseout.</div></td>
</tr>
<tr id="Polyline.mouseover">
<td><code><span>mouseover</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired on Polyline mouseover.</div></td>
</tr>
<tr id="Polyline.mouseup">
<td><code><span>mouseup</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM mouseup event is fired on the Polyline.</div></td>
</tr>
<tr id="Polyline.rightclick">
<td><code><span>rightclick</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the Polyline is right-clicked on.</div></td>
</tr>
</tbody>
</table></div>