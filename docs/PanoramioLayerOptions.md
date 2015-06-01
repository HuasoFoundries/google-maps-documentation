<h2 id="PanoramioLayerOptions">
PanoramioLayerOptions
object specification
</h2><p>
<code><span itemprop="path">google.maps.panoramio</span>.<span itemprop="name">PanoramioLayerOptions</span></code>
object specification
</p><p>This object defines the properties that can be set on a <code>PanoramioLayer</code> object.</p><h4>Library</h4><p>panoramio</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface PanoramioLayerOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>clickable</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If true, the layer receives mouse events. Default value is <code>true</code>.</div></td>
</tr>
<tr>
<td><code><span>map</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc">The map on which to display the layer.</div></td>
</tr>
<tr>
<td><code><span>suppressInfoWindows</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Suppress the rendering of info windows when layer features are clicked.</div></td>
</tr>
<tr>
<td><code><span>tag</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">A panoramio tag used to filter the photos which are displayed. Only photos which have been tagged with the supplied string will be shown.</div></td>
</tr>
<tr>
<td><code><span>userId</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">A Panoramio user ID. If provided, only photos by this user will be displayed on the map. If both a tag and user ID are provided, the tag will take precedence.</div></td>
</tr>
</tbody>
</table></div>