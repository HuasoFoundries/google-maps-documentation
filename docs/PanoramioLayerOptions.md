<h2 id="PanoramioLayerOptions">
google.maps.panoramio.PanoramioLayerOptions
object specification
</h2><p>This object defines the properties that can be set on a <code>PanoramioLayer</code> object.</p><h3>Library</h3><p>panoramio</p><h3>Properties</h3><table summary="interface PanoramioLayerOptions - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>clickable</code></td>
<td><code>boolean</code></td>
<td>If true, the layer receives mouse events. Default value is <code>true</code>.</td>
</tr>
<tr>
<td><code>map</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a></code></td>
<td>The map on which to display the layer.</td>
</tr>
<tr>
<td><code>suppressInfoWindows</code></td>
<td><code>boolean</code></td>
<td>Suppress the rendering of info windows when layer features are clicked.</td>
</tr>
<tr>
<td><code>tag</code></td>
<td><code>string</code></td>
<td>A panoramio tag used to filter the photos which are displayed. Only photos which have been tagged with the supplied string will be shown.</td>
</tr>
<tr>
<td><code>userId</code></td>
<td><code>string</code></td>
<td>A Panoramio user ID. If provided, only photos by this user will be displayed on the map. If both a tag and user ID are provided, the tag will take precedence.</td>
</tr>
</tbody>
</table>