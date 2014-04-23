<h2 id="FusionTablesLayerOptions">
google.maps.FusionTablesLayerOptions
object specification
</h2><p>This object defines the properties that can be set on a <code>FusionTablesLayer</code> object.</p><h3>Properties</h3><table summary="interface FusionTablesLayerOptions - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>clickable</code></td>
<td><code>boolean</code></td>
<td>If true, the layer receives mouse events. Default value is true.</td>
</tr>
<tr>
<td><code>heatmap</code></td>
<td><code><a href="#FusionTablesHeatmap">FusionTablesHeatmap</a></code></td>
<td>Options which define the appearance of the layer as a heatmap.</td>
</tr>
<tr>
<td><code>map</code></td>
<td><code><a href="#Map">Map</a></code></td>
<td>The map on which to display the layer.</td>
</tr>
<tr>
<td><code>query</code></td>
<td><code><a href="#FusionTablesQuery">FusionTablesQuery</a></code></td>
<td>Options defining the data to display.</td>
</tr>
<tr>
<td><code>styles</code></td>
<td><code>Array.&lt;<a href="#FusionTablesStyle">FusionTablesStyle</a>&gt;</code></td>
<td>An array of up to 5 style specifications, which control the appearance of features within the layer.</td>
</tr>
<tr>
<td><code>suppressInfoWindows</code></td>
<td><code>boolean</code></td>
<td>Suppress the rendering of info windows when layer features are clicked.</td>
</tr>
</tbody>
</table>