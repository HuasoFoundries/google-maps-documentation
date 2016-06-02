<h2 id="Data.LineString"> Data.LineString class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Data.LineString</span></code>
class
</p><p>A LineString geometry contains a number of <code>LatLng</code>s.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Geometry.md">Data.Geometry</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Data.LineString - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>Data.<wbr>LineString(<wbr>elements:Array&lt;</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md"><span>LatLngLiteral</span></a><span>&gt;)</span></code></td>
<td>Constructs a <code><span>Data.<wbr>LineString</span></code> from the given <code><span>LatLng</span></code>s or <code><span>LatLngLiteral</span></code>s.</td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class Data.LineString - Methods">
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
<td><div><strong>Return Value:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>&gt;</code></div>
<div class="desc">Returns an array of the contained <code>LatLngs</code>. A new array is returned each time <code>getArray()</code> is called.</div></td>
</tr>
<tr>
<td><code><span>getAt(<wbr>n:number)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc">Returns the <code>n</code>-th contained <code>LatLng</code>.</div></td>
</tr>
<tr>
<td><code><span>getLength()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the number of contained <code>LatLng</code>s.</div></td>
</tr>
<tr>
<td><code><span>getType()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the string <code>"LineString"</code>.</div></td>
</tr>
</tbody>
</table></div>