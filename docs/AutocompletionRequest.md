
<h2 id="AutocompletionRequest">AutocompletionRequest interface</h2>
<p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">AutocompletionRequest</span></code>
interface
</p>
<p>An Autocompletion request to be sent to <code><a href="https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompleteService.getPlacePredictions">AutocompleteService.getPlacePredictions</a></code>.</p>
<h4>Library</h4>
<p>places</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface AutocompletionRequest - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="AutocompletionRequest.bounds">
<td itemprop="property"><code><a class="secret-link" href="#AutocompletionRequest.bounds"><span>bounds</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="LatLngBounds.md">LatLngBounds</a>|<a href="LatLngBoundsLiteral.md">LatLngBoundsLiteral</a></code></div>
<div class="desc">Bounds for prediction biasing. Predictions will be biased towards, but not restricted to, the given <code>bounds</code>. Both <code>location</code> and <code>radius</code> will be ignored if <code>bounds</code> is set.</div></td>
</tr>
<tr id="AutocompletionRequest.componentRestrictions">
<td itemprop="property"><code><a class="secret-link" href="#AutocompletionRequest.componentRestrictions"><span>componentRestrictions</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="ComponentRestrictions.md">ComponentRestrictions</a></code></div>
<div class="desc">The component restrictions. Component restrictions are used to restrict predictions to only those within the parent component. For example, the country.</div></td>
</tr>
<tr id="AutocompletionRequest.input">
<td itemprop="property"><code><a class="secret-link" href="#AutocompletionRequest.input"><span>input</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The user entered input string.</div></td>
</tr>
<tr id="AutocompletionRequest.location">
<td itemprop="property"><code><a class="secret-link" href="#AutocompletionRequest.location"><span>location</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="LatLng.md">LatLng</a></code></div>
<div class="desc">Location for prediction biasing. Predictions will be biased towards the given <code>location</code> and <code>radius</code>. Alternatively, <code>bounds</code> can be used.</div></td>
</tr>
<tr id="AutocompletionRequest.offset">
<td itemprop="property"><code><a class="secret-link" href="#AutocompletionRequest.offset"><span>offset</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The character position in the input term at which the service uses text for predictions (the position of the cursor in the input field).</div></td>
</tr>
<tr id="AutocompletionRequest.radius">
<td itemprop="property"><code><a class="secret-link" href="#AutocompletionRequest.radius"><span>radius</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The radius of the area used for prediction biasing. The <code>radius</code> is specified in meters, and must always be accompanied by a <code>location</code> property. Alternatively, <code>bounds</code> can be used.</div></td>
</tr>
<tr id="AutocompletionRequest.sessionToken">
<td itemprop="property"><code><a class="secret-link" href="#AutocompletionRequest.sessionToken"><span>sessionToken</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="AutocompleteSessionToken.md">AutocompleteSessionToken</a></code></div>
<div class="desc">Unique reference used to bundle individual requests into sessions.</div></td>
</tr>
<tr id="AutocompletionRequest.types">
<td itemprop="property"><code><a class="secret-link" href="#AutocompletionRequest.types"><span>types</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">The types of predictions to be returned. For a list of supported types, see the <a href="https://developers.google.com/places/supported_types#table3"> developer's guide</a>. If nothing is specified, all types are returned. In general only a single type is allowed. The exception is that you can safely mix the <code>'geocode'</code> and <code>'establishment'</code> types, but note that this will have the same effect as specifying no types.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
