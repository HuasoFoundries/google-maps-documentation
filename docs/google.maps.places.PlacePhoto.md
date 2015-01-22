<h2 id="PlacePhoto">
google.maps.places.PlacePhoto
object specification
</h2><p>Represents a photo element of a Place.</p><h3 id="devsite_header_286">Library</h3><p>places</p><h3 id="devsite_header_287">Methods</h3><table summary="interface PlacePhoto - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getUrl(opts:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.PhotoOptions.md"><em>PhotoOptions</em></a>)</code></td>
<td><code>string</code></td>
<td>Returns the image URL corresponding to the specified options. You must include a PhotoOptions object with at least one of maxWidth or maxHeight specified.</td>
</tr>
</tbody>
</table><h3 id="devsite_header_288">Properties</h3><table summary="interface PlacePhoto - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>height</code></td>
<td><code>number</code></td>
<td>The height of the photo in pixels.</td>
</tr>
<tr>
<td><code>html_attributions</code></td>
<td><code>Array&lt;string&gt;</code></td>
<td>Attribution text to be displayed for this photo.</td>
</tr>
<tr>
<td><code>width</code></td>
<td><code>number</code></td>
<td>The width of the photo in pixels.</td>
</tr>
</tbody>
</table>