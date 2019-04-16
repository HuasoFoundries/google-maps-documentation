
<h2 id="FindPlaceFromPhoneNumberRequest">FindPlaceFromPhoneNumberRequest interface</h2>
<p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">FindPlaceFromPhoneNumberRequest</span></code>
interface
</p>
<p>A find place from text search request to be sent to <code><a href="https://developers.google.com/maps/documentation/javascript/reference/places-service#PlacesService.findPlaceFromPhoneNumber">PlacesService.findPlaceFromPhoneNumber</a></code>.</p>
<h4>Library</h4>
<p>places</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface FindPlaceFromPhoneNumberRequest - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="FindPlaceFromPhoneNumberRequest.fields">
<td itemprop="property"><code><a class="secret-link" href="#FindPlaceFromPhoneNumberRequest.fields"><span>fields</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">Fields to be included in the response. For a list of fields see <code><a href="PlaceResult.md">PlaceResult</a></code>. Nested fields can be specified with dot-paths (for example, <code>"geometry.location"</code>).</div></td>
</tr>
<tr id="FindPlaceFromPhoneNumberRequest.locationBias">
<td itemprop="property"><code><a class="secret-link" href="#FindPlaceFromPhoneNumberRequest.locationBias"><span>locationBias</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="LocationBias.md">LocationBias</a></code></div>
<div class="desc">The bias used when searching for Place. The result will be biased towards, but not restricted to, the given <code><a href="LocationBias.md">LocationBias</a></code>.</div></td>
</tr>
<tr id="FindPlaceFromPhoneNumberRequest.phoneNumber">
<td itemprop="property"><code><a class="secret-link" href="#FindPlaceFromPhoneNumberRequest.phoneNumber"><span>phoneNumber</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The phone number of the place to look up. Format must be <a href="https://en.wikipedia.org/wiki/E.164">E.164</a>.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
