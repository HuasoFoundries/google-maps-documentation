<h2 id="MapPanes"> MapPanes object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">MapPanes</span></code>
object specification
</p><p>This object contains the DOM elements in which overlays are rendered. They are listed below with 'Pane 0' at the bottom and 'Pane 4' at the top.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="object MapPanes - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>floatPane</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Element</code></div>
<div class="desc">This pane contains the info window. It is above all map overlays. (Pane 4).</div></td>
</tr>
<tr>
<td><code><span>mapPane</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Element</code></div>
<div class="desc">This pane is the lowest pane and is above the tiles. It may not receive DOM events. (Pane 0).</div></td>
</tr>
<tr>
<td><code><span>markerLayer</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Element</code></div>
<div class="desc">This pane contains markers. It may not receive DOM events. (Pane 2).</div></td>
</tr>
<tr>
<td><code><span>overlayLayer</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Element</code></div>
<div class="desc">This pane contains polylines, polygons, ground overlays and tile layer overlays. It may not receive DOM events. (Pane 1).</div></td>
</tr>
<tr>
<td><code><span>overlayMouseTarget</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Element</code></div>
<div class="desc">This pane contains elements that receive DOM events. (Pane 3).</div></td>
</tr>
</tbody>
</table></div>