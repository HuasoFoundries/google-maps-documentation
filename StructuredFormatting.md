
<devsite-heading text=" StructuredFormatting interface" for="StructuredFormatting" level="h2" link="" toc="" back-to-top=""><h2 id="StructuredFormatting" is-upgraded="">StructuredFormatting interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps.places</span>.<span itemprop="name">StructuredFormatting</span></code>
interface
</p>
<p>Contains structured information about the place's description, divided into a main text and a secondary text, including an array of matched substrings from the autocomplete input, identified by an offset and a length, expressed in unicode characters.</p>
<devsite-heading text="Library" for="library_9" level="h4" link=""><h4 is-upgraded="" id="library_9">Library</h4></devsite-heading>
<p>places</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface StructuredFormatting - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="StructuredFormatting.main_text">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StructuredFormatting.main_text"><span>main_text</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">This is the main text part of the unformatted description of the place suggested by the Places service. Usually the name of the place.</div></td>
</tr>
<tr id="StructuredFormatting.main_text_matched_substrings">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StructuredFormatting.main_text_matched_substrings"><span>main_text_matched_substrings</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="PredictionSubstring.md">PredictionSubstring</a>&gt;</code></div>
<div class="desc">A set of substrings in the main text that match elements in the user's input, suitable for use in highlighting those substrings. Each substring is identified by an offset and a length, expressed in unicode characters.</div></td>
</tr>
<tr id="StructuredFormatting.secondary_text">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StructuredFormatting.secondary_text"><span>secondary_text</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">This is the secondary text part of the unformatted description of the place suggested by the Places service. Usually the location of the place.</div></td>
</tr>
</tbody>
</table></div>
