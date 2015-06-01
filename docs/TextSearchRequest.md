<h2 id="TextSearchRequest"> TextSearchRequest object specification </h2><p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">TextSearchRequest</span></code>
object specification
</p><p>A text search request to be sent to the <code>PlacesService</code>.</p><h4>Library</h4><p>places</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface TextSearchRequest - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>bounds</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">Bounds used to bias results when searching for Places (optional). Both <code>location</code> and <code>radius</code> will be ignored if <code>bounds</code> is set. Results will not be restricted to those inside these bounds; but, results inside it will rank higher.</div></td>
</tr>
<tr>
<td><code><span>location</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md">LatLngLiteral</a></code></div>
<div class="desc">The center of the area used to bias results when searching for Places.</div></td>
</tr>
<tr>
<td><code><span>query</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The request's query term. e.g. the name of a place ('Eiffel Tower'), a category followed by the name of a location ('pizza in New York'), or the name of a place followed by a location disambiguator ('Starbucks in Sydney').</div></td>
</tr>
<tr>
<td><code><span>radius</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The radius of the area used to bias results when searching for Places, in meters.</div></td>
</tr>
<tr>
<td><code><span>types</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">Restricts the Place search results to Places with a type matching at least one of the specified types in this array. Valid types are given <a href="/maps/documentation/places/supported_types">here</a>.</div></td>
</tr>
</tbody>
</table></div>