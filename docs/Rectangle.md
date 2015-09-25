<h2 id="Rectangle"> Rectangle class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Rectangle</span></code>
class
</p><p>A rectangle overlay.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Rectangle - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>Rectangle(<wbr>opts?:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/RectangleOptions.md"><em><span>RectangleOptions</span></em></a><span>)</span></code></td>
<td>Create a rectangle using the passed <code><em><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/RectangleOptions.md"><span>RectangleOptions</span></a></em></code>, which specify the bounds and style.</td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class Rectangle - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>getBounds()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">Returns the bounds of this rectangle.</div></td>
</tr>
<tr>
<td><code><span>getDraggable()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns whether this rectangle can be dragged by the user.</div></td>
</tr>
<tr>
<td><code><span>getEditable()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns whether this rectangle can be edited by the user.</div></td>
</tr>
<tr>
<td><code><span>getMap()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc">Returns the map on which this rectangle is displayed.</div></td>
</tr>
<tr>
<td><code><span>getVisible()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns whether this rectangle is visible on the map.</div></td>
</tr>
<tr>
<td><code><span>setBounds(<wbr>bounds:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md"><span>LatLngBounds</span></a><span>|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBoundsLiteral.md"><span>LatLngBoundsLiteral</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the bounds of this rectangle.</div></td>
</tr>
<tr>
<td><code><span>setDraggable(<wbr>draggable:boolean)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">If set to true, the user can drag this rectangle over the map.</div></td>
</tr>
<tr>
<td><code><span>setEditable(<wbr>editable:boolean)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">If set to true, the user can edit this rectangle by dragging the control points shown at the corners and on each edge.</div></td>
</tr>
<tr>
<td><code><span>setMap(<wbr>map:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md"><span>Map</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Renders the rectangle on the specified map. If map is set to null, the rectangle will be removed.</div></td>
</tr>
<tr>
<td><code><span>setOptions(<wbr>options:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/RectangleOptions.md"><em><span>RectangleOptions</span></em></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>setVisible(<wbr>visible:boolean)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Hides this rectangle if set to <code>false</code>.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="details responsive" summary="class Rectangle - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>bounds_changed</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the rectangle's bounds are changed.</div></td>
</tr>
<tr>
<td><code><span>click</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired when the DOM click event is fired on the rectangle.</div></td>
</tr>
<tr>
<td><code><span>dblclick</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired when the DOM dblclick event is fired on the rectangle.</div></td>
</tr>
<tr>
<td><code><span>drag</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is repeatedly fired while the user drags the rectangle.</div></td>
</tr>
<tr>
<td><code><span>dragend</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired when the user stops dragging the rectangle.</div></td>
</tr>
<tr>
<td><code><span>dragstart</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired when the user starts dragging the rectangle.</div></td>
</tr>
<tr>
<td><code><span>mousedown</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired when the DOM mousedown event is fired on the rectangle.</div></td>
</tr>
<tr>
<td><code><span>mousemove</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired when the DOM mousemove event is fired on the rectangle.</div></td>
</tr>
<tr>
<td><code><span>mouseout</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired on rectangle mouseout.</div></td>
</tr>
<tr>
<td><code><span>mouseover</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired on rectangle mouseover.</div></td>
</tr>
<tr>
<td><code><span>mouseup</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired when the DOM mouseup event is fired on the rectangle.</div></td>
</tr>
<tr>
<td><code><span>rightclick</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired when the rectangle is right-clicked on.</div></td>
</tr>
</tbody>
</table></div>