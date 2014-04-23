<h2 id="TextSearchRequest">
google.maps.places.TextSearchRequest
object specification
</h2><p>A text search request to be sent to the <code>PlacesService</code>.</p><h3>Library</h3><p>places</p><h3>Properties</h3><table summary="interface TextSearchRequest - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>bounds</code></td>
<td><code><a href="#LatLngBounds">LatLngBounds</a></code></td>
<td>Bounds used to bias results when searching for Places (optional). Both <code>location</code> and <code>radius</code> will be ignored if <code>bounds</code> is set. Results will not be restricted to those inside these bounds; but, results inside it will rank higher.</td>
</tr>
<tr>
<td><code>location</code></td>
<td><code><a href="#LatLng">LatLng</a>|<a href="#LatLngLiteral">LatLngLiteral</a></code></td>
<td>The center of the area used to bias results when searching for Places.</td>
</tr>
<tr>
<td><code>query</code></td>
<td><code>string</code></td>
<td>The request's query term. e.g. the name of a place ('Eiffel Tower'), a category followed by the name of a location ('pizza in New York'), or the name of a place followed by a location disambiguator ('Starbucks in Sydney').</td>
</tr>
<tr>
<td><code>radius</code></td>
<td><code>number</code></td>
<td>The radius of the area used to bias results when searching for Places, in meters.</td>
</tr>
<tr>
<td><code>types</code></td>
<td><code>Array.&lt;string&gt;</code></td>
<td>Restricts the Place search results to Places with a type matching at least one of the specified types in this array. Valid types are given <a href="/maps/documentation/places/supported_types?hl=es">here</a>.</td>
</tr>
</tbody>
</table>