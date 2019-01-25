
<h2 id="Polygon">Polygon class</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Polygon</span></code>
class
</p>
<p>A polygon (like a polyline) defines a series of connected coordinates in an ordered sequence. Additionally, polygons form a closed loop and define a filled region. See the samples in the developer's guide, starting with a <a href="https://developers.google.com/maps/documentation/javascript/examples/polygon-simple">simple polygon</a>, a <a href="https://developers.google.com/maps/documentation/javascript/examples/polygon-hole">polygon with a hole</a>, and more. Note that you can also use the <a href="#Data.Polygon">Data layer</a> to create a polygon. The Data layer offers a simpler way of creating holes because it handles the order of the inner and outer paths for you.</p>
<p>This class extends
<code><a href="MVCObject.md">MVCObject</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Polygon - Constructor">
<thead>
<tr><th colspan="2" id="Polygon.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><a class="secret-link" href="#Polygon.constructor"><span>Polygon</span></a></code></td>
<td><div><code>Polygon([opts])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>opts</code> (optional):&nbsp; <code><a href="PolygonOptions.md">PolygonOptions</a></code></li>
</ul></div>
<div class="desc">Create a polygon using the passed <code><em><a href="PolygonOptions.md">PolygonOptions</a></em></code>, which specify the polygon's path, the stroke style for the polygon's edges, and the fill style for the polygon's interior regions. A polygon may contain one or more paths, where each path consists of an array of <code>LatLng</code>s. You may pass either an array of LatLngs or an <code><a href="#MVCArray">MVCArray</a></code> of <code>LatLng</code>s when constructing these paths. Arrays are converted to <code>MVCArray</code>s within the polygon upon instantiation.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class Polygon - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Polygon.getDraggable">
<td itemprop="property"><code><a class="secret-link" href="#Polygon.getDraggable"><span>getDraggable</span></a></code></td>
<td><div><code>getDraggable()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns whether this shape can be dragged by the user.</div></td>
</tr>
<tr id="Polygon.getEditable">
<td itemprop="property"><code><a class="secret-link" href="#Polygon.getEditable"><span>getEditable</span></a></code></td>
<td><div><code>getEditable()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns whether this shape can be edited by the user.</div></td>
</tr>
<tr id="Polygon.getMap">
<td itemprop="property"><code><a class="secret-link" href="#Polygon.getMap"><span>getMap</span></a></code></td>
<td><div><code>getMap()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="Map.md">Map</a></code></div>
<div class="desc">Returns the map on which this shape is attached.</div></td>
</tr>
<tr id="Polygon.getPath">
<td itemprop="property"><code><a class="secret-link" href="#Polygon.getPath"><span>getPath</span></a></code></td>
<td><div><code>getPath()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="MVCArray.md">MVCArray</a>&lt;<a href="LatLng.md">LatLng</a>&gt;</code></div>
<div class="desc">Retrieves the first path.</div></td>
</tr>
<tr id="Polygon.getPaths">
<td itemprop="property"><code><a class="secret-link" href="#Polygon.getPaths"><span>getPaths</span></a></code></td>
<td><div><code>getPaths()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="MVCArray.md">MVCArray</a>&lt;<a href="MVCArray.md">MVCArray</a>&lt;<a href="LatLng.md">LatLng</a>&gt;&gt;</code></div>
<div class="desc">Retrieves the paths for this polygon.</div></td>
</tr>
<tr id="Polygon.getVisible">
<td itemprop="property"><code><a class="secret-link" href="#Polygon.getVisible"><span>getVisible</span></a></code></td>
<td><div><code>getVisible()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns whether this poly is visible on the map.</div></td>
</tr>
<tr id="Polygon.setDraggable">
<td itemprop="property"><code><a class="secret-link" href="#Polygon.setDraggable"><span>setDraggable</span></a></code></td>
<td><div><code>setDraggable(draggable)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>draggable</code>:&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">If set to true, the user can drag this shape over the map. The <code>geodesic</code> property defines the mode of dragging.</div></td>
</tr>
<tr id="Polygon.setEditable">
<td itemprop="property"><code><a class="secret-link" href="#Polygon.setEditable"><span>setEditable</span></a></code></td>
<td><div><code>setEditable(editable)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>editable</code>:&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">If set to true, the user can edit this shape by dragging the control points shown at the vertices and on each segment.</div></td>
</tr>
<tr id="Polygon.setMap">
<td itemprop="property"><code><a class="secret-link" href="#Polygon.setMap"><span>setMap</span></a></code></td>
<td><div><code>setMap(map)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>map</code>:&nbsp; <code><a href="Map.md">Map</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Renders this shape on the specified map. If map is set to null, the shape will be removed.</div></td>
</tr>
<tr id="Polygon.setOptions">
<td itemprop="property"><code><a class="secret-link" href="#Polygon.setOptions"><span>setOptions</span></a></code></td>
<td><div><code>setOptions(options)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>options</code>:&nbsp; <code><a href="PolygonOptions.md">PolygonOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Polygon.setPath">
<td itemprop="property"><code><a class="secret-link" href="#Polygon.setPath"><span>setPath</span></a></code></td>
<td><div><code>setPath(path)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>path</code>:&nbsp; <code><a href="MVCArray.md">MVCArray</a>&lt;<a href="LatLng.md">LatLng</a>&gt;|Array&lt;<a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a>&gt;</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the first path. See <em><code><a href="PolygonOptions.md">PolygonOptions</a></code></em> for more details.</div></td>
</tr>
<tr id="Polygon.setPaths">
<td itemprop="property"><code><a class="secret-link" href="#Polygon.setPaths"><span>setPaths</span></a></code></td>
<td><div><code>setPaths(paths)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>paths</code>:&nbsp; <code><a href="MVCArray.md">MVCArray</a>&lt;<a href="MVCArray.md">MVCArray</a>&lt;<a href="LatLng.md">LatLng</a>&gt;&gt;|<a href="MVCArray.md">MVCArray</a>&lt;<a href="LatLng.md">LatLng</a>&gt;|Array&lt;Array&lt;<a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a>&gt;&gt;|Array&lt;<a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a>&gt;</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the path for this polygon.</div></td>
</tr>
<tr id="Polygon.setVisible">
<td itemprop="property"><code><a class="secret-link" href="#Polygon.setVisible"><span>setVisible</span></a></code></td>
<td><div><code>setVisible(visible)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>visible</code>:&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Hides this poly if set to <code>false</code>.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="details responsive" summary="class Polygon - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="Polygon.click">
<td itemprop="property"><code><a class="secret-link" href="#Polygon.click"><span>click</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM click event is fired on the Polygon.</div></td>
</tr>
<tr id="Polygon.dblclick">
<td itemprop="property"><code><a class="secret-link" href="#Polygon.dblclick"><span>dblclick</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM dblclick event is fired on the Polygon.</div></td>
</tr>
<tr id="Polygon.drag">
<td itemprop="property"><code><a class="secret-link" href="#Polygon.drag"><span>drag</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is repeatedly fired while the user drags the polygon.</div></td>
</tr>
<tr id="Polygon.dragend">
<td itemprop="property"><code><a class="secret-link" href="#Polygon.dragend"><span>dragend</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user stops dragging the polygon.</div></td>
</tr>
<tr id="Polygon.dragstart">
<td itemprop="property"><code><a class="secret-link" href="#Polygon.dragstart"><span>dragstart</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user starts dragging the polygon.</div></td>
</tr>
<tr id="Polygon.mousedown">
<td itemprop="property"><code><a class="secret-link" href="#Polygon.mousedown"><span>mousedown</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM mousedown event is fired on the Polygon.</div></td>
</tr>
<tr id="Polygon.mousemove">
<td itemprop="property"><code><a class="secret-link" href="#Polygon.mousemove"><span>mousemove</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM mousemove event is fired on the Polygon.</div></td>
</tr>
<tr id="Polygon.mouseout">
<td itemprop="property"><code><a class="secret-link" href="#Polygon.mouseout"><span>mouseout</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired on Polygon mouseout.</div></td>
</tr>
<tr id="Polygon.mouseover">
<td itemprop="property"><code><a class="secret-link" href="#Polygon.mouseover"><span>mouseover</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired on Polygon mouseover.</div></td>
</tr>
<tr id="Polygon.mouseup">
<td itemprop="property"><code><a class="secret-link" href="#Polygon.mouseup"><span>mouseup</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM mouseup event is fired on the Polygon.</div></td>
</tr>
<tr id="Polygon.rightclick">
<td itemprop="property"><code><a class="secret-link" href="#Polygon.rightclick"><span>rightclick</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the Polygon is right-clicked on.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
