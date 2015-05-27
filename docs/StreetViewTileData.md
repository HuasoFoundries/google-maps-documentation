<h2 id="StreetViewTileData">
StreetViewTileData
object specification
</h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">StreetViewTileData</span></code>
object specification
</p><p>The properties of the tile set used in a Street View panorama.</p><table class="methods responsive" summary="interface StreetViewTileData - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code>getTileUrl(pano:string, tileZoom:number, tileX:number, tileY:number)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Gets the tile image URL for the specified tile.<br> <code>pano</code> is the panorama ID of the Street View tile.<br> <code>tileZoom</code> is the zoom level of the tile.<br> <code>tileX</code> is the x-coordinate of the tile.<br> <code>tileY</code> is the y-coordinate of the tile.<br> Returns the URL for the tile image.<br></div></td>
</tr>
</tbody>
</table><table class="properties responsive" summary="interface StreetViewTileData - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code>centerHeading</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The heading (in degrees) at the center of the panoramic tiles.</div></td>
</tr>
<tr>
<td><code>tileSize</code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Size.md">Size</a></code></div>
<div class="desc">The size (in pixels) at which tiles will be rendered.</div></td>
</tr>
<tr>
<td><code>worldSize</code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Size.md">Size</a></code></div>
<div class="desc">The size (in pixels) of the whole panorama's "world".</div></td>
</tr>
</tbody>
</table>