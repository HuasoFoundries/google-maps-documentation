<h2 id="StreetViewLocation">
StreetViewLocation
object specification
</h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">StreetViewLocation</span></code>
object specification
</p><p>A representation of a location in the Street View panorama.</p><table class="properties responsive" summary="interface StreetViewLocation - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code>description</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">A localized string describing the location.</div></td>
</tr>
<tr>
<td><code>latLng</code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc">The latlng of the panorama.</div></td>
</tr>
<tr>
<td><code>pano</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">A unique identifier for the panorama. This is stable within a session but unstable across sessions.</div></td>
</tr>
<tr>
<td><code>shortDescription</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Short description of the location.</div></td>
</tr>
</tbody>
</table>