
<devsite-heading text=" GeocoderComponentRestrictions interface" for="GeocoderComponentRestrictions" level="h2" link="" toc="" back-to-top=""><h2 id="GeocoderComponentRestrictions" is-upgraded="">GeocoderComponentRestrictions interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">GeocoderComponentRestrictions</span></code>
interface
</p>
<p><code translate="no" dir="ltr">GeocoderComponentRestrictions</code> represents a set of filters that resolve to a specific area. For details on how this works, see <a href="/maps/documentation/javascript/geocoding#ComponentFiltering"> Geocoding Component Filtering</a>.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface GeocoderComponentRestrictions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="GeocoderComponentRestrictions.administrativeArea">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#GeocoderComponentRestrictions.administrativeArea"><span>administrativeArea</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">Matches all the <code translate="no" dir="ltr">administrative_area levels</code>. Optional.</div></td>
</tr>
<tr id="GeocoderComponentRestrictions.country">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#GeocoderComponentRestrictions.country"><span>country</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">Matches a country name or a two letter ISO 3166-1 country code. Optional.</div></td>
</tr>
<tr id="GeocoderComponentRestrictions.locality">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#GeocoderComponentRestrictions.locality"><span>locality</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">Matches against both <code translate="no" dir="ltr">locality</code> and <code translate="no" dir="ltr">sublocality</code> types. Optional.</div></td>
</tr>
<tr id="GeocoderComponentRestrictions.postalCode">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#GeocoderComponentRestrictions.postalCode"><span>postalCode</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">Matches <code translate="no" dir="ltr">postal_code</code> and <code translate="no" dir="ltr">postal_code_prefix</code>. Optional.</div></td>
</tr>
<tr id="GeocoderComponentRestrictions.route">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#GeocoderComponentRestrictions.route"><span>route</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">Matches the long or short name of a <code translate="no" dir="ltr">route</code>. Optional.</div></td>
</tr>
</tbody>
</table></div>
