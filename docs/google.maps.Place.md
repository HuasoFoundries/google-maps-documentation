<h2 id="Place">
google.maps.Place
object specification
</h2><h3>Properties</h3><table summary="interface Place - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>location</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngLiteral.md">LatLngLiteral</a></code></td>
<td>The <code>LatLng</code> of the entity described by this Place. This must be provided for the <code>Place</code> to be considered valid.</td>
</tr>
<tr>
<td><code>placeId</code></td>
<td><code>string</code></td>
<td>The place ID of the place (such as a business or point of interest). The place ID is a unique identifier of a place in the Google Maps database. Note that the <code>placeId</code> is the most accurate way of identifying a place. If possible, you should specify the <code>placeId</code> rather than a <code>placeQuery</code>. A place ID can be retrieved from any request to the Places API, such as a <a href="https://developers.google.com/places/webservice/search"> TextSearch</a>.</td>
</tr>
<tr>
<td><code>query</code></td>
<td><code>string</code></td>
<td>A search query describing the place (such as a business or point of interest). An example query would be "Quay, Upper Level, Overseas Passenger Terminal 5 Hickson Road, The Rocks NSW". If possible, you should specify the <code>placeId</code> rather than a <code>placeQuery</code>. The API does not guarantee the accuracy of resolving the query string to a place. If both the <code>placeId</code> and <code>placeQuery</code> are provided, an error is thrown.</td>
</tr>
</tbody>
</table>