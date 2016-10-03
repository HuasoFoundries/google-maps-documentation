<h2 id="PlacesService"> PlacesService class </h2><p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">PlacesService</span></code>
class
</p><p>Contains methods related to searching for places and retrieving details about a place.</p><h4>Library</h4><p>places</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class PlacesService - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>PlacesService(<wbr>attrContainer:HTMLDivElement|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md"><span>Map</span></a><span>)</span></code></td>
<td>Creates a new instance of the <code><span>PlacesService</span></code> that renders attributions in the specified container.</td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class PlacesService - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>getDetails(<wbr>request:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceDetailsRequest.md"><span>PlaceDetailsRequest</span></a><span>,<wbr> callback:function(<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceResult.md"><span>PlaceResult</span></a><span>,<wbr> </span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlacesServiceStatus.md"><span>PlacesServiceStatus</span></a><span>))</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Retrieves details about the place identified by the given <code>placeId</code>.</div></td>
</tr>
<tr>
<td><code><span>nearbySearch(<wbr>request:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceSearchRequest.md"><span>PlaceSearchRequest</span></a><span>,<wbr> callback:function(<wbr>Array&lt;</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceResult.md"><span>PlaceResult</span></a><span>&gt;,<wbr> </span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlacesServiceStatus.md"><span>PlacesServiceStatus</span></a><span>,<wbr>
</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceSearchPagination.md"><span>PlaceSearchPagination</span></a><span>))</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Retrieves a list of places near a particular location, based on keyword or type. Location must always be specified, either by passing a <code>LatLngBounds</code>, or <code>location</code> and <code>radius</code> parameters. The <code>PlaceResults</code> passed to the callback are subsets of the full <code>PlaceResult</code>. Your app can get a more detailed <code>PlaceResult</code> for each place by sending a <a href="https://developers.google.com/maps/documentation/javascript/places#place_details_requests">Place Details request</a> passing the reference value for the desired place. The <code>PlaceSearchPagination</code> object can be used to fetch additional pages of results (null if this is the last page of results or if there is only one page of results).</div></td>
</tr>
<tr>
<td><code><span>radarSearch(<wbr>request:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/RadarSearchRequest.md"><span>RadarSearchRequest</span></a><span>,<wbr> callback:function(<wbr>Array&lt;</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceResult.md"><span>PlaceResult</span></a><span>&gt;,<wbr> </span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlacesServiceStatus.md"><span>PlacesServiceStatus</span></a><span>))</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Similar to the <code>nearbySearch</code> function, with the following differences: the search response will include up to 200 places, identified only by their geographic coordinates and <code>place_id</code>.</div></td>
</tr>
<tr>
<td><code><span>textSearch(<wbr>request:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/TextSearchRequest.md"><span>TextSearchRequest</span></a><span>,<wbr> callback:function(<wbr>Array&lt;</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceResult.md"><span>PlaceResult</span></a><span>&gt;,<wbr> </span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlacesServiceStatus.md"><span>PlacesServiceStatus</span></a><span>,<wbr>
</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceSearchPagination.md"><span>PlaceSearchPagination</span></a><span>))</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Retrieves a list of places based on a query string (for example, "pizza in New York", or "shoe stores near Ottawa"). Location parameters are optional; when the region is specified, results are only biased toward nearby results rather than restricted to places inside the area. Use <code>textSearch</code> when you want to search for places using an arbitrary string, and in cases where you may not want to restrict search results to a particular location. The <code>PlaceSearchPagination</code> object can be used to fetch additional pages of results (null if this is the last page of results or if there is only one page of results).</div></td>
</tr>
</tbody>
</table></div>