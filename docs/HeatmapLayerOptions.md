<h2 id="HeatmapLayerOptions"> HeatmapLayerOptions interface </h2><p>
<code><span itemprop="path">google.maps.visualization</span>.<span itemprop="name">HeatmapLayerOptions</span></code>
interface
</p><p>This object defines the properties that can be set on a <code>HeatmapLayer</code> object.</p><h4>Library</h4><p>visualization</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface HeatmapLayerOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="HeatmapLayerOptions.data">
<td><code><span>data</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>&gt;|Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>&gt;</code></div>
<div class="desc">The data points to display. Required.</div></td>
</tr>
<tr id="HeatmapLayerOptions.dissipating">
<td><code><span>dissipating</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Specifies whether heatmaps dissipate on zoom. By default, the radius of influence of a data point is specified by the radius option only. When dissipating is disabled, the radius option is interpreted as a radius at zoom level 0.</div></td>
</tr>
<tr id="HeatmapLayerOptions.gradient">
<td><code><span>gradient</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">The color gradient of the heatmap, specified as an array of CSS color strings. All CSS3 colors are supported except for extended named colors.</div></td>
</tr>
<tr id="HeatmapLayerOptions.map">
<td><code><span>map</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc">The map on which to display the layer.</div></td>
</tr>
<tr id="HeatmapLayerOptions.maxIntensity">
<td><code><span>maxIntensity</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The maximum intensity of the heatmap. By default, heatmap colors are dynamically scaled according to the greatest concentration of points at any particular pixel on the map. This property allows you to specify a fixed maximum.</div></td>
</tr>
<tr id="HeatmapLayerOptions.opacity">
<td><code><span>opacity</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The opacity of the heatmap, expressed as a number between 0 and 1. Defaults to 0.6.</div></td>
</tr>
<tr id="HeatmapLayerOptions.radius">
<td><code><span>radius</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The radius of influence for each data point, in pixels.</div></td>
</tr>
</tbody>
</table></div>