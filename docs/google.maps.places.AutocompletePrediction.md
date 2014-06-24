<h2 id="AutocompletePrediction">
google.maps.places.AutocompletePrediction
object specification
</h2><h3>Library</h3><p>places</p><h3>Properties</h3><table summary="interface AutocompletePrediction - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>description</code></td>
<td><code>string</code></td>
<td>This is the unformatted version of the query suggested by the Places service.</td>
</tr>
<tr>
<td><code>id</code></td>
<td><code>string</code></td>
<td>A stable ID for this place, intended to be interoperable with those returned by the <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.PlaceResult.md">place search service</a>. Note: This has been deprecated in favor of <code>place_id</code>.</td>
</tr>
<tr>
<td><code>matched_substrings</code></td>
<td><code>Array.&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.PredictionSubstring.md">PredictionSubstring</a>&gt;</code></td>
<td>A set of substrings in the place's description that match elements in the user's input, suitable for use in highlighting those substrings. Each substring is identified by an offset and a length, expressed in unicode characters.</td>
</tr>
<tr>
<td><code>place_id</code></td>
<td><code>string</code></td>
<td>A place ID that can be used to retrieve details about this place using the place details service (see <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.PlacesService.md"> PlacesService</a>.getDetails()</code>).</td>
</tr>
<tr>
<td><code>reference</code></td>
<td><code>string</code></td>
<td>A reference that can be used to retrieve details about this place using the place details service (see <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.PlacesService.md"> PlacesService</a>.getDetails()</code>). Note: This has been deprecated in favor of <code>place_id</code>.</td>
</tr>
<tr>
<td><code>terms</code></td>
<td><code>Array.&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.PredictionTerm.md">PredictionTerm</a>&gt;</code></td>
<td>Information about individual terms in the above description, from most to least specific. For example, "Taco Bell", "Willitis", and "CA".</td>
</tr>
<tr>
<td><code>types</code></td>
<td><code>Array.&lt;string&gt;</code></td>
<td>An array of types that the prediction belongs to, for example <code>'establishment'</code> or <code>'geocode'</code>.</td>
</tr>
</tbody>
</table>