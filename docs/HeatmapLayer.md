<h2 id="HeatmapLayer">
HeatmapLayer
class
</h2><p>
<code><span itemprop="path">google.maps.visualization</span>.<span itemprop="name">HeatmapLayer</span></code>
class
</p><p>A layer that provides a client-side rendered heatmap, depicting the intensity of data at geographical points.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><h4>Library</h4><p>visualization</p><table class="constructors responsive" summary="class HeatmapLayer - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code>HeatmapLayer(opts?:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/HeatmapLayerOptions.md"><em>HeatmapLayerOptions</em></a>)</code></td>
<td>Creates a new instance of <code>HeatmapLayer</code>.</td>
</tr>
</tbody>
</table><table class="methods responsive" summary="class HeatmapLayer - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code>getData()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/WeightedLocation.md">WeightedLocation</a>&gt;</code></div>
<div class="desc">Returns the data points currently displayed by this heatmap.</div></td>
</tr>
<tr>
<td><code>getMap()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code>setData(data:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/WeightedLocation.md">WeightedLocation</a>&gt;|
Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/WeightedLocation.md">WeightedLocation</a>&gt;)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the data points to be displayed by this heatmap.</div></td>
</tr>
<tr>
<td><code>setMap(map:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a>)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Renders the heatmap on the specified map. If map is set to null, the heatmap will be removed.</div></td>
</tr>
<tr>
<td><code>setOptions(options:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/HeatmapLayerOptions.md"><em>HeatmapLayerOptions</em></a>)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
</tbody>
</table>