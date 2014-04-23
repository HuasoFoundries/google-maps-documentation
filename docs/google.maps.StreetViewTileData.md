<h2 id="StreetViewTileData">
google.maps.StreetViewTileData
object specification
</h2><p>The properties of the tile set used in a Street View panorama.</p><h3>Methods</h3><table summary="interface StreetViewTileData - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getTileUrl(pano:string, tileZoom:number, tileX:number, tileY:number)</code></td>
<td><code>string</code></td>
<td>Gets the tile image URL for the specified tile.<br> <code>pano</code> is the panorama ID of the Street View tile.<br> <code>tileZoom</code> is the zoom level of the tile.<br> <code>tileX</code> is the x-coordinate of the tile.<br> <code>tileY</code> is the y-coordinate of the tile.<br> Returns the URL for the tile image.<br></td>
</tr>
</tbody>
</table><h3>Properties</h3><table summary="interface StreetViewTileData - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>centerHeading</code></td>
<td><code>number</code></td>
<td>The heading (in degrees) at the center of the panoramic tiles.</td>
</tr>
<tr>
<td><code>tileSize</code></td>
<td><code><a href="#Size">Size</a></code></td>
<td>The size (in pixels) at which tiles will be rendered.</td>
</tr>
<tr>
<td><code>worldSize</code></td>
<td><code><a href="#Size">Size</a></code></td>
<td>The size (in pixels) of the whole panorama's "world".</td>
</tr>
</tbody>
</table>