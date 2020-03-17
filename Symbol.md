
<devsite-heading text=" Symbol interface" for="Symbol" level="h2" link="" toc="" back-to-top=""><h2 id="Symbol" is-upgraded="">Symbol interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">Symbol</span></code>
interface
</p>
<p>Describes a symbol, which consists of a vector path with styling. A symbol can be used as the icon of a marker, or placed on a polyline.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface Symbol - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="Symbol.anchor">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Symbol.anchor"><span>anchor</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Point.md">Point</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The position of the symbol relative to the marker or polyline. The coordinates of the symbol's path are translated left and up by the anchor's x and y coordinates respectively. By default, a symbol is anchored at <code translate="no" dir="ltr">(0, 0)</code>. The position is expressed in the same coordinate system as the symbol's path.</div></td>
</tr>
<tr id="Symbol.fillColor">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Symbol.fillColor"><span>fillColor</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The symbol's fill color. All CSS3 colors are supported except for extended named colors. For symbol markers, this defaults to 'black'. For symbols on polylines, this defaults to the stroke color of the corresponding polyline.</div></td>
</tr>
<tr id="Symbol.fillOpacity">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Symbol.fillOpacity"><span>fillOpacity</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The symbol's fill opacity. Defaults to 0.</div></td>
</tr>
<tr id="Symbol.labelOrigin">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Symbol.labelOrigin"><span>labelOrigin</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Point.md">Point</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The origin of the label relative to the origin of the path, if label is supplied by the marker. By default, the origin is located at <code translate="no" dir="ltr">(0, 0)</code>. The origin is expressed in the same coordinate system as the symbol's path. This property is unused for symbols on polylines.</div></td>
</tr>
<tr id="Symbol.path">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Symbol.path"><span>path</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="SymbolPath.md">SymbolPath</a>|string</code></div>
<div class="desc">The symbol's path, which is a built-in symbol path, or a custom path expressed using <a href="http://www.w3.org/TR/SVG/paths.html#PathData">SVG path notation</a>. Required.</div></td>
</tr>
<tr id="Symbol.rotation">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Symbol.rotation"><span>rotation</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The angle by which to rotate the symbol, expressed clockwise in degrees. Defaults to 0. A symbol in an <code translate="no" dir="ltr">IconSequence</code> where <code translate="no" dir="ltr">fixedRotation</code> is <code translate="no" dir="ltr">false</code> is rotated relative to the angle of the edge on which it lies.</div></td>
</tr>
<tr id="Symbol.scale">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Symbol.scale"><span>scale</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The amount by which the symbol is scaled in size. For symbol markers, this defaults to 1; after scaling, the symbol may be of any size. For symbols on a polyline, this defaults to the stroke weight of the polyline; after scaling, the symbol must lie inside a square 22 pixels in size centered at the symbol's anchor.</div></td>
</tr>
<tr id="Symbol.strokeColor">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Symbol.strokeColor"><span>strokeColor</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The symbol's stroke color. All CSS3 colors are supported except for extended named colors. For symbol markers, this defaults to 'black'. For symbols on a polyline, this defaults to the stroke color of the polyline.</div></td>
</tr>
<tr id="Symbol.strokeOpacity">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Symbol.strokeOpacity"><span>strokeOpacity</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The symbol's stroke opacity. For symbol markers, this defaults to 1. For symbols on a polyline, this defaults to the stroke opacity of the polyline.</div></td>
</tr>
<tr id="Symbol.strokeWeight">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Symbol.strokeWeight"><span>strokeWeight</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The symbol's stroke weight. Defaults to the <code translate="no" dir="ltr">scale</code> of the symbol.</div></td>
</tr>
</tbody>
</table></div>
