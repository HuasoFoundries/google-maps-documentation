<h2 id="PlacePhoto">
PlacePhoto
object specification
</h2><p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">PlacePhoto</span></code>
object specification
</p><p>Represents a photo element of a Place.</p><h4>Library</h4><p>places</p><table class="methods responsive" summary="interface PlacePhoto - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code>getUrl(opts:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PhotoOptions.md"><em>PhotoOptions</em></a>)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the image URL corresponding to the specified options. You must include a PhotoOptions object with at least one of maxWidth or maxHeight specified.</div></td>
</tr>
</tbody>
</table><table class="properties responsive" summary="interface PlacePhoto - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code>height</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The height of the photo in pixels.</div></td>
</tr>
<tr>
<td><code>html_attributions</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">Attribution text to be displayed for this photo.</div></td>
</tr>
<tr>
<td><code>width</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The width of the photo in pixels.</div></td>
</tr>
</tbody>
</table>