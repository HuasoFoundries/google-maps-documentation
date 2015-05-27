<h2 id="MapPanes">
google.maps.MapPanes
object specification
</h2><p>This object contains the DOM elements in which overlays are rendered. They are listed below with 'Pane 0' at the bottom and 'Pane 4' at the top.</p><h3>Properties</h3><table summary="object MapPanes - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>floatPane</code></td>
<td><code>Node</code></td>
<td>This pane contains the info window. It is above all map overlays. (Pane 4).</td>
</tr>
<tr>
<td><code>mapPane</code></td>
<td><code>Node</code></td>
<td>This pane is the lowest pane and is above the tiles. It may not receive DOM events. (Pane 0).</td>
</tr>
<tr>
<td><code>markerLayer</code></td>
<td><code>Node</code></td>
<td>This pane contains markers. It may not receive DOM events. (Pane 2).</td>
</tr>
<tr>
<td><code>overlayLayer</code></td>
<td><code>Node</code></td>
<td>This pane contains polylines, polygons, ground overlays and tile layer overlays. It may not receive DOM events. (Pane 1).</td>
</tr>
<tr>
<td><code>overlayMouseTarget</code></td>
<td><code>Node</code></td>
<td>This pane contains elements that receive DOM events. (Pane 3).</td>
</tr>
</tbody>
</table>