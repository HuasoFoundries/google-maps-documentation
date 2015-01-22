<h2 id="FusionTablesLayer">
google.maps.FusionTablesLayer
class
</h2><p>A <code>FusionTablesLayer</code> allows you to display data from a Google Fusion Table on a map, as a rendered layer. (See <a href="https://developers.google.com/fusiontables/">https://developers.google.com/fusiontables/</a> for more information about Fusion Tables).</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCObject.md">MVCObject</a></code>.
</p><h3 id="devsite_header_177">Constructor</h3><table summary="class FusionTablesLayer - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>FusionTablesLayer(options:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.FusionTablesLayerOptions.md"><em>FusionTablesLayerOptions</em></a>)</code></td>
<td>A layer that displays data from a Fusion Table.</td>
</tr>
</tbody>
</table><h3 id="devsite_header_178">Methods</h3><table summary="class FusionTablesLayer - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getMap()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a></code></td>
<td>Returns the map on which this layer is displayed.</td>
</tr>
<tr>
<td><code>setMap(map:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a>)</code></td>
<td><code>None</code></td>
<td>Renders the layer on the specified map. If map is set to null, the layer will be removed.</td>
</tr>
<tr>
<td><code>setOptions(options:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.FusionTablesLayerOptions.md"><em>FusionTablesLayerOptions</em></a>)</code></td>
<td><code>None</code></td>
<td></td>
</tr>
</tbody>
</table><h3 id="devsite_header_179">Events</h3><table summary="class FusionTablesLayer - Events" width="100%">
<thead>
<tr><th>Events</th>
<th>Arguments</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>click</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.FusionTablesMouseEvent.md"><em>FusionTablesMouseEvent</em></a></code></td>
<td>This event is fired when a feature in the layer is clicked.</td>
</tr>
</tbody>
</table>