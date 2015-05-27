<h2 id="DirectionsRenderer">
google.maps.DirectionsRenderer
class
</h2><p>Renders directions retrieved in the form of a <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.DirectionsResult.md">DirectionsResult</a></code> object retrieved from the <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.DirectionsService.md">DirectionsService</a></code>.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCObject.md">MVCObject</a></code>.
</p><h3>Constructor</h3><table summary="class DirectionsRenderer - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>DirectionsRenderer(opts?:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.DirectionsRendererOptions.md"><em>DirectionsRendererOptions</em></a>)</code></td>
<td>Creates the renderer with the given options. Directions can be rendered on a map (as visual overlays) or additionally on a <code>&lt;div&gt;</code> panel (as textual instructions).</td>
</tr>
</tbody>
</table><h3>Methods</h3><table summary="class DirectionsRenderer - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getDirections()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.DirectionsResult.md">DirectionsResult</a></code></td>
<td>Returns the renderer's current set of directions.</td>
</tr>
<tr>
<td><code>getMap()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a></code></td>
<td>Returns the map on which the <code>DirectionsResult</code> is rendered.</td>
</tr>
<tr>
<td><code>getPanel()</code></td>
<td><code>Node</code></td>
<td>Returns the panel <code>&lt;div&gt;</code> in which the <code>DirectionsResult</code> is rendered.</td>
</tr>
<tr>
<td><code>getRouteIndex()</code></td>
<td><code>number</code></td>
<td>Returns the current (zero-based) route index in use by this <code>DirectionsRenderer</code> object.</td>
</tr>
<tr>
<td><code>setDirections(directions:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.DirectionsResult.md"><em>DirectionsResult</em></a>)</code></td>
<td><code>None</code></td>
<td>Set the renderer to use the result from the <code>DirectionsService</code>. Setting a valid set of directions in this manner will display the directions on the renderer's designated map and panel.</td>
</tr>
<tr>
<td><code>setMap(map:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a>)</code></td>
<td><code>None</code></td>
<td>This method specifies the map on which directions will be rendered. Pass <code>null</code> to remove the directions from the map.</td>
</tr>
<tr>
<td><code>setOptions(options:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.DirectionsRendererOptions.md"><em>DirectionsRendererOptions</em></a>)</code></td>
<td><code>None</code></td>
<td>Change the options settings of this <code>DirectionsRenderer</code> after initialization.</td>
</tr>
<tr>
<td><code>setPanel(panel:Node)</code></td>
<td><code>None</code></td>
<td>This method renders the directions in a <code>&lt;div&gt;</code>. Pass <code>null</code> to remove the content from the panel.</td>
</tr>
<tr>
<td><code>setRouteIndex(routeIndex:number)</code></td>
<td><code>None</code></td>
<td>Set the (zero-based) index of the route in the <code>DirectionsResult</code> object to render. By default, the first route in the array will be rendered.</td>
</tr>
</tbody>
</table><h3>Events</h3><table summary="class DirectionsRenderer - Events" width="100%">
<thead>
<tr><th>Events</th>
<th>Arguments</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>directions_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the rendered directions change, either when a new <code>DirectionsResult</code> is set or when the user finishes dragging a change to the directions path.</td>
</tr>
</tbody>
</table>