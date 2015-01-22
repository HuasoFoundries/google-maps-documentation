<h2 id="InfoWindowOptions">
google.maps.InfoWindowOptions
object specification
</h2><h3 id="devsite_header_69">Properties</h3><table summary="interface InfoWindowOptions - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>content</code></td>
<td><code>string|Node</code></td>
<td>Content to display in the InfoWindow. This can be an HTML element, a plain-text string, or a string containing HTML. The InfoWindow will be sized according to the content. To set an explicit size for the content, set content to be a HTML element with that size.</td>
</tr>
<tr>
<td><code>disableAutoPan</code></td>
<td><code>boolean</code></td>
<td>Disable auto-pan on open. By default, the info window will pan the map so that it is fully visible when it opens.</td>
</tr>
<tr>
<td><code>maxWidth</code></td>
<td><code>number</code></td>
<td>Maximum width of the infowindow, regardless of content's width. This value is only considered if it is set before a call to open. To change the maximum width when changing content, call close, setOptions, and then open.</td>
</tr>
<tr>
<td><code>pixelOffset</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Size.md">Size</a></code></td>
<td>The offset, in pixels, of the tip of the info window from the point on the map at whose geographical coordinates the info window is anchored. If an InfoWindow is opened with an anchor, the <code>pixelOffset</code> will be calculated from the anchor's <code>anchorPoint</code> property.</td>
</tr>
<tr>
<td><code>position</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngLiteral.md">LatLngLiteral</a></code></td>
<td>The LatLng at which to display this InfoWindow. If the InfoWindow is opened with an anchor, the anchor's position will be used instead.</td>
</tr>
<tr>
<td><code>zIndex</code></td>
<td><code>number</code></td>
<td>All InfoWindows are displayed on the map in order of their zIndex, with higher values displaying in front of InfoWindows with lower values. By default, InfoWindows are displayed according to their latitude, with InfoWindows of lower latitudes appearing in front of InfoWindows at higher latitudes. InfoWindows are always displayed in front of markers.</td>
</tr>
</tbody>
</table>