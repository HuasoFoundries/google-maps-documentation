<h2 id="StreetViewLocationRequest"> StreetViewLocationRequest object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">StreetViewLocationRequest</span></code>
object specification
</p><p>A Street View request to be sent with <code>getPanorama</code>. <code>StreetViewLocationRequest</code> lets you search for a Street View panoroma at a specified location.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface StreetViewLocationRequest - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>location</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md">LatLngLiteral</a></code></div>
<div class="desc">Specifies the location where to search for a Street View panorama.</div></td>
</tr>
<tr>
<td><code><span>radius</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">Sets a radius in meters in which to search for a panorama. Defaults to 50 when not supplied.</div></td>
</tr>
</tbody>
</table></div>