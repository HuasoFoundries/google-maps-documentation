<h2 id="GeocoderResult"> GeocoderResult object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">GeocoderResult</span></code>
object specification
</p><p>A single geocoder result retrieved from the geocode server. A geocode request may return multiple result objects. Note that though this result is "JSON-like," it is not strictly JSON, as it indirectly includes a <code>LatLng</code> object.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="object GeocoderResult - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>address_components</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/GeocoderAddressComponent.md">GeocoderAddressComponent</a>&gt;</code></div>
<div class="desc">An array of <code>GeocoderAddressComponent</code>s</div></td>
</tr>
<tr>
<td><code><span>formatted_address</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">A string containing the human-readable address of this location.</div></td>
</tr>
<tr>
<td><code><span>geometry</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/GeocoderGeometry.md">GeocoderGeometry</a></code></div>
<div class="desc">A <code>GeocoderGeometry</code> object</div></td>
</tr>
<tr>
<td><code><span>partial_match</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Whether the geocoder did not return an exact match for the original request, though it was able to match part of the requested address.</div></td>
</tr>
<tr>
<td><code><span>place_id</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The place ID associated with the location. Place IDs uniquely identify a place in the Google Places database and on Google Maps. Learn more about <a href="/places/place-id">Place IDs</a> in the Places API developer guide.</div></td>
</tr>
<tr>
<td><code><span>postcode_localities</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">An array of strings denoting all the localities contained in a postal code. This is only present when the result is a postal code that contains multiple localities.</div></td>
</tr>
<tr>
<td><code><span>types</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">An array of strings denoting the type of the returned geocoded element. For a list of possible strings, refer to the <a href="/maps/documentation/javascript/geocoding#GeocodingAddressTypes"> Address Component Types</a> section of the Developer's Guide.</div></td>
</tr>
</tbody>
</table></div>