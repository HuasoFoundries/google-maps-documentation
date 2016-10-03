<h2 id="PlacePhoto"> PlacePhoto object specification </h2><p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">PlacePhoto</span></code>
object specification
</p><p>Represents a photo element of a Place.</p><h4>Library</h4><p>places</p><div class="devsite-table-wrapper"><table class="methods responsive" summary="record PlacePhoto - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>getUrl(<wbr>opts:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PhotoOptions.md"><span>PhotoOptions</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the image URL corresponding to the specified options. You must include a PhotoOptions object with at least one of maxWidth or maxHeight specified.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="properties responsive" summary="record PlacePhoto - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>height</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The height of the photo in pixels.</div></td>
</tr>
<tr>
<td><code><span>html_attributions</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">Attribution text to be displayed for this photo.</div></td>
</tr>
<tr>
<td><code><span>width</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The width of the photo in pixels.</div></td>
</tr>
</tbody>
</table></div>