<h2 id="Circle">
google.maps.Circle
class
</h2><p>A circle on the Earth's surface; also known as a "spherical cap".</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCObject.md">MVCObject</a></code>.
</p><h3>Constructor</h3><table summary="class Circle - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>Circle(opts?:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.CircleOptions.md"><em>CircleOptions</em></a>)</code></td>
<td>Create a circle using the passed <code><em><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.CircleOptions.md">CircleOptions</a></em></code>, which specify the center, radius, and style.</td>
</tr>
</tbody>
</table><h3>Methods</h3><table summary="class Circle - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getBounds()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngBounds.md">LatLngBounds</a></code></td>
<td>Gets the <code>LatLngBounds</code> of this Circle.</td>
</tr>
<tr>
<td><code>getCenter()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a></code></td>
<td>Returns the center of this circle.</td>
</tr>
<tr>
<td><code>getDraggable()</code></td>
<td><code>boolean</code></td>
<td>Returns whether this circle can be dragged by the user.</td>
</tr>
<tr>
<td><code>getEditable()</code></td>
<td><code>boolean</code></td>
<td>Returns whether this circle can be edited by the user.</td>
</tr>
<tr>
<td><code>getMap()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a></code></td>
<td>Returns the map on which this circle is displayed.</td>
</tr>
<tr>
<td><code>getRadius()</code></td>
<td><code>number</code></td>
<td>Returns the radius of this circle (in meters).</td>
</tr>
<tr>
<td><code>getVisible()</code></td>
<td><code>boolean</code></td>
<td>Returns whether this circle is visible on the map.</td>
</tr>
<tr>
<td><code>setCenter(center:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngLiteral.md">LatLngLiteral</a>)</code></td>
<td><code>None</code></td>
<td>Sets the center of this circle.</td>
</tr>
<tr>
<td><code>setDraggable(draggable:boolean)</code></td>
<td><code>None</code></td>
<td>If set to true, the user can drag this circle over the map.</td>
</tr>
<tr>
<td><code>setEditable(editable:boolean)</code></td>
<td><code>None</code></td>
<td>If set to true, the user can edit this circle by dragging the control points shown at the center and around the circumference of the circle.</td>
</tr>
<tr>
<td><code>setMap(map:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a>)</code></td>
<td><code>None</code></td>
<td>Renders the circle on the specified map. If map is set to null, the circle will be removed.</td>
</tr>
<tr>
<td><code>setOptions(options:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.CircleOptions.md"><em>CircleOptions</em></a>)</code></td>
<td><code>None</code></td>
<td></td>
</tr>
<tr>
<td><code>setRadius(radius:number)</code></td>
<td><code>None</code></td>
<td>Sets the radius of this circle (in meters).</td>
</tr>
<tr>
<td><code>setVisible(visible:boolean)</code></td>
<td><code>None</code></td>
<td>Hides this circle if set to <code>false</code>.</td>
</tr>
</tbody>
</table><h3>Events</h3><table summary="class Circle - Events" width="100%">
<thead>
<tr><th>Events</th>
<th>Arguments</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>center_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the circle's center is changed.</td>
</tr>
<tr>
<td><code>click</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the DOM click event is fired on the circle.</td>
</tr>
<tr>
<td><code>dblclick</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the DOM dblclick event is fired on the circle.</td>
</tr>
<tr>
<td><code>drag</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is repeatedly fired while the user drags the circle.</td>
</tr>
<tr>
<td><code>dragend</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the user stops dragging the circle.</td>
</tr>
<tr>
<td><code>dragstart</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the user starts dragging the circle.</td>
</tr>
<tr>
<td><code>mousedown</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the DOM mousedown event is fired on the circle.</td>
</tr>
<tr>
<td><code>mousemove</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the DOM mousemove event is fired on the circle.</td>
</tr>
<tr>
<td><code>mouseout</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is fired on circle mouseout.</td>
</tr>
<tr>
<td><code>mouseover</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is fired on circle mouseover.</td>
</tr>
<tr>
<td><code>mouseup</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the DOM mouseup event is fired on the circle.</td>
</tr>
<tr>
<td><code>radius_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the circle's radius is changed.</td>
</tr>
<tr>
<td><code>rightclick</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MouseEvent.md"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the circle is right-clicked on.</td>
</tr>
</tbody>
</table>