
<h2 id="Polyline">Polyline class</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Polyline</span></code>
class
</p>
<p>A polyline is a linear overlay of connected line segments on the map.</p>
<p>This class extends
<code><a href="MVCObject.md">MVCObject</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Polyline - Constructor">
<thead>
<tr><th colspan="2" id="Polyline.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><a class="secret-link" href="#Polyline.constructor"><span>Polyline</span></a></code></td>
<td><div><code>Polyline([opts])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>opts</code>:&nbsp; <code><a href="PolylineOptions.md">PolylineOptions</a> <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc">Create a polyline using the passed <code><em><a href="PolylineOptions.md">PolylineOptions</a></em></code>, which specify both the path of the polyline and the stroke style to use when drawing the polyline. You may pass either an array of <code>LatLng</code>s or an <code><a href="#MVCArray">MVCArray</a></code> of <code>LatLng</code>s when constructing a polyline, though simple arrays are converted to <code>MVCArray</code>s within the polyline upon instantiation.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class Polyline - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Polyline.getDraggable">
<td itemprop="property"><code><a class="secret-link" href="#Polyline.getDraggable"><span>getDraggable</span></a></code></td>
<td><div><code>getDraggable()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns whether this shape can be dragged by the user.</div></td>
</tr>
<tr id="Polyline.getEditable">
<td itemprop="property"><code><a class="secret-link" href="#Polyline.getEditable"><span>getEditable</span></a></code></td>
<td><div><code>getEditable()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns whether this shape can be edited by the user.</div></td>
</tr>
<tr id="Polyline.getMap">
<td itemprop="property"><code><a class="secret-link" href="#Polyline.getMap"><span>getMap</span></a></code></td>
<td><div><code>getMap()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="Map.md">Map</a></code></div>
<div class="desc">Returns the map on which this shape is attached.</div></td>
</tr>
<tr id="Polyline.getPath">
<td itemprop="property"><code><a class="secret-link" href="#Polyline.getPath"><span>getPath</span></a></code></td>
<td><div><code>getPath()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="MVCArray.md">MVCArray</a>&lt;<a href="LatLng.md">LatLng</a>&gt;</code></div>
<div class="desc">Retrieves the path.</div></td>
</tr>
<tr id="Polyline.getVisible">
<td itemprop="property"><code><a class="secret-link" href="#Polyline.getVisible"><span>getVisible</span></a></code></td>
<td><div><code>getVisible()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns whether this poly is visible on the map.</div></td>
</tr>
<tr id="Polyline.setDraggable">
<td itemprop="property"><code><a class="secret-link" href="#Polyline.setDraggable"><span>setDraggable</span></a></code></td>
<td><div><code>setDraggable(draggable)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>draggable</code>:&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">If set to true, the user can drag this shape over the map. The <code>geodesic</code> property defines the mode of dragging.</div></td>
</tr>
<tr id="Polyline.setEditable">
<td itemprop="property"><code><a class="secret-link" href="#Polyline.setEditable"><span>setEditable</span></a></code></td>
<td><div><code>setEditable(editable)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>editable</code>:&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">If set to true, the user can edit this shape by dragging the control points shown at the vertices and on each segment.</div></td>
</tr>
<tr id="Polyline.setMap">
<td itemprop="property"><code><a class="secret-link" href="#Polyline.setMap"><span>setMap</span></a></code></td>
<td><div><code>setMap(map)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>map</code>:&nbsp; <code><a href="Map.md">Map</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Renders this shape on the specified map. If map is set to null, the shape will be removed.</div></td>
</tr>
<tr id="Polyline.setOptions">
<td itemprop="property"><code><a class="secret-link" href="#Polyline.setOptions"><span>setOptions</span></a></code></td>
<td><div><code>setOptions(options)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>options</code>:&nbsp; <code><a href="PolylineOptions.md">PolylineOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Polyline.setPath">
<td itemprop="property"><code><a class="secret-link" href="#Polyline.setPath"><span>setPath</span></a></code></td>
<td><div><code>setPath(path)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>path</code>:&nbsp; <code><a href="MVCArray.md">MVCArray</a>&lt;<a href="LatLng.md">LatLng</a>&gt;|Array&lt;<a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a>&gt;</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the path. See <em><code><a href="PolylineOptions.md">PolylineOptions</a></code></em> for more details.</div></td>
</tr>
<tr id="Polyline.setVisible">
<td itemprop="property"><code><a class="secret-link" href="#Polyline.setVisible"><span>setVisible</span></a></code></td>
<td><div><code>setVisible(visible)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>visible</code>:&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Hides this poly if set to <code>false</code>.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="details responsive" summary="class Polyline - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="Polyline.click">
<td itemprop="property"><code><a class="secret-link" href="#Polyline.click"><span>click</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM click event is fired on the Polyline.</div></td>
</tr>
<tr id="Polyline.dblclick">
<td itemprop="property"><code><a class="secret-link" href="#Polyline.dblclick"><span>dblclick</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM dblclick event is fired on the Polyline.</div></td>
</tr>
<tr id="Polyline.drag">
<td itemprop="property"><code><a class="secret-link" href="#Polyline.drag"><span>drag</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is repeatedly fired while the user drags the polyline.</div></td>
</tr>
<tr id="Polyline.dragend">
<td itemprop="property"><code><a class="secret-link" href="#Polyline.dragend"><span>dragend</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user stops dragging the polyline.</div></td>
</tr>
<tr id="Polyline.dragstart">
<td itemprop="property"><code><a class="secret-link" href="#Polyline.dragstart"><span>dragstart</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user starts dragging the polyline.</div></td>
</tr>
<tr id="Polyline.mousedown">
<td itemprop="property"><code><a class="secret-link" href="#Polyline.mousedown"><span>mousedown</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM mousedown event is fired on the Polyline.</div></td>
</tr>
<tr id="Polyline.mousemove">
<td itemprop="property"><code><a class="secret-link" href="#Polyline.mousemove"><span>mousemove</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM mousemove event is fired on the Polyline.</div></td>
</tr>
<tr id="Polyline.mouseout">
<td itemprop="property"><code><a class="secret-link" href="#Polyline.mouseout"><span>mouseout</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired on Polyline mouseout.</div></td>
</tr>
<tr id="Polyline.mouseover">
<td itemprop="property"><code><a class="secret-link" href="#Polyline.mouseover"><span>mouseover</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired on Polyline mouseover.</div></td>
</tr>
<tr id="Polyline.mouseup">
<td itemprop="property"><code><a class="secret-link" href="#Polyline.mouseup"><span>mouseup</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM mouseup event is fired on the Polyline.</div></td>
</tr>
<tr id="Polyline.rightclick">
<td itemprop="property"><code><a class="secret-link" href="#Polyline.rightclick"><span>rightclick</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the Polyline is right-clicked on.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
