<h2 id="Rectangle">
google.maps.Rectangle
class
</h2><p>A rectangle overlay.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCObject.md">MVCObject</a></code>.
</p><h3>Constructor</h3><table summary="class Rectangle - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>Rectangle(opts?:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.RectangleOptions.md"><em>RectangleOptions</em></a>)</code></td>
<td>Create a rectangle using the passed <code><em><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.RectangleOptions.md">RectangleOptions</a></em></code>, which specify the bounds and style.</td>
</tr>
</tbody>
</table><h3>Methods</h3><table summary="class Rectangle - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getBounds()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngBounds.md">LatLngBounds</a></code></td>
<td>Returns the bounds of this rectangle.</td>
</tr>
<tr>
<td><code>getDraggable()</code></td>
<td><code>boolean</code></td>
<td>Returns whether this rectangle can be dragged by the user.</td>
</tr>
<tr>
<td><code>getEditable()</code></td>
<td><code>boolean</code></td>
<td>Returns whether this rectangle can be edited by the user.</td>
</tr>
<tr>
<td><code>getMap()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a></code></td>
<td>Returns the map on which this rectangle is displayed.</td>
</tr>
<tr>
<td><code>getVisible()</code></td>
<td><code>boolean</code></td>
<td>Returns whether this rectangle is visible on the map.</td>
</tr>
<tr>
<td><code>setBounds(bounds:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngBounds.md">LatLngBounds</a>)</code></td>
<td><code>None</code></td>
<td>Sets the bounds of this rectangle.</td>
</tr>
<tr>
<td><code>setDraggable(draggable:boolean)</code></td>
<td><code>None</code></td>
<td>If set to true, the user can drag this rectangle over the map.</td>
</tr>
<tr>
<td><code>setEditable(editable:boolean)</code></td>
<td><code>None</code></td>
<td>If set to true, the user can edit this rectangle by dragging the control points shown at the corners and on each edge.</td>
</tr>
<tr>
<td><code>setMap(map:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a>)</code></td>
<td><code>None</code></td>
<td>Renders the rectangle on the specified map. If map is set to null, the rectangle will be removed.</td>
</tr>
<tr>
<td><code>setOptions(options:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.RectangleOptions.md"><em>RectangleOptions</em></a>)</code></td>
<td><code>None</code></td>
<td></td>
</tr>
<tr>
<td><code>setVisible(visible:boolean)</code></td>
<td><code>None</code></td>
<td>Hides this rectangle if set to <code>false</code>.</td>
</tr>
</tbody>
</table><h3>Events</h3><table summary="class Rectangle - Events" width="100%">
<thead>
<tr><th>Events</th>
<th>Arguments</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>bounds_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the rectangle's bounds are changed.</td>
</tr>
<tr>
<td><code>click</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the DOM click event is fired on the rectangle.</td>
</tr>
<tr>
<td><code>dblclick</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the DOM dblclick event is fired on the rectangle.</td>
</tr>
<tr>
<td><code>drag</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is repeatedly fired while the user drags the rectangle.</td>
</tr>
<tr>
<td><code>dragend</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the user stops dragging the rectangle.</td>
</tr>
<tr>
<td><code>dragstart</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the user starts dragging the rectangle.</td>
</tr>
<tr>
<td><code>mousedown</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the DOM mousedown event is fired on the rectangle.</td>
</tr>
<tr>
<td><code>mousemove</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the DOM mousemove event is fired on the rectangle.</td>
</tr>
<tr>
<td><code>mouseout</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is fired on rectangle mouseout.</td>
</tr>
<tr>
<td><code>mouseover</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is fired on rectangle mouseover.</td>
</tr>
<tr>
<td><code>mouseup</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the DOM mouseup event is fired on the rectangle.</td>
</tr>
<tr>
<td><code>rightclick</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the rectangle is right-clicked on.</td>
</tr>
</tbody>
</table>