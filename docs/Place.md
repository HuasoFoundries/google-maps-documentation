<h2 id="Place"> Place object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Place</span></code>
object specification
</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="record Place - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>location</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md">LatLngLiteral</a></code></div>
<div class="desc">The <code>LatLng</code> of the entity described by this place. This must be provided for the <code>Place</code> to be considered valid.</div></td>
</tr>
<tr>
<td><code><span>placeId</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The place ID of the place (such as a business or point of interest). The place ID is a unique identifier of a place in the Google Maps database. Note that the <code>placeId</code> is the most accurate way of identifying a place. If possible, you should specify the <code>placeId</code> rather than a <code>placeQuery</code>. A place ID can be retrieved from any request to the Places API, such as a <a href="https://developers.google.com/places/webservice/search">TextSearch</a>. Place IDs can also be retrieved from requests to the Geocoding API. For more information, see the <a href="https://developers.google.com/places/place-id">overview of place IDs</a>.</div></td>
</tr>
<tr>
<td><code><span>query</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">A search query describing the place (such as a business or point of interest). An example query is "Quay, Upper Level, Overseas Passenger Terminal 5 Hickson Road, The Rocks NSW". If possible, you should specify the <code>placeId</code> rather than a <code>placeQuery</code>. The API does not guarantee the accuracy of resolving the query string to a place. If both the <code>placeId</code> and <code>placeQuery</code> are provided, an error occurs.</div></td>
</tr>
</tbody>
</table></div>