
<devsite-heading text=" AutocompleteOptions interface" for="AutocompleteOptions" level="h2" link="" toc="" back-to-top=""><h2 id="AutocompleteOptions" is-upgraded="">AutocompleteOptions interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps.places</span>.<span itemprop="name">AutocompleteOptions</span></code>
interface
</p>
<p>The options that can be set on an <code translate="no" dir="ltr">Autocomplete</code> object.</p>
<devsite-heading text="Library" for="library_1" level="h4" link=""><h4 is-upgraded="" id="library_1">Library</h4></devsite-heading>
<p>places</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface AutocompleteOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="AutocompleteOptions.bounds">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#AutocompleteOptions.bounds"><span>bounds</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLngBounds.md">LatLngBounds</a>|<a href="LatLngBoundsLiteral.md">LatLngBoundsLiteral</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The area in which to search for places.</div></td>
</tr>
<tr id="AutocompleteOptions.componentRestrictions">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#AutocompleteOptions.componentRestrictions"><span>componentRestrictions</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="ComponentRestrictions.md">ComponentRestrictions</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The component restrictions. Component restrictions are used to restrict predictions to only those within the parent component. For example, the country.</div></td>
</tr>
<tr id="AutocompleteOptions.fields">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#AutocompleteOptions.fields"><span>fields</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;string&gt; <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Fields to be included for the Place in the details response when the details are successfully retrieved, <a href="https://developers.google.com/maps/billing/understanding-cost-of-use#places-product">which will be billed for</a>. If <code translate="no" dir="ltr">['ALL']</code> is passed in, all available fields will be returned and billed for (this is not recommended for production deployments). For a list of fields see <code translate="no" dir="ltr"><a href="PlaceResult.md">PlaceResult</a></code>. Nested fields can be specified with dot-paths (for example, <code translate="no" dir="ltr">"geometry.location"</code>).</div></td>
</tr>
<tr id="AutocompleteOptions.placeIdOnly">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#AutocompleteOptions.placeIdOnly"><span>placeIdOnly</span></a></code></td>
<td><aside class="warning"><p><b>Notice:</b> <code translate="no" dir="ltr">placeIdOnly</code> is deprecated as of January 15, 2019, and will be turned off on January 15, 2020. Use <code translate="no" dir="ltr"><a href="/maps/documentation/javascript/reference/places-widget#AutocompleteOptions.fields">AutocompleteOptions.fields</a></code> instead: <code translate="no" dir="ltr">fields: ['place_id', 'name', 'types']</code>.</p></aside><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Whether to retrieve only Place IDs. The PlaceResult made available when the place_changed event is fired will only have the place_id, types and name fields, with the place_id, types and description returned by the Autocomplete service. Disabled by default.</div></td>
</tr>
<tr id="AutocompleteOptions.strictBounds">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#AutocompleteOptions.strictBounds"><span>strictBounds</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">A boolean value, indicating that the Autocomplete widget should only return those places that are inside the bounds of the Autocomplete widget at the time the query is sent. Setting strictBounds to false (which is the default) will make the results biased towards, but not restricted to, places contained within the bounds.</div></td>
</tr>
<tr id="AutocompleteOptions.types">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#AutocompleteOptions.types"><span>types</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;string&gt; <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The types of predictions to be returned. For a list of supported types, see the <a href="https://developers.google.com/places/supported_types#table3">developer's guide</a>. If nothing is specified, all types are returned. In general only a single type is allowed. The exception is that you can safely mix the <code translate="no" dir="ltr">'geocode'</code> and <code translate="no" dir="ltr">'establishment'</code> types, but note that this will have the same effect as specifying no types.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
