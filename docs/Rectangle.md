
<devsite-heading text=" Rectangle class" for="Rectangle" level="h2" link="" toc="" back-to-top=""><h2 id="Rectangle" is-upgraded="">Rectangle class </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">Rectangle</span></code>
class
</p>
<p>A rectangle overlay.</p>
<p>This class extends
<code translate="no" dir="ltr"><a href="MVCObject.md">MVCObject</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Rectangle - Constructor">
<thead>
<tr><th colspan="2" id="Rectangle.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code translate="no" dir="ltr"><a class="secret-link" href="#Rectangle.constructor"><span>Rectangle</span></a></code></td>
<td><div><code translate="no" dir="ltr">Rectangle([opts])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">opts</code>:&nbsp; <code translate="no" dir="ltr"><a href="RectangleOptions.md">RectangleOptions</a> <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc">Create a rectangle using the passed <code translate="no" dir="ltr"><em><a href="RectangleOptions.md">RectangleOptions</a></em></code>, which specify the bounds and style.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class Rectangle - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Rectangle.getBounds">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Rectangle.getBounds"><span>getBounds</span></a></code></td>
<td><div><code translate="no" dir="ltr">getBounds()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">Returns the bounds of this rectangle.</div></td>
</tr>
<tr id="Rectangle.getDraggable">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Rectangle.getDraggable"><span>getDraggable</span></a></code></td>
<td><div><code translate="no" dir="ltr">getDraggable()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">boolean</code></div>
<div class="desc">Returns whether this rectangle can be dragged by the user.</div></td>
</tr>
<tr id="Rectangle.getEditable">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Rectangle.getEditable"><span>getEditable</span></a></code></td>
<td><div><code translate="no" dir="ltr">getEditable()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">boolean</code></div>
<div class="desc">Returns whether this rectangle can be edited by the user.</div></td>
</tr>
<tr id="Rectangle.getMap">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Rectangle.getMap"><span>getMap</span></a></code></td>
<td><div><code translate="no" dir="ltr">getMap()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Map.md">Map</a></code></div>
<div class="desc">Returns the map on which this rectangle is displayed.</div></td>
</tr>
<tr id="Rectangle.getVisible">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Rectangle.getVisible"><span>getVisible</span></a></code></td>
<td><div><code translate="no" dir="ltr">getVisible()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">boolean</code></div>
<div class="desc">Returns whether this rectangle is visible on the map.</div></td>
</tr>
<tr id="Rectangle.setBounds">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Rectangle.setBounds"><span>setBounds</span></a></code></td>
<td><div><code translate="no" dir="ltr">setBounds(bounds)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">bounds</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLngBounds.md">LatLngBounds</a>|<a href="LatLngBoundsLiteral.md">LatLngBoundsLiteral</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the bounds of this rectangle.</div></td>
</tr>
<tr id="Rectangle.setDraggable">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Rectangle.setDraggable"><span>setDraggable</span></a></code></td>
<td><div><code translate="no" dir="ltr">setDraggable(draggable)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">draggable</code>:&nbsp; <code translate="no" dir="ltr">boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">If set to true, the user can drag this rectangle over the map.</div></td>
</tr>
<tr id="Rectangle.setEditable">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Rectangle.setEditable"><span>setEditable</span></a></code></td>
<td><div><code translate="no" dir="ltr">setEditable(editable)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">editable</code>:&nbsp; <code translate="no" dir="ltr">boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">If set to true, the user can edit this rectangle by dragging the control points shown at the corners and on each edge.</div></td>
</tr>
<tr id="Rectangle.setMap">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Rectangle.setMap"><span>setMap</span></a></code></td>
<td><div><code translate="no" dir="ltr">setMap(map)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">map</code>:&nbsp; <code translate="no" dir="ltr"><a href="Map.md">Map</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Renders the rectangle on the specified map. If map is set to null, the rectangle will be removed.</div></td>
</tr>
<tr id="Rectangle.setOptions">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Rectangle.setOptions"><span>setOptions</span></a></code></td>
<td><div><code translate="no" dir="ltr">setOptions(options)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">options</code>:&nbsp; <code translate="no" dir="ltr"><a href="RectangleOptions.md">RectangleOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Rectangle.setVisible">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Rectangle.setVisible"><span>setVisible</span></a></code></td>
<td><div><code translate="no" dir="ltr">setVisible(visible)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">visible</code>:&nbsp; <code translate="no" dir="ltr">boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Hides this rectangle if set to <code translate="no" dir="ltr">false</code>.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="details responsive" summary="class Rectangle - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="Rectangle.bounds_changed">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Rectangle.bounds_changed"><span>bounds_changed</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the rectangle's bounds are changed.</div></td>
</tr>
<tr id="Rectangle.click">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Rectangle.click"><span>click</span></a></code></td>
<td><div><code translate="no" dir="ltr">function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">event</code>:&nbsp; <code translate="no" dir="ltr"><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM click event is fired on the rectangle.</div></td>
</tr>
<tr id="Rectangle.dblclick">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Rectangle.dblclick"><span>dblclick</span></a></code></td>
<td><div><code translate="no" dir="ltr">function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">event</code>:&nbsp; <code translate="no" dir="ltr"><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM dblclick event is fired on the rectangle.</div></td>
</tr>
<tr id="Rectangle.drag">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Rectangle.drag"><span>drag</span></a></code></td>
<td><div><code translate="no" dir="ltr">function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">event</code>:&nbsp; <code translate="no" dir="ltr"><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is repeatedly fired while the user drags the rectangle.</div></td>
</tr>
<tr id="Rectangle.dragend">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Rectangle.dragend"><span>dragend</span></a></code></td>
<td><div><code translate="no" dir="ltr">function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">event</code>:&nbsp; <code translate="no" dir="ltr"><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user stops dragging the rectangle.</div></td>
</tr>
<tr id="Rectangle.dragstart">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Rectangle.dragstart"><span>dragstart</span></a></code></td>
<td><div><code translate="no" dir="ltr">function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">event</code>:&nbsp; <code translate="no" dir="ltr"><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user starts dragging the rectangle.</div></td>
</tr>
<tr id="Rectangle.mousedown">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Rectangle.mousedown"><span>mousedown</span></a></code></td>
<td><div><code translate="no" dir="ltr">function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">event</code>:&nbsp; <code translate="no" dir="ltr"><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM mousedown event is fired on the rectangle.</div></td>
</tr>
<tr id="Rectangle.mousemove">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Rectangle.mousemove"><span>mousemove</span></a></code></td>
<td><div><code translate="no" dir="ltr">function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">event</code>:&nbsp; <code translate="no" dir="ltr"><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM mousemove event is fired on the rectangle.</div></td>
</tr>
<tr id="Rectangle.mouseout">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Rectangle.mouseout"><span>mouseout</span></a></code></td>
<td><div><code translate="no" dir="ltr">function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">event</code>:&nbsp; <code translate="no" dir="ltr"><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired on rectangle mouseout.</div></td>
</tr>
<tr id="Rectangle.mouseover">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Rectangle.mouseover"><span>mouseover</span></a></code></td>
<td><div><code translate="no" dir="ltr">function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">event</code>:&nbsp; <code translate="no" dir="ltr"><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired on rectangle mouseover.</div></td>
</tr>
<tr id="Rectangle.mouseup">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Rectangle.mouseup"><span>mouseup</span></a></code></td>
<td><div><code translate="no" dir="ltr">function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">event</code>:&nbsp; <code translate="no" dir="ltr"><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM mouseup event is fired on the rectangle.</div></td>
</tr>
<tr id="Rectangle.rightclick">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Rectangle.rightclick"><span>rightclick</span></a></code></td>
<td><div><code translate="no" dir="ltr">function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">event</code>:&nbsp; <code translate="no" dir="ltr"><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the rectangle is right-clicked on.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
