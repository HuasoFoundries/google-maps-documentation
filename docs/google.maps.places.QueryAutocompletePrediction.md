<h2 id="QueryAutocompletePrediction">
google.maps.places.QueryAutocompletePrediction
object specification
</h2><p>Represents a single Query Autocomplete prediction.</p><h3>Library</h3><p>places</p><h3>Properties</h3><table summary="interface QueryAutocompletePrediction - Properties" width="100%">
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
<td><code>matched_substrings</code></td>
<td><code>Array.&lt;<a href="#PredictionSubstring">PredictionSubstring</a>&gt;</code></td>
<td>A set of substrings in the place's description that match elements in the user's input, suitable for use in highlighting those substrings. Each substring is identified by an offset and a length, expressed in unicode characters.</td>
</tr>
<tr>
<td><code>terms</code></td>
<td><code>Array.&lt;<a href="#PredictionTerm">PredictionTerm</a>&gt;</code></td>
<td>Information about individual terms in the above description. Categorical terms come first (e.g., "restaurant"). Address terms appear from most to least specific. For example, "San Francisco", and "CA".</td>
</tr>
</tbody>
</table>