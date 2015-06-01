<h2 id="StreetViewTileData"> StreetViewTileData object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">StreetViewTileData</span></code>
object specification
</p><p>The properties of the tile set used in a Street View panorama.</p><div class="devsite-table-wrapper"><table class="methods responsive" summary="interface StreetViewTileData - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>getTileUrl(<wbr>pano:string,<wbr> tileZoom:number,<wbr> tileX:number,<wbr> tileY:number)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Gets the tile image URL for the specified tile.<br> <code>pano</code> is the panorama ID of the Street View tile.<br> <code>tileZoom</code> is the zoom level of the tile.<br> <code>tileX</code> is the x-coordinate of the tile.<br> <code>tileY</code> is the y-coordinate of the tile.<br> Returns the URL for the tile image.<br></div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface StreetViewTileData - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>centerHeading</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The heading (in degrees) at the center of the panoramic tiles.</div></td>
</tr>
<tr>
<td><code><span>tileSize</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Size.md">Size</a></code></div>
<div class="desc">The size (in pixels) at which tiles will be rendered.</div></td>
</tr>
<tr>
<td><code><span>worldSize</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Size.md">Size</a></code></div>
<div class="desc">The size (in pixels) of the whole panorama's "world".</div></td>
</tr>
</tbody>
</table></div>