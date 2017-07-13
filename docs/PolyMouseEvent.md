<h2 id="PolyMouseEvent"> PolyMouseEvent object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">PolyMouseEvent</span></code>
object specification
</p><p>This object is returned from mouse events on polylines and polygons.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="record PolyMouseEvent - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>edge</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The index of the edge within the path beneath the cursor when the event occurred, if the event occurred on a mid-point on an editable polygon.</div></td>
</tr>
<tr>
<td><code><span>path</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The index of the path beneath the cursor when the event occurred, if the event occurred on a vertex and the polygon is editable. Otherwise undefined.</div></td>
</tr>
<tr>
<td><code><span>vertex</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The index of the vertex beneath the cursor when the event occurred, if the event occurred on a vertex and the polyline or polygon is editable. If the event does not occur on a vertex, the value is undefined.</div></td>
</tr>
</tbody>
</table></div>