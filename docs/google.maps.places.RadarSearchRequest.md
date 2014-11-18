<h2 id="RadarSearchRequest">
google.maps.places.RadarSearchRequest
object specification
</h2><p>A Radar Search request to be sent to the <code>PlacesService</code>.</p><h3>Library</h3><p>places</p><h3>Properties</h3><table summary="interface RadarSearchRequest - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>bounds</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngBounds.md">LatLngBounds</a></code></td>
<td>Bounds used to bias results when searching for Places (optional). Both <code>location</code> and <code>radius</code> will be ignored if <code>bounds</code> is set. Results will not be restricted to those inside these bounds; but, results inside it will rank higher.</td>
</tr>
<tr>
<td><code>keyword</code></td>
<td><code>string</code></td>
<td>A term to be matched against all available fields, including but not limited to name, type, and address, as well as customer reviews and other third-party content.</td>
</tr>
<tr>
<td><code>location</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngLiteral.md">LatLngLiteral</a></code></td>
<td>The center of the area used to bias results when searching for Places.</td>
</tr>
<tr>
<td><code>name</code></td>
<td><code>string</code></td>
<td>Restricts results to Places that include this text in the name.</td>
</tr>
<tr>
<td><code>radius</code></td>
<td><code>number</code></td>
<td>The radius of the area used to bias results when searching for Places, in meters.</td>
</tr>
<tr>
<td><code>types</code></td>
<td><code>Array&lt;string&gt;</code></td>
<td>Restricts the Place search results to Places with a type matching at least one of the specified types in this array. Valid types are given <a href="/maps/documentation/places/supported_types">here</a>.</td>
</tr>
</tbody>
</table>