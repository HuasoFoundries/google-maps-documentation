<h2 id="Data.StyleOptions"> Data.StyleOptions object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Data.StyleOptions</span></code>
object specification
</p><p>These options specify the way a Feature should appear when displayed on a map.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="record Data.StyleOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>clickable</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If <code>true</code>, the marker receives mouse and touch events. Default value is <code>true</code>.</div></td>
</tr>
<tr>
<td><code><span>cursor</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Mouse cursor to show on hover. Only applies to point geometries.</div></td>
</tr>
<tr>
<td><code><span>draggable</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If <code>true</code>, the object can be dragged across the map and the underlying feature will have its geometry updated. Default value is <code>false</code>.</div></td>
</tr>
<tr>
<td><code><span>editable</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If <code>true</code>, the object can be edited by dragging control points and the underlying feature will have its geometry updated. Only applies to LineString and Polygon geometries. Default value is <code>false</code>.</div></td>
</tr>
<tr>
<td><code><span>fillColor</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The fill color. All CSS3 colors are supported except for extended named colors. Only applies to polygon geometries.</div></td>
</tr>
<tr>
<td><code><span>fillOpacity</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The fill opacity between 0.0 and 1.0. Only applies to polygon geometries.</div></td>
</tr>
<tr>
<td><code><span>icon</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Icon.md">Icon</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Symbol.md">Symbol</a></code></div>
<div class="desc">Icon for the foreground. If a string is provided, it is treated as though it were an <code>Icon</code> with the string as <code>url</code>. Only applies to point geometries.</div></td>
</tr>
<tr>
<td><code><span>shape</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MarkerShape.md">MarkerShape</a></code></div>
<div class="desc">Defines the image map used for hit detection. Only applies to point geometries.</div></td>
</tr>
<tr>
<td><code><span>strokeColor</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The stroke color. All CSS3 colors are supported except for extended named colors. Only applies to line and polygon geometries.</div></td>
</tr>
<tr>
<td><code><span>strokeOpacity</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The stroke opacity between 0.0 and 1.0. Only applies to line and polygon geometries.</div></td>
</tr>
<tr>
<td><code><span>strokeWeight</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The stroke width in pixels. Only applies to line and polygon geometries.</div></td>
</tr>
<tr>
<td><code><span>title</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Rollover text. Only applies to point geometries.</div></td>
</tr>
<tr>
<td><code><span>visible</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Whether the feature is visible. Defaults to <code>true</code>.</div></td>
</tr>
<tr>
<td><code><span>zIndex</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">All features are displayed on the map in order of their zIndex, with higher values displaying in front of features with lower values. Markers are always displayed in front of line-strings and polygons.</div></td>
</tr>
</tbody>
</table></div>