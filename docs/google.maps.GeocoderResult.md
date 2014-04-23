<h2 id="GeocoderResult">
google.maps.GeocoderResult
object specification
</h2><p>A single geocoder result retrieved from the geocode server. A geocode request may return multiple result objects. Note that though this result is "JSON-like," it is not strictly JSON, as it indirectly includes a <code>LatLng</code> object.</p><h3>Properties</h3><table summary="object GeocoderResult - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>address_components</code></td>
<td><code>Array.&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.GeocoderAddressComponent.md">GeocoderAddressComponent</a>&gt;</code></td>
<td>An array of <code>GeocoderAddressComponent</code>s</td>
</tr>
<tr>
<td><code>formatted_address</code></td>
<td><code>string</code></td>
<td>A string containing the human-readable address of this location.</td>
</tr>
<tr>
<td><code>geometry</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.GeocoderGeometry.md">GeocoderGeometry</a></code></td>
<td>A <code>GeocoderGeometry</code> object</td>
</tr>
<tr>
<td><code>partial_match</code></td>
<td><code>boolean</code></td>
<td>Whether the geocoder did not return an exact match for the original request, though it was able to match part of the requested address.</td>
</tr>
<tr>
<td><code>postcode_localities</code></td>
<td><code>Array.&lt;string&gt;</code></td>
<td>An array of strings denoting all the localities contained in a postal code. This is only present when the result is a postal code that contains multiple localities.</td>
</tr>
<tr>
<td><code>types</code></td>
<td><code>Array.&lt;string&gt;</code></td>
<td>An array of strings denoting the type of the returned geocoded element. For a list of possible strings, refer to the <a href="/maps/documentation/javascript/geocoding#GeocodingAddressTypes"> Address Component Types</a> section of the Developer's Guide.</td>
</tr>
</tbody>
</table>