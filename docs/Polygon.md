<h2 id="Polygon"> Polygon class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Polygon</span></code>
class
</p><p>A polygon (like a polyline) defines a series of connected coordinates in an ordered sequence. Additionally, polygons form a closed loop and define a filled region. See the samples in the developer's guide, starting with a <a href="https://developers.google.com/maps/documentation/javascript/examples/polygon-simple">simple polygon</a>, a <a href="https://developers.google.com/maps/documentation/javascript/examples/polygon-hole">polygon with a hole</a>, and more. Note that you can also use the <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Polygon.md">Data layer</a> to create a polygon. The Data layer offers a simpler way of creating holes because it handles the order of the inner and outer paths for you.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Polygon - Constructor">
<thead>
<tr><th colspan="2" id="Polygon.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>Polygon</span></code></td>
<td><div><code>Polygon([opts])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>opts</code> (optional):&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolygonOptions.md">PolygonOptions</a></code></li>
</ul></div>
<div class="desc">Create a polygon using the passed <code><em><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolygonOptions.md">PolygonOptions</a></em></code>, which specify the polygon's path, the stroke style for the polygon's edges, and the fill style for the polygon's interior regions. A polygon may contain one or more paths, where each path consists of an array of <code>LatLng</code>s. You may pass either an array of LatLngs or an <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md">MVCArray</a></code> of <code>LatLng</code>s when constructing these paths. Arrays are converted to <code>MVCArray</code>s within the polygon upon instantiation.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class Polygon - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Polygon.getDraggable">
<td><code><span>getDraggable</span></code></td>
<td><div><code>getDraggable()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns whether this shape can be dragged by the user.</div></td>
</tr>
<tr id="Polygon.getEditable">
<td><code><span>getEditable</span></code></td>
<td><div><code>getEditable()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns whether this shape can be edited by the user.</div></td>
</tr>
<tr id="Polygon.getMap">
<td><code><span>getMap</span></code></td>
<td><div><code>getMap()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc">Returns the map on which this shape is attached.</div></td>
</tr>
<tr id="Polygon.getPath">
<td><code><span>getPath</span></code></td>
<td><div><code>getPath()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>&gt;</code></div>
<div class="desc">Retrieves the first path.</div></td>
</tr>
<tr id="Polygon.getPaths">
<td><code><span>getPaths</span></code></td>
<td><div><code>getPaths()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>&gt;&gt;</code></div>
<div class="desc">Retrieves the paths for this polygon.</div></td>
</tr>
<tr id="Polygon.getVisible">
<td><code><span>getVisible</span></code></td>
<td><div><code>getVisible()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns whether this poly is visible on the map.</div></td>
</tr>
<tr id="Polygon.setDraggable">
<td><code><span>setDraggable</span></code></td>
<td><div><code>setDraggable(draggable)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>draggable</code>:&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">If set to true, the user can drag this shape over the map. The <code>geodesic</code> property defines the mode of dragging.</div></td>
</tr>
<tr id="Polygon.setEditable">
<td><code><span>setEditable</span></code></td>
<td><div><code>setEditable(editable)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>editable</code>:&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">If set to true, the user can edit this shape by dragging the control points shown at the vertices and on each segment.</div></td>
</tr>
<tr id="Polygon.setMap">
<td><code><span>setMap</span></code></td>
<td><div><code>setMap(map)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>map</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Renders this shape on the specified map. If map is set to null, the shape will be removed.</div></td>
</tr>
<tr id="Polygon.setOptions">
<td><code><span>setOptions</span></code></td>
<td><div><code>setOptions(options)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>options</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolygonOptions.md">PolygonOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Polygon.setPath">
<td><code><span>setPath</span></code></td>
<td><div><code>setPath(path)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>path</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>&gt;|Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md">LatLngLiteral</a>&gt;</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the first path. See <em><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolygonOptions.md">PolygonOptions</a></code></em> for more details.</div></td>
</tr>
<tr id="Polygon.setPaths">
<td><code><span>setPaths</span></code></td>
<td><div><code>setPaths(paths)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>paths</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>&gt;&gt;|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>&gt;|Array&lt;Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md">LatLngLiteral</a>&gt;&gt;|Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md">LatLngLiteral</a>&gt;</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the path for this polygon.</div></td>
</tr>
<tr id="Polygon.setVisible">
<td><code><span>setVisible</span></code></td>
<td><div><code>setVisible(visible)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>visible</code>:&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Hides this poly if set to <code>false</code>.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="details responsive" summary="class Polygon - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="Polygon.click">
<td><code><span>click</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM click event is fired on the Polygon.</div></td>
</tr>
<tr id="Polygon.dblclick">
<td><code><span>dblclick</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM dblclick event is fired on the Polygon.</div></td>
</tr>
<tr id="Polygon.drag">
<td><code><span>drag</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is repeatedly fired while the user drags the polygon.</div></td>
</tr>
<tr id="Polygon.dragend">
<td><code><span>dragend</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user stops dragging the polygon.</div></td>
</tr>
<tr id="Polygon.dragstart">
<td><code><span>dragstart</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user starts dragging the polygon.</div></td>
</tr>
<tr id="Polygon.mousedown">
<td><code><span>mousedown</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM mousedown event is fired on the Polygon.</div></td>
</tr>
<tr id="Polygon.mousemove">
<td><code><span>mousemove</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM mousemove event is fired on the Polygon.</div></td>
</tr>
<tr id="Polygon.mouseout">
<td><code><span>mouseout</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired on Polygon mouseout.</div></td>
</tr>
<tr id="Polygon.mouseover">
<td><code><span>mouseover</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired on Polygon mouseover.</div></td>
</tr>
<tr id="Polygon.mouseup">
<td><code><span>mouseup</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM mouseup event is fired on the Polygon.</div></td>
</tr>
<tr id="Polygon.rightclick">
<td><code><span>rightclick</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolyMouseEvent.md">PolyMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the Polygon is right-clicked on.</div></td>
</tr>
</tbody>
</table></div>