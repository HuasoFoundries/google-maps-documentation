<h2 id="MapsEngineMouseEvent"> MapsEngineMouseEvent object specification </h2><p>
<code><span itemprop="path">google.maps.visualization</span>.<span itemprop="name">MapsEngineMouseEvent</span></code>
object specification
</p><p>The properties of a mouse event on a <code>MapsEngineLayer</code>.</p><h4>Library</h4><p>visualization</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface MapsEngineMouseEvent - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>featureId</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The feature ID, guaranteed to be unique within the layer.</div></td>
</tr>
<tr>
<td><code><span>infoWindowHtml</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Pre-rendered HTML content, as placed in the infowindow by the default UI.</div></td>
</tr>
<tr>
<td><code><span>latLng</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc">The position at which to anchor an infowindow on the clicked feature.</div></td>
</tr>
<tr>
<td><code><span>pixelOffset</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Size.md">Size</a></code></div>
<div class="desc">The offset to apply to an infowindow anchored on the clicked feature.</div></td>
</tr>
</tbody>
</table></div>