
<h2 id="MapType">MapType interface</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">MapType</span></code>
interface
</p>
<p>This interface defines the map type, and is typically used for custom map types. Immutable.</p>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="interface MapType - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="MapType.getTile">
<td itemprop="property"><code><a class="secret-link" href="#MapType.getTile"><span>getTile</span></a></code></td>
<td><div><code>getTile(tileCoord, zoom, ownerDocument)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>tileCoord</code>:&nbsp; <code><a href="Point.md">Point</a></code></li>
<li><code>zoom</code>:&nbsp; <code>number</code></li>
<li><code>ownerDocument</code>:&nbsp; <code>Document</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>Node</code></div>
<div class="desc">Returns a tile for the given tile coordinate (x, y) and zoom level. This tile will be appended to the given ownerDocument. Not available for base map types.</div></td>
</tr>
<tr id="MapType.releaseTile">
<td itemprop="property"><code><a class="secret-link" href="#MapType.releaseTile"><span>releaseTile</span></a></code></td>
<td><div><code>releaseTile(tile)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>tile</code>:&nbsp; <code>Node</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Releases the given tile, performing any necessary cleanup. The provided tile will have already been removed from the document. Optional.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface MapType - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="MapType.alt">
<td itemprop="property"><code><a class="secret-link" href="#MapType.alt"><span>alt</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Alt text to display when this MapType's button is hovered over in the MapTypeControl. Optional.</div></td>
</tr>
<tr id="MapType.maxZoom">
<td itemprop="property"><code><a class="secret-link" href="#MapType.maxZoom"><span>maxZoom</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The maximum zoom level for the map when displaying this MapType. Required for base MapTypes, ignored for overlay MapTypes.</div></td>
</tr>
<tr id="MapType.minZoom">
<td itemprop="property"><code><a class="secret-link" href="#MapType.minZoom"><span>minZoom</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The minimum zoom level for the map when displaying this MapType. Optional; defaults to 0.</div></td>
</tr>
<tr id="MapType.name">
<td itemprop="property"><code><a class="secret-link" href="#MapType.name"><span>name</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Name to display in the MapTypeControl. Optional.</div></td>
</tr>
<tr id="MapType.projection">
<td itemprop="property"><code><a class="secret-link" href="#MapType.projection"><span>projection</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="Projection.md">Projection</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The Projection used to render this MapType. Optional; defaults to Mercator.</div></td>
</tr>
<tr id="MapType.radius">
<td itemprop="property"><code><a class="secret-link" href="#MapType.radius"><span>radius</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">Radius of the planet for the map, in meters. Optional; defaults to Earth's equatorial radius of 6378137 meters.</div></td>
</tr>
<tr id="MapType.tileSize">
<td itemprop="property"><code><a class="secret-link" href="#MapType.tileSize"><span>tileSize</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="Size.md">Size</a></code></div>
<div class="desc">The dimensions of each tile. Required.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
