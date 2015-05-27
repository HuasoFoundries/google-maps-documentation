<h2 id="StyledMapType">
StyledMapType
class
</h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">StyledMapType</span></code>
class
</p><p>Creates a <code>MapType</code> with a custom style.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><table class="constructors responsive" summary="class StyledMapType - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code>StyledMapType(styles:Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapTypeStyle.md">MapTypeStyle</a>&gt;, options?:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StyledMapTypeOptions.md"><em>StyledMapTypeOptions</em></a>)</code></td>
<td>Creates a styled <code>MapType</code> with the specified options. The <code>StyledMapType</code> takes an array of <code>MapTypeStyle</code>s, where each <code>MapTypeStyle</code> is applied to the map consecutively. A later <code>MapTypeStyle</code> that applies the same <code>MapTypeStyler</code>s to the same selectors as an earlier <code>MapTypeStyle</code> will override the earlier <code>MapTypeStyle</code>.</td>
</tr>
</tbody>
</table><table class="methods responsive" summary="class StyledMapType - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
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
</tbody>
</table><table class="properties responsive" summary="class StyledMapType - Properties">
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
</table>