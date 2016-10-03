<h2 id="Circle"> Circle class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Circle</span></code>
class
</p><p>A circle on the Earth's surface; also known as a "spherical cap".</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Circle - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>Circle(<wbr>opts?:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/CircleOptions.md"><span>CircleOptions</span></a><span>)</span></code></td>
<td>Create a circle using the passed <code><em><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/CircleOptions.md"><span>CircleOptions</span></a></em></code>, which specify the center, radius, and style.</td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class Circle - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>getBounds()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">Gets the <code>LatLngBounds</code> of this Circle.</div></td>
</tr>
<tr>
<td><code><span>getCenter()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc">Returns the center of this circle.</div></td>
</tr>
<tr>
<td><code><span>getDraggable()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns whether this circle can be dragged by the user.</div></td>
</tr>
<tr>
<td><code><span>getEditable()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns whether this circle can be edited by the user.</div></td>
</tr>
<tr>
<td><code><span>getMap()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc">Returns the map on which this circle is displayed.</div></td>
</tr>
<tr>
<td><code><span>getRadius()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the radius of this circle (in meters).</div></td>
</tr>
<tr>
<td><code><span>getVisible()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns whether this circle is visible on the map.</div></td>
</tr>
<tr>
<td><code><span>setCenter(<wbr>center:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md"><span>LatLngLiteral</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the center of this circle.</div></td>
</tr>
<tr>
<td><code><span>setDraggable(<wbr>draggable:boolean)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">If set to true, the user can drag this circle over the map.</div></td>
</tr>
<tr>
<td><code><span>setEditable(<wbr>editable:boolean)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">If set to true, the user can edit this circle by dragging the control points shown at the center and around the circumference of the circle.</div></td>
</tr>
<tr>
<td><code><span>setMap(<wbr>map:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md"><span>Map</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Renders the circle on the specified map. If map is set to null, the circle will be removed.</div></td>
</tr>
<tr>
<td><code><span>setOptions(<wbr>options:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/CircleOptions.md"><em><span>CircleOptions</span></em></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>setRadius(<wbr>radius:number)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the radius of this circle (in meters).</div></td>
</tr>
<tr>
<td><code><span>setVisible(<wbr>visible:boolean)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Hides this circle if set to <code>false</code>.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="details responsive" summary="class Circle - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>center_changed</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the circle's center is changed.</div></td>
</tr>
<tr>
<td><code><span>click</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired when the DOM click event is fired on the circle.</div></td>
</tr>
<tr>
<td><code><span>dblclick</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired when the DOM dblclick event is fired on the circle.</div></td>
</tr>
<tr>
<td><code><span>drag</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is repeatedly fired while the user drags the circle.</div></td>
</tr>
<tr>
<td><code><span>dragend</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired when the user stops dragging the circle.</div></td>
</tr>
<tr>
<td><code><span>dragstart</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired when the user starts dragging the circle.</div></td>
</tr>
<tr>
<td><code><span>mousedown</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired when the DOM mousedown event is fired on the circle.</div></td>
</tr>
<tr>
<td><code><span>mousemove</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired when the DOM mousemove event is fired on the circle.</div></td>
</tr>
<tr>
<td><code><span>mouseout</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired on circle mouseout.</div></td>
</tr>
<tr>
<td><code><span>mouseover</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired on circle mouseover.</div></td>
</tr>
<tr>
<td><code><span>mouseup</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired when the DOM mouseup event is fired on the circle.</div></td>
</tr>
<tr>
<td><code><span>radius_changed</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the circle's radius is changed.</div></td>
</tr>
<tr>
<td><code><span>rightclick</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired when the circle is right-clicked on.</div></td>
</tr>
</tbody>
</table></div>