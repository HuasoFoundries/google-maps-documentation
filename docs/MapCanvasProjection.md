<h2 id="MapCanvasProjection"> MapCanvasProjection object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">MapCanvasProjection</span></code>
object specification
</p><p>This object is made available to the <code>OverlayView</code> from within the draw method. It is not guaranteed to be initialized until draw is called.</p><p>This object extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><div class="devsite-table-wrapper"><table class="methods responsive" summary="object MapCanvasProjection - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>fromContainerPixelToLatLng(<wbr>pixel:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Point.md"><span>Point</span></a><span>,<wbr> nowrap?:boolean)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc">Computes the geographical coordinates from pixel coordinates in the map's container.</div></td>
</tr>
<tr>
<td><code><span>fromDivPixelToLatLng(<wbr>pixel:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Point.md"><span>Point</span></a><span>,<wbr> nowrap?:boolean)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc">Computes the geographical coordinates from pixel coordinates in the div that holds the draggable map.</div></td>
</tr>
<tr>
<td><code><span>fromLatLngToContainerPixel(<wbr>latLng:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Point.md">Point</a></code></div>
<div class="desc">Computes the pixel coordinates of the given geographical location in the map's container element.</div></td>
</tr>
<tr>
<td><code><span>fromLatLngToDivPixel(<wbr>latLng:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Point.md">Point</a></code></div>
<div class="desc">Computes the pixel coordinates of the given geographical location in the DOM element that holds the draggable map.</div></td>
</tr>
<tr>
<td><code><span>getWorldWidth()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">The width of the world in pixels in the current zoom level. For projections with a heading angle of either 90 or 270 degrees, this corresponds to the pixel span in the Y-axis.</div></td>
</tr>
</tbody>
</table></div>