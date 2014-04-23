<h2 id="GeocoderRequest">
google.maps.GeocoderRequest
object specification
</h2><p>The specification for a geocoding request to be sent to the <code>Geocoder</code>.</p><h3>Properties</h3><table summary="interface GeocoderRequest - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>address</code></td>
<td><code>string</code></td>
<td>Address. Optional.</td>
</tr>
<tr>
<td><code>bounds</code></td>
<td><code><a href="#LatLngBounds">LatLngBounds</a></code></td>
<td>LatLngBounds within which to search. Optional.</td>
</tr>
<tr>
<td><code>location</code></td>
<td><code><a href="#LatLng">LatLng</a>|<a href="#LatLngLiteral">LatLngLiteral</a></code></td>
<td>LatLng about which to search. Optional.</td>
</tr>
<tr>
<td><code>region</code></td>
<td><code>string</code></td>
<td>Country code used to bias the search, specified as a Unicode region subtag / CLDR identifier. Optional.</td>
</tr>
</tbody>
</table>