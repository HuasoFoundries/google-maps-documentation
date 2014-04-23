<h2 id="Icon">
google.maps.Icon
object specification
</h2><h3>Properties</h3><table summary="interface Icon - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>anchor</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Point.md">Point</a></code></td>
<td>The position at which to anchor an image in correspondance to the location of the marker on the map. By default, the anchor is located along the center point of the bottom of the image.</td>
</tr>
<tr>
<td><code>origin</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Point.md">Point</a></code></td>
<td>The position of the image within a sprite, if any. By default, the origin is located at the top left corner of the image <code>(0, 0)</code>.</td>
</tr>
<tr>
<td><code>scaledSize</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Size.md">Size</a></code></td>
<td>The size of the entire image after scaling, if any. Use this property to stretch/shrink an image or a sprite.</td>
</tr>
<tr>
<td><code>size</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Size.md">Size</a></code></td>
<td>The display size of the sprite or image. When using sprites, you must specify the sprite size. If the size is not provided, it will be set when the image loads.</td>
</tr>
<tr>
<td><code>url</code></td>
<td><code>string</code></td>
<td>The URL of the image or sprite sheet.</td>
</tr>
</tbody>
</table>