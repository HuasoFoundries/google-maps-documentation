<h2 id="Data.Polygon"> Data.Polygon class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Data.Polygon</span></code>
class
</p><p>A Polygon geometry contains a number of <code>Data.LinearRing</code>s. The first linear-ring must be the polygon exterior boundary, and subsequent linear-rings must be interior boundaries or "holes".</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Geometry.md">Data.Geometry</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Data.Polygon - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>Data.<wbr>Polygon(<wbr>elements:Array&lt;</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.LinearRing.md"><span>Data.<wbr>LinearRing</span></a><span>|<wbr>Array&lt;</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md"><span>LatLngLiteral</span></a><span>&gt;&gt;)</span></code></td>
<td>Constructs a <code><span>Data.<wbr>Polygon</span></code> from the given <code><span>Data.<wbr>LinearRing</span></code>s or arrays of positions.</td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class Data.Polygon - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>getArray()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.LinearRing.md">Data.LinearRing</a>&gt;</code></div>
<div class="desc">Returns an array of the contained <code>Data.LinearRing</code>s. A new array is returned each time <code>getArray()</code> is called.</div></td>
</tr>
<tr>
<td><code><span>getAt(<wbr>n:number)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.LinearRing.md">Data.LinearRing</a></code></div>
<div class="desc">Returns the <code>n</code>-th contained <code>Data.LinearRing</code>.</div></td>
</tr>
<tr>
<td><code><span>getLength()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the number of contained <code>Data.LinearRing</code>s.</div></td>
</tr>
<tr>
<td><code><span>getType()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the string <code>"Polygon"</code>.</div></td>
</tr>
</tbody>
</table></div>