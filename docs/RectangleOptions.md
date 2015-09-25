<h2 id="RectangleOptions"> RectangleOptions object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">RectangleOptions</span></code>
object specification
</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface RectangleOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>bounds</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBoundsLiteral.md">LatLngBoundsLiteral</a></code></div>
<div class="desc">The bounds.</div></td>
</tr>
<tr>
<td><code><span>clickable</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Indicates whether this <code>Rectangle</code> handles mouse events. Defaults to <code>true</code>.</div></td>
</tr>
<tr>
<td><code><span>draggable</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If set to true, the user can drag this rectangle over the map. Defaults to <code>false</code>.</div></td>
</tr>
<tr>
<td><code><span>editable</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If set to true, the user can edit this rectangle by dragging the control points shown at the corners and on each edge. Defaults to <code>false</code>.</div></td>
</tr>
<tr>
<td><code><span>fillColor</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The fill color. All CSS3 colors are supported except for extended named colors.</div></td>
</tr>
<tr>
<td><code><span>fillOpacity</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The fill opacity between 0.0 and 1.0</div></td>
</tr>
<tr>
<td><code><span>map</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc">Map on which to display Rectangle.</div></td>
</tr>
<tr>
<td><code><span>strokeColor</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The stroke color. All CSS3 colors are supported except for extended named colors.</div></td>
</tr>
<tr>
<td><code><span>strokeOpacity</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The stroke opacity between 0.0 and 1.0</div></td>
</tr>
<tr>
<td><code><span>strokePosition</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StrokePosition.md">StrokePosition</a></code></div>
<div class="desc">The stroke position. Defaults to CENTER. This property is not supported on Internet Explorer 8 and earlier.</div></td>
</tr>
<tr>
<td><code><span>strokeWeight</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The stroke width in pixels.</div></td>
</tr>
<tr>
<td><code><span>visible</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Whether this rectangle is visible on the map. Defaults to <code>true</code>.</div></td>
</tr>
<tr>
<td><code><span>zIndex</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The zIndex compared to other polys.</div></td>
</tr>
</tbody>
</table></div>