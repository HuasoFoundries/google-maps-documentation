
<devsite-heading text=" PlaceDetailsRequest interface" for="PlaceDetailsRequest" level="h2" link="" toc="" back-to-top=""><h2 id="PlaceDetailsRequest" is-upgraded="">PlaceDetailsRequest interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps.places</span>.<span itemprop="name">PlaceDetailsRequest</span></code>
interface
</p>
<p>A Place details query to be sent to the <code translate="no" dir="ltr">PlacesService</code>.</p>
<devsite-heading text="Library" for="library_1" level="h4" link=""><h4 is-upgraded="" id="library_1">Library</h4></devsite-heading>
<p>places</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface PlaceDetailsRequest - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="PlaceDetailsRequest.fields">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceDetailsRequest.fields"><span>fields</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;string&gt; <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Fields to be included in the details response, <a href="https://developers.google.com/maps/billing/understanding-cost-of-use#places-product">which will be billed for</a>. If no fields are specified or <code translate="no" dir="ltr">['ALL']</code> is passed in, all available fields will be returned and billed for (this is not recommended for production deployments). For a list of fields see <code translate="no" dir="ltr"><a href="PlaceResult.md">PlaceResult</a></code>. Nested fields can be specified with dot-paths (for example, <code translate="no" dir="ltr">"geometry.location"</code>).</div></td>
</tr>
<tr id="PlaceDetailsRequest.placeId">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceDetailsRequest.placeId"><span>placeId</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">The Place ID of the Place for which details are being requested.</div></td>
</tr>
<tr id="PlaceDetailsRequest.sessionToken">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceDetailsRequest.sessionToken"><span>sessionToken</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="AutocompleteSessionToken.md">AutocompleteSessionToken</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Unique reference used to bundle the details request with an autocomplete session.</div></td>
</tr>
</tbody>
</table></div>
