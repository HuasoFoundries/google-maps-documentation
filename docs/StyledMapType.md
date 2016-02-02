<h2 id="StyledMapType"> StyledMapType class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">StyledMapType</span></code>
class
</p><p>Creates a <code>MapType</code> with a custom style.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class StyledMapType - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>StyledMapType(<wbr>styles:Array&lt;</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapTypeStyle.md"><span>MapTypeStyle</span></a><span>&gt;,<wbr> options?:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StyledMapTypeOptions.md"><em><span>StyledMapTypeOptions</span></em></a><span>)</span></code></td>
<td>Creates a styled <code><span>MapType</span></code> with the specified options. The <code><span>StyledMapType</span></code> takes an array of <code><span>MapTypeStyle</span></code>s, where each <code><span>MapTypeStyle</span></code> is applied to the map consecutively. A later <code><span>MapTypeStyle</span></code> that applies the same <code><span>MapTypeStyler</span></code>s to the same selectors as an earlier <code><span>MapTypeStyle</span></code> will override the earlier <code><span>MapTypeStyle</span></code>.</td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="properties responsive" summary="class StyledMapType - Properties">
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
</table></div>