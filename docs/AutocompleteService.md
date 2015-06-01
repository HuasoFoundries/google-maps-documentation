<h2 id="AutocompleteService"> AutocompleteService class </h2><p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">AutocompleteService</span></code>
class
</p><p>Contains methods related to retrieving Autocomplete predictions.</p><h4>Library</h4><p>places</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class AutocompleteService - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>AutocompleteService()</span></code></td>
<td>Creates a new instance of the <code><span>AutocompleteService</span></code>.</td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class AutocompleteService - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>getPlacePredictions(<wbr>request:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/AutocompletionRequest.md"><em><span>AutocompletionRequest</span></em></a><span>,<wbr> callback:function(<wbr>Array&lt;</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/AutocompletePrediction.md"><span>AutocompletePrediction</span></a><span>&gt;,<wbr> </span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlacesServiceStatus.md"><span>PlacesServiceStatus</span></a><span>))</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Retrieves place autocomplete predictions based on the supplied autocomplete request.</div></td>
</tr>
<tr>
<td><code><span>getQueryPredictions(<wbr>request:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/QueryAutocompletionRequest.md"><em><span>QueryAutocompletionRequest</span></em></a><span>,<wbr> callback:function(<wbr>Array&lt;</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/QueryAutocompletePrediction.md"><span>QueryAutocompletePrediction</span></a><span>&gt;,<wbr> </span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlacesServiceStatus.md"><span>PlacesServiceStatus</span></a><span>))</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Retrieves query autocomplete predictions based on the supplied query autocomplete request.</div></td>
</tr>
</tbody>
</table></div>