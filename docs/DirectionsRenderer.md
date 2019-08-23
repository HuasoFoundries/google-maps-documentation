
<h2 id="DirectionsRenderer">DirectionsRenderer class</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">DirectionsRenderer</span></code>
class
</p>
<p>Renders directions obtained from the <code><a href="DirectionsService.md">DirectionsService</a></code>.</p>
<p>This class extends
<code><a href="MVCObject.md">MVCObject</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class DirectionsRenderer - Constructor">
<thead>
<tr><th colspan="2" id="DirectionsRenderer.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><a class="secret-link" href="#DirectionsRenderer.constructor"><span>DirectionsRenderer</span></a></code></td>
<td><div><code>DirectionsRenderer([opts])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>opts</code>:&nbsp; <code><a href="DirectionsRendererOptions.md">DirectionsRendererOptions</a> <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc">Creates the renderer with the given options. Directions can be rendered on a map (as visual overlays) or additionally on a <code>&lt;div&gt;</code> panel (as textual instructions).</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class DirectionsRenderer - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="DirectionsRenderer.getDirections">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsRenderer.getDirections"><span>getDirections</span></a></code></td>
<td><div><code>getDirections()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="DirectionsResult.md">DirectionsResult</a></code></div>
<div class="desc">Returns the renderer's current set of directions.</div></td>
</tr>
<tr id="DirectionsRenderer.getMap">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsRenderer.getMap"><span>getMap</span></a></code></td>
<td><div><code>getMap()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="Map.md">Map</a></code></div>
<div class="desc">Returns the map on which the <code>DirectionsResult</code> is rendered.</div></td>
</tr>
<tr id="DirectionsRenderer.getPanel">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsRenderer.getPanel"><span>getPanel</span></a></code></td>
<td><div><code>getPanel()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>Node</code></div>
<div class="desc">Returns the panel <code>&lt;div&gt;</code> in which the <code>DirectionsResult</code> is rendered.</div></td>
</tr>
<tr id="DirectionsRenderer.getRouteIndex">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsRenderer.getRouteIndex"><span>getRouteIndex</span></a></code></td>
<td><div><code>getRouteIndex()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the current (zero-based) route index in use by this <code>DirectionsRenderer</code> object.</div></td>
</tr>
<tr id="DirectionsRenderer.setDirections">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsRenderer.setDirections"><span>setDirections</span></a></code></td>
<td><div><code>setDirections(directions)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>directions</code>:&nbsp; <code><a href="DirectionsResult.md">DirectionsResult</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Set the renderer to use the result from the <code>DirectionsService</code>. Setting a valid set of directions in this manner will display the directions on the renderer's designated map and panel.</div></td>
</tr>
<tr id="DirectionsRenderer.setMap">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsRenderer.setMap"><span>setMap</span></a></code></td>
<td><div><code>setMap(map)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>map</code>:&nbsp; <code><a href="Map.md">Map</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">This method specifies the map on which directions will be rendered. Pass <code>null</code> to remove the directions from the map.</div></td>
</tr>
<tr id="DirectionsRenderer.setOptions">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsRenderer.setOptions"><span>setOptions</span></a></code></td>
<td><div><code>setOptions(options)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>options</code>:&nbsp; <code><a href="DirectionsRendererOptions.md">DirectionsRendererOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Change the options settings of this <code>DirectionsRenderer</code> after initialization.</div></td>
</tr>
<tr id="DirectionsRenderer.setPanel">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsRenderer.setPanel"><span>setPanel</span></a></code></td>
<td><div><code>setPanel(panel)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>panel</code>:&nbsp; <code>Node</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">This method renders the directions in a <code>&lt;div&gt;</code>. Pass <code>null</code> to remove the content from the panel.</div></td>
</tr>
<tr id="DirectionsRenderer.setRouteIndex">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsRenderer.setRouteIndex"><span>setRouteIndex</span></a></code></td>
<td><div><code>setRouteIndex(routeIndex)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>routeIndex</code>:&nbsp; <code>number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Set the (zero-based) index of the route in the <code>DirectionsResult</code> object to render. By default, the first route in the array will be rendered.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="details responsive" summary="class DirectionsRenderer - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="DirectionsRenderer.directions_changed">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsRenderer.directions_changed"><span>directions_changed</span></a></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the rendered directions change, either when a new <code>DirectionsResult</code> is set or when the user finishes dragging a change to the directions path.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
