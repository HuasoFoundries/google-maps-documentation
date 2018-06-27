<h2 id="PlaceReview"> PlaceReview interface </h2><p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">PlaceReview</span></code>
interface
</p><p>Represents a single review of a place.</p><h4>Library</h4><p>places</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface PlaceReview - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="PlaceReview.aspects">
<td><code><span>aspects</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceAspectRating.md">PlaceAspectRating</a>&gt;</code></div>
<div class="desc">The aspects rated by the review. The ratings on a scale of 0 to 3.</div></td>
</tr>
<tr id="PlaceReview.author_name">
<td><code><span>author_name</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The name of the reviewer.</div></td>
</tr>
<tr id="PlaceReview.author_url">
<td><code><span>author_url</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">A link to the reviewer's profile. This will be undefined when the reviewer's profile is unavailable.</div></td>
</tr>
<tr id="PlaceReview.language">
<td><code><span>language</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">An IETF language code indicating the language in which this review is written. Note that this code includes only the main language tag without any secondary tag indicating country or region. For example, all the English reviews are tagged as <code>'en'</code> rather than 'en-AU' or 'en-UK'.</div></td>
</tr>
<tr id="PlaceReview.text">
<td><code><span>text</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The text of a review.</div></td>
</tr>
</tbody>
</table></div>