<h2 id="Data.MultiPolygon"> Data.MultiPolygon class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Data.MultiPolygon</span></code>
class
</p><p>A MultiPolygon geometry contains a number of <code>Data.Polygon</code>s.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Geometry.md">Data.Geometry</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Data.MultiPolygon - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>Data.<wbr>MultiPolygon(<wbr>elements:Array&lt;</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Polygon.md"><span>Data.<wbr>Polygon</span></a><span>|<wbr>Array&lt;</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.LinearRing.md"><span>Data.<wbr>LinearRing</span></a><span>|<wbr>Array&lt;</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md"><span>LatLngLiteral</span></a><span>&gt;&gt;&gt;)</span></code></td>
<td>Constructs a <code><span>Data.<wbr>MultiPolygon</span></code> from the given <code><span>Data.<wbr>Polygon</span></code>s or arrays of positions.</td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class Data.MultiPolygon - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>forEachLatLng(<wbr>callback:function(<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>))</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>getArray()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Polygon.md">Data.Polygon</a>&gt;</code></div>
<div class="desc">Returns an array of the contained <code>Data.Polygon</code>s. A new array is returned each time <code>getArray()</code> is called.</div></td>
</tr>
<tr>
<td><code><span>getAt(<wbr>n:number)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Polygon.md">Data.Polygon</a></code></div>
<div class="desc">Returns the <code>n</code>-th contained <code>Data.Polygon</code>.</div></td>
</tr>
<tr>
<td><code><span>getLength()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the number of contained <code>Data.Polygon</code>s.</div></td>
</tr>
<tr>
<td><code><span>getType()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the string <code>"MultiPolygon"</code>.</div></td>
</tr>
</tbody>
</table></div>