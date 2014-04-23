<h2 id="PlaceSearchRequest">
google.maps.places.PlaceSearchRequest
object specification
</h2><p>A Place search query to be sent to the <code>PlacesService</code>.</p><h3>Library</h3><p>places</p><h3>Properties</h3><table summary="interface PlaceSearchRequest - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>bounds</code></td>
<td><code><a href="#LatLngBounds">LatLngBounds</a></code></td>
<td>The bounds within which to search for Places. Both <code>location</code> and <code>radius</code> will be ignored if <code>bounds</code> is set.</td>
</tr>
<tr>
<td><code>keyword</code></td>
<td><code>string</code></td>
<td>A term to be matched against all available fields, including but not limited to name, type, and address, as well as customer reviews and other third-party content.</td>
</tr>
<tr>
<td><code>location</code></td>
<td><code><a href="#LatLng">LatLng</a>|<a href="#LatLngLiteral">LatLngLiteral</a></code></td>
<td>The location around which to search for Places.</td>
</tr>
<tr>
<td><code>maxPriceLevel</code></td>
<td><code>number</code></td>
<td>Restricts results to only those places at the specified price level or lower. Valid values are in the range from 0 (most affordable) to 4 (most expensive), inclusive. Must be greater than or equal to <code>minPrice </code>, if specified.</td>
</tr>
<tr>
<td><code>minPriceLevel</code></td>
<td><code>number</code></td>
<td>Restricts results to only those places at the specified price level or higher. Valid values are in the range from 0 (most affordable) to 4 (most expensive), inclusive. Must be less than or equal to <code>maxPrice</code>, if specified.</td>
</tr>
<tr>
<td><code>name</code></td>
<td><code>string</code></td>
<td>Restricts the Place search results to Places that include this text in the name.</td>
</tr>
<tr>
<td><code>openNow</code></td>
<td><code>boolean</code></td>
<td>Restricts results to only those places that are open right now.</td>
</tr>
<tr>
<td><code>radius</code></td>
<td><code>number</code></td>
<td>The distance from the given location within which to search for Places, in meters. The maximum allowed value is 50 000.</td>
</tr>
<tr>
<td><code>rankBy</code></td>
<td><code><a href="#RankBy">RankBy</a></code></td>
<td>Specifies the ranking method to use when returning results.</td>
</tr>
<tr>
<td><code>types</code></td>
<td><code>Array.&lt;string&gt;</code></td>
<td>Restricts the Place search results to Places with a type matching at least one of the specified types in this array. Valid types are given <a href="/maps/documentation/places/supported_types?hl=es">here</a>.</td>
</tr>
</tbody>
</table>