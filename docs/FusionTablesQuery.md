
<h2 id="FusionTablesQuery">FusionTablesQuery interface</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">FusionTablesQuery</span></code>
interface
</p>
<p>Specifies the data to retrieve from a Fusion Tables.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface FusionTablesQuery - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="FusionTablesQuery.from">
<td itemprop="property"><code><a class="secret-link" href="#FusionTablesQuery.from"><span>from</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The ID of the Fusion Tables table to display. This ID can be found in the table's URL, as the value of the <code>dsrcid</code> parameter. Required.</div></td>
</tr>
<tr id="FusionTablesQuery.limit">
<td itemprop="property"><code><a class="secret-link" href="#FusionTablesQuery.limit"><span>limit</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">Limit on the number of results returned by the query.</div></td>
</tr>
<tr id="FusionTablesQuery.offset">
<td itemprop="property"><code><a class="secret-link" href="#FusionTablesQuery.offset"><span>offset</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">Offset into the sorted results.</div></td>
</tr>
<tr id="FusionTablesQuery.orderBy">
<td itemprop="property"><code><a class="secret-link" href="#FusionTablesQuery.orderBy"><span>orderBy</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The method by which to sort the results. Accepts either of: <ul> <li> A column name. The column name may be suffixed with <code>ASC</code> or <code>DESC</code> (e.g. <code>col2 DESC</code>) to specify ascending or descending sort. </li> <li> An <code>ST_DISTANCE</code> spatial relationship (sort by distance). A column and the coordinate from which to calculate distance must be passed, for example, <code>orderBy: 'ST_DISTANCE(col1, LATLNG(1.2, 3.4))'</code>. </li> </ul></div></td>
</tr>
<tr id="FusionTablesQuery.select">
<td itemprop="property"><code><a class="secret-link" href="#FusionTablesQuery.select"><span>select</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">A column, containing geographic features to be displayed on the map. See <a href="https://developers.google.com/maps/documentation/javascript/fusiontableslayer#fusion_table_setup"> Fusion Tables Setup</a> in the Maps API documentation for information about valid columns.</div></td>
</tr>
<tr id="FusionTablesQuery.where">
<td itemprop="property"><code><a class="secret-link" href="#FusionTablesQuery.where"><span>where</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The SQL predicate to be applied to the layer.</div></td>
</tr>
</tbody>
</table></div>
