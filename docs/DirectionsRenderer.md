<h2 id="DirectionsRenderer"> DirectionsRenderer class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">DirectionsRenderer</span></code>
class
</p><p>Renders directions obtained from the <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DirectionsService.md">DirectionsService</a></code>.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class DirectionsRenderer - Constructor">
<thead>
<tr><th colspan="2" id="DirectionsRenderer.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>DirectionsRenderer</span></code></td>
<td><div><code>DirectionsRenderer([opts])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>opts</code> (optional):&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DirectionsRendererOptions.md">DirectionsRendererOptions</a></code></li>
</ul></div>
<div class="desc">Creates the renderer with the given options. Directions can be rendered on a map (as visual overlays) or additionally on a <code>&lt;div&gt;</code> panel (as textual instructions).</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class DirectionsRenderer - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="DirectionsRenderer.getDirections">
<td><code><span>getDirections</span></code></td>
<td><div><code>getDirections()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DirectionsResult.md">DirectionsResult</a></code></div>
<div class="desc">Returns the renderer's current set of directions.</div></td>
</tr>
<tr id="DirectionsRenderer.getMap">
<td><code><span>getMap</span></code></td>
<td><div><code>getMap()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc">Returns the map on which the <code>DirectionsResult</code> is rendered.</div></td>
</tr>
<tr id="DirectionsRenderer.getPanel">
<td><code><span>getPanel</span></code></td>
<td><div><code>getPanel()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>Node</code></div>
<div class="desc">Returns the panel <code>&lt;div&gt;</code> in which the <code>DirectionsResult</code> is rendered.</div></td>
</tr>
<tr id="DirectionsRenderer.getRouteIndex">
<td><code><span>getRouteIndex</span></code></td>
<td><div><code>getRouteIndex()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the current (zero-based) route index in use by this <code>DirectionsRenderer</code> object.</div></td>
</tr>
<tr id="DirectionsRenderer.setDirections">
<td><code><span>setDirections</span></code></td>
<td><div><code>setDirections(directions)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>directions</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DirectionsResult.md">DirectionsResult</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Set the renderer to use the result from the <code>DirectionsService</code>. Setting a valid set of directions in this manner will display the directions on the renderer's designated map and panel.</div></td>
</tr>
<tr id="DirectionsRenderer.setMap">
<td><code><span>setMap</span></code></td>
<td><div><code>setMap(map)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>map</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">This method specifies the map on which directions will be rendered. Pass <code>null</code> to remove the directions from the map.</div></td>
</tr>
<tr id="DirectionsRenderer.setOptions">
<td><code><span>setOptions</span></code></td>
<td><div><code>setOptions(options)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>options</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DirectionsRendererOptions.md">DirectionsRendererOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Change the options settings of this <code>DirectionsRenderer</code> after initialization.</div></td>
</tr>
<tr id="DirectionsRenderer.setPanel">
<td><code><span>setPanel</span></code></td>
<td><div><code>setPanel(panel)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>panel</code>:&nbsp; <code>Node</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">This method renders the directions in a <code>&lt;div&gt;</code>. Pass <code>null</code> to remove the content from the panel.</div></td>
</tr>
<tr id="DirectionsRenderer.setRouteIndex">
<td><code><span>setRouteIndex</span></code></td>
<td><div><code>setRouteIndex(routeIndex)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>routeIndex</code>:&nbsp; <code>number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Set the (zero-based) index of the route in the <code>DirectionsResult</code> object to render. By default, the first route in the array will be rendered.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="details responsive" summary="class DirectionsRenderer - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="DirectionsRenderer.directions_changed">
<td><code><span>directions_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the rendered directions change, either when a new <code>DirectionsResult</code> is set or when the user finishes dragging a change to the directions path.</div></td>
</tr>
</tbody>
</table></div>