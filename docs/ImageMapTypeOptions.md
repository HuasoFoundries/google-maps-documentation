<h2 id="ImageMapTypeOptions">
ImageMapTypeOptions
object specification
</h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">ImageMapTypeOptions</span></code>
object specification
</p><p>This class is used to create a MapType that renders image tiles.</p><table class="properties responsive" summary="interface ImageMapTypeOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code>alt</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Alt text to display when this MapType's button is hovered over in the MapTypeControl.</div></td>
</tr>
<tr>
<td><code>getTileUrl</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>function(<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Point.md">Point</a>, number): string</code></div>
<div class="desc">Returns a string (URL) for given tile coordinate (x, y) and zoom level.</div></td>
</tr>
<tr>
<td><code>maxZoom</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The maximum zoom level for the map when displaying this MapType.</div></td>
</tr>
<tr>
<td><code>minZoom</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The minimum zoom level for the map when displaying this MapType. Optional.</div></td>
</tr>
<tr>
<td><code>name</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Name to display in the MapTypeControl.</div></td>
</tr>
<tr>
<td><code>opacity</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The opacity to apply to the tiles. The opacity should be specified as a float value between 0 and 1.0, where 0 is fully transparent and 1 is fully opaque.</div></td>
</tr>
<tr>
<td><code>tileSize</code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Size.md">Size</a></code></div>
<div class="desc">The tile size.</div></td>
</tr>
</tbody>
</table>