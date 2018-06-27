<h2 id="AutocompleteOptions"> AutocompleteOptions interface </h2><p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">AutocompleteOptions</span></code>
interface
</p><p>The options that can be set on an <code>Autocomplete</code> object.</p><h4>Library</h4><p>places</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface AutocompleteOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="AutocompleteOptions.bounds">
<td><code><span>bounds</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBoundsLiteral.md">LatLngBoundsLiteral</a></code></div>
<div class="desc">The area in which to search for places.</div></td>
</tr>
<tr id="AutocompleteOptions.componentRestrictions">
<td><code><span>componentRestrictions</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ComponentRestrictions.md">ComponentRestrictions</a></code></div>
<div class="desc">The component restrictions. Component restrictions are used to restrict predictions to only those within the parent component. For example, the country.</div></td>
</tr>
<tr id="AutocompleteOptions.fields">
<td><code><span>fields</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">Fields to be included for the Place in the details response when the details are successfully retrieved. For a list of fields see <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceResult.md">PlaceResult</a></code>. Nested fields can be specified with dot-paths (for example, <code>"geometry.location"</code>).</div></td>
</tr>
<tr id="AutocompleteOptions.placeIdOnly">
<td><code><span>placeIdOnly</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Whether to retrieve only Place IDs. The PlaceResult made available when the place_changed event is fired will only have the place_id, types and name fields, with the place_id, types and description returned by the Autocomplete service. Disabled by default.</div></td>
</tr>
<tr id="AutocompleteOptions.strictBounds">
<td><code><span>strictBounds</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">A boolean value, indicating that the Autocomplete widget should only return those places that are inside the bounds of the Autocomplete widget at the time the query is sent. Setting strictBounds to false (which is the default) will make the results biased towards, but not restricted to, places contained within the bounds.</div></td>
</tr>
<tr id="AutocompleteOptions.types">
<td><code><span>types</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">The types of predictions to be returned. For a list of supported types, see the <a href="https://developers.google.com/places/supported_types#table3">developer's guide</a>. If nothing is specified, all types are returned. In general only a single type is allowed. The exception is that you can safely mix the <code>'geocode'</code> and <code>'establishment'</code> types, but note that this will have the same effect as specifying no types.</div></td>
</tr>
</tbody>
</table></div>