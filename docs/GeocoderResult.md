
<devsite-heading><h2 id="GeocoderResult" is-upgraded="">GeocoderResult interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">GeocoderResult</span></code>
interface
</p>
<p>A single geocoder result retrieved from the geocode server. A geocode request may return multiple result objects. Note that though this result is "JSON-like," it is not strictly JSON, as it indirectly includes a <code translate="no" dir="ltr">LatLng</code> object.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface GeocoderResult - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="GeocoderResult.address_components">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#GeocoderResult.address_components"><span>address_components</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="GeocoderAddressComponent.md">GeocoderAddressComponent</a>&gt;</code></div>
<div class="desc">An array of <code translate="no" dir="ltr">GeocoderAddressComponent</code>s</div></td>
</tr>
<tr id="GeocoderResult.formatted_address">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#GeocoderResult.formatted_address"><span>formatted_address</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">A string containing the human-readable address of this location.</div></td>
</tr>
<tr id="GeocoderResult.geometry">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#GeocoderResult.geometry"><span>geometry</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="GeocoderGeometry.md">GeocoderGeometry</a></code></div>
<div class="desc">A <code translate="no" dir="ltr">GeocoderGeometry</code> object</div></td>
</tr>
<tr id="GeocoderResult.partial_match">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#GeocoderResult.partial_match"><span>partial_match</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean</code></div>
<div class="desc">Whether the geocoder did not return an exact match for the original request, though it was able to match part of the requested address.</div></td>
</tr>
<tr id="GeocoderResult.place_id">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#GeocoderResult.place_id"><span>place_id</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">The place ID associated with the location. Place IDs uniquely identify a place in the Google Places database and on Google Maps. Learn more about <a href="/places/place-id">Place IDs</a> in the Places API developer guide.</div></td>
</tr>
<tr id="GeocoderResult.postcode_localities">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#GeocoderResult.postcode_localities"><span>postcode_localities</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;string&gt;</code></div>
<div class="desc">An array of strings denoting all the localities contained in a postal code. This is only present when the result is a postal code that contains multiple localities. This array can contain up to 10 localities.</div></td>
</tr>
<tr id="GeocoderResult.types">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#GeocoderResult.types"><span>types</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;string&gt;</code></div>
<div class="desc">An array of strings denoting the type of the returned geocoded element. For a list of possible strings, refer to the <a href="/maps/documentation/javascript/geocoding#GeocodingAddressTypes"> Address Component Types</a> section of the Developer's Guide.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
