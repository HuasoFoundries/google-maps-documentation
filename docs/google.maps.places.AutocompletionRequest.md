<h2 id="AutocompletionRequest">
google.maps.places.AutocompletionRequest
object specification
</h2><p>An Autocompletion request to be sent to the <code>AutocompleteService</code>.</p><h3 id="devsite_header_276">Library</h3><p>places</p><h3 id="devsite_header_277">Properties</h3><table summary="interface AutocompletionRequest - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>bounds</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngBounds.md">LatLngBounds</a></code></td>
<td>Bounds for prediction biasing. Predictions will be biased towards, but not restricted to, the given <code>bounds</code>. Both <code>location</code> and <code>radius</code> will be ignored if <code>bounds</code> is set.</td>
</tr>
<tr>
<td><code>componentRestrictions</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.ComponentRestrictions.md">ComponentRestrictions</a></code></td>
<td>The component restrictions. Component restrictions are used to restrict predictions to only those within the parent component. E.g., the country.</td>
</tr>
<tr>
<td><code>input</code></td>
<td><code>string</code></td>
<td>The user entered input string.</td>
</tr>
<tr>
<td><code>location</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a></code></td>
<td>Location for prediction biasing. Predictions will be biased towards the given <code>location</code> and <code>radius</code>. Alternatively, <code>bounds</code> can be used.</td>
</tr>
<tr>
<td><code>offset</code></td>
<td><code>number</code></td>
<td>The character position in the input term at which the service uses text for predictions (the position of the cursor in the input field).</td>
</tr>
<tr>
<td><code>radius</code></td>
<td><code>number</code></td>
<td>The radius of the area used for prediction biasing. The <code>radius</code> is specified in meters, and must always be accompanied by a <code>location</code> property. Alternatively, <code>bounds</code> can be used.</td>
</tr>
<tr>
<td><code>types</code></td>
<td><code>Array&lt;string&gt;</code></td>
<td>The types of predictions to be returned. Four types are supported: <code>'establishment'</code> for businesses, <code>'geocode'</code> for addresses, <code>'(regions)'</code> for administrative regions and <code> '(cities)'</code> for localities. If nothing is specified, all types are returned.</td>
</tr>
</tbody>
</table>