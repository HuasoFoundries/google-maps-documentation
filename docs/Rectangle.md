<h2 id="Rectangle"> Rectangle class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Rectangle</span></code>
class
</p><p>A rectangle overlay.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Rectangle - Constructor">
<thead>
<tr><th colspan="2" id="Rectangle.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>Rectangle</span></code></td>
<td><div><code>Rectangle([opts])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>opts</code> (optional):&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/RectangleOptions.md">RectangleOptions</a></code></li>
</ul></div>
<div class="desc">Create a rectangle using the passed <code><em><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/RectangleOptions.md">RectangleOptions</a></em></code>, which specify the bounds and style.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class Rectangle - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Rectangle.getBounds">
<td><code><span>getBounds</span></code></td>
<td><div><code>getBounds()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">Returns the bounds of this rectangle.</div></td>
</tr>
<tr id="Rectangle.getDraggable">
<td><code><span>getDraggable</span></code></td>
<td><div><code>getDraggable()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns whether this rectangle can be dragged by the user.</div></td>
</tr>
<tr id="Rectangle.getEditable">
<td><code><span>getEditable</span></code></td>
<td><div><code>getEditable()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns whether this rectangle can be edited by the user.</div></td>
</tr>
<tr id="Rectangle.getMap">
<td><code><span>getMap</span></code></td>
<td><div><code>getMap()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc">Returns the map on which this rectangle is displayed.</div></td>
</tr>
<tr id="Rectangle.getVisible">
<td><code><span>getVisible</span></code></td>
<td><div><code>getVisible()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns whether this rectangle is visible on the map.</div></td>
</tr>
<tr id="Rectangle.setBounds">
<td><code><span>setBounds</span></code></td>
<td><div><code>setBounds(bounds)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>bounds</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBoundsLiteral.md">LatLngBoundsLiteral</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the bounds of this rectangle.</div></td>
</tr>
<tr id="Rectangle.setDraggable">
<td><code><span>setDraggable</span></code></td>
<td><div><code>setDraggable(draggable)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>draggable</code>:&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">If set to true, the user can drag this rectangle over the map.</div></td>
</tr>
<tr id="Rectangle.setEditable">
<td><code><span>setEditable</span></code></td>
<td><div><code>setEditable(editable)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>editable</code>:&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">If set to true, the user can edit this rectangle by dragging the control points shown at the corners and on each edge.</div></td>
</tr>
<tr id="Rectangle.setMap">
<td><code><span>setMap</span></code></td>
<td><div><code>setMap(map)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>map</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Renders the rectangle on the specified map. If map is set to null, the rectangle will be removed.</div></td>
</tr>
<tr id="Rectangle.setOptions">
<td><code><span>setOptions</span></code></td>
<td><div><code>setOptions(options)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>options</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/RectangleOptions.md">RectangleOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Rectangle.setVisible">
<td><code><span>setVisible</span></code></td>
<td><div><code>setVisible(visible)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>visible</code>:&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Hides this rectangle if set to <code>false</code>.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="details responsive" summary="class Rectangle - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="Rectangle.bounds_changed">
<td><code><span>bounds_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the rectangle's bounds are changed.</div></td>
</tr>
<tr id="Rectangle.click">
<td><code><span>click</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM click event is fired on the rectangle.</div></td>
</tr>
<tr id="Rectangle.dblclick">
<td><code><span>dblclick</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM dblclick event is fired on the rectangle.</div></td>
</tr>
<tr id="Rectangle.drag">
<td><code><span>drag</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is repeatedly fired while the user drags the rectangle.</div></td>
</tr>
<tr id="Rectangle.dragend">
<td><code><span>dragend</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user stops dragging the rectangle.</div></td>
</tr>
<tr id="Rectangle.dragstart">
<td><code><span>dragstart</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user starts dragging the rectangle.</div></td>
</tr>
<tr id="Rectangle.mousedown">
<td><code><span>mousedown</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM mousedown event is fired on the rectangle.</div></td>
</tr>
<tr id="Rectangle.mousemove">
<td><code><span>mousemove</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM mousemove event is fired on the rectangle.</div></td>
</tr>
<tr id="Rectangle.mouseout">
<td><code><span>mouseout</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired on rectangle mouseout.</div></td>
</tr>
<tr id="Rectangle.mouseover">
<td><code><span>mouseover</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired on rectangle mouseover.</div></td>
</tr>
<tr id="Rectangle.mouseup">
<td><code><span>mouseup</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM mouseup event is fired on the rectangle.</div></td>
</tr>
<tr id="Rectangle.rightclick">
<td><code><span>rightclick</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the rectangle is right-clicked on.</div></td>
</tr>
</tbody>
</table></div>