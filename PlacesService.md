
<devsite-heading text=" PlacesService class" for="PlacesService" level="h2" link="" toc="" back-to-top=""><h2 id="PlacesService" is-upgraded="">PlacesService class</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps.places</span>.<span itemprop="name">PlacesService</span></code>
class
</p>
<p>Contains methods related to searching for places and retrieving details about a place.</p>
<devsite-heading text="Library" for="library" level="h4" link=""><h4 is-upgraded="" id="library">Library</h4></devsite-heading>
<p>places</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class PlacesService - Constructor">
<thead>
<tr><th colspan="2" id="PlacesService.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code translate="no" dir="ltr"><a class="secret-link" href="#PlacesService.constructor"><span>PlacesService</span></a></code></td>
<td><div><code translate="no" dir="ltr">PlacesService(attrContainer)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">attrContainer</code>:&nbsp; <code translate="no" dir="ltr">HTMLDivElement|<a href="Map.md">Map</a></code></li>
</ul></div>
<div class="desc">Creates a new instance of the <code translate="no" dir="ltr">PlacesService</code> that renders attributions in the specified container.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class PlacesService - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="PlacesService.findPlaceFromPhoneNumber">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlacesService.findPlaceFromPhoneNumber"><span>findPlaceFromPhoneNumber</span></a></code></td>
<td><div><code translate="no" dir="ltr">findPlaceFromPhoneNumber(request, callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">request</code>:&nbsp; <code translate="no" dir="ltr"><a href="FindPlaceFromPhoneNumberRequest.md">FindPlaceFromPhoneNumberRequest</a></code></li>
<li><code translate="no" dir="ltr">callback</code>:&nbsp; <code translate="no" dir="ltr">function(Array&lt;<a href="PlaceResult.md">PlaceResult</a>&gt; <span class="optional-type-annotation">optional</span>, <a href="PlacesServiceStatus.md">PlacesServiceStatus</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Retrieves a list of places based on a phone number. In most cases there should be just one item in the result list, however if the request is ambiguous more than one result may be returned. The <code translate="no" dir="ltr"><a href="PlaceResult.md">PlaceResult</a></code>s passed to the callback are subsets of a full <code translate="no" dir="ltr"><a href="PlaceResult.md">PlaceResult</a></code>. Your app can get a more detailed <code translate="no" dir="ltr"><a href="PlaceResult.md">PlaceResult</a></code> for each place by calling <code translate="no" dir="ltr"><a href="/maps/documentation/javascript/reference/places-service#PlacesService.getDetails">PlacesService.getDetails</a></code> and passing the <code translate="no" dir="ltr"><a href="/maps/documentation/javascript/reference/places-service#PlaceResult.place_id">PlaceResult.place_id</a></code> for the desired place.</div></td>
</tr>
<tr id="PlacesService.findPlaceFromQuery">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlacesService.findPlaceFromQuery"><span>findPlaceFromQuery</span></a></code></td>
<td><div><code translate="no" dir="ltr">findPlaceFromQuery(request, callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">request</code>:&nbsp; <code translate="no" dir="ltr"><a href="FindPlaceFromQueryRequest.md">FindPlaceFromQueryRequest</a></code></li>
<li><code translate="no" dir="ltr">callback</code>:&nbsp; <code translate="no" dir="ltr">function(Array&lt;<a href="PlaceResult.md">PlaceResult</a>&gt; <span class="optional-type-annotation">optional</span>, <a href="PlacesServiceStatus.md">PlacesServiceStatus</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Retrieves a list of places based on a query string. In most cases there should be just one item in the result list, however if the request is ambiguous more than one result may be returned. The <code translate="no" dir="ltr"><a href="PlaceResult.md">PlaceResult</a></code>s passed to the callback are subsets of a full <code translate="no" dir="ltr"><a href="PlaceResult.md">PlaceResult</a></code>. Your app can get a more detailed <code translate="no" dir="ltr"><a href="PlaceResult.md">PlaceResult</a></code> for each place by calling <code translate="no" dir="ltr"><a href="/maps/documentation/javascript/reference/places-service#PlacesService.getDetails">PlacesService.getDetails</a></code> and passing the <code translate="no" dir="ltr"><a href="/maps/documentation/javascript/reference/places-service#PlaceResult.place_id">PlaceResult.place_id</a></code> for the desired place.</div></td>
</tr>
<tr id="PlacesService.getDetails">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlacesService.getDetails"><span>getDetails</span></a></code></td>
<td><div><code translate="no" dir="ltr">getDetails(request, callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">request</code>:&nbsp; <code translate="no" dir="ltr"><a href="PlaceDetailsRequest.md">PlaceDetailsRequest</a></code></li>
<li><code translate="no" dir="ltr">callback</code>:&nbsp; <code translate="no" dir="ltr">function(<a href="PlaceResult.md">PlaceResult</a> <span class="optional-type-annotation">optional</span>, <a href="PlacesServiceStatus.md">PlacesServiceStatus</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Retrieves details about the place identified by the given <code translate="no" dir="ltr">placeId</code>.</div></td>
</tr>
<tr id="PlacesService.nearbySearch">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlacesService.nearbySearch"><span>nearbySearch</span></a></code></td>
<td><div><code translate="no" dir="ltr">nearbySearch(request, callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">request</code>:&nbsp; <code translate="no" dir="ltr"><a href="PlaceSearchRequest.md">PlaceSearchRequest</a></code></li>
<li><code translate="no" dir="ltr">callback</code>:&nbsp; <code translate="no" dir="ltr">function(Array&lt;<a href="PlaceResult.md">PlaceResult</a>&gt; <span class="optional-type-annotation">optional</span>, <a href="PlacesServiceStatus.md">PlacesServiceStatus</a>, <a href="PlaceSearchPagination.md">PlaceSearchPagination</a> <span class="optional-type-annotation">optional</span>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Retrieves a list of places near a particular location, based on keyword or type. Location must always be specified, either by passing a <code translate="no" dir="ltr">LatLngBounds</code>, or <code translate="no" dir="ltr">location</code> and <code translate="no" dir="ltr">radius</code> parameters. The <code translate="no" dir="ltr"><a href="PlaceResult.md">PlaceResult</a></code>s passed to the callback are subsets of the full <code translate="no" dir="ltr"><a href="PlaceResult.md">PlaceResult</a></code>. Your app can get a more detailed <code translate="no" dir="ltr"><a href="PlaceResult.md">PlaceResult</a></code> for each place by sending a <a href="/maps/documentation/javascript/places#place_details_requests">Place Details request</a> passing the <code translate="no" dir="ltr"><a href="/maps/documentation/javascript/reference/places-service#PlaceResult.place_id">PlaceResult.place_id</a></code> for the desired place. The <code translate="no" dir="ltr"><a href="PlaceSearchPagination.md">PlaceSearchPagination</a></code> object can be used to fetch additional pages of results (null if this is the last page of results or if there is only one page of results).</div></td>
</tr>
<tr id="PlacesService.textSearch">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlacesService.textSearch"><span>textSearch</span></a></code></td>
<td><div><code translate="no" dir="ltr">textSearch(request, callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">request</code>:&nbsp; <code translate="no" dir="ltr"><a href="TextSearchRequest.md">TextSearchRequest</a></code></li>
<li><code translate="no" dir="ltr">callback</code>:&nbsp; <code translate="no" dir="ltr">function(Array&lt;<a href="PlaceResult.md">PlaceResult</a>&gt; <span class="optional-type-annotation">optional</span>, <a href="PlacesServiceStatus.md">PlacesServiceStatus</a>, <a href="PlaceSearchPagination.md">PlaceSearchPagination</a> <span class="optional-type-annotation">optional</span>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Retrieves a list of places based on a query string (for example, "pizza in New York", or "shoe stores near Ottawa"). Location parameters are optional; when the location is specified, results are only biased toward nearby results rather than restricted to places inside the area. Use <code translate="no" dir="ltr">textSearch</code> when you want to search for places using an arbitrary string, and in cases where you may not want to restrict search results to a particular location. The <code translate="no" dir="ltr">PlaceSearchPagination</code> object can be used to fetch additional pages of results (null if this is the last page of results or if there is only one page of results).</div></td>
</tr>
</tbody>
</table></div>
