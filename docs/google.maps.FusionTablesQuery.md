<h2 id="FusionTablesQuery">
google.maps.FusionTablesQuery
object specification
</h2><p>Specifies the data to retrieve from a Fusion Tables.</p><h3 id="devsite_header_181">Properties</h3><table summary="object FusionTablesQuery - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>from</code></td>
<td><code>string</code></td>
<td>The ID of the Fusion Tables table to display. This ID can be found in the table's URL, as the value of the <code>dsrcid</code> parameter. Required.</td>
</tr>
<tr>
<td><code>limit</code></td>
<td><code>number</code></td>
<td>Limit on the number of results returned by the query.</td>
</tr>
<tr>
<td><code>offset</code></td>
<td><code>number</code></td>
<td>Offset into the sorted results.</td>
</tr>
<tr>
<td><code>orderBy</code></td>
<td><code>string</code></td>
<td>The method by which to sort the results. Accepts either of: <ul> <li> A column name. The column name may be suffixed with <code>ASC</code> or <code>DESC</code> (e.g. <code>col2 DESC</code>) to specify ascending or descending sort. </li> <li> An <code>ST_DISTANCE</code> spatial relationship (sort by distance). A column and the coordinate from which to calculate distance must be passed, for example, <code>orderBy: 'ST_DISTANCE(col1, LATLNG(1.2, 3.4))'</code>. </li> </ul></td>
</tr>
<tr>
<td><code>select</code></td>
<td><code>string</code></td>
<td>A column, containing geographic features to be displayed on the map. See <a href="/maps/documentation/javascript/layers#FusionTablesSetup"> Fusion Tables Setup</a> in the Maps API documentation for information about valid columns.</td>
</tr>
<tr>
<td><code>where</code></td>
<td><code>string</code></td>
<td>The SQL predicate to be applied to the layer.</td>
</tr>
</tbody>
</table>