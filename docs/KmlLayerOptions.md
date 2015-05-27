<h2 id="KmlLayerOptions">
KmlLayerOptions
object specification
</h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">KmlLayerOptions</span></code>
object specification
</p><p>This object defines the properties that can be set on a <code>KmlLayer</code> object.</p><table class="properties responsive" summary="interface KmlLayerOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code>clickable</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If true, the layer receives mouse events. Default value is true.</div></td>
</tr>
<tr>
<td><code>map</code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc">The map on which to display the layer.</div></td>
</tr>
<tr>
<td><code>preserveViewport</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">By default, the input map is centered and zoomed to the bounding box of the contents of the layer. If this option is set to <code>true</code>, the viewport is left unchanged, unless the map's center and zoom were never set.</div></td>
</tr>
<tr>
<td><code>screenOverlays</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Whether to render the screen overlays. Default true.</div></td>
</tr>
<tr>
<td><code>suppressInfoWindows</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Suppress the rendering of info windows when layer features are clicked.</div></td>
</tr>
<tr>
<td><code>url</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The URL of the KML document to display.</div></td>
</tr>
<tr>
<td><code>zIndex</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The z-index of the layer.</div></td>
</tr>
</tbody>
</table>