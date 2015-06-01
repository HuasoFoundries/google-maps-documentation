<h2 id="FusionTablesStyle"> FusionTablesStyle object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">FusionTablesStyle</span></code>
object specification
</p><p>Controls the appearance of a set of features within a <code>FusionTablesLayer</code>. Features which match the provided SQL predicate will be styled with the supplied options.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="object FusionTablesStyle - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>markerOptions</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/FusionTablesMarkerOptions.md">FusionTablesMarkerOptions</a></code></div>
<div class="desc">Options which control the appearance of point features.</div></td>
</tr>
<tr>
<td><code><span>polygonOptions</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/FusionTablesPolygonOptions.md">FusionTablesPolygonOptions</a></code></div>
<div class="desc">Options which control the appearance of polygons.</div></td>
</tr>
<tr>
<td><code><span>polylineOptions</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/FusionTablesPolylineOptions.md">FusionTablesPolylineOptions</a></code></div>
<div class="desc">Options which control the appearance of polylines.</div></td>
</tr>
<tr>
<td><code><span>where</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The SQL predicate to be applied to the layer.</div></td>
</tr>
</tbody>
</table></div>