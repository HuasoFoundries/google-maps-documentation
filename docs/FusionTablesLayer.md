<h2 id="FusionTablesLayer"> FusionTablesLayer class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">FusionTablesLayer</span></code>
class
</p><p>A <code>FusionTablesLayer</code> allows you to display data from a Google Fusion Table on a map, as a rendered layer. (See <a href="https://developers.google.com/fusiontables/">https://developers.google.com/fusiontables/</a> for more information about Fusion Tables).</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class FusionTablesLayer - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>FusionTablesLayer(<wbr>options:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/FusionTablesLayerOptions.md"><span>FusionTablesLayerOptions</span></a><span>)</span></code></td>
<td>A layer that displays data from a Fusion Table.</td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class FusionTablesLayer - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>getMap()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc">Returns the map on which this layer is displayed.</div></td>
</tr>
<tr>
<td><code><span>setMap(<wbr>map:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md"><span>Map</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Renders the layer on the specified map. If map is set to null, the layer will be removed.</div></td>
</tr>
<tr>
<td><code><span>setOptions(<wbr>options:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/FusionTablesLayerOptions.md"><span>FusionTablesLayerOptions</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="details responsive" summary="class FusionTablesLayer - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>click</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/FusionTablesMouseEvent.md">FusionTablesMouseEvent</a></code></div>
<div class="desc">This event is fired when a feature in the layer is clicked.</div></td>
</tr>
</tbody>
</table></div>