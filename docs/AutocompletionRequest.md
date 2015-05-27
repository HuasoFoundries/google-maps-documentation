<h2 id="AutocompletionRequest">
AutocompletionRequest
object specification
</h2><p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">AutocompletionRequest</span></code>
object specification
</p><p>An Autocompletion request to be sent to the <code>AutocompleteService</code>.</p><h4>Library</h4><p>places</p><table class="properties responsive" summary="interface AutocompletionRequest - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code>bounds</code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">Bounds for prediction biasing. Predictions will be biased towards, but not restricted to, the given <code>bounds</code>. Both <code>location</code> and <code>radius</code> will be ignored if <code>bounds</code> is set.</div></td>
</tr>
<tr>
<td><code>componentRestrictions</code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ComponentRestrictions.md">ComponentRestrictions</a></code></div>
<div class="desc">The component restrictions. Component restrictions are used to restrict predictions to only those within the parent component. E.g., the country.</div></td>
</tr>
<tr>
<td><code>input</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The user entered input string.</div></td>
</tr>
<tr>
<td><code>location</code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc">Location for prediction biasing. Predictions will be biased towards the given <code>location</code> and <code>radius</code>. Alternatively, <code>bounds</code> can be used.</div></td>
</tr>
<tr>
<td><code>offset</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The character position in the input term at which the service uses text for predictions (the position of the cursor in the input field).</div></td>
</tr>
<tr>
<td><code>radius</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The radius of the area used for prediction biasing. The <code>radius</code> is specified in meters, and must always be accompanied by a <code>location</code> property. Alternatively, <code>bounds</code> can be used.</div></td>
</tr>
<tr>
<td><code>types</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">The types of predictions to be returned. Four types are supported: <code>'establishment'</code> for businesses, <code>'geocode'</code> for addresses, <code>'(regions)'</code> for administrative regions and <code> '(cities)'</code> for localities. If nothing is specified, all types are returned.</div></td>
</tr>
</tbody>
</table>