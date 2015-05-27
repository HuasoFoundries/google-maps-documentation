<h2 id="MapType">
MapType
object specification
</h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">MapType</span></code>
object specification
</p><p>This interface defines the map type, and is typically used for custom map types. Immutable.</p><table class="methods responsive" summary="interface MapType - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code>getTile(tileCoord:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Point.md">Point</a>, zoom:number, ownerDocument:Document)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>Node</code></div>
<div class="desc">Returns a tile for the given tile coordinate (x, y) and zoom level. This tile will be appended to the given ownerDocument. Not available for base map types.</div></td>
</tr>
<tr>
<td><code>releaseTile(tile:Node)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Releases the given tile, performing any necessary cleanup. The provided tile will have already been removed from the document. Optional.</div></td>
</tr>
</tbody>
</table><table class="properties responsive" summary="interface MapType - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code>alt</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Alt text to display when this MapType's button is hovered over in the MapTypeControl. Optional.</div></td>
</tr>
<tr>
<td><code>maxZoom</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The maximum zoom level for the map when displaying this MapType. Required for base MapTypes, ignored for overlay MapTypes.</div></td>
</tr>
<tr>
<td><code>minZoom</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The minimum zoom level for the map when displaying this MapType. Optional; defaults to 0.</div></td>
</tr>
<tr>
<td><code>name</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Name to display in the MapTypeControl. Optional.</div></td>
</tr>
<tr>
<td><code>projection</code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Projection.md">Projection</a></code></div>
<div class="desc">The Projection used to render this MapType. Optional; defaults to Mercator.</div></td>
</tr>
<tr>
<td><code>radius</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">Radius of the planet for the map, in meters. Optional; defaults to Earth's equatorial radius of 6378137 meters.</div></td>
</tr>
<tr>
<td><code>tileSize</code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Size.md">Size</a></code></div>
<div class="desc">The dimensions of each tile. Required.</div></td>
</tr>
</tbody>
</table>