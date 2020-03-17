
<devsite-heading text=" QueryAutocompletionRequest interface" for="QueryAutocompletionRequest" level="h2" link="" toc="" back-to-top=""><h2 id="QueryAutocompletionRequest" is-upgraded="">QueryAutocompletionRequest interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps.places</span>.<span itemprop="name">QueryAutocompletionRequest</span></code>
interface
</p>
<p>An QueryAutocompletion request to be sent to the <code translate="no" dir="ltr">QueryAutocompleteService</code>.</p>
<devsite-heading text="Library" for="library_2" level="h4" link=""><h4 is-upgraded="" id="library_2">Library</h4></devsite-heading>
<p>places</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface QueryAutocompletionRequest - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="QueryAutocompletionRequest.bounds">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#QueryAutocompletionRequest.bounds"><span>bounds</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLngBounds.md">LatLngBounds</a>|<a href="LatLngBoundsLiteral.md">LatLngBoundsLiteral</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Bounds for prediction biasing. Predictions will be biased towards, but not restricted to, the given <code translate="no" dir="ltr">bounds</code>. Both <code translate="no" dir="ltr">location</code> and <code translate="no" dir="ltr">radius</code> will be ignored if <code translate="no" dir="ltr">bounds</code> is set.</div></td>
</tr>
<tr id="QueryAutocompletionRequest.input">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#QueryAutocompletionRequest.input"><span>input</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">The user entered input string.</div></td>
</tr>
<tr id="QueryAutocompletionRequest.location">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#QueryAutocompletionRequest.location"><span>location</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Location for prediction biasing. Predictions will be biased towards the given <code translate="no" dir="ltr">location</code> and <code translate="no" dir="ltr">radius</code>. Alternatively, <code translate="no" dir="ltr">bounds</code> can be used.</div></td>
</tr>
<tr id="QueryAutocompletionRequest.offset">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#QueryAutocompletionRequest.offset"><span>offset</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The character position in the input term at which the service uses text for predictions (the position of the cursor in the input field).</div></td>
</tr>
<tr id="QueryAutocompletionRequest.radius">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#QueryAutocompletionRequest.radius"><span>radius</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The radius of the area used for prediction biasing. The <code translate="no" dir="ltr">radius</code> is specified in meters, and must always be accompanied by a <code translate="no" dir="ltr">location</code> property. Alternatively, <code translate="no" dir="ltr">bounds</code> can be used.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
