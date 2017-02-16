<h2 id="GroundOverlay"> GroundOverlay class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">GroundOverlay</span></code>
class
</p><p>A rectangular image overlay on the map.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class GroundOverlay - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>GroundOverlay(<wbr>url:string,<wbr> bounds:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md"><span>LatLngBounds</span></a><span>|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBoundsLiteral.md"><span>LatLngBoundsLiteral</span></a><span>,<wbr> opts?:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/GroundOverlayOptions.md"><span>GroundOverlayOptions</span></a><span>)</span></code></td>
<td>Creates a ground overlay from the provided image URL and its <code><span>LatLngBounds</span></code>. The image is scaled to fit the current bounds, and projected using the current map projection.</td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class GroundOverlay - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>getBounds()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">Gets the <code>LatLngBounds</code> of this overlay.</div></td>
</tr>
<tr>
<td><code><span>getMap()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc">Returns the map on which this ground overlay is displayed.</div></td>
</tr>
<tr>
<td><code><span>getOpacity()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the opacity of this ground overlay.</div></td>
</tr>
<tr>
<td><code><span>getUrl()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Gets the url of the projected image.</div></td>
</tr>
<tr>
<td><code><span>setMap(<wbr>map:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md"><span>Map</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Renders the ground overlay on the specified map. If map is set to null, the overlay is removed.</div></td>
</tr>
<tr>
<td><code><span>setOpacity(<wbr>opacity:number)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the opacity of this ground overlay.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="details responsive" summary="class GroundOverlay - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>click</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></div>
<div class="desc">This event is fired when the DOM click event is fired on the <code>GroundOverlay</code>.</div></td>
</tr>
<tr>
<td><code><span>dblclick</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></div>
<div class="desc">This event is fired when the DOM dblclick event is fired on the <code>GroundOverlay</code>.</div></td>
</tr>
</tbody>
</table></div>