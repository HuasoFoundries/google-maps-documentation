
<devsite-heading text=" FindPlaceFromPhoneNumberRequest interface" for="FindPlaceFromPhoneNumberRequest" level="h2" link="" toc="" back-to-top=""><h2 id="FindPlaceFromPhoneNumberRequest" is-upgraded="">FindPlaceFromPhoneNumberRequest interface </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps.places</span>.<span itemprop="name">FindPlaceFromPhoneNumberRequest</span></code>
interface
</p>
<p>A find place from text search request to be sent to <code translate="no" dir="ltr"><a href="/maps/documentation/javascript/reference/places-service#PlacesService.findPlaceFromPhoneNumber">PlacesService.findPlaceFromPhoneNumber</a></code>.</p>
<devsite-heading text="Library" for="library_2" level="h4" link=""><h4 is-upgraded="" id="library_2">Library<button role="button" class="devsite-heading-link button-flat material-icons" data-title="Copy link to this section"></button></h4></devsite-heading>
<p>places</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface FindPlaceFromPhoneNumberRequest - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="FindPlaceFromPhoneNumberRequest.fields">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#FindPlaceFromPhoneNumberRequest.fields"><span>fields</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;string&gt;</code></div>
<div class="desc">Fields to be included in the response, <a href="https://developers.google.com/maps/billing/understanding-cost-of-use#places-product">which will be billed for</a>. If <code translate="no" dir="ltr">['ALL']</code> is passed in, all available fields will be returned and billed for (this is not recommended for production deployments). For a list of fields see <code translate="no" dir="ltr"><a href="PlaceResult.md">PlaceResult</a></code>. Nested fields can be specified with dot-paths (for example, <code translate="no" dir="ltr">"geometry.location"</code>).</div></td>
</tr>
<tr id="FindPlaceFromPhoneNumberRequest.locationBias">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#FindPlaceFromPhoneNumberRequest.locationBias"><span>locationBias</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LocationBias.md">LocationBias</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The bias used when searching for Place. The result will be biased towards, but not restricted to, the given <code translate="no" dir="ltr"><a href="LocationBias.md">LocationBias</a></code>.</div></td>
</tr>
<tr id="FindPlaceFromPhoneNumberRequest.phoneNumber">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#FindPlaceFromPhoneNumberRequest.phoneNumber"><span>phoneNumber</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">The phone number of the place to look up. Format must be <a href="https://en.wikipedia.org/wiki/E.164">E.164</a>.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
