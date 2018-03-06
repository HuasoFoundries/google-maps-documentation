<h2 id="HeatmapLayer"> HeatmapLayer class </h2><p>
<code><span itemprop="path">google.maps.visualization</span>.<span itemprop="name">HeatmapLayer</span></code>
class
</p><p>A layer that provides a client-side rendered heatmap, depicting the intensity of data at geographical points.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><h4>Library</h4><p>visualization</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class HeatmapLayer - Constructor">
<thead>
<tr><th colspan="2" id="HeatmapLayer.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>HeatmapLayer</span></code></td>
<td><div><code>HeatmapLayer([opts])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>opts</code> (optional):&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/HeatmapLayerOptions.md">HeatmapLayerOptions</a></code></li>
</ul></div>
<div class="desc">Creates a new instance of <code>HeatmapLayer</code>.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class HeatmapLayer - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="HeatmapLayer.getData">
<td><code><span>getData</span></code></td>
<td><div><code>getData()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/WeightedLocation.md">WeightedLocation</a>&gt;</code></div>
<div class="desc">Returns the data points currently displayed by this heatmap.</div></td>
</tr>
<tr id="HeatmapLayer.getMap">
<td><code><span>getMap</span></code></td>
<td><div><code>getMap()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc"></div></td>
</tr>
<tr id="HeatmapLayer.setData">
<td><code><span>setData</span></code></td>
<td><div><code>setData(data)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>data</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/WeightedLocation.md">WeightedLocation</a>&gt;|Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/WeightedLocation.md">WeightedLocation</a>&gt;</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the data points to be displayed by this heatmap.</div></td>
</tr>
<tr id="HeatmapLayer.setMap">
<td><code><span>setMap</span></code></td>
<td><div><code>setMap(map)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>map</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Renders the heatmap on the specified map. If map is set to null, the heatmap will be removed.</div></td>
</tr>
<tr id="HeatmapLayer.setOptions">
<td><code><span>setOptions</span></code></td>
<td><div><code>setOptions(options)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>options</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/HeatmapLayerOptions.md">HeatmapLayerOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
</tbody>
</table></div>