<h2 id="GeocoderRequest">
google.maps.GeocoderRequest
object specification
</h2><p>The specification for a geocoding request to be sent to the <code>Geocoder</code>.</p><h3 id="devsite_header_99">Properties</h3><table summary="interface GeocoderRequest - Properties" width="100%">
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
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngBounds.md">LatLngBounds</a></code></td>
<td>LatLngBounds within which to search. Optional.</td>
</tr>
<tr>
<td><code>componentRestrictions</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.GeocoderComponentRestrictions.md">GeocoderComponentRestrictions</a></code></td>
<td>Components are used to restrict results to a specific area. A filter consists of one or more of: <code>route</code>, <code>locality</code>, <code>administrativeArea</code>, <code>postalCode</code>, <code>country</code>. Only the results that match all the filters will be returned. Filter values support the same methods of spelling correction and partial matching as other geocoding requests. Optional.</td>
</tr>
<tr>
<td><code>location</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngLiteral.md">LatLngLiteral</a></code></td>
<td>LatLng about which to search. Optional.</td>
</tr>
<tr>
<td><code>region</code></td>
<td><code>string</code></td>
<td>Country code used to bias the search, specified as a Unicode region subtag / CLDR identifier. Optional.</td>
</tr>
</tbody>
</table>