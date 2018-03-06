<h2 id="AutocompleteService"> AutocompleteService class </h2><p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">AutocompleteService</span></code>
class
</p><p>Contains methods related to retrieving Autocomplete predictions.</p><h4>Library</h4><p>places</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class AutocompleteService - Constructor">
<thead>
<tr><th colspan="2" id="AutocompleteService.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>AutocompleteService</span></code></td>
<td><div><code>AutocompleteService()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc">Creates a new instance of the <code>AutocompleteService</code>.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class AutocompleteService - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="AutocompleteService.getPlacePredictions">
<td><code><span>getPlacePredictions</span></code></td>
<td><div><code>getPlacePredictions(request, callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>request</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/AutocompletionRequest.md">AutocompletionRequest</a></code></li>
<li><code>callback</code>:&nbsp; <code>function(Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/AutocompletePrediction.md">AutocompletePrediction</a>&gt;, <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlacesServiceStatus.md">PlacesServiceStatus</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Retrieves place autocomplete predictions based on the supplied autocomplete request.</div></td>
</tr>
<tr id="AutocompleteService.getQueryPredictions">
<td><code><span>getQueryPredictions</span></code></td>
<td><div><code>getQueryPredictions(request, callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>request</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/QueryAutocompletionRequest.md">QueryAutocompletionRequest</a></code></li>
<li><code>callback</code>:&nbsp; <code>function(Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/QueryAutocompletePrediction.md">QueryAutocompletePrediction</a>&gt;, <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlacesServiceStatus.md">PlacesServiceStatus</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Retrieves query autocomplete predictions based on the supplied query autocomplete request.</div></td>
</tr>
</tbody>
</table></div>