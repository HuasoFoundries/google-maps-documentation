<h2 id="PlaceSearchRequest"> PlaceSearchRequest object specification </h2><p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">PlaceSearchRequest</span></code>
object specification
</p><p>A Place search query to be sent to the <code>PlacesService</code>.</p><h4>Library</h4><p>places</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface PlaceSearchRequest - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>bounds</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">The bounds within which to search for Places. Both <code>location</code> and <code>radius</code> will be ignored if <code>bounds</code> is set.</div></td>
</tr>
<tr>
<td><code><span>keyword</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">A term to be matched against all available fields, including but not limited to name, type, and address, as well as customer reviews and other third-party content.</div></td>
</tr>
<tr>
<td><code><span>location</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md">LatLngLiteral</a></code></div>
<div class="desc">The location around which to search for Places.</div></td>
</tr>
<tr>
<td><code><span>maxPriceLevel</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">Restricts results to only those places at the specified price level or lower. Valid values are in the range from 0 (most affordable) to 4 (most expensive), inclusive. Must be greater than or equal to <code>minPrice </code>, if specified.</div></td>
</tr>
<tr>
<td><code><span>minPriceLevel</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">Restricts results to only those places at the specified price level or higher. Valid values are in the range from 0 (most affordable) to 4 (most expensive), inclusive. Must be less than or equal to <code>maxPrice</code>, if specified.</div></td>
</tr>
<tr>
<td><code><span>name</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Restricts the Place search results to Places that include this text in the name.</div></td>
</tr>
<tr>
<td><code><span>openNow</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Restricts results to only those places that are open right now.</div></td>
</tr>
<tr>
<td><code><span>radius</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The distance from the given location within which to search for Places, in meters. The maximum allowed value is 50 000.</div></td>
</tr>
<tr>
<td><code><span>rankBy</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/RankBy.md">RankBy</a></code></div>
<div class="desc">Specifies the ranking method to use when returning results.</div></td>
</tr>
<tr>
<td><code><span>types</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">Restricts the Place search results to Places with a type matching at least one of the specified types in this array. Valid types are given <a href="/maps/documentation/places/supported_types">here</a>.</div></td>
</tr>
</tbody>
</table></div>