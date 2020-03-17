
<devsite-heading text=" FindPlaceFromQueryRequest interface" for="FindPlaceFromQueryRequest" level="h2" link="" toc="" back-to-top=""><h2 id="FindPlaceFromQueryRequest" is-upgraded="">FindPlaceFromQueryRequest interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps.places</span>.<span itemprop="name">FindPlaceFromQueryRequest</span></code>
interface
</p>
<p>A find place from text search request to be sent to <code translate="no" dir="ltr"><a href="/maps/documentation/javascript/reference/places-service#PlacesService.findPlaceFromQuery">PlacesService.findPlaceFromQuery</a></code>.</p>
<devsite-heading text="Library" for="library_3" level="h4" link=""><h4 is-upgraded="" id="library_3">Library</h4></devsite-heading>
<p>places</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface FindPlaceFromQueryRequest - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="FindPlaceFromQueryRequest.fields">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#FindPlaceFromQueryRequest.fields"><span>fields</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;string&gt;</code></div>
<div class="desc">Fields to be included in the response, <a href="https://developers.google.com/maps/billing/understanding-cost-of-use#places-product">which will be billed for</a>. If <code translate="no" dir="ltr">['ALL']</code> is passed in, all available fields will be returned and billed for (this is not recommended for production deployments). For a list of fields see <code translate="no" dir="ltr"><a href="PlaceResult.md">PlaceResult</a></code>. Nested fields can be specified with dot-paths (for example, <code translate="no" dir="ltr">"geometry.location"</code>).</div></td>
</tr>
<tr id="FindPlaceFromQueryRequest.locationBias">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#FindPlaceFromQueryRequest.locationBias"><span>locationBias</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LocationBias.md">LocationBias</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The bias used when searching for Place. The result will be biased towards, but not restricted to, the given <code translate="no" dir="ltr"><a href="LocationBias.md">LocationBias</a></code>.</div></td>
</tr>
<tr id="FindPlaceFromQueryRequest.query">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#FindPlaceFromQueryRequest.query"><span>query</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">The request's query. For example, the name or address of a place.</div></td>
</tr>
</tbody>
</table></div>
