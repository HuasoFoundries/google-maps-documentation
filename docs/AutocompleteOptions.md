<h2 id="AutocompleteOptions"> AutocompleteOptions object specification </h2><p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">AutocompleteOptions</span></code>
object specification
</p><p>The options that can be set on an <code>Autocomplete</code> object.</p><h4>Library</h4><p>places</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface AutocompleteOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>bounds</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">The area in which to search for places. Results are biased towards, but not restricted to, places contained within these bounds.</div></td>
</tr>
<tr>
<td><code><span>componentRestrictions</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ComponentRestrictions.md">ComponentRestrictions</a></code></div>
<div class="desc">The component restrictions. Component restrictions are used to restrict predictions to only those within the parent component. E.g., the country.</div></td>
</tr>
<tr>
<td><code><span>types</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">The types of predictions to be returned. For a list of supported types, see the <a href="https://developers.google.com/places/supported_types#table3">developer's guide</a>. If nothing is specified, all types are returned. In general only a single type is allowed. The exception is that you can safely mix the <code>'geocode'</code> and <code>'establishment'</code> types, but note that this will have the same effect as specifying no types.</div></td>
</tr>
</tbody>
</table></div>