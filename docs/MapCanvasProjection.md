
<h2 id="MapCanvasProjection">MapCanvasProjection interface</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">MapCanvasProjection</span></code>
interface
</p>
<p>This object is made available to the <code>OverlayView</code> from within the draw method. It is not guaranteed to be initialized until draw is called.</p>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="interface MapCanvasProjection - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="MapCanvasProjection.fromContainerPixelToLatLng">
<td itemprop="property"><code><a class="secret-link" href="#MapCanvasProjection.fromContainerPixelToLatLng"><span>fromContainerPixelToLatLng</span></a></code></td>
<td><div><code>fromContainerPixelToLatLng(pixel[, nowrap])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>pixel</code>:&nbsp; <code><a href="Point.md">Point</a></code></li>
<li><code>nowrap</code> (optional):&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="LatLng.md">LatLng</a></code></div>
<div class="desc">Computes the geographical coordinates from pixel coordinates in the map's container.</div></td>
</tr>
<tr id="MapCanvasProjection.fromDivPixelToLatLng">
<td itemprop="property"><code><a class="secret-link" href="#MapCanvasProjection.fromDivPixelToLatLng"><span>fromDivPixelToLatLng</span></a></code></td>
<td><div><code>fromDivPixelToLatLng(pixel[, nowrap])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>pixel</code>:&nbsp; <code><a href="Point.md">Point</a></code></li>
<li><code>nowrap</code> (optional):&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="LatLng.md">LatLng</a></code></div>
<div class="desc">Computes the geographical coordinates from pixel coordinates in the div that holds the draggable map.</div></td>
</tr>
<tr id="MapCanvasProjection.fromLatLngToContainerPixel">
<td itemprop="property"><code><a class="secret-link" href="#MapCanvasProjection.fromLatLngToContainerPixel"><span>fromLatLngToContainerPixel</span></a></code></td>
<td><div><code>fromLatLngToContainerPixel(latLng)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>latLng</code>:&nbsp; <code><a href="LatLng.md">LatLng</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="Point.md">Point</a></code></div>
<div class="desc">Computes the pixel coordinates of the given geographical location in the map's container element.</div></td>
</tr>
<tr id="MapCanvasProjection.fromLatLngToDivPixel">
<td itemprop="property"><code><a class="secret-link" href="#MapCanvasProjection.fromLatLngToDivPixel"><span>fromLatLngToDivPixel</span></a></code></td>
<td><div><code>fromLatLngToDivPixel(latLng)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>latLng</code>:&nbsp; <code><a href="LatLng.md">LatLng</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="Point.md">Point</a></code></div>
<div class="desc">Computes the pixel coordinates of the given geographical location in the DOM element that holds the draggable map.</div></td>
</tr>
<tr id="MapCanvasProjection.getWorldWidth">
<td itemprop="property"><code><a class="secret-link" href="#MapCanvasProjection.getWorldWidth"><span>getWorldWidth</span></a></code></td>
<td><div><code>getWorldWidth()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">The width of the world in pixels in the current zoom level. For projections with a heading angle of either 90 or 270 degrees, this corresponds to the pixel span in the Y-axis.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
