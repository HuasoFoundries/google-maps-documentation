<h2 id="GeocoderRequest"> GeocoderRequest object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">GeocoderRequest</span></code>
object specification
</p><p>The specification for a geocoding request to be sent to the <code>Geocoder</code>.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="record GeocoderRequest - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>address</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Address to geocode. One, and only one, of <code>address</code>, <code>location</code> and <code>placeId</code> must be supplied.</div></td>
</tr>
<tr>
<td><code><span>bounds</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBoundsLiteral.md">LatLngBoundsLiteral</a></code></div>
<div class="desc"><code>LatLngBounds</code> within which to search. Optional.</div></td>
</tr>
<tr>
<td><code><span>componentRestrictions</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/GeocoderComponentRestrictions.md">GeocoderComponentRestrictions</a></code></div>
<div class="desc">Components are used to restrict results to a specific area. A filter consists of one or more of: <code>route</code>, <code>locality</code>, <code>administrativeArea</code>, <code>postalCode</code>, <code>country</code>. Only the results that match all the filters will be returned. Filter values support the same methods of spelling correction and partial matching as other geocoding requests. Optional.</div></td>
</tr>
<tr>
<td><code><span>location</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md">LatLngLiteral</a></code></div>
<div class="desc"><code>LatLng</code> (or <code>LatLngLiteral</code>) for which to search. The geocoder performs a reverse geocode. See <a href="https://developers.google.com/maps/documentation/javascript/geocoding#ReverseGeocoding"> Reverse Geocoding</a> for more information. One, and only one, of <code>address</code>, <code>location</code> and <code>placeId</code> must be supplied.</div></td>
</tr>
<tr>
<td><code><span>newForwardGeocoder</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Use the new forward geocoder scorer. Optional.</div></td>
</tr>
<tr>
<td><code><span>placeId</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The place ID associated with the location. Place IDs uniquely identify a place in the Google Places database and on Google Maps. Learn more about <a href="https://developers.google.com/places/place-id">place IDs</a> in the Places API developer guide. The geocoder performs a reverse geocode. See <a href="https://developers.google.com/maps/documentation/javascript/geocoding#ReverseGeocoding"> Reverse Geocoding</a> for more information. One, and only one, of <code>address</code>, <code>location</code> and <code>placeId</code> must be supplied.</div></td>
</tr>
<tr>
<td><code><span>region</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Country code used to bias the search, specified as a Unicode region subtag / CLDR identifier. Optional.</div></td>
</tr>
</tbody>
</table></div>