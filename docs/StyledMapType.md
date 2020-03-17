
<devsite-heading text=" StyledMapType class" for="StyledMapType" level="h2" link="" toc="" back-to-top=""><h2 id="StyledMapType" is-upgraded="">StyledMapType class</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">StyledMapType</span></code>
class
</p>
<p>Creates a <code translate="no" dir="ltr">MapType</code> with a custom style.</p>
<p>This class extends
<code translate="no" dir="ltr"><a href="MVCObject.md">MVCObject</a></code>.
</p>
<p>This class implements
<code translate="no" dir="ltr"><a href="MapType.md">MapType</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class StyledMapType - Constructor">
<thead>
<tr><th colspan="2" id="StyledMapType.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code translate="no" dir="ltr"><a class="secret-link" href="#StyledMapType.constructor"><span>StyledMapType</span></a></code></td>
<td><div><code translate="no" dir="ltr">StyledMapType(styles[, options])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">styles</code>:&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="MapTypeStyle.md">MapTypeStyle</a>&gt;</code></li>
<li><code translate="no" dir="ltr">options</code>:&nbsp; <code translate="no" dir="ltr"><a href="StyledMapTypeOptions.md">StyledMapTypeOptions</a> <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc">Creates a styled <code translate="no" dir="ltr">MapType</code> with the specified options. The <code translate="no" dir="ltr">StyledMapType</code> takes an array of <code translate="no" dir="ltr">MapTypeStyle</code>s, where each <code translate="no" dir="ltr">MapTypeStyle</code> is applied to the map consecutively. A later <code translate="no" dir="ltr">MapTypeStyle</code> that applies the same <code translate="no" dir="ltr">MapTypeStyler</code>s to the same selectors as an earlier <code translate="no" dir="ltr">MapTypeStyle</code> will override the earlier <code translate="no" dir="ltr">MapTypeStyle</code>.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class StyledMapType - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="StyledMapType.getTile">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StyledMapType.getTile"><span>getTile</span></a></code></td>
<td><div><code translate="no" dir="ltr">getTile(tileCoord, zoom, ownerDocument)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">tileCoord</code>:&nbsp; <code translate="no" dir="ltr"><a href="Point.md">Point</a></code></li>
<li><code translate="no" dir="ltr">zoom</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
<li><code translate="no" dir="ltr">ownerDocument</code>:&nbsp; <code translate="no" dir="ltr">Document</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">Node</code></div>
<div class="desc"></div></td>
</tr>
<tr id="StyledMapType.releaseTile">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StyledMapType.releaseTile"><span>releaseTile</span></a></code></td>
<td><div><code translate="no" dir="ltr">releaseTile(tile)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">tile</code>:&nbsp; <code translate="no" dir="ltr">Node</code></li>
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
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StyledMapType.alt"><span>alt</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc"></div></td>
</tr>
<tr id="StyledMapType.maxZoom">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StyledMapType.maxZoom"><span>maxZoom</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc"></div></td>
</tr>
<tr id="StyledMapType.minZoom">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StyledMapType.minZoom"><span>minZoom</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc"></div></td>
</tr>
<tr id="StyledMapType.name">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StyledMapType.name"><span>name</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc"></div></td>
</tr>
<tr id="StyledMapType.projection">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StyledMapType.projection"><span>projection</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Projection.md">Projection</a></code></div>
<div class="desc"></div></td>
</tr>
<tr id="StyledMapType.radius">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StyledMapType.radius"><span>radius</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc"></div></td>
</tr>
<tr id="StyledMapType.tileSize">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StyledMapType.tileSize"><span>tileSize</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Size.md">Size</a></code></div>
<div class="desc"></div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
