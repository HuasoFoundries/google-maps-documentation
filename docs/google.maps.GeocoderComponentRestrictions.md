<h2 id="GeocoderComponentRestrictions">
google.maps.GeocoderComponentRestrictions
object specification
</h2><p><code>GeocoderComponentRestrictions</code> represent a set of filters that resolve to a specific area. For details on how this works, see <a href="https://developers.google.com/maps/documentation/geocoding/#ComponentFiltering">Geocoding Component Filtering</a>.</p><h3>Properties</h3><table summary="interface GeocoderComponentRestrictions - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>administrativeArea</code></td>
<td><code>string</code></td>
<td>Matches all the <code>administrative_area levels</code>. Optional.</td>
</tr>
<tr>
<td><code>country</code></td>
<td><code>string</code></td>
<td>Matches a country name or a two letter ISO 3166-1 country code. Optional.</td>
</tr>
<tr>
<td><code>locality</code></td>
<td><code>string</code></td>
<td>Matches against both <code>locality</code> and <code>sublocality</code> types. Optional.</td>
</tr>
<tr>
<td><code>postalCode</code></td>
<td><code>string</code></td>
<td>Matches <code>postal_code</code> and <code>postal_code_prefix</code>. Optional.</td>
</tr>
<tr>
<td><code>route</code></td>
<td><code>string</code></td>
<td>Matches the long or short name of a <code>route</code>. Optional.</td>
</tr>
</tbody>
</table>