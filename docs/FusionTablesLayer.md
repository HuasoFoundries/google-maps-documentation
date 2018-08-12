
<h2 id="FusionTablesLayer">FusionTablesLayer class</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">FusionTablesLayer</span></code>
class
</p>
<p>A <code>FusionTablesLayer</code> allows you to display data from a Google Fusion Table on a map, as a rendered layer. (See <a href="https://developers.google.com/fusiontables/">https://developers.google.com/fusiontables/</a> for more information about Fusion Tables).</p>
<p>This class extends
<code><a href="MVCObject.md">MVCObject</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class FusionTablesLayer - Constructor">
<thead>
<tr><th colspan="2" id="FusionTablesLayer.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><a class="secret-link" href="#FusionTablesLayer.constructor"><span>FusionTablesLayer</span></a></code></td>
<td><div><code>FusionTablesLayer(options)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>options</code>:&nbsp; <code><a href="FusionTablesLayerOptions.md">FusionTablesLayerOptions</a></code></li>
</ul></div>
<div class="desc">A layer that displays data from a Fusion Table.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class FusionTablesLayer - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="FusionTablesLayer.getMap">
<td itemprop="property"><code><a class="secret-link" href="#FusionTablesLayer.getMap"><span>getMap</span></a></code></td>
<td><div><code>getMap()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="Map.md">Map</a></code></div>
<div class="desc">Returns the map on which this layer is displayed.</div></td>
</tr>
<tr id="FusionTablesLayer.setMap">
<td itemprop="property"><code><a class="secret-link" href="#FusionTablesLayer.setMap"><span>setMap</span></a></code></td>
<td><div><code>setMap(map)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>map</code>:&nbsp; <code><a href="Map.md">Map</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Renders the layer on the specified map. If map is set to null, the layer will be removed.</div></td>
</tr>
<tr id="FusionTablesLayer.setOptions">
<td itemprop="property"><code><a class="secret-link" href="#FusionTablesLayer.setOptions"><span>setOptions</span></a></code></td>
<td><div><code>setOptions(options)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>options</code>:&nbsp; <code><a href="FusionTablesLayerOptions.md">FusionTablesLayerOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="details responsive" summary="class FusionTablesLayer - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="FusionTablesLayer.click">
<td itemprop="property"><code><a class="secret-link" href="#FusionTablesLayer.click"><span>click</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="FusionTablesMouseEvent.md">FusionTablesMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when a feature in the layer is clicked.</div></td>
</tr>
</tbody>
</table></div>
