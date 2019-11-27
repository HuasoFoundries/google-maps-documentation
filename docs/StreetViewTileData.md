
<devsite-heading text=" StreetViewTileData interface" for="StreetViewTileData" level="h2" link="" toc="" back-to-top=""><h2 id="StreetViewTileData" is-upgraded="">StreetViewTileData interface </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">StreetViewTileData</span></code>
interface
</p>
<p>The properties of the tile set used in a Street View panorama.</p>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="interface StreetViewTileData - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="StreetViewTileData.getTileUrl">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewTileData.getTileUrl"><span>getTileUrl</span></a></code></td>
<td><div><code translate="no" dir="ltr">getTileUrl(pano, tileZoom, tileX, tileY)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">pano</code>:&nbsp; <code translate="no" dir="ltr">string</code></li>
<li><code translate="no" dir="ltr">tileZoom</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
<li><code translate="no" dir="ltr">tileX</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
<li><code translate="no" dir="ltr">tileY</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">Gets the tile image URL for the specified tile.<br> This is a custom method which you must implement, to supply your custom tiles. The API calls this method, supplying the following parameters:<br> <code translate="no" dir="ltr">pano</code> is the panorama ID of the Street View tile.<br> <code translate="no" dir="ltr">tileZoom</code> is the zoom level of the tile.<br> <code translate="no" dir="ltr">tileX</code> is the x-coordinate of the tile.<br> <code translate="no" dir="ltr">tileY</code> is the y-coordinate of the tile.<br> Your custom method must return the URL for the tile image.<br></div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface StreetViewTileData - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="StreetViewTileData.centerHeading">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewTileData.centerHeading"><span>centerHeading</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">The heading (in degrees) at the center of the panoramic tiles.</div></td>
</tr>
<tr id="StreetViewTileData.tileSize">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewTileData.tileSize"><span>tileSize</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Size.md">Size</a></code></div>
<div class="desc">The size (in pixels) at which tiles will be rendered.</div></td>
</tr>
<tr id="StreetViewTileData.worldSize">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewTileData.worldSize"><span>worldSize</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Size.md">Size</a></code></div>
<div class="desc">The size (in pixels) of the whole panorama's "world".</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
