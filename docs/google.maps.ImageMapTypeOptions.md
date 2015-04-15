<h2 id="ImageMapTypeOptions">
google.maps.ImageMapTypeOptions
object specification
</h2><p>This class is used to create a MapType that renders image tiles.</p><h3>Properties</h3><table summary="interface ImageMapTypeOptions - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>alt</code></td>
<td><code>string</code></td>
<td>Alt text to display when this MapType's button is hovered over in the MapTypeControl.</td>
</tr>
<tr>
<td><code>getTileUrl</code></td>
<td><code>function(<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Point.md">Point</a>, number): string</code></td>
<td>Returns a string (URL) for given tile coordinate (x, y) and zoom level.</td>
</tr>
<tr>
<td><code>maxZoom</code></td>
<td><code>number</code></td>
<td>The maximum zoom level for the map when displaying this MapType.</td>
</tr>
<tr>
<td><code>minZoom</code></td>
<td><code>number</code></td>
<td>The minimum zoom level for the map when displaying this MapType. Optional.</td>
</tr>
<tr>
<td><code>name</code></td>
<td><code>string</code></td>
<td>Name to display in the MapTypeControl.</td>
</tr>
<tr>
<td><code>opacity</code></td>
<td><code>number</code></td>
<td>The opacity to apply to the tiles. The opacity should be specified as a float value between 0 and 1.0, where 0 is fully transparent and 1 is fully opaque.</td>
</tr>
<tr>
<td><code>tileSize</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Size.md">Size</a></code></td>
<td>The tile size.</td>
</tr>
</tbody>
</table>