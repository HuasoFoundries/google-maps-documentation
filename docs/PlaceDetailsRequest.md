<h2 id="PlaceDetailsRequest"> PlaceDetailsRequest interface </h2><p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">PlaceDetailsRequest</span></code>
interface
</p><p>A Place details query to be sent to the <code>PlacesService</code>.</p><h4>Library</h4><p>places</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface PlaceDetailsRequest - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="PlaceDetailsRequest.fields">
<td><code><span>fields</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">Fields to be included in the details response. For a list of fields see <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceResult.md">PlaceResult</a></code>. Nested fields can be specified with dot-paths (for example, <code>"geometry.location"</code>).</div></td>
</tr>
<tr id="PlaceDetailsRequest.placeId">
<td><code><span>placeId</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The Place ID of the Place for which details are being requested.</div></td>
</tr>
<tr id="PlaceDetailsRequest.sessionToken">
<td><code><span>sessionToken</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/AutocompleteSessionToken.md">AutocompleteSessionToken</a></code></div>
<div class="desc">Unique reference used to bundle the details request with an autocomplete session.</div></td>
</tr>
</tbody>
</table></div>