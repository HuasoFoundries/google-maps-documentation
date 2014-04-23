<h2 id="PlaceSearchPagination">
google.maps.places.PlaceSearchPagination
object specification
</h2><p>An object used to fetch additional pages of Places results.</p><h3>Library</h3><p>places</p><h3>Methods</h3><table summary="object PlaceSearchPagination - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>nextPage()</code></td>
<td><code>None</code></td>
<td>Fetches the next page of results. Uses the same callback function that was provided to the first search request.</td>
</tr>
</tbody>
</table><h3>Properties</h3><table summary="object PlaceSearchPagination - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>hasNextPage</code></td>
<td><code>boolean</code></td>
<td>Indicates if further results are available. <code>true</code> when there is an additional results page.</td>
</tr>
</tbody>
</table>