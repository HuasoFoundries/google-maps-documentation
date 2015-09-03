<h2 id="DirectionsRenderer"> DirectionsRenderer class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">DirectionsRenderer</span></code>
class
</p><p>Renders directions obtained from the <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DirectionsService.md">DirectionsService</a></code>.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class DirectionsRenderer - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>DirectionsRenderer(<wbr>opts?:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DirectionsRendererOptions.md"><em><span>DirectionsRendererOptions</span></em></a><span>)</span></code></td>
<td>Creates the renderer with the given options. Directions can be rendered on a map (as visual overlays) or additionally on a <code><span>&lt;div&gt;</span></code> panel (as textual instructions).</td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class DirectionsRenderer - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>getDirections()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DirectionsResult.md">DirectionsResult</a></code></div>
<div class="desc">Returns the renderer's current set of directions.</div></td>
</tr>
<tr>
<td><code><span>getMap()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc">Returns the map on which the <code>DirectionsResult</code> is rendered.</div></td>
</tr>
<tr>
<td><code><span>getPanel()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>Node</code></div>
<div class="desc">Returns the panel <code>&lt;div&gt;</code> in which the <code>DirectionsResult</code> is rendered.</div></td>
</tr>
<tr>
<td><code><span>getRouteIndex()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the current (zero-based) route index in use by this <code>DirectionsRenderer</code> object.</div></td>
</tr>
<tr>
<td><code><span>setDirections(<wbr>directions:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DirectionsResult.md"><em><span>DirectionsResult</span></em></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Set the renderer to use the result from the <code>DirectionsService</code>. Setting a valid set of directions in this manner will display the directions on the renderer's designated map and panel.</div></td>
</tr>
<tr>
<td><code><span>setMap(<wbr>map:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md"><span>Map</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">This method specifies the map on which directions will be rendered. Pass <code>null</code> to remove the directions from the map.</div></td>
</tr>
<tr>
<td><code><span>setOptions(<wbr>options:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DirectionsRendererOptions.md"><em><span>DirectionsRendererOptions</span></em></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Change the options settings of this <code>DirectionsRenderer</code> after initialization.</div></td>
</tr>
<tr>
<td><code><span>setPanel(<wbr>panel:Node)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">This method renders the directions in a <code>&lt;div&gt;</code>. Pass <code>null</code> to remove the content from the panel.</div></td>
</tr>
<tr>
<td><code><span>setRouteIndex(<wbr>routeIndex:number)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Set the (zero-based) index of the route in the <code>DirectionsResult</code> object to render. By default, the first route in the array will be rendered.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="details responsive" summary="class DirectionsRenderer - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>directions_changed</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the rendered directions change, either when a new <code>DirectionsResult</code> is set or when the user finishes dragging a change to the directions path.</div></td>
</tr>
</tbody>
</table></div>