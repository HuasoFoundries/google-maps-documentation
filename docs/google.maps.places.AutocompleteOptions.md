<h2 id="AutocompleteOptions">
google.maps.places.AutocompleteOptions
object specification
</h2><p>The options that can be set on an <code>Autocomplete</code> object.</p><h3 id="devsite_header_265">Library</h3><p>places</p><h3 id="devsite_header_266">Properties</h3><table summary="interface AutocompleteOptions - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>bounds</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngBounds.md">LatLngBounds</a></code></td>
<td>The area in which to search for places. Results are biased towards, but not restricted to, places contained within these bounds.</td>
</tr>
<tr>
<td><code>componentRestrictions</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.ComponentRestrictions.md">ComponentRestrictions</a></code></td>
<td>The component restrictions. Component restrictions are used to restrict predictions to only those within the parent component. E.g., the country.</td>
</tr>
<tr>
<td><code>types</code></td>
<td><code>Array&lt;string&gt;</code></td>
<td>The types of predictions to be returned. Four types are supported: <code>'establishment'</code> for businesses, <code>'geocode'</code> for addresses, <code>'(regions)'</code> for administrative regions and <code> '(cities)'</code> for localities. If nothing is specified, all types are returned. In general only a single type is allowed. The exception is that you can safely mix the <code>'geocode'</code> and <code>'establishment'</code> types, but note that this will have the same effect as specifying no types.</td>
</tr>
</tbody>
</table>