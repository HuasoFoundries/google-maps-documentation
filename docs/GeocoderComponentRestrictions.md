<h2 id="GeocoderComponentRestrictions"> GeocoderComponentRestrictions object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">GeocoderComponentRestrictions</span></code>
object specification
</p><p><code>GeocoderComponentRestrictions</code> represents a set of filters that resolve to a specific area. For details on how this works, see <a href="/maps/documentation/javascript/geocoding#ComponentFiltering"> Geocoding Component Filtering</a>.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface GeocoderComponentRestrictions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>administrativeArea</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Matches all the <code>administrative_area levels</code>. Optional.</div></td>
</tr>
<tr>
<td><code><span>country</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Matches a country name or a two letter ISO 3166-1 country code. Optional.</div></td>
</tr>
<tr>
<td><code><span>locality</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Matches against both <code>locality</code> and <code>sublocality</code> types. Optional.</div></td>
</tr>
<tr>
<td><code><span>postalCode</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Matches <code>postal_code</code> and <code>postal_code_prefix</code>. Optional.</div></td>
</tr>
<tr>
<td><code><span>route</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Matches the long or short name of a <code>route</code>. Optional.</div></td>
</tr>
</tbody>
</table></div>