
<devsite-heading text=" AutocompletePrediction interface" for="AutocompletePrediction" level="h2" link="" toc="" back-to-top=""><h2 id="AutocompletePrediction" is-upgraded="">AutocompletePrediction interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps.places</span>.<span itemprop="name">AutocompletePrediction</span></code>
interface
</p>
<p>Represents a single autocomplete prediction.</p>
<devsite-heading text="Library" for="library_5" level="h4" link=""><h4 is-upgraded="" id="library_5">Library</h4></devsite-heading>
<p>places</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface AutocompletePrediction - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="AutocompletePrediction.description">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#AutocompletePrediction.description"><span>description</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">This is the unformatted version of the query suggested by the Places service.</div></td>
</tr>
<tr id="AutocompletePrediction.distance_meters">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#AutocompletePrediction.distance_meters"><span>distance_meters</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The distance in meters of the place from the <code translate="no" dir="ltr"><a href="/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest.origin">AutocompletionRequest.origin</a></code>.</div></td>
</tr>
<tr id="AutocompletePrediction.matched_substrings">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#AutocompletePrediction.matched_substrings"><span>matched_substrings</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="PredictionSubstring.md">PredictionSubstring</a>&gt;</code></div>
<div class="desc">A set of substrings in the place's description that match elements in the user's input, suitable for use in highlighting those substrings. Each substring is identified by an offset and a length, expressed in unicode characters.</div></td>
</tr>
<tr id="AutocompletePrediction.place_id">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#AutocompletePrediction.place_id"><span>place_id</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">A place ID that can be used to retrieve details about this place using the place details service (see <code translate="no" dir="ltr"><a href="/maps/documentation/javascript/reference/places-service#PlacesService.getDetails">PlacesService.getDetails</a></code>).</div></td>
</tr>
<tr id="AutocompletePrediction.structured_formatting">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#AutocompletePrediction.structured_formatting"><span>structured_formatting</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="StructuredFormatting.md">StructuredFormatting</a></code></div>
<div class="desc">Structured information about the place's description, divided into a main text and a secondary text, including an array of matched substrings from the autocomplete input, identified by an offset and a length, expressed in unicode characters.</div></td>
</tr>
<tr id="AutocompletePrediction.terms">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#AutocompletePrediction.terms"><span>terms</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="PredictionTerm.md">PredictionTerm</a>&gt;</code></div>
<div class="desc">Information about individual terms in the above description, from most to least specific. For example, "Taco Bell", "Willitis", and "CA".</div></td>
</tr>
<tr id="AutocompletePrediction.types">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#AutocompletePrediction.types"><span>types</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;string&gt;</code></div>
<div class="desc">An array of types that the prediction belongs to, for example <code translate="no" dir="ltr">'establishment'</code> or <code translate="no" dir="ltr">'geocode'</code>.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
