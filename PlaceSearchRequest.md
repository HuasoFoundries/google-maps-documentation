
<devsite-heading text=" PlaceSearchRequest interface" for="PlaceSearchRequest" level="h2" link="" toc="" back-to-top=""><h2 id="PlaceSearchRequest" is-upgraded="">PlaceSearchRequest interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps.places</span>.<span itemprop="name">PlaceSearchRequest</span></code>
interface
</p>
<p>A Place search query to be sent to the <code translate="no" dir="ltr">PlacesService</code>.</p>
<devsite-heading text="Library" for="library_4" level="h4" link=""><h4 is-upgraded="" id="library_4">Library</h4></devsite-heading>
<p>places</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface PlaceSearchRequest - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="PlaceSearchRequest.bounds">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceSearchRequest.bounds"><span>bounds</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLngBounds.md">LatLngBounds</a>|<a href="LatLngBoundsLiteral.md">LatLngBoundsLiteral</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The bounds within which to search for Places. Both <code translate="no" dir="ltr">location</code> and <code translate="no" dir="ltr">radius</code> will be ignored if <code translate="no" dir="ltr">bounds</code> is set.</div></td>
</tr>
<tr id="PlaceSearchRequest.keyword">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceSearchRequest.keyword"><span>keyword</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">A term to be matched against all available fields, including but not limited to name, type, and address, as well as customer reviews and other third-party content.</div></td>
</tr>
<tr id="PlaceSearchRequest.location">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceSearchRequest.location"><span>location</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The location around which to search for Places.</div></td>
</tr>
<tr id="PlaceSearchRequest.maxPriceLevel">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceSearchRequest.maxPriceLevel"><span>maxPriceLevel</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Restricts results to only those places at the specified price level or lower. Valid values are in the range from 0 (most affordable) to 4 (most expensive), inclusive. Must be greater than or equal to <code translate="no" dir="ltr">minPrice </code>, if specified.</div></td>
</tr>
<tr id="PlaceSearchRequest.minPriceLevel">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceSearchRequest.minPriceLevel"><span>minPriceLevel</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Restricts results to only those places at the specified price level or higher. Valid values are in the range from 0 (most affordable) to 4 (most expensive), inclusive. Must be less than or equal to <code translate="no" dir="ltr">maxPrice</code>, if specified.</div></td>
</tr>
<tr id="PlaceSearchRequest.name">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceSearchRequest.name"><span>name</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Restricts the Place search results to Places that include this text in the name.</div></td>
</tr>
<tr id="PlaceSearchRequest.openNow">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceSearchRequest.openNow"><span>openNow</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Restricts results to only those places that are open right now.</div></td>
</tr>
<tr id="PlaceSearchRequest.radius">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceSearchRequest.radius"><span>radius</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The distance from the given location within which to search for Places, in meters. The maximum allowed value is 50 000.</div></td>
</tr>
<tr id="PlaceSearchRequest.rankBy">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceSearchRequest.rankBy"><span>rankBy</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="RankBy.md">RankBy</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Specifies the ranking method to use when returning results. Defaults to <code translate="no" dir="ltr">PROMINENCE</code>. Note that when <code translate="no" dir="ltr">rankBy</code> is set to <code translate="no" dir="ltr">DISTANCE</code>, you must specify a <code translate="no" dir="ltr">location</code> but you cannot specify a <code translate="no" dir="ltr">radius</code> or <code translate="no" dir="ltr">bounds</code>.</div></td>
</tr>
<tr id="PlaceSearchRequest.type">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceSearchRequest.type"><span>type</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Searches for places of the given type. The type is translated to the local language of the request's target location and used as a query string. If a query is also provided, it is concatenated to the localized type string. Results of a different type are dropped from the response. Use this field to perform language and region independent categorical searches. Valid types are given <a href="/maps/documentation/places/supported_types">here</a>.</div></td>
</tr>
</tbody>
</table></div>
