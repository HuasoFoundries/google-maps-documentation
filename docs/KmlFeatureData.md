<h2 id="KmlFeatureData">
KmlFeatureData
object specification
</h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">KmlFeatureData</span></code>
object specification
</p><p>Data for a single KML feature in JSON format, returned when a KML feature is clicked. The data contained in this object mirrors that associated with the feature in the KML or GeoRSS markup in which it is declared.</p><table class="properties responsive" summary="object KmlFeatureData - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code>author</code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/KmlAuthor.md">KmlAuthor</a></code></div>
<div class="desc">The feature's <code>&lt;atom:author&gt;</code>, extracted from the layer markup (if specified).</div></td>
</tr>
<tr>
<td><code>description</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The feature's <code>&lt;description&gt;</code>, extracted from the layer markup.</div></td>
</tr>
<tr>
<td><code>id</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The feature's <code>&lt;id&gt;</code>, extracted from the layer markup. If no <code>&lt;id&gt;</code> has been specified, a unique ID will be generated for this feature.</div></td>
</tr>
<tr>
<td><code>infoWindowHtml</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The feature's balloon styled text, if set.</div></td>
</tr>
<tr>
<td><code>name</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The feature's <code>&lt;name&gt;</code>, extracted from the layer markup.</div></td>
</tr>
<tr>
<td><code>snippet</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The feature's <code>&lt;Snippet&gt;</code>, extracted from the layer markup.</div></td>
</tr>
</tbody>
</table>