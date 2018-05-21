<h2 id="Data.LinearRing"> Data.LinearRing class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Data.LinearRing</span></code>
class
</p><p>A LinearRing geometry contains a number of <code>LatLng</code>s, representing a closed LineString. There is no need to make the first <code>LatLng</code> equal to the last <code>LatLng</code>. The LinearRing is closed implicitly.</p><p>This class implements
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Geometry.md">Data.Geometry</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Data.LinearRing - Constructor">
<thead>
<tr><th colspan="2" id="Data.LinearRing.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>Data.LinearRing</span></code></td>
<td><div><code>Data.LinearRing(elements)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>elements</code>:&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md">LatLngLiteral</a>&gt;</code></li>
</ul></div>
<div class="desc">Constructs a <code>Data.LinearRing</code> from the given <code>LatLng</code>s or <code>LatLngLiteral</code>s.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class Data.LinearRing - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Data.LinearRing.forEachLatLng">
<td><code><span>forEachLatLng</span></code></td>
<td><div><code>forEachLatLng(callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>callback</code>:&nbsp; <code>function(<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Data.LinearRing.getArray">
<td><code><span>getArray</span></code></td>
<td><div><code>getArray()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>&gt;</code></div>
<div class="desc">Returns an array of the contained <code>LatLng</code>s. A new array is returned each time <code>getArray()</code> is called.</div></td>
</tr>
<tr id="Data.LinearRing.getAt">
<td><code><span>getAt</span></code></td>
<td><div><code>getAt(n)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>n</code>:&nbsp; <code>number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc">Returns the <code>n</code>-th contained <code>LatLng</code>.</div></td>
</tr>
<tr id="Data.LinearRing.getLength">
<td><code><span>getLength</span></code></td>
<td><div><code>getLength()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the number of contained <code>LatLng</code>s.</div></td>
</tr>
<tr id="Data.LinearRing.getType">
<td><code><span>getType</span></code></td>
<td><div><code>getType()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the string <code>"LinearRing"</code>.</div></td>
</tr>
</tbody>
</table></div>