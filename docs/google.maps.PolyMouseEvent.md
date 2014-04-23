<h2 id="PolyMouseEvent">
google.maps.PolyMouseEvent
object specification
</h2><p>This object is returned from mouse events on polylines and polygons.</p><p>This object extends
<code><a href="#MouseEvent">MouseEvent</a></code>.
</p><h3>Properties</h3><table summary="object PolyMouseEvent - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>edge</code></td>
<td><code>number</code></td>
<td>The index of the edge within the path beneath the cursor when the event occurred, if the event occurred on a mid-point on an editable polygon.</td>
</tr>
<tr>
<td><code>path</code></td>
<td><code>number</code></td>
<td>The index of the path beneath the cursor when the event occurred, if the event occurred on a vertex and the polygon is editable. Otherwise undefined.</td>
</tr>
<tr>
<td><code>vertex</code></td>
<td><code>number</code></td>
<td>The index of the vertex beneath the cursor when the event occurred, if the event occurred on a vertex and the polyline or polygon is editable. If the event does not occur on a vertex, the value is undefined.</td>
</tr>
</tbody>
</table>