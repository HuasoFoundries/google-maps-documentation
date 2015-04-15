<h2 id="PlaceReview">
google.maps.places.PlaceReview
object specification
</h2><p>Represents a single review of a place.</p><h3>Library</h3><p>places</p><h3>Properties</h3><table summary="object PlaceReview - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>aspects</code></td>
<td><code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.PlaceAspectRating.md">PlaceAspectRating</a>&gt;</code></td>
<td>The aspects rated by the review. The ratings on a scale of 0 to 3.</td>
</tr>
<tr>
<td><code>author_name</code></td>
<td><code>string</code></td>
<td>The name of the reviewer.</td>
</tr>
<tr>
<td><code>author_url</code></td>
<td><code>string</code></td>
<td>A link to the reviewer's profile. This will be undefined when the reviewer's profile is unavailable.</td>
</tr>
<tr>
<td><code>language</code></td>
<td><code>string</code></td>
<td>An IETF language code indicating the language in which this review is written. Note that this code includes only the main language tag without any secondary tag indicating country or region. For example, all the English reviews are tagged as 'en' rather than 'en-AU' or 'en-UK'.</td>
</tr>
<tr>
<td><code>text</code></td>
<td><code>string</code></td>
<td>The text of a review.</td>
</tr>
</tbody>
</table>