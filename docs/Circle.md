
<h2 id="Circle">Circle class</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Circle</span></code>
class
</p>
<p>A circle on the Earth's surface; also known as a "spherical cap".</p>
<p>This class extends
<code><a href="MVCObject.md">MVCObject</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Circle - Constructor">
<thead>
<tr><th colspan="2" id="Circle.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><a class="secret-link" href="#Circle.constructor"><span>Circle</span></a></code></td>
<td><div><code>Circle([opts])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>opts</code> (optional):&nbsp; <code><a href="CircleOptions.md">CircleOptions</a></code></li>
</ul></div>
<div class="desc">Create a circle using the passed <code><a href="CircleOptions.md">CircleOptions</a></code>, which specify the center, radius, and style.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class Circle - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Circle.getBounds">
<td itemprop="property"><code><a class="secret-link" href="#Circle.getBounds"><span>getBounds</span></a></code></td>
<td><div><code>getBounds()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">Gets the <code>LatLngBounds</code> of this Circle.</div></td>
</tr>
<tr id="Circle.getCenter">
<td itemprop="property"><code><a class="secret-link" href="#Circle.getCenter"><span>getCenter</span></a></code></td>
<td><div><code>getCenter()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="LatLng.md">LatLng</a></code></div>
<div class="desc">Returns the center of this circle.</div></td>
</tr>
<tr id="Circle.getDraggable">
<td itemprop="property"><code><a class="secret-link" href="#Circle.getDraggable"><span>getDraggable</span></a></code></td>
<td><div><code>getDraggable()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns whether this circle can be dragged by the user.</div></td>
</tr>
<tr id="Circle.getEditable">
<td itemprop="property"><code><a class="secret-link" href="#Circle.getEditable"><span>getEditable</span></a></code></td>
<td><div><code>getEditable()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns whether this circle can be edited by the user.</div></td>
</tr>
<tr id="Circle.getMap">
<td itemprop="property"><code><a class="secret-link" href="#Circle.getMap"><span>getMap</span></a></code></td>
<td><div><code>getMap()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="Map.md">Map</a></code></div>
<div class="desc">Returns the map on which this circle is displayed.</div></td>
</tr>
<tr id="Circle.getRadius">
<td itemprop="property"><code><a class="secret-link" href="#Circle.getRadius"><span>getRadius</span></a></code></td>
<td><div><code>getRadius()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the radius of this circle (in meters).</div></td>
</tr>
<tr id="Circle.getVisible">
<td itemprop="property"><code><a class="secret-link" href="#Circle.getVisible"><span>getVisible</span></a></code></td>
<td><div><code>getVisible()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns whether this circle is visible on the map.</div></td>
</tr>
<tr id="Circle.setCenter">
<td itemprop="property"><code><a class="secret-link" href="#Circle.setCenter"><span>setCenter</span></a></code></td>
<td><div><code>setCenter(center)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>center</code>:&nbsp; <code><a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the center of this circle.</div></td>
</tr>
<tr id="Circle.setDraggable">
<td itemprop="property"><code><a class="secret-link" href="#Circle.setDraggable"><span>setDraggable</span></a></code></td>
<td><div><code>setDraggable(draggable)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>draggable</code>:&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">If set to true, the user can drag this circle over the map.</div></td>
</tr>
<tr id="Circle.setEditable">
<td itemprop="property"><code><a class="secret-link" href="#Circle.setEditable"><span>setEditable</span></a></code></td>
<td><div><code>setEditable(editable)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>editable</code>:&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">If set to true, the user can edit this circle by dragging the control points shown at the center and around the circumference of the circle.</div></td>
</tr>
<tr id="Circle.setMap">
<td itemprop="property"><code><a class="secret-link" href="#Circle.setMap"><span>setMap</span></a></code></td>
<td><div><code>setMap(map)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>map</code>:&nbsp; <code><a href="Map.md">Map</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Renders the circle on the specified map. If map is set to null, the circle will be removed.</div></td>
</tr>
<tr id="Circle.setOptions">
<td itemprop="property"><code><a class="secret-link" href="#Circle.setOptions"><span>setOptions</span></a></code></td>
<td><div><code>setOptions(options)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>options</code>:&nbsp; <code><a href="CircleOptions.md">CircleOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Circle.setRadius">
<td itemprop="property"><code><a class="secret-link" href="#Circle.setRadius"><span>setRadius</span></a></code></td>
<td><div><code>setRadius(radius)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>radius</code>:&nbsp; <code>number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the radius of this circle (in meters).</div></td>
</tr>
<tr id="Circle.setVisible">
<td itemprop="property"><code><a class="secret-link" href="#Circle.setVisible"><span>setVisible</span></a></code></td>
<td><div><code>setVisible(visible)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>visible</code>:&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Hides this circle if set to <code>false</code>.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="details responsive" summary="class Circle - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="Circle.center_changed">
<td itemprop="property"><code><a class="secret-link" href="#Circle.center_changed"><span>center_changed</span></a></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the circle's center is changed.</div></td>
</tr>
<tr id="Circle.click">
<td itemprop="property"><code><a class="secret-link" href="#Circle.click"><span>click</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM click event is fired on the circle.</div></td>
</tr>
<tr id="Circle.dblclick">
<td itemprop="property"><code><a class="secret-link" href="#Circle.dblclick"><span>dblclick</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM dblclick event is fired on the circle.</div></td>
</tr>
<tr id="Circle.drag">
<td itemprop="property"><code><a class="secret-link" href="#Circle.drag"><span>drag</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is repeatedly fired while the user drags the circle.</div></td>
</tr>
<tr id="Circle.dragend">
<td itemprop="property"><code><a class="secret-link" href="#Circle.dragend"><span>dragend</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user stops dragging the circle.</div></td>
</tr>
<tr id="Circle.dragstart">
<td itemprop="property"><code><a class="secret-link" href="#Circle.dragstart"><span>dragstart</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user starts dragging the circle.</div></td>
</tr>
<tr id="Circle.mousedown">
<td itemprop="property"><code><a class="secret-link" href="#Circle.mousedown"><span>mousedown</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM mousedown event is fired on the circle.</div></td>
</tr>
<tr id="Circle.mousemove">
<td itemprop="property"><code><a class="secret-link" href="#Circle.mousemove"><span>mousemove</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM mousemove event is fired on the circle.</div></td>
</tr>
<tr id="Circle.mouseout">
<td itemprop="property"><code><a class="secret-link" href="#Circle.mouseout"><span>mouseout</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired on circle mouseout.</div></td>
</tr>
<tr id="Circle.mouseover">
<td itemprop="property"><code><a class="secret-link" href="#Circle.mouseover"><span>mouseover</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired on circle mouseover.</div></td>
</tr>
<tr id="Circle.mouseup">
<td itemprop="property"><code><a class="secret-link" href="#Circle.mouseup"><span>mouseup</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM mouseup event is fired on the circle.</div></td>
</tr>
<tr id="Circle.radius_changed">
<td itemprop="property"><code><a class="secret-link" href="#Circle.radius_changed"><span>radius_changed</span></a></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the circle's radius is changed.</div></td>
</tr>
<tr id="Circle.rightclick">
<td itemprop="property"><code><a class="secret-link" href="#Circle.rightclick"><span>rightclick</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the circle is right-clicked on.</div></td>
</tr>
</tbody>
</table></div>
