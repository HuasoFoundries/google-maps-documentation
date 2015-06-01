<h2 id="PanoramioMouseEvent"> PanoramioMouseEvent object specification </h2><p>
<code><span itemprop="path">google.maps.panoramio</span>.<span itemprop="name">PanoramioMouseEvent</span></code>
object specification
</p><p>The properties of a mouse event on a <code>PanoramioLayer</code>.</p><h4>Library</h4><p>panoramio</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface PanoramioMouseEvent - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>featureDetails</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PanoramioFeature.md">PanoramioFeature</a></code></div>
<div class="desc">A <code>PanoramioFeature</code> object containing information about the clicked feature.</div></td>
</tr>
<tr>
<td><code><span>infoWindowHtml</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Pre-rendered HTML content to display within a feature's <code>InfoWindow</code> when clicked.</div></td>
</tr>
<tr>
<td><code><span>latLng</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc">The position at which to anchor an info window on the clicked feature.</div></td>
</tr>
<tr>
<td><code><span>pixelOffset</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Size.md">Size</a></code></div>
<div class="desc">The offset to apply to an info window anchored on the clicked feature.</div></td>
</tr>
</tbody>
</table></div>