<h2 id="ImageMapType"> ImageMapType class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">ImageMapType</span></code>
class
</p><p>This class implements the MapType interface and is provided for rendering image tiles.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class ImageMapType - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>ImageMapType(<wbr>opts:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ImageMapTypeOptions.md"><span>ImageMapTypeOptions</span></a><span>)</span></code></td>
<td>Constructs an ImageMapType using the provided ImageMapTypeOptions</td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class ImageMapType - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>getOpacity()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the opacity level (<code>0</code> (transparent) to <code>1.0</code>) of the <code>ImageMapType</code> tiles.</div></td>
</tr>
<tr>
<td><code><span>getTile(<wbr>tileCoord:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Point.md"><span>Point</span></a><span>,<wbr> zoom:number,<wbr> ownerDocument:Document)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>Node</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>releaseTile(<wbr>tileDiv:Node)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>setOpacity(<wbr>opacity:number)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the opacity level (<code>0</code> (transparent) to <code>1.0</code>) of the <code>ImageMapType</code> tiles.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="properties responsive" summary="class ImageMapType - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>alt</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>maxZoom</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>minZoom</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>name</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>projection</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Projection.md">Projection</a></code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>radius</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>tileSize</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Size.md">Size</a></code></div>
<div class="desc"></div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="details responsive" summary="class ImageMapType - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>tilesloaded</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the visible tiles have finished loading.</div></td>
</tr>
</tbody>
</table></div>