<h2 id="GeocoderRequest"> GeocoderRequest object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">GeocoderRequest</span></code>
object specification
</p><p>The specification for a geocoding request to be sent to the <code>Geocoder</code>.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface GeocoderRequest - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>address</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Address. Optional.</div></td>
</tr>
<tr>
<td><code><span>bounds</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">LatLngBounds within which to search. Optional.</div></td>
</tr>
<tr>
<td><code><span>componentRestrictions</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/GeocoderComponentRestrictions.md">GeocoderComponentRestrictions</a></code></div>
<div class="desc">Components are used to restrict results to a specific area. A filter consists of one or more of: <code>route</code>, <code>locality</code>, <code>administrativeArea</code>, <code>postalCode</code>, <code>country</code>. Only the results that match all the filters will be returned. Filter values support the same methods of spelling correction and partial matching as other geocoding requests. Optional.</div></td>
</tr>
<tr>
<td><code><span>location</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md">LatLngLiteral</a></code></div>
<div class="desc">LatLng about which to search. Optional.</div></td>
</tr>
<tr>
<td><code><span>region</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Country code used to bias the search, specified as a Unicode region subtag / CLDR identifier. Optional.</div></td>
</tr>
</tbody>
</table></div>