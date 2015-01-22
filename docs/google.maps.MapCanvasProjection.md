<h2 id="MapCanvasProjection">
google.maps.MapCanvasProjection
object specification
</h2><p>This object is made available to the <code>OverlayView</code> from within the draw method. It is not guaranteed to be initialized until draw is called.</p><p>This object extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCObject.md">MVCObject</a></code>.
</p><h3 id="devsite_header_96">Methods</h3><table summary="object MapCanvasProjection - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>fromContainerPixelToLatLng(pixel:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Point.md">Point</a>, nowrap?:boolean)</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a></code></td>
<td>Computes the geographical coordinates from pixel coordinates in the map's container.</td>
</tr>
<tr>
<td><code>fromDivPixelToLatLng(pixel:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Point.md">Point</a>, nowrap?:boolean)</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a></code></td>
<td>Computes the geographical coordinates from pixel coordinates in the div that holds the draggable map.</td>
</tr>
<tr>
<td><code>fromLatLngToContainerPixel(latLng:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>)</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Point.md">Point</a></code></td>
<td>Computes the pixel coordinates of the given geographical location in the map's container element.</td>
</tr>
<tr>
<td><code>fromLatLngToDivPixel(latLng:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>)</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Point.md">Point</a></code></td>
<td>Computes the pixel coordinates of the given geographical location in the DOM element that holds the draggable map.</td>
</tr>
<tr>
<td><code>getWorldWidth()</code></td>
<td><code>number</code></td>
<td>The width of the world in pixels in the current zoom level. For projections with a heading angle of either 90 or 270 degrees, this corresponds to the pixel span in the Y-axis.</td>
</tr>
</tbody>
</table>