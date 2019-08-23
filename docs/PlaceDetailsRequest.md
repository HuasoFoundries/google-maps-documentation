
<h2 id="PlaceDetailsRequest">PlaceDetailsRequest interface</h2>
<p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">PlaceDetailsRequest</span></code>
interface
</p>
<p>A Place details query to be sent to the <code>PlacesService</code>.</p>
<h4>Library</h4>
<p>places</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface PlaceDetailsRequest - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="PlaceDetailsRequest.fields">
<td itemprop="property"><code><a class="secret-link" href="#PlaceDetailsRequest.fields"><span>fields</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt; <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Fields to be included in the details response, <a href="https://developers.google.com/maps/billing/understanding-cost-of-use#places-product">which will be billed for</a>. If no fields are specified or <code>['ALL']</code> is passed in, all available fields will be returned and billed for (this is not recommended for production deployments). For a list of fields see <code><a href="PlaceResult.md">PlaceResult</a></code>. Nested fields can be specified with dot-paths (for example, <code>"geometry.location"</code>).</div></td>
</tr>
<tr id="PlaceDetailsRequest.placeId">
<td itemprop="property"><code><a class="secret-link" href="#PlaceDetailsRequest.placeId"><span>placeId</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The Place ID of the Place for which details are being requested.</div></td>
</tr>
<tr id="PlaceDetailsRequest.sessionToken">
<td itemprop="property"><code><a class="secret-link" href="#PlaceDetailsRequest.sessionToken"><span>sessionToken</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="AutocompleteSessionToken.md">AutocompleteSessionToken</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Unique reference used to bundle the details request with an autocomplete session.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
