<h2 id="HeatmapLayerOptions">
google.maps.visualization.HeatmapLayerOptions
object specification
</h2><p>This object defines the properties that can be set on a <code>HeatmapLayer</code> object.</p><h3>Library</h3><p>visualization</p><h3>Properties</h3><table summary="interface HeatmapLayerOptions - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>data</code></td>
<td><code><a href="#MVCArray">MVCArray</a>.&lt;<a href="#LatLng">LatLng</a>&gt;</code></td>
<td>The data points to display. Required.</td>
</tr>
<tr>
<td><code>dissipating</code></td>
<td><code>boolean</code></td>
<td>Specifies whether heatmaps dissipate on zoom. By default, the radius of influence of a data point is specified by the radius option only. When dissipating is disabled, the radius option is intepreted as a radius at zoom level 0.</td>
</tr>
<tr>
<td><code>gradient</code></td>
<td><code>Array.&lt;string&gt;</code></td>
<td>The color gradient of the heatmap, specified as an array of CSS color strings. All CSS3 colors are supported except for extended named colors.</td>
</tr>
<tr>
<td><code>map</code></td>
<td><code><a href="#Map">Map</a></code></td>
<td>The map on which to display the layer.</td>
</tr>
<tr>
<td><code>maxIntensity</code></td>
<td><code>number</code></td>
<td>The maximum intensity of the heatmap. By default, heatmap colors are dynamically scaled according to the greatest concentration of points at any particular pixel on the map. This property allows you to specify a fixed maximum.</td>
</tr>
<tr>
<td><code>opacity</code></td>
<td><code>number</code></td>
<td>The opacity of the heatmap, expressed as a number between 0 and 1. Defaults to 0.6.</td>
</tr>
<tr>
<td><code>radius</code></td>
<td><code>number</code></td>
<td>The radius of influence for each data point, in pixels.</td>
</tr>
</tbody>
</table>