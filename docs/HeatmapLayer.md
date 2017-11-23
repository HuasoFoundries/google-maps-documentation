<h2 id="HeatmapLayer"> HeatmapLayer class </h2><p>
<code><span itemprop="path">google.maps.visualization</span>.<span itemprop="name">HeatmapLayer</span></code>
class
</p><p>A layer that provides a client-side rendered heatmap, depicting the intensity of data at geographical points.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><h4>Library</h4><p>visualization</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class HeatmapLayer - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>HeatmapLayer(<wbr>opts?:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/HeatmapLayerOptions.md"><span>HeatmapLayerOptions</span></a><span>)</span></code></td>
<td>Creates a new instance of <code><span>HeatmapLayer</span></code>.</td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class HeatmapLayer - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>getData()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/WeightedLocation.md">WeightedLocation</a>&gt;</code></div>
<div class="desc">Returns the data points currently displayed by this heatmap.</div></td>
</tr>
<tr>
<td><code><span>getMap()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>setData(<wbr>data:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md"><span>MVCArray</span></a><span>&lt;</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/WeightedLocation.md"><span>WeightedLocation</span></a><span>&gt;|<wbr>Array&lt;</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/WeightedLocation.md"><span>WeightedLocation</span></a><span>&gt;)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the data points to be displayed by this heatmap.</div></td>
</tr>
<tr>
<td><code><span>setMap(<wbr>map:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md"><span>Map</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Renders the heatmap on the specified map. If map is set to null, the heatmap will be removed.</div></td>
</tr>
<tr>
<td><code><span>setOptions(<wbr>options:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/HeatmapLayerOptions.md"><span>HeatmapLayerOptions</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
</tbody>
</table></div>