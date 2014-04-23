<h2 id="KmlLayerOptions">
google.maps.KmlLayerOptions
object specification
</h2><p>This object defines the properties that can be set on a <code>KmlLayer</code> object.</p><h3>Properties</h3><table summary="interface KmlLayerOptions - Properties" width="100%">
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
<td><code>map</code></td>
<td><code><a href="#Map">Map</a></code></td>
<td>The map on which to display the layer.</td>
</tr>
<tr>
<td><code>preserveViewport</code></td>
<td><code>boolean</code></td>
<td>By default, the input map is centered and zoomed to the bounding box of the contents of the layer. If this option is set to <code>true</code>, the viewport is left unchanged, unless the map's center and zoom were never set.</td>
</tr>
<tr>
<td><code>screenOverlays</code></td>
<td><code>boolean</code></td>
<td>Whether to render the screen overlays. Default true.</td>
</tr>
<tr>
<td><code>suppressInfoWindows</code></td>
<td><code>boolean</code></td>
<td>Suppress the rendering of info windows when layer features are clicked.</td>
</tr>
<tr>
<td><code>url</code></td>
<td><code>string</code></td>
<td>The URL of the KML document to display.</td>
</tr>
<tr>
<td><code>zIndex</code></td>
<td><code>number</code></td>
<td>The z-index of the layer.</td>
</tr>
</tbody>
</table>