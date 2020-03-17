
<devsite-heading text=" GeocoderRequest interface" for="GeocoderRequest" level="h2" link="" toc="" back-to-top=""><h2 id="GeocoderRequest" is-upgraded="">GeocoderRequest interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">GeocoderRequest</span></code>
interface
</p>
<p>The specification for a geocoding request to be sent to the <code translate="no" dir="ltr">Geocoder</code>.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface GeocoderRequest - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="GeocoderRequest.address">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#GeocoderRequest.address"><span>address</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Address to geocode. One, and only one, of <code translate="no" dir="ltr">address</code>, <code translate="no" dir="ltr">location</code> and <code translate="no" dir="ltr">placeId</code> must be supplied.</div></td>
</tr>
<tr id="GeocoderRequest.bounds">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#GeocoderRequest.bounds"><span>bounds</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLngBounds.md">LatLngBounds</a>|<a href="LatLngBoundsLiteral.md">LatLngBoundsLiteral</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc"><code translate="no" dir="ltr">LatLngBounds</code> within which to search. Optional.</div></td>
</tr>
<tr id="GeocoderRequest.componentRestrictions">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#GeocoderRequest.componentRestrictions"><span>componentRestrictions</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="GeocoderComponentRestrictions.md">GeocoderComponentRestrictions</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Components are used to restrict results to a specific area. A filter consists of one or more of: <code translate="no" dir="ltr">route</code>, <code translate="no" dir="ltr">locality</code>, <code translate="no" dir="ltr">administrativeArea</code>, <code translate="no" dir="ltr">postalCode</code>, <code translate="no" dir="ltr">country</code>. Only the results that match all the filters will be returned. Filter values support the same methods of spelling correction and partial matching as other geocoding requests. Optional.</div></td>
</tr>
<tr id="GeocoderRequest.location">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#GeocoderRequest.location"><span>location</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc"><code translate="no" dir="ltr">LatLng</code> (or <code translate="no" dir="ltr">LatLngLiteral</code>) for which to search. The geocoder performs a reverse geocode. See <a href="/maps/documentation/javascript/geocoding#ReverseGeocoding"> Reverse Geocoding</a> for more information. One, and only one, of <code translate="no" dir="ltr">address</code>, <code translate="no" dir="ltr">location</code> and <code translate="no" dir="ltr">placeId</code> must be supplied.</div></td>
</tr>
<tr id="GeocoderRequest.placeId">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#GeocoderRequest.placeId"><span>placeId</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The place ID associated with the location. Place IDs uniquely identify a place in the Google Places database and on Google Maps. Learn more about <a href="/places/place-id">place IDs</a> in the Places API developer guide. The geocoder performs a reverse geocode. See <a href="/maps/documentation/javascript/geocoding#ReverseGeocoding"> Reverse Geocoding</a> for more information. One, and only one, of <code translate="no" dir="ltr">address</code>, <code translate="no" dir="ltr">location</code> and <code translate="no" dir="ltr">placeId</code> must be supplied.</div></td>
</tr>
<tr id="GeocoderRequest.region">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#GeocoderRequest.region"><span>region</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Country code used to bias the search, specified as a Unicode region subtag / CLDR identifier. Optional.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
