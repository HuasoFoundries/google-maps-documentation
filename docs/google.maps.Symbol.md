<h2 id="Symbol">
google.maps.Symbol
object specification
</h2><h3 id="devsite_header_63">Properties</h3><table summary="interface Symbol - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>anchor</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Point.md">Point</a></code></td>
<td>The position of the symbol relative to the marker or polyline. The coordinates of the symbol's path are translated left and up by the anchor's x and y coordinates respectively. By default, a symbol is anchored at <code>(0, 0)</code>. The position is expressed in the same coordinate system as the symbol's path.</td>
</tr>
<tr>
<td><code>fillColor</code></td>
<td><code>string</code></td>
<td>The symbol's fill color. All CSS3 colors are supported except for extended named colors. For symbol markers, this defaults to 'black'. For symbols on polylines, this defaults to the stroke color of the corresponding polyline.</td>
</tr>
<tr>
<td><code>fillOpacity</code></td>
<td><code>number</code></td>
<td>The symbol's fill opacity. Defaults to 0.</td>
</tr>
<tr>
<td><code>path</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.SymbolPath.md">SymbolPath</a>|string</code></td>
<td>The symbol's path, which is a built-in symbol path, or a custom path expressed using <a href="http://www.w3.org/TR/SVG/paths.html#PathData">SVG path notation</a>. Required.</td>
</tr>
<tr>
<td><code>rotation</code></td>
<td><code>number</code></td>
<td>The angle by which to rotate the symbol, expressed clockwise in degrees. Defaults to 0. A symbol in an <code>IconSequence</code> where <code>fixedRotation</code> is <code>false</code> is rotated relative to the angle of the edge on which it lies.</td>
</tr>
<tr>
<td><code>scale</code></td>
<td><code>number</code></td>
<td>The amount by which the symbol is scaled in size. For symbol markers, this defaults to 1; after scaling, the symbol may be of any size. For symbols on a polyline, this defaults to the stroke weight of the polyline; after scaling, the symbol must lie inside a square 22 pixels in size centered at the symbol's anchor.</td>
</tr>
<tr>
<td><code>strokeColor</code></td>
<td><code>string</code></td>
<td>The symbol's stroke color. All CSS3 colors are supported except for extended named colors. For symbol markers, this defaults to 'black'. For symbols on a polyline, this defaults to the stroke color of the polyline.</td>
</tr>
<tr>
<td><code>strokeOpacity</code></td>
<td><code>number</code></td>
<td>The symbol's stroke opacity. For symbol markers, this defaults to 1. For symbols on a polyline, this defaults to the stroke opacity of the polyline.</td>
</tr>
<tr>
<td><code>strokeWeight</code></td>
<td><code>number</code></td>
<td>The symbol's stroke weight. Defaults to the <code>scale</code> of the symbol.</td>
</tr>
</tbody>
</table>