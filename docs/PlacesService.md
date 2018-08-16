<h2 id="PlacesService"> PlacesService class </h2><p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">PlacesService</span></code>
class
</p><p>Contains methods related to searching for places and retrieving details about a place.</p><h4>Library</h4><p>places</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class PlacesService - Constructor">
<thead>
<tr><th colspan="2" id="PlacesService.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>PlacesService</span></code></td>
<td><div><code>PlacesService(attrContainer)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>attrContainer</code>:&nbsp; <code>HTMLDivElement|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></li>
</ul></div>
<div class="desc">Creates a new instance of the <code>PlacesService</code> that renders attributions in the specified container.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class PlacesService - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="PlacesService.findPlaceFromPhoneNumber">
<td><code><span>findPlaceFromPhoneNumber</span></code></td>
<td><div><code>findPlaceFromPhoneNumber(request, callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>request</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/FindPlaceFromPhoneNumberRequest.md">FindPlaceFromPhoneNumberRequest</a></code></li>
<li><code>callback</code>:&nbsp; <code>function(Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceResult.md">PlaceResult</a>&gt;, <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlacesServiceStatus.md">PlacesServiceStatus</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Retrieves a list of places based on a phone number. In most cases there should be just one item in the result list, however if the request is ambiguous more than one result may be returned. The <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceResult.md">PlaceResult</a></code>s passed to the callback are subsets of a full <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceResult.md">PlaceResult</a></code>. Your app can get a more detailed <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceResult.md">PlaceResult</a></code> for each place by calling <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlacesService.md">PlacesService.getDetails</a></code> and passing the <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceResult.md">PlaceResult.place_id</a></code> for the desired place.</div></td>
</tr>
<tr id="PlacesService.findPlaceFromQuery">
<td><code><span>findPlaceFromQuery</span></code></td>
<td><div><code>findPlaceFromQuery(request, callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>request</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/FindPlaceFromQueryRequest.md">FindPlaceFromQueryRequest</a></code></li>
<li><code>callback</code>:&nbsp; <code>function(Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceResult.md">PlaceResult</a>&gt;, <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlacesServiceStatus.md">PlacesServiceStatus</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Retrieves a list of places based on a query string. In most cases there should be just one item in the result list, however if the request is ambiguous more than one result may be returned. The <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceResult.md">PlaceResult</a></code>s passed to the callback are subsets of a full <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceResult.md">PlaceResult</a></code>. Your app can get a more detailed <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceResult.md">PlaceResult</a></code> for each place by calling <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlacesService.md">PlacesService.getDetails</a></code> and passing the <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceResult.md">PlaceResult.place_id</a></code> for the desired place.</div></td>
</tr>
<tr id="PlacesService.getDetails">
<td><code><span>getDetails</span></code></td>
<td><div><code>getDetails(request, callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>request</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceDetailsRequest.md">PlaceDetailsRequest</a></code></li>
<li><code>callback</code>:&nbsp; <code>function(<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceResult.md">PlaceResult</a>, <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlacesServiceStatus.md">PlacesServiceStatus</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Retrieves details about the place identified by the given <code>placeId</code>.</div></td>
</tr>
<tr id="PlacesService.nearbySearch">
<td><code><span>nearbySearch</span></code></td>
<td><div><code>nearbySearch(request, callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>request</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceSearchRequest.md">PlaceSearchRequest</a></code></li>
<li><code>callback</code>:&nbsp; <code>function(Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceResult.md">PlaceResult</a>&gt;, <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlacesServiceStatus.md">PlacesServiceStatus</a>, <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceSearchPagination.md">PlaceSearchPagination</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Retrieves a list of places near a particular location, based on keyword or type. Location must always be specified, either by passing a <code>LatLngBounds</code>, or <code>location</code> and <code>radius</code> parameters. The <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceResult.md">PlaceResult</a></code>s passed to the callback are subsets of the full <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceResult.md">PlaceResult</a></code>. Your app can get a more detailed <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceResult.md">PlaceResult</a></code> for each place by sending a <a href="https://developers.google.com/maps/documentation/javascript/places#place_details_requests">Place Details request</a> passing the <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceResult.md">PlaceResult.place_id</a></code> for the desired place. The <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceSearchPagination.md">PlaceSearchPagination</a></code> object can be used to fetch additional pages of results (null if this is the last page of results or if there is only one page of results).</div></td>
</tr>
<tr id="PlacesService.textSearch">
<td><code><span>textSearch</span></code></td>
<td><div><code>textSearch(request, callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>request</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/TextSearchRequest.md">TextSearchRequest</a></code></li>
<li><code>callback</code>:&nbsp; <code>function(Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceResult.md">PlaceResult</a>&gt;, <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlacesServiceStatus.md">PlacesServiceStatus</a>, <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceSearchPagination.md">PlaceSearchPagination</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Retrieves a list of places based on a query string (for example, "pizza in New York", or "shoe stores near Ottawa"). Location parameters are optional; when the location is specified, results are only biased toward nearby results rather than restricted to places inside the area. Use <code>textSearch</code> when you want to search for places using an arbitrary string, and in cases where you may not want to restrict search results to a particular location. The <code>PlaceSearchPagination</code> object can be used to fetch additional pages of results (null if this is the last page of results or if there is only one page of results).</div></td>
</tr>
</tbody>
</table></div>