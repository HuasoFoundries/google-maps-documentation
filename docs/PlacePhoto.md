<h2 id="PlacePhoto"> PlacePhoto interface </h2><p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">PlacePhoto</span></code>
interface
</p><p>Represents a photo element of a Place.</p><h4>Library</h4><p>places</p><div class="devsite-table-wrapper"><table class="methods responsive" summary="interface PlacePhoto - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="PlacePhoto.getUrl">
<td><code><span>getUrl</span></code></td>
<td><div><code>getUrl(opts)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>opts</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PhotoOptions.md">PhotoOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the image URL corresponding to the specified options. You must include a PhotoOptions object with at least one of maxWidth or maxHeight specified.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface PlacePhoto - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="PlacePhoto.height">
<td><code><span>height</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The height of the photo in pixels.</div></td>
</tr>
<tr id="PlacePhoto.html_attributions">
<td><code><span>html_attributions</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">Attribution text to be displayed for this photo.</div></td>
</tr>
<tr id="PlacePhoto.width">
<td><code><span>width</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The width of the photo in pixels.</div></td>
</tr>
</tbody>
</table></div>