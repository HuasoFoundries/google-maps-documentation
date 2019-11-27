
<devsite-heading text=" Icon interface" for="Icon" level="h2" link="" toc="" back-to-top=""><h2 id="Icon" is-upgraded="">Icon interface </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">Icon</span></code>
interface
</p>
<p>A structure representing a Marker icon image.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface Icon - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="Icon.anchor">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Icon.anchor"><span>anchor</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Point.md">Point</a></code></div>
<div class="desc">The position at which to anchor an image in correspondence to the location of the marker on the map. By default, the anchor is located along the center point of the bottom of the image.</div></td>
</tr>
<tr id="Icon.labelOrigin">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Icon.labelOrigin"><span>labelOrigin</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Point.md">Point</a></code></div>
<div class="desc">The origin of the label relative to the top-left corner of the icon image, if a label is supplied by the marker. By default, the origin is located in the center point of the image.</div></td>
</tr>
<tr id="Icon.origin">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Icon.origin"><span>origin</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Point.md">Point</a></code></div>
<div class="desc">The position of the image within a sprite, if any. By default, the origin is located at the top left corner of the image <code translate="no" dir="ltr">(0, 0)</code>.</div></td>
</tr>
<tr id="Icon.scaledSize">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Icon.scaledSize"><span>scaledSize</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Size.md">Size</a></code></div>
<div class="desc">The size of the entire image after scaling, if any. Use this property to stretch/shrink an image or a sprite.</div></td>
</tr>
<tr id="Icon.size">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Icon.size"><span>size</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Size.md">Size</a></code></div>
<div class="desc">The display size of the sprite or image. When using sprites, you must specify the sprite size. If the size is not provided, it will be set when the image loads.</div></td>
</tr>
<tr id="Icon.url">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Icon.url"><span>url</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">The URL of the image or sprite sheet.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
