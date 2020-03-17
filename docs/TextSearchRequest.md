
<devsite-heading text=" TextSearchRequest interface" for="TextSearchRequest" level="h2" link="" toc="" back-to-top=""><h2 id="TextSearchRequest" is-upgraded="">TextSearchRequest interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps.places</span>.<span itemprop="name">TextSearchRequest</span></code>
interface
</p>
<p>A text search request to be sent to the <code translate="no" dir="ltr">PlacesService</code>.</p>
<devsite-heading text="Library" for="library_5" level="h4" link=""><h4 is-upgraded="" id="library_5">Library</h4></devsite-heading>
<p>places</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface TextSearchRequest - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="TextSearchRequest.bounds">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#TextSearchRequest.bounds"><span>bounds</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLngBounds.md">LatLngBounds</a>|<a href="LatLngBoundsLiteral.md">LatLngBoundsLiteral</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Bounds used to bias results when searching for Places (optional). Both <code translate="no" dir="ltr">location</code> and <code translate="no" dir="ltr">radius</code> will be ignored if <code translate="no" dir="ltr">bounds</code> is set. Results will not be restricted to those inside these bounds; but, results inside it will rank higher.</div></td>
</tr>
<tr id="TextSearchRequest.location">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#TextSearchRequest.location"><span>location</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The center of the area used to bias results when searching for Places.</div></td>
</tr>
<tr id="TextSearchRequest.query">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#TextSearchRequest.query"><span>query</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The request's query term. For example, the name of a place ('Eiffel Tower'), a category followed by the name of a location ('pizza in New York'), or the name of a place followed by a location disambiguator ('Starbucks in Sydney').</div></td>
</tr>
<tr id="TextSearchRequest.radius">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#TextSearchRequest.radius"><span>radius</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The radius of the area used to bias results when searching for Places, in meters.</div></td>
</tr>
<tr id="TextSearchRequest.type">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#TextSearchRequest.type"><span>type</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Searches for places of the given type. The type is translated to the local language of the request's target location and used as a query string. If a query is also provided, it is concatenated to the localized type string. Results of a different type are dropped from the response. Use this field to perform language and region independent categorical searches. Valid types are given <a href="/maps/documentation/places/supported_types">here</a>.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
