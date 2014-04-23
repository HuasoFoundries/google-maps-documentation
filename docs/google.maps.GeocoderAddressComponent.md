<h2 id="GeocoderAddressComponent">
google.maps.GeocoderAddressComponent
object specification
</h2><p>A single address component within a <code>GeocoderResult</code>. A full address may consist of multiple address components.</p><h3>Properties</h3><table summary="object GeocoderAddressComponent - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>long_name</code></td>
<td><code>string</code></td>
<td>The full text of the address component</td>
</tr>
<tr>
<td><code>short_name</code></td>
<td><code>string</code></td>
<td>The abbreviated, short text of the given address component</td>
</tr>
<tr>
<td><code>types</code></td>
<td><code>Array.&lt;string&gt;</code></td>
<td>An array of strings denoting the type of this address component. A list of valid types can be found <a href="/maps/documentation/geocoding/#Types">here</a></td>
</tr>
</tbody>
</table>