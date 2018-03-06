<h2 id="StyledMapType"> StyledMapType class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">StyledMapType</span></code>
class
</p><p>Creates a <code>MapType</code> with a custom style.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><p>This class implements
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapType.md">MapType</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class StyledMapType - Constructor">
<thead>
<tr><th colspan="2" id="StyledMapType.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>StyledMapType</span></code></td>
<td><div><code>StyledMapType(styles[, options])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>styles</code>:&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapTypeStyle.md">MapTypeStyle</a>&gt;</code></li>
<li><code>options</code> (optional):&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StyledMapTypeOptions.md">StyledMapTypeOptions</a></code></li>
</ul></div>
<div class="desc">Creates a styled <code>MapType</code> with the specified options. The <code>StyledMapType</code> takes an array of <code>MapTypeStyle</code>s, where each <code>MapTypeStyle</code> is applied to the map consecutively. A later <code>MapTypeStyle</code> that applies the same <code>MapTypeStyler</code>s to the same selectors as an earlier <code>MapTypeStyle</code> will override the earlier <code>MapTypeStyle</code>.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class StyledMapType - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="StyledMapType.getTile">
<td><code><span>getTile</span></code></td>
<td><div><code>getTile(tileCoord, zoom, ownerDocument)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>tileCoord</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Point.md">Point</a></code></li>
<li><code>zoom</code>:&nbsp; <code>number</code></li>
<li><code>ownerDocument</code>:&nbsp; <code>Document</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>Node</code></div>
<div class="desc"></div></td>
</tr>
<tr id="StyledMapType.releaseTile">
<td><code><span>releaseTile</span></code></td>
<td><div><code>releaseTile(tile)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>tile</code>:&nbsp; <code>Node</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="properties responsive" summary="class StyledMapType - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="StyledMapType.alt">
<td><code><span>alt</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc"></div></td>
</tr>
<tr id="StyledMapType.maxZoom">
<td><code><span>maxZoom</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc"></div></td>
</tr>
<tr id="StyledMapType.minZoom">
<td><code><span>minZoom</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc"></div></td>
</tr>
<tr id="StyledMapType.name">
<td><code><span>name</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc"></div></td>
</tr>
<tr id="StyledMapType.projection">
<td><code><span>projection</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Projection.md">Projection</a></code></div>
<div class="desc"></div></td>
</tr>
<tr id="StyledMapType.radius">
<td><code><span>radius</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc"></div></td>
</tr>
<tr id="StyledMapType.tileSize">
<td><code><span>tileSize</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Size.md">Size</a></code></div>
<div class="desc"></div></td>
</tr>
</tbody>
</table></div>