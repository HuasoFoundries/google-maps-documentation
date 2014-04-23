<h2 id="KmlFeatureData">
google.maps.KmlFeatureData
object specification
</h2><p>Data for a single KML feature in JSON format, returned when a KML feature is clicked. The data contained in this object mirrors that associated with the feature in the KML or GeoRSS markup in which it is declared.</p><h3>Properties</h3><table summary="object KmlFeatureData - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>author</code></td>
<td><code><a href="#KmlAuthor">KmlAuthor</a></code></td>
<td>The feature's <code>&lt;atom:author&gt;</code>, extracted from the layer markup (if specified).</td>
</tr>
<tr>
<td><code>description</code></td>
<td><code>string</code></td>
<td>The feature's <code>&lt;description&gt;</code>, extracted from the layer markup.</td>
</tr>
<tr>
<td><code>id</code></td>
<td><code>string</code></td>
<td>The feature's <code>&lt;id&gt;</code>, extracted from the layer markup. If no <code>&lt;id&gt;</code> has been specified, a unique ID will be generated for this feature.</td>
</tr>
<tr>
<td><code>infoWindowHtml</code></td>
<td><code>string</code></td>
<td>The feature's balloon styled text, if set.</td>
</tr>
<tr>
<td><code>name</code></td>
<td><code>string</code></td>
<td>The feature's <code>&lt;name&gt;</code>, extracted from the layer markup.</td>
</tr>
<tr>
<td><code>snippet</code></td>
<td><code>string</code></td>
<td>The feature's <code>&lt;Snippet&gt;</code>, extracted from the layer markup.</td>
</tr>
</tbody>
</table>