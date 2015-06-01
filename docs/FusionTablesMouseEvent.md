<h2 id="FusionTablesMouseEvent"> FusionTablesMouseEvent object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">FusionTablesMouseEvent</span></code>
object specification
</p><p>The properties of a mouse event on a <code>FusionTablesLayer</code>.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface FusionTablesMouseEvent - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>infoWindowHtml</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Pre-rendered HTML content, as placed in the infowindow by the default UI.</div></td>
</tr>
<tr>
<td><code><span>latLng</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc">The position at which to anchor an infowindow on the clicked feature.</div></td>
</tr>
<tr>
<td><code><span>pixelOffset</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Size.md">Size</a></code></div>
<div class="desc">The offset to apply to an infowindow anchored on the clicked feature.</div></td>
</tr>
<tr>
<td><code><span>row</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Object&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/FusionTablesCell.md">FusionTablesCell</a>&gt;</code></div>
<div class="desc">A collection of <code>FusionTablesCell</code> objects, indexed by column name, representing the contents of the table row which included the clicked feature.</div></td>
</tr>
</tbody>
</table></div>