
<h2 id="StructuredFormatting">StructuredFormatting interface</h2>
<p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">StructuredFormatting</span></code>
interface
</p>
<p>Contains structured information about the place's description, divided into a main text and a secondary text, including an array of matched substrings from the autocomplete input, identified by an offset and a length, expressed in unicode characters.</p>
<h4>Library</h4>
<p>places</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface StructuredFormatting - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="StructuredFormatting.main_text">
<td itemprop="property"><code><a class="secret-link" href="#StructuredFormatting.main_text"><span>main_text</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">This is the main text part of the unformatted description of the place suggested by the Places service. Usually the name of the place.</div></td>
</tr>
<tr id="StructuredFormatting.main_text_matched_substrings">
<td itemprop="property"><code><a class="secret-link" href="#StructuredFormatting.main_text_matched_substrings"><span>main_text_matched_substrings</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="PredictionSubstring.md">PredictionSubstring</a>&gt;</code></div>
<div class="desc">A set of substrings in the main text that match elements in the user's input, suitable for use in highlighting those substrings. Each substring is identified by an offset and a length, expressed in unicode characters.</div></td>
</tr>
<tr id="StructuredFormatting.secondary_text">
<td itemprop="property"><code><a class="secret-link" href="#StructuredFormatting.secondary_text"><span>secondary_text</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">This is the secondary text part of the unformatted description of the place suggested by the Places service. Usually the location of the place.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
