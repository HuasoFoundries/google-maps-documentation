<h2 id="Symbol"> Symbol object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Symbol</span></code>
object specification
</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="record Symbol - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>anchor</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Point.md">Point</a></code></div>
<div class="desc">The position of the symbol relative to the marker or polyline. The coordinates of the symbol's path are translated left and up by the anchor's x and y coordinates respectively. By default, a symbol is anchored at <code>(0, 0)</code>. The position is expressed in the same coordinate system as the symbol's path.</div></td>
</tr>
<tr>
<td><code><span>fillColor</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The symbol's fill color. All CSS3 colors are supported except for extended named colors. For symbol markers, this defaults to 'black'. For symbols on polylines, this defaults to the stroke color of the corresponding polyline.</div></td>
</tr>
<tr>
<td><code><span>fillOpacity</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The symbol's fill opacity. Defaults to 0.</div></td>
</tr>
<tr>
<td><code><span>labelOrigin</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Point.md">Point</a></code></div>
<div class="desc">The origin of the label relative to the origin of the path, if label is supplied by the marker. By default, the origin is located at <code>(0, 0)</code>. The origin is expressed in the same coordinate system as the symbol's path. This property is unused for symbols on polylines.</div></td>
</tr>
<tr>
<td><code><span>path</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/SymbolPath.md">SymbolPath</a>|string</code></div>
<div class="desc">The symbol's path, which is a built-in symbol path, or a custom path expressed using <a href="http://www.w3.org/TR/SVG/paths.html#PathData">SVG path notation</a>. Required.</div></td>
</tr>
<tr>
<td><code><span>rotation</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The angle by which to rotate the symbol, expressed clockwise in degrees. Defaults to 0. A symbol in an <code>IconSequence</code> where <code>fixedRotation</code> is <code>false</code> is rotated relative to the angle of the edge on which it lies.</div></td>
</tr>
<tr>
<td><code><span>scale</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The amount by which the symbol is scaled in size. For symbol markers, this defaults to 1; after scaling, the symbol may be of any size. For symbols on a polyline, this defaults to the stroke weight of the polyline; after scaling, the symbol must lie inside a square 22 pixels in size centered at the symbol's anchor.</div></td>
</tr>
<tr>
<td><code><span>strokeColor</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The symbol's stroke color. All CSS3 colors are supported except for extended named colors. For symbol markers, this defaults to 'black'. For symbols on a polyline, this defaults to the stroke color of the polyline.</div></td>
</tr>
<tr>
<td><code><span>strokeOpacity</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The symbol's stroke opacity. For symbol markers, this defaults to 1. For symbols on a polyline, this defaults to the stroke opacity of the polyline.</div></td>
</tr>
<tr>
<td><code><span>strokeWeight</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The symbol's stroke weight. Defaults to the <code>scale</code> of the symbol.</div></td>
</tr>
</tbody>
</table></div>