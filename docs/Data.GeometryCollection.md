<h2 id="Data.GeometryCollection"> Data.GeometryCollection class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Data.GeometryCollection</span></code>
class
</p><p>A GeometryCollection contains a number of geometry objects. Any <code>LatLng</code> or <code>LatLngLiteral</code> objects are automatically converted to <code>Data.Point</code> geometry objects.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Geometry.md">Data.Geometry</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Data.GeometryCollection - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>Data.<wbr>GeometryCollection(<wbr>elements:Array&lt;</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Geometry.md"><span>Data.<wbr>Geometry</span></a><span>|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md"><span>LatLngLiteral</span></a><span>&gt;)</span></code></td>
<td>Constructs a <code><span>Data.<wbr>GeometryCollection</span></code> from the given geometry objects or <code><span>LatLng</span></code>s.</td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class Data.GeometryCollection - Methods">
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
<td><div><strong>Return Value:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Geometry.md">Data.Geometry</a>&gt;</code></div>
<div class="desc">Returns an array of the contained geometry objects. A new array is returned each time <code>getArray()</code> is called.</div></td>
</tr>
<tr>
<td><code><span>getAt(<wbr>n:number)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Geometry.md">Data.Geometry</a></code></div>
<div class="desc">Returns the <code>n</code>-th contained geometry object.</div></td>
</tr>
<tr>
<td><code><span>getLength()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the number of contained geometry objects.</div></td>
</tr>
<tr>
<td><code><span>getType()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the string <code>"GeometryCollection"</code>.</div></td>
</tr>
</tbody>
</table></div>