
<devsite-heading text=" PolyMouseEvent interface" for="PolyMouseEvent" level="h2" link="" toc="" back-to-top=""><h2 id="PolyMouseEvent" is-upgraded="">PolyMouseEvent interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">PolyMouseEvent</span></code>
interface
</p>
<p>This object is returned from mouse events on polylines and polygons.</p>
<p>This interface extends
<code translate="no" dir="ltr"><a href="MouseEvent.md">MouseEvent</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface PolyMouseEvent - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="PolyMouseEvent.edge">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PolyMouseEvent.edge"><span>edge</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">The index of the edge within the path beneath the cursor when the event occurred, if the event occurred on a mid-point on an editable polygon.</div></td>
</tr>
<tr id="PolyMouseEvent.path">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PolyMouseEvent.path"><span>path</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">The index of the path beneath the cursor when the event occurred, if the event occurred on a vertex and the polygon is editable. Otherwise undefined.</div></td>
</tr>
<tr id="PolyMouseEvent.vertex">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PolyMouseEvent.vertex"><span>vertex</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">The index of the vertex beneath the cursor when the event occurred, if the event occurred on a vertex and the polyline or polygon is editable. If the event does not occur on a vertex, the value is undefined.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
