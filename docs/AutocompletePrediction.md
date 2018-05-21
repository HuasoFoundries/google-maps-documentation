<h2 id="AutocompletePrediction"> AutocompletePrediction interface </h2><p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">AutocompletePrediction</span></code>
interface
</p><p>Represents a single autocomplete prediction.</p><h4>Library</h4><p>places</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface AutocompletePrediction - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="AutocompletePrediction.description">
<td><code><span>description</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">This is the unformatted version of the query suggested by the Places service.</div></td>
</tr>
<tr id="AutocompletePrediction.matched_substrings">
<td><code><span>matched_substrings</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PredictionSubstring.md">PredictionSubstring</a>&gt;</code></div>
<div class="desc">A set of substrings in the place's description that match elements in the user's input, suitable for use in highlighting those substrings. Each substring is identified by an offset and a length, expressed in unicode characters.</div></td>
</tr>
<tr id="AutocompletePrediction.place_id">
<td><code><span>place_id</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">A place ID that can be used to retrieve details about this place using the place details service (see <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlacesService.md">PlacesService.getDetails</a></code>).</div></td>
</tr>
<tr id="AutocompletePrediction.structured_formatting">
<td><code><span>structured_formatting</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StructuredFormatting.md">StructuredFormatting</a></code></div>
<div class="desc">Structured information about the place's description, divided into a main text and a secondary text, including an array of matched substrings from the autocomplete input, identified by an offset and a length, expressed in unicode characters.</div></td>
</tr>
<tr id="AutocompletePrediction.terms">
<td><code><span>terms</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PredictionTerm.md">PredictionTerm</a>&gt;</code></div>
<div class="desc">Information about individual terms in the above description, from most to least specific. For example, "Taco Bell", "Willitis", and "CA".</div></td>
</tr>
<tr id="AutocompletePrediction.types">
<td><code><span>types</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">An array of types that the prediction belongs to, for example <code>'establishment'</code> or <code>'geocode'</code>.</div></td>
</tr>
</tbody>
</table></div>