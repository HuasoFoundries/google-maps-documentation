
<devsite-heading text=" PlaceReview interface" for="PlaceReview" level="h2" link="" toc="" back-to-top=""><h2 id="PlaceReview" is-upgraded="">PlaceReview interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps.places</span>.<span itemprop="name">PlaceReview</span></code>
interface
</p>
<p>Represents a single review of a place.</p>
<devsite-heading text="Library" for="library_19" level="h4" link=""><h4 is-upgraded="" id="library_19">Library</h4></devsite-heading>
<p>places</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface PlaceReview - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="PlaceReview.aspects">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceReview.aspects"><span>aspects</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="PlaceAspectRating.md">PlaceAspectRating</a>&gt;</code></div>
<div class="desc">The aspects rated by the review. The ratings on a scale of 0 to 3.</div></td>
</tr>
<tr id="PlaceReview.author_name">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceReview.author_name"><span>author_name</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">The name of the reviewer.</div></td>
</tr>
<tr id="PlaceReview.author_url">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceReview.author_url"><span>author_url</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">A URL to the reviewer's profile. This will be <code translate="no" dir="ltr">undefined</code> when the reviewer's profile is unavailable.</div></td>
</tr>
<tr id="PlaceReview.language">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceReview.language"><span>language</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">An IETF language code indicating the language in which this review is written. Note that this code includes only the main language tag without any secondary tag indicating country or region. For example, all the English reviews are tagged as <code translate="no" dir="ltr">'en'</code> rather than 'en-AU' or 'en-UK'.</div></td>
</tr>
<tr id="PlaceReview.profile_photo_url">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceReview.profile_photo_url"><span>profile_photo_url</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">A URL to the reviwer's profile image.</div></td>
</tr>
<tr id="PlaceReview.relative_time_description">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceReview.relative_time_description"><span>relative_time_description</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">A string of formatted recent time, expressing the review time relative to the current time in a form appropriate for the language and country. For example <code translate="no" dir="ltr">"a month ago"</code>.</div></td>
</tr>
<tr id="PlaceReview.text">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceReview.text"><span>text</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">The text of a review.</div></td>
</tr>
<tr id="PlaceReview.time">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceReview.time"><span>time</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">Timestamp for the review, expressed in seconds since epoch.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
