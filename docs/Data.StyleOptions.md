
<h2 id="Data.StyleOptions">Data.StyleOptions interface</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Data.StyleOptions</span></code>
interface
</p>
<p>These options specify the way a Feature should appear when displayed on a map.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface Data.StyleOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="Data.StyleOptions.clickable">
<td itemprop="property"><code><a class="secret-link" href="#Data.StyleOptions.clickable"><span>clickable</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">If <code>true</code>, the marker receives mouse and touch events. Default value is <code>true</code>.</div></td>
</tr>
<tr id="Data.StyleOptions.cursor">
<td itemprop="property"><code><a class="secret-link" href="#Data.StyleOptions.cursor"><span>cursor</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Mouse cursor to show on hover. Only applies to point geometries.</div></td>
</tr>
<tr id="Data.StyleOptions.draggable">
<td itemprop="property"><code><a class="secret-link" href="#Data.StyleOptions.draggable"><span>draggable</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">If <code>true</code>, the object can be dragged across the map and the underlying feature will have its geometry updated. Default value is <code>false</code>.</div></td>
</tr>
<tr id="Data.StyleOptions.editable">
<td itemprop="property"><code><a class="secret-link" href="#Data.StyleOptions.editable"><span>editable</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">If <code>true</code>, the object can be edited by dragging control points and the underlying feature will have its geometry updated. Only applies to LineString and Polygon geometries. Default value is <code>false</code>.</div></td>
</tr>
<tr id="Data.StyleOptions.fillColor">
<td itemprop="property"><code><a class="secret-link" href="#Data.StyleOptions.fillColor"><span>fillColor</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The fill color. All CSS3 colors are supported except for extended named colors. Only applies to polygon geometries.</div></td>
</tr>
<tr id="Data.StyleOptions.fillOpacity">
<td itemprop="property"><code><a class="secret-link" href="#Data.StyleOptions.fillOpacity"><span>fillOpacity</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The fill opacity between 0.0 and 1.0. Only applies to polygon geometries.</div></td>
</tr>
<tr id="Data.StyleOptions.icon">
<td itemprop="property"><code><a class="secret-link" href="#Data.StyleOptions.icon"><span>icon</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string|<a href="Icon.md">Icon</a>|<a href="Symbol.md">Symbol</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Icon for the foreground. If a string is provided, it is treated as though it were an <code>Icon</code> with the string as <code>url</code>. Only applies to point geometries.</div></td>
</tr>
<tr id="Data.StyleOptions.shape">
<td itemprop="property"><code><a class="secret-link" href="#Data.StyleOptions.shape"><span>shape</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="MarkerShape.md">MarkerShape</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Defines the image map used for hit detection. Only applies to point geometries.</div></td>
</tr>
<tr id="Data.StyleOptions.strokeColor">
<td itemprop="property"><code><a class="secret-link" href="#Data.StyleOptions.strokeColor"><span>strokeColor</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The stroke color. All CSS3 colors are supported except for extended named colors. Only applies to line and polygon geometries.</div></td>
</tr>
<tr id="Data.StyleOptions.strokeOpacity">
<td itemprop="property"><code><a class="secret-link" href="#Data.StyleOptions.strokeOpacity"><span>strokeOpacity</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The stroke opacity between 0.0 and 1.0. Only applies to line and polygon geometries.</div></td>
</tr>
<tr id="Data.StyleOptions.strokeWeight">
<td itemprop="property"><code><a class="secret-link" href="#Data.StyleOptions.strokeWeight"><span>strokeWeight</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The stroke width in pixels. Only applies to line and polygon geometries.</div></td>
</tr>
<tr id="Data.StyleOptions.title">
<td itemprop="property"><code><a class="secret-link" href="#Data.StyleOptions.title"><span>title</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Rollover text. Only applies to point geometries.</div></td>
</tr>
<tr id="Data.StyleOptions.visible">
<td itemprop="property"><code><a class="secret-link" href="#Data.StyleOptions.visible"><span>visible</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Whether the feature is visible. Defaults to <code>true</code>.</div></td>
</tr>
<tr id="Data.StyleOptions.zIndex">
<td itemprop="property"><code><a class="secret-link" href="#Data.StyleOptions.zIndex"><span>zIndex</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">All features are displayed on the map in order of their zIndex, with higher values displaying in front of features with lower values. Markers are always displayed in front of line-strings and polygons.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
