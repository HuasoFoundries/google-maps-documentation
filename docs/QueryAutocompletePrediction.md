
<h2 id="QueryAutocompletePrediction">QueryAutocompletePrediction interface</h2>
<p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">QueryAutocompletePrediction</span></code>
interface
</p>
<p>Represents a single Query Autocomplete prediction.</p>
<h4>Library</h4>
<p>places</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface QueryAutocompletePrediction - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="QueryAutocompletePrediction.description">
<td itemprop="property"><code><a class="secret-link" href="#QueryAutocompletePrediction.description"><span>description</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">This is the unformatted version of the query suggested by the Places service.</div></td>
</tr>
<tr id="QueryAutocompletePrediction.matched_substrings">
<td itemprop="property"><code><a class="secret-link" href="#QueryAutocompletePrediction.matched_substrings"><span>matched_substrings</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="PredictionSubstring.md">PredictionSubstring</a>&gt;</code></div>
<div class="desc">A set of substrings in the place's description that match elements in the user's input, suitable for use in highlighting those substrings. Each substring is identified by an offset and a length, expressed in unicode characters.</div></td>
</tr>
<tr id="QueryAutocompletePrediction.place_id">
<td itemprop="property"><code><a class="secret-link" href="#QueryAutocompletePrediction.place_id"><span>place_id</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Only available if prediction is a place. A place ID that can be used to retrieve details about this place using the place details service (see <code><a href="https://developers.google.com/maps/documentation/javascript/reference/places-service#PlacesService.getDetails">PlacesService.getDetails</a></code>).</div></td>
</tr>
<tr id="QueryAutocompletePrediction.terms">
<td itemprop="property"><code><a class="secret-link" href="#QueryAutocompletePrediction.terms"><span>terms</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="PredictionTerm.md">PredictionTerm</a>&gt;</code></div>
<div class="desc">Information about individual terms in the above description. Categorical terms come first (for example, "restaurant"). Address terms appear from most to least specific. For example, "San Francisco", and "CA".</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
