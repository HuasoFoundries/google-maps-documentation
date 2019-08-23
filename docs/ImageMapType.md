
<h2 id="ImageMapType">ImageMapType class</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">ImageMapType</span></code>
class
</p>
<p>This class implements the MapType interface and is provided for rendering image tiles.</p>
<p>This class extends
<code><a href="MVCObject.md">MVCObject</a></code>.
</p>
<p>This class implements
<code><a href="MapType.md">MapType</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class ImageMapType - Constructor">
<thead>
<tr><th colspan="2" id="ImageMapType.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><a class="secret-link" href="#ImageMapType.constructor"><span>ImageMapType</span></a></code></td>
<td><div><code>ImageMapType(opts)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>opts</code>:&nbsp; <code><a href="ImageMapTypeOptions.md">ImageMapTypeOptions</a></code></li>
</ul></div>
<div class="desc">Constructs an ImageMapType using the provided ImageMapTypeOptions</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class ImageMapType - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="ImageMapType.getOpacity">
<td itemprop="property"><code><a class="secret-link" href="#ImageMapType.getOpacity"><span>getOpacity</span></a></code></td>
<td><div><code>getOpacity()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the opacity level (<code>0</code> (transparent) to <code>1.0</code>) of the <code>ImageMapType</code> tiles.</div></td>
</tr>
<tr id="ImageMapType.getTile">
<td itemprop="property"><code><a class="secret-link" href="#ImageMapType.getTile"><span>getTile</span></a></code></td>
<td><div><code>getTile(tileCoord, zoom, ownerDocument)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>tileCoord</code>:&nbsp; <code><a href="Point.md">Point</a></code></li>
<li><code>zoom</code>:&nbsp; <code>number</code></li>
<li><code>ownerDocument</code>:&nbsp; <code>Document</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>Node</code></div>
<div class="desc"></div></td>
</tr>
<tr id="ImageMapType.releaseTile">
<td itemprop="property"><code><a class="secret-link" href="#ImageMapType.releaseTile"><span>releaseTile</span></a></code></td>
<td><div><code>releaseTile(tileDiv)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>tileDiv</code>:&nbsp; <code>Node</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="ImageMapType.setOpacity">
<td itemprop="property"><code><a class="secret-link" href="#ImageMapType.setOpacity"><span>setOpacity</span></a></code></td>
<td><div><code>setOpacity(opacity)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>opacity</code>:&nbsp; <code>number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the opacity level (<code>0</code> (transparent) to <code>1.0</code>) of the <code>ImageMapType</code> tiles.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="class ImageMapType - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="ImageMapType.alt">
<td itemprop="property"><code><a class="secret-link" href="#ImageMapType.alt"><span>alt</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc"></div></td>
</tr>
<tr id="ImageMapType.maxZoom">
<td itemprop="property"><code><a class="secret-link" href="#ImageMapType.maxZoom"><span>maxZoom</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc"></div></td>
</tr>
<tr id="ImageMapType.minZoom">
<td itemprop="property"><code><a class="secret-link" href="#ImageMapType.minZoom"><span>minZoom</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc"></div></td>
</tr>
<tr id="ImageMapType.name">
<td itemprop="property"><code><a class="secret-link" href="#ImageMapType.name"><span>name</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc"></div></td>
</tr>
<tr id="ImageMapType.projection">
<td itemprop="property"><code><a class="secret-link" href="#ImageMapType.projection"><span>projection</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="Projection.md">Projection</a></code></div>
<div class="desc"></div></td>
</tr>
<tr id="ImageMapType.radius">
<td itemprop="property"><code><a class="secret-link" href="#ImageMapType.radius"><span>radius</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc"></div></td>
</tr>
<tr id="ImageMapType.tileSize">
<td itemprop="property"><code><a class="secret-link" href="#ImageMapType.tileSize"><span>tileSize</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="Size.md">Size</a></code></div>
<div class="desc"></div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="details responsive" summary="class ImageMapType - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="ImageMapType.tilesloaded">
<td itemprop="property"><code><a class="secret-link" href="#ImageMapType.tilesloaded"><span>tilesloaded</span></a></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the visible tiles have finished loading.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
