<h2 id="ImageMapType">
ImageMapType
class
</h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">ImageMapType</span></code>
class
</p><p>This class implements the MapType interface and is provided for rendering image tiles.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><table class="constructors responsive" summary="class ImageMapType - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code>ImageMapType(opts:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ImageMapTypeOptions.md"><em>ImageMapTypeOptions</em></a>)</code></td>
<td>Constructs an ImageMapType using the provided ImageMapTypeOptions</td>
</tr>
</tbody>
</table><table class="methods responsive" summary="class ImageMapType - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code>getOpacity()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the opacity level (<code>0</code> (transparent) to <code>1.0</code>) of the <code>ImageMapType</code> tiles.</div></td>
</tr>
<tr>
<td><code>getTile(tileCoord:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Point.md">Point</a>, zoom:number, ownerDocument:Document)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>Node</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code>releaseTile(tile:Node)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code>setOpacity(opacity:number)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the opacity level (<code>0</code> (transparent) to <code>1.0</code>) of the <code>ImageMapType</code> tiles.</div></td>
</tr>
</tbody>
</table><table class="properties responsive" summary="class ImageMapType - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code>alt</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code>maxZoom</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code>minZoom</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code>name</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code>projection</code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Projection.md">Projection</a></code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code>radius</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code>tileSize</code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Size.md">Size</a></code></div>
<div class="desc"></div></td>
</tr>
</tbody>
</table><table class="details responsive" summary="class ImageMapType - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr>
<td><code>tilesloaded</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the visible tiles have finished loading.</div></td>
</tr>
</tbody>
</table>