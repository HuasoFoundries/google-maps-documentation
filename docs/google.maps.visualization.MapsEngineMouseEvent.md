<h2 id="MapsEngineMouseEvent">
google.maps.visualization.MapsEngineMouseEvent
object specification
</h2><p>The properties of a mouse event on a <code>MapsEngineLayer</code>.</p><h3 id="devsite_header_364">Library</h3><p>visualization</p><h3 id="devsite_header_365">Properties</h3><table summary="interface MapsEngineMouseEvent - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>featureId</code></td>
<td><code>string</code></td>
<td>The feature ID, guaranteed to be unique within the layer.</td>
</tr>
<tr>
<td><code>infoWindowHtml</code></td>
<td><code>string</code></td>
<td>Pre-rendered HTML content, as placed in the infowindow by the default UI.</td>
</tr>
<tr>
<td><code>latLng</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a></code></td>
<td>The position at which to anchor an infowindow on the clicked feature.</td>
</tr>
<tr>
<td><code>pixelOffset</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Size.md">Size</a></code></td>
<td>The offset to apply to an infowindow anchored on the clicked feature.</td>
</tr>
</tbody>
</table>