<h2 id="AutocompleteService">
AutocompleteService
class
</h2><p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">AutocompleteService</span></code>
class
</p><p>Contains methods related to retrieving Autocomplete predictions.</p><h4>Library</h4><p>places</p><table class="constructors responsive" summary="class AutocompleteService - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code>AutocompleteService()</code></td>
<td>Creates a new instance of the <code>AutocompleteService</code>.</td>
</tr>
</tbody>
</table><table class="methods responsive" summary="class AutocompleteService - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code>getPlacePredictions(request:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/AutocompletionRequest.md"><em>AutocompletionRequest</em></a>, callback:function(Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/AutocompletePrediction.md">AutocompletePrediction</a>&gt;, <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlacesServiceStatus.md">PlacesServiceStatus</a>))</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Retrieves place autocomplete predictions based on the supplied autocomplete request.</div></td>
</tr>
<tr>
<td><code>getQueryPredictions(request:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/QueryAutocompletionRequest.md"><em>QueryAutocompletionRequest</em></a>, callback:function(Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/QueryAutocompletePrediction.md">QueryAutocompletePrediction</a>&gt;, <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlacesServiceStatus.md">PlacesServiceStatus</a>))</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Retrieves query autocomplete predictions based on the supplied query autocomplete request.</div></td>
</tr>
</tbody>
</table>