<h2 id="FusionTablesStyle">
google.maps.FusionTablesStyle
object specification
</h2><p>Controls the appearance of a set of features within a <code>FusionTablesLayer</code>. Features which match the provided SQL predicate will be styled with the supplied options.</p><h3>Properties</h3><table summary="object FusionTablesStyle - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>markerOptions</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.FusionTablesMarkerOptions.md">FusionTablesMarkerOptions</a></code></td>
<td>Options which control the appearance of point features.</td>
</tr>
<tr>
<td><code>polygonOptions</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.FusionTablesPolygonOptions.md">FusionTablesPolygonOptions</a></code></td>
<td>Options which control the appearance of polygons.</td>
</tr>
<tr>
<td><code>polylineOptions</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.FusionTablesPolylineOptions.md">FusionTablesPolylineOptions</a></code></td>
<td>Options which control the appearance of polylines.</td>
</tr>
<tr>
<td><code>where</code></td>
<td><code>string</code></td>
<td>The SQL predicate to be applied to the layer.</td>
</tr>
</tbody>
</table>