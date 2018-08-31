
<h2 id="PlaceSearchPagination">PlaceSearchPagination interface</h2>
<p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">PlaceSearchPagination</span></code>
interface
</p>
<p>An object used to fetch additional pages of Places results.</p>
<h4>Library</h4>
<p>places</p>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="interface PlaceSearchPagination - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="PlaceSearchPagination.nextPage">
<td itemprop="property"><code><a class="secret-link" href="#PlaceSearchPagination.nextPage"><span>nextPage</span></a></code></td>
<td><div><code>nextPage()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Fetches the next page of results. Uses the same callback function that was provided to the first search request.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface PlaceSearchPagination - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="PlaceSearchPagination.hasNextPage">
<td itemprop="property"><code><a class="secret-link" href="#PlaceSearchPagination.hasNextPage"><span>hasNextPage</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Indicates if further results are available. <code>true</code> when there is an additional results page.</div></td>
</tr>
</tbody>
</table></div>
