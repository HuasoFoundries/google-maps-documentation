
<devsite-heading text=" AutocompleteService class" for="AutocompleteService" level="h2" link="" toc="" back-to-top=""><h2 id="AutocompleteService" is-upgraded="">AutocompleteService class </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps.places</span>.<span itemprop="name">AutocompleteService</span></code>
class
</p>
<p>Contains methods related to retrieving Autocomplete predictions.</p>
<devsite-heading text="Library" for="library" level="h4" link=""><h4 is-upgraded="" id="library">Library<button role="button" class="devsite-heading-link button-flat material-icons" title="Copy link to this section"></button></h4></devsite-heading>
<p>places</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class AutocompleteService - Constructor">
<thead>
<tr><th colspan="2" id="AutocompleteService.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code translate="no" dir="ltr"><a class="secret-link" href="#AutocompleteService.constructor"><span>AutocompleteService</span></a></code></td>
<td><div><code translate="no" dir="ltr">AutocompleteService()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc">Creates a new instance of the <code translate="no" dir="ltr">AutocompleteService</code>.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class AutocompleteService - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="AutocompleteService.getPlacePredictions">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#AutocompleteService.getPlacePredictions"><span>getPlacePredictions</span></a></code></td>
<td><div><code translate="no" dir="ltr">getPlacePredictions(request, callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">request</code>:&nbsp; <code translate="no" dir="ltr"><a href="AutocompletionRequest.md">AutocompletionRequest</a></code></li>
<li><code translate="no" dir="ltr">callback</code>:&nbsp; <code translate="no" dir="ltr">function(Array&lt;<a href="AutocompletePrediction.md">AutocompletePrediction</a>&gt;, <a href="PlacesServiceStatus.md">PlacesServiceStatus</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Retrieves place autocomplete predictions based on the supplied autocomplete request.</div></td>
</tr>
<tr id="AutocompleteService.getQueryPredictions">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#AutocompleteService.getQueryPredictions"><span>getQueryPredictions</span></a></code></td>
<td><div><code translate="no" dir="ltr">getQueryPredictions(request, callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">request</code>:&nbsp; <code translate="no" dir="ltr"><a href="QueryAutocompletionRequest.md">QueryAutocompletionRequest</a></code></li>
<li><code translate="no" dir="ltr">callback</code>:&nbsp; <code translate="no" dir="ltr">function(Array&lt;<a href="QueryAutocompletePrediction.md">QueryAutocompletePrediction</a>&gt;, <a href="PlacesServiceStatus.md">PlacesServiceStatus</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Retrieves query autocomplete predictions based on the supplied query autocomplete request.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
