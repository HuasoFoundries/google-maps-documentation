
<h2 id="QueryAutocompletionRequest">QueryAutocompletionRequest interface</h2>
<p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">QueryAutocompletionRequest</span></code>
interface
</p>
<p>An QueryAutocompletion request to be sent to the <code>QueryAutocompleteService</code>.</p>
<h4>Library</h4>
<p>places</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface QueryAutocompletionRequest - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="QueryAutocompletionRequest.bounds">
<td itemprop="property"><code><a class="secret-link" href="#QueryAutocompletionRequest.bounds"><span>bounds</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="LatLngBounds.md">LatLngBounds</a>|<a href="LatLngBoundsLiteral.md">LatLngBoundsLiteral</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Bounds for prediction biasing. Predictions will be biased towards, but not restricted to, the given <code>bounds</code>. Both <code>location</code> and <code>radius</code> will be ignored if <code>bounds</code> is set.</div></td>
</tr>
<tr id="QueryAutocompletionRequest.input">
<td itemprop="property"><code><a class="secret-link" href="#QueryAutocompletionRequest.input"><span>input</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The user entered input string.</div></td>
</tr>
<tr id="QueryAutocompletionRequest.location">
<td itemprop="property"><code><a class="secret-link" href="#QueryAutocompletionRequest.location"><span>location</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="LatLng.md">LatLng</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Location for prediction biasing. Predictions will be biased towards the given <code>location</code> and <code>radius</code>. Alternatively, <code>bounds</code> can be used.</div></td>
</tr>
<tr id="QueryAutocompletionRequest.offset">
<td itemprop="property"><code><a class="secret-link" href="#QueryAutocompletionRequest.offset"><span>offset</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The character position in the input term at which the service uses text for predictions (the position of the cursor in the input field).</div></td>
</tr>
<tr id="QueryAutocompletionRequest.radius">
<td itemprop="property"><code><a class="secret-link" href="#QueryAutocompletionRequest.radius"><span>radius</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The radius of the area used for prediction biasing. The <code>radius</code> is specified in meters, and must always be accompanied by a <code>location</code> property. Alternatively, <code>bounds</code> can be used.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
