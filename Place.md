
<devsite-heading text=" Place interface" for="Place" level="h2" link="" toc="" back-to-top=""><h2 id="Place" is-upgraded="">Place interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">Place</span></code>
interface
</p>
<p>Contains information needed to locate, identify, or describe a place for a <code translate="no" dir="ltr"><a href="DirectionsRequest.md">DirectionsRequest</a></code> or <code translate="no" dir="ltr"><a href="DistanceMatrixRequest.md">DistanceMatrixRequest</a></code>. In this context, "place" means a business, point of interest, or geographic location. For fetching information about a place, see <code translate="no" dir="ltr"><a href="PlacesService.md">PlacesService</a></code>.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface Place - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="Place.location">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Place.location"><span>location</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The <code translate="no" dir="ltr">LatLng</code> of the entity described by this place.</div></td>
</tr>
<tr id="Place.placeId">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Place.placeId"><span>placeId</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The place ID of the place (such as a business or point of interest). The place ID is a unique identifier of a place in the Google Maps database. Note that the <code translate="no" dir="ltr">placeId</code> is the most accurate way of identifying a place. If possible, you should specify the <code translate="no" dir="ltr">placeId</code> rather than a <code translate="no" dir="ltr">query</code>. A place ID can be retrieved from any request to the Places API, such as a <a href="/places/webservice/search">TextSearch</a>. Place IDs can also be retrieved from requests to the Geocoding API. For more information, see the <a href="/places/place-id">overview of place IDs</a>.</div></td>
</tr>
<tr id="Place.query">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Place.query"><span>query</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">A search query describing the place (such as a business or point of interest). An example query is "Quay, Upper Level, Overseas Passenger Terminal 5 Hickson Road, The Rocks NSW". If possible, you should specify the <code translate="no" dir="ltr">placeId</code> rather than a <code translate="no" dir="ltr">query</code>. The API does not guarantee the accuracy of resolving the query string to a place. If both the <code translate="no" dir="ltr">placeId</code> and <code translate="no" dir="ltr">query</code> are provided, an error occurs.</div></td>
</tr>
</tbody>
</table></div>
