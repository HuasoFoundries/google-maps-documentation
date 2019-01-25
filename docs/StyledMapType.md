
<h2 id="StyledMapType">StyledMapType class</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">StyledMapType</span></code>
class
</p>
<p>Creates a <code>MapType</code> with a custom style.</p>
<p>This class extends
<code><a href="MVCObject.md">MVCObject</a></code>.
</p>
<p>This class implements
<code><a href="MapType.md">MapType</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class StyledMapType - Constructor">
<thead>
<tr><th colspan="2" id="StyledMapType.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><a class="secret-link" href="#StyledMapType.constructor"><span>StyledMapType</span></a></code></td>
<td><div><code>StyledMapType(styles[, options])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>styles</code>:&nbsp; <code>Array&lt;<a href="MapTypeStyle.md">MapTypeStyle</a>&gt;</code></li>
<li><code>options</code> (optional):&nbsp; <code><a href="StyledMapTypeOptions.md">StyledMapTypeOptions</a></code></li>
</ul></div>
<div class="desc">Creates a styled <code>MapType</code> with the specified options. The <code>StyledMapType</code> takes an array of <code>MapTypeStyle</code>s, where each <code>MapTypeStyle</code> is applied to the map consecutively. A later <code>MapTypeStyle</code> that applies the same <code>MapTypeStyler</code>s to the same selectors as an earlier <code>MapTypeStyle</code> will override the earlier <code>MapTypeStyle</code>.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class StyledMapType - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="StyledMapType.getTile">
<td itemprop="property"><code><a class="secret-link" href="#StyledMapType.getTile"><span>getTile</span></a></code></td>
<td><div><code>getTile(tileCoord, zoom, ownerDocument)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>tileCoord</code>:&nbsp; <code><a href="Point.md">Point</a></code></li>
<li><code>zoom</code>:&nbsp; <code>number</code></li>
<li><code>ownerDocument</code>:&nbsp; <code>Document</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>Node</code></div>
<div class="desc"></div></td>
</tr>
<tr id="StyledMapType.releaseTile">
<td itemprop="property"><code><a class="secret-link" href="#StyledMapType.releaseTile"><span>releaseTile</span></a></code></td>
<td><div><code>releaseTile(tile)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>tile</code>:&nbsp; <code>Node</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="class StyledMapType - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="StyledMapType.alt">
<td itemprop="property"><code><a class="secret-link" href="#StyledMapType.alt"><span>alt</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc"></div></td>
</tr>
<tr id="StyledMapType.maxZoom">
<td itemprop="property"><code><a class="secret-link" href="#StyledMapType.maxZoom"><span>maxZoom</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc"></div></td>
</tr>
<tr id="StyledMapType.minZoom">
<td itemprop="property"><code><a class="secret-link" href="#StyledMapType.minZoom"><span>minZoom</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc"></div></td>
</tr>
<tr id="StyledMapType.name">
<td itemprop="property"><code><a class="secret-link" href="#StyledMapType.name"><span>name</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc"></div></td>
</tr>
<tr id="StyledMapType.projection">
<td itemprop="property"><code><a class="secret-link" href="#StyledMapType.projection"><span>projection</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="Projection.md">Projection</a></code></div>
<div class="desc"></div></td>
</tr>
<tr id="StyledMapType.radius">
<td itemprop="property"><code><a class="secret-link" href="#StyledMapType.radius"><span>radius</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc"></div></td>
</tr>
<tr id="StyledMapType.tileSize">
<td itemprop="property"><code><a class="secret-link" href="#StyledMapType.tileSize"><span>tileSize</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="Size.md">Size</a></code></div>
<div class="desc"></div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
