<h2 id="HeatmapLayer">
google.maps.visualization.HeatmapLayer
class
</h2><p>A layer that provides a client-side rendered heatmap, depicting the intensity of data at geographical points.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCObject.md">MVCObject</a></code>.
</p><h3>Library</h3><p>visualization</p><h3>Constructor</h3><table summary="class HeatmapLayer - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>HeatmapLayer(opts?:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.visualization.HeatmapLayerOptions.md"><em>HeatmapLayerOptions</em></a>)</code></td>
<td>Creates a new instance of <code>HeatmapLayer</code>.</td>
</tr>
</tbody>
</table><h3>Methods</h3><table summary="class HeatmapLayer - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getData()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCArray.md">MVCArray</a>.&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.visualization.WeightedLocation.md">WeightedLocation</a>&gt;</code></td>
<td>Returns the data points currently displayed by this heatmap.</td>
</tr>
<tr>
<td><code>getMap()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a></code></td>
<td></td>
</tr>
<tr>
<td><code>setData(data:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCArray.md">MVCArray</a>.&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.visualization.WeightedLocation.md">WeightedLocation</a>&gt;|
Array.&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.visualization.WeightedLocation.md">WeightedLocation</a>&gt;)</code></td>
<td><code>None</code></td>
<td>Sets the data points to be displayed by this heatmap.</td>
</tr>
<tr>
<td><code>setMap(map:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a>)</code></td>
<td><code>None</code></td>
<td>Renders the heatmap on the specified map. If map is set to null, the heatmap will be removed.</td>
</tr>
</tbody>
</table>