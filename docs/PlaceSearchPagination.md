<h2 id="PlaceSearchPagination">
PlaceSearchPagination
object specification
</h2><p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">PlaceSearchPagination</span></code>
object specification
</p><p>An object used to fetch additional pages of Places results.</p><h4>Library</h4><p>places</p><table class="methods responsive" summary="object PlaceSearchPagination - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code>nextPage()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Fetches the next page of results. Uses the same callback function that was provided to the first search request.</div></td>
</tr>
</tbody>
</table><table class="properties responsive" summary="object PlaceSearchPagination - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code>hasNextPage</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Indicates if further results are available. <code>true</code> when there is an additional results page.</div></td>
</tr>
</tbody>
</table>