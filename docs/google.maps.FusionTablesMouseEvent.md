<h2 id="FusionTablesMouseEvent">
google.maps.FusionTablesMouseEvent
object specification
</h2><p>The properties of a mouse event on a <code>FusionTablesLayer</code>.</p><h3>Properties</h3><table summary="interface FusionTablesMouseEvent - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
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
<tr>
<td><code>row</code></td>
<td><code>Object&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.FusionTablesCell.md">FusionTablesCell</a>&gt;</code></td>
<td>A collection of <code>FusionTablesCell</code> objects, indexed by column name, representing the contents of the table row which included the clicked feature.</td>
</tr>
</tbody>
</table>