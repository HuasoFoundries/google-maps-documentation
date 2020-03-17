
<devsite-heading text=" ImageMapTypeOptions interface" for="ImageMapTypeOptions" level="h2" link="" toc="" back-to-top=""><h2 id="ImageMapTypeOptions" is-upgraded="">ImageMapTypeOptions interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">ImageMapTypeOptions</span></code>
interface
</p>
<p>This class is used to create a MapType that renders image tiles.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface ImageMapTypeOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="ImageMapTypeOptions.alt">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#ImageMapTypeOptions.alt"><span>alt</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Alt text to display when this MapType's button is hovered over in the MapTypeControl.</div></td>
</tr>
<tr id="ImageMapTypeOptions.getTileUrl">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#ImageMapTypeOptions.getTileUrl"><span>getTileUrl</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">function(<a href="Point.md">Point</a>, number): string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Returns a string (URL) for given tile coordinate (x, y) and zoom level.</div></td>
</tr>
<tr id="ImageMapTypeOptions.maxZoom">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#ImageMapTypeOptions.maxZoom"><span>maxZoom</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The maximum zoom level for the map when displaying this MapType.</div></td>
</tr>
<tr id="ImageMapTypeOptions.minZoom">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#ImageMapTypeOptions.minZoom"><span>minZoom</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The minimum zoom level for the map when displaying this MapType. Optional.</div></td>
</tr>
<tr id="ImageMapTypeOptions.name">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#ImageMapTypeOptions.name"><span>name</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Name to display in the MapTypeControl.</div></td>
</tr>
<tr id="ImageMapTypeOptions.opacity">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#ImageMapTypeOptions.opacity"><span>opacity</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The opacity to apply to the tiles. The opacity should be specified as a float value between 0 and 1.0, where 0 is fully transparent and 1 is fully opaque.</div></td>
</tr>
<tr id="ImageMapTypeOptions.tileSize">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#ImageMapTypeOptions.tileSize"><span>tileSize</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Size.md">Size</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The tile size.</div></td>
</tr>
</tbody>
</table></div>
