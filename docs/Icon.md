<h2 id="Icon"> Icon object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Icon</span></code>
object specification
</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface Icon - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>anchor</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Point.md">Point</a></code></div>
<div class="desc">The position at which to anchor an image in correspondence to the location of the marker on the map. By default, the anchor is located along the center point of the bottom of the image.</div></td>
</tr>
<tr>
<td><code><span>labelOrigin</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Point.md">Point</a></code></div>
<div class="desc">The origin of the label relative to the top-left corner of the icon image, if a label is supplied by the marker. By default, the origin is located in the center point of the image.</div></td>
</tr>
<tr>
<td><code><span>origin</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Point.md">Point</a></code></div>
<div class="desc">The position of the image within a sprite, if any. By default, the origin is located at the top left corner of the image <code>(0, 0)</code>.</div></td>
</tr>
<tr>
<td><code><span>scaledSize</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Size.md">Size</a></code></div>
<div class="desc">The size of the entire image after scaling, if any. Use this property to stretch/shrink an image or a sprite.</div></td>
</tr>
<tr>
<td><code><span>size</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Size.md">Size</a></code></div>
<div class="desc">The display size of the sprite or image. When using sprites, you must specify the sprite size. If the size is not provided, it will be set when the image loads.</div></td>
</tr>
<tr>
<td><code><span>url</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The URL of the image or sprite sheet.</div></td>
</tr>
</tbody>
</table></div>