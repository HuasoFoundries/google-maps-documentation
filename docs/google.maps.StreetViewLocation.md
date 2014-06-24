<h2 id="StreetViewLocation">
google.maps.StreetViewLocation
object specification
</h2><p>A representation of a location in the Street View panorama.</p><h3>Properties</h3><table summary="interface StreetViewLocation - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>description</code></td>
<td><code>string</code></td>
<td>A localized string describing the location.</td>
</tr>
<tr>
<td><code>latLng</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a></code></td>
<td>The latlng of the panorama.</td>
</tr>
<tr>
<td><code>pano</code></td>
<td><code>string</code></td>
<td>A unique identifier for the panorama. This is stable within a session but unstable across sessions.</td>
</tr>
<tr>
<td><code>shortDescription</code></td>
<td><code>string</code></td>
<td>Short description of the location.</td>
</tr>
</tbody>
</table>