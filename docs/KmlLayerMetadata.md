<h2 id="KmlLayerMetadata">
KmlLayerMetadata
object specification
</h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">KmlLayerMetadata</span></code>
object specification
</p><p>Metadata for a single KML layer, in JSON format.</p><table class="properties responsive" summary="object KmlLayerMetadata - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code>author</code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/KmlAuthor.md">KmlAuthor</a></code></div>
<div class="desc">The layer's <code>&lt;atom:author&gt;</code>, extracted from the layer markup.</div></td>
</tr>
<tr>
<td><code>description</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The layer's <code>&lt;description&gt;</code>, extracted from the layer markup.</div></td>
</tr>
<tr>
<td><code>hasScreenOverlays</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Whether the layer has any screen overlays.</div></td>
</tr>
<tr>
<td><code>name</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The layer's <code>&lt;name&gt;</code>, extracted from the layer markup.</div></td>
</tr>
<tr>
<td><code>snippet</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The layer's <code>&lt;Snippet&gt;</code>, extracted from the layer markup</div></td>
</tr>
</tbody>
</table>