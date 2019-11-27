
<devsite-heading text=" AutocompletionRequest interface" for="AutocompletionRequest" level="h2" link="" toc="" back-to-top=""><h2 id="AutocompletionRequest" is-upgraded="">AutocompletionRequest interface </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps.places</span>.<span itemprop="name">AutocompletionRequest</span></code>
interface
</p>
<p>An Autocompletion request to be sent to <code translate="no" dir="ltr"><a href="/maps/documentation/javascript/reference/places-autocomplete-service#AutocompleteService.getPlacePredictions">AutocompleteService.getPlacePredictions</a></code>.</p>
<devsite-heading text="Library" for="library_1" level="h4" link=""><h4 is-upgraded="" id="library_1">Library<button role="button" class="devsite-heading-link button-flat material-icons" title="Copy link to this section"></button></h4></devsite-heading>
<p>places</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface AutocompletionRequest - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="AutocompletionRequest.bounds">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#AutocompletionRequest.bounds"><span>bounds</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLngBounds.md">LatLngBounds</a>|<a href="LatLngBoundsLiteral.md">LatLngBoundsLiteral</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Bounds for prediction biasing. Predictions will be biased towards, but not restricted to, the given <code translate="no" dir="ltr">bounds</code>. Both <code translate="no" dir="ltr">location</code> and <code translate="no" dir="ltr">radius</code> will be ignored if <code translate="no" dir="ltr">bounds</code> is set.</div></td>
</tr>
<tr id="AutocompletionRequest.componentRestrictions">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#AutocompletionRequest.componentRestrictions"><span>componentRestrictions</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="ComponentRestrictions.md">ComponentRestrictions</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The component restrictions. Component restrictions are used to restrict predictions to only those within the parent component. For example, the country.</div></td>
</tr>
<tr id="AutocompletionRequest.input">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#AutocompletionRequest.input"><span>input</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">The user entered input string.</div></td>
</tr>
<tr id="AutocompletionRequest.location">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#AutocompletionRequest.location"><span>location</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Location for prediction biasing. Predictions will be biased towards the given <code translate="no" dir="ltr">location</code> and <code translate="no" dir="ltr">radius</code>. Alternatively, <code translate="no" dir="ltr">bounds</code> can be used.</div></td>
</tr>
<tr id="AutocompletionRequest.offset">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#AutocompletionRequest.offset"><span>offset</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The character position in the input term at which the service uses text for predictions (the position of the cursor in the input field).</div></td>
</tr>
<tr id="AutocompletionRequest.origin">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#AutocompletionRequest.origin"><span>origin</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The location where <code translate="no" dir="ltr"><a href="/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletePrediction.distance_meters">AutocompletePrediction.distance_meters</a></code> is calculated from.</div></td>
</tr>
<tr id="AutocompletionRequest.radius">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#AutocompletionRequest.radius"><span>radius</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The radius of the area used for prediction biasing. The <code translate="no" dir="ltr">radius</code> is specified in meters, and must always be accompanied by a <code translate="no" dir="ltr">location</code> property. Alternatively, <code translate="no" dir="ltr">bounds</code> can be used.</div></td>
</tr>
<tr id="AutocompletionRequest.sessionToken">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#AutocompletionRequest.sessionToken"><span>sessionToken</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="AutocompleteSessionToken.md">AutocompleteSessionToken</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Unique reference used to bundle individual requests into sessions.</div></td>
</tr>
<tr id="AutocompletionRequest.types">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#AutocompletionRequest.types"><span>types</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;string&gt; <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The types of predictions to be returned. For a list of supported types, see the <a href="https://developers.google.com/places/supported_types#table3"> developer's guide</a>. If nothing is specified, all types are returned. In general only a single type is allowed. The exception is that you can safely mix the <code translate="no" dir="ltr">'geocode'</code> and <code translate="no" dir="ltr">'establishment'</code> types, but note that this will have the same effect as specifying no types.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
