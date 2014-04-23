<h2 id="MapType">
google.maps.MapType
object specification
</h2><p>This interface defines the map type, and is typically used for custom map types. Immutable.</p><h3>Methods</h3><table summary="interface MapType - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getTile(tileCoord:<a href="#Point">Point</a>, zoom:number, ownerDocument:Document)</code></td>
<td><code>Node</code></td>
<td>Returns a tile for the given tile coordinate (x, y) and zoom level. This tile will be appended to the given ownerDocument. Not available for base map types.</td>
</tr>
<tr>
<td><code>releaseTile(tile:Node)</code></td>
<td><code>None</code></td>
<td>Releases the given tile, performing any necessary cleanup. The provided tile will have already been removed from the document. Optional.</td>
</tr>
</tbody>
</table><h3>Properties</h3><table summary="interface MapType - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>alt</code></td>
<td><code>string</code></td>
<td>Alt text to display when this MapType's button is hovered over in the MapTypeControl. Optional.</td>
</tr>
<tr>
<td><code>maxZoom</code></td>
<td><code>number</code></td>
<td>The maximum zoom level for the map when displaying this MapType. Required for base MapTypes, ignored for overlay MapTypes.</td>
</tr>
<tr>
<td><code>minZoom</code></td>
<td><code>number</code></td>
<td>The minimum zoom level for the map when displaying this MapType. Optional; defaults to 0.</td>
</tr>
<tr>
<td><code>name</code></td>
<td><code>string</code></td>
<td>Name to display in the MapTypeControl. Optional.</td>
</tr>
<tr>
<td><code>projection</code></td>
<td><code><a href="#Projection">Projection</a></code></td>
<td>The Projection used to render this MapType. Optional; defaults to Mercator.</td>
</tr>
<tr>
<td><code>radius</code></td>
<td><code>number</code></td>
<td>Radius of the planet for the map, in meters. Optional; defaults to Earth's equatorial radius of 6378137 meters.</td>
</tr>
<tr>
<td><code>tileSize</code></td>
<td><code><a href="#Size">Size</a></code></td>
<td>The dimensions of each tile. Required.</td>
</tr>
</tbody>
</table>