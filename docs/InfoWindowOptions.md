
<h2 id="InfoWindowOptions">InfoWindowOptions interface</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">InfoWindowOptions</span></code>
interface
</p>
<p>InfoWindowOptions object used to define the properties that can be set on a InfoWindow.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface InfoWindowOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="InfoWindowOptions.content">
<td itemprop="property"><code><a class="secret-link" href="#InfoWindowOptions.content"><span>content</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string|Node <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Content to display in the InfoWindow. This can be an HTML element, a plain-text string, or a string containing HTML. The InfoWindow will be sized according to the content. To set an explicit size for the content, set content to be a HTML element with that size.</div></td>
</tr>
<tr id="InfoWindowOptions.disableAutoPan">
<td itemprop="property"><code><a class="secret-link" href="#InfoWindowOptions.disableAutoPan"><span>disableAutoPan</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Disable auto-pan on open. By default, the info window will pan the map so that it is fully visible when it opens.</div></td>
</tr>
<tr id="InfoWindowOptions.maxWidth">
<td itemprop="property"><code><a class="secret-link" href="#InfoWindowOptions.maxWidth"><span>maxWidth</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Maximum width of the infowindow, regardless of content's width. This value is only considered if it is set before a call to open. To change the maximum width when changing content, call close, setOptions, and then open.</div></td>
</tr>
<tr id="InfoWindowOptions.pixelOffset">
<td itemprop="property"><code><a class="secret-link" href="#InfoWindowOptions.pixelOffset"><span>pixelOffset</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="Size.md">Size</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The offset, in pixels, of the tip of the info window from the point on the map at whose geographical coordinates the info window is anchored. If an InfoWindow is opened with an anchor, the <code>pixelOffset</code> will be calculated from the anchor's <code>anchorPoint</code> property.</div></td>
</tr>
<tr id="InfoWindowOptions.position">
<td itemprop="property"><code><a class="secret-link" href="#InfoWindowOptions.position"><span>position</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The LatLng at which to display this InfoWindow. If the InfoWindow is opened with an anchor, the anchor's position will be used instead.</div></td>
</tr>
<tr id="InfoWindowOptions.zIndex">
<td itemprop="property"><code><a class="secret-link" href="#InfoWindowOptions.zIndex"><span>zIndex</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">All InfoWindows are displayed on the map in order of their zIndex, with higher values displaying in front of InfoWindows with lower values. By default, InfoWindows are displayed according to their latitude, with InfoWindows of lower latitudes appearing in front of InfoWindows at higher latitudes. InfoWindows are always displayed in front of markers.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
