
<h2 id="Data.MultiPolygon">Data.MultiPolygon class</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Data.MultiPolygon</span></code>
class
</p>
<p>A MultiPolygon geometry contains a number of <code>Data.Polygon</code>s.</p>
<p>This class implements
<code><a href="Data.Geometry.md">Data.Geometry</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Data.MultiPolygon - Constructor">
<thead>
<tr><th colspan="2" id="Data.MultiPolygon.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><a class="secret-link" href="#Data.MultiPolygon.constructor"><span>Data.MultiPolygon</span></a></code></td>
<td><div><code>Data.MultiPolygon(elements)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>elements</code>:&nbsp; <code>Array&lt;<a href="Data.Polygon.md">Data.Polygon</a>|Array&lt;<a href="Data.LinearRing.md">Data.LinearRing</a>|Array&lt;<a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a>&gt;&gt;&gt;</code></li>
</ul></div>
<div class="desc">Constructs a <code>Data.MultiPolygon</code> from the given <code>Data.Polygon</code>s or arrays of positions.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class Data.MultiPolygon - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Data.MultiPolygon.forEachLatLng">
<td itemprop="property"><code><a class="secret-link" href="#Data.MultiPolygon.forEachLatLng"><span>forEachLatLng</span></a></code></td>
<td><div><code>forEachLatLng(callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>callback</code>:&nbsp; <code>function(<a href="LatLng.md">LatLng</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Data.MultiPolygon.getArray">
<td itemprop="property"><code><a class="secret-link" href="#Data.MultiPolygon.getArray"><span>getArray</span></a></code></td>
<td><div><code>getArray()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>Array&lt;<a href="Data.Polygon.md">Data.Polygon</a>&gt;</code></div>
<div class="desc">Returns an array of the contained <code>Data.Polygon</code>s. A new array is returned each time <code>getArray()</code> is called.</div></td>
</tr>
<tr id="Data.MultiPolygon.getAt">
<td itemprop="property"><code><a class="secret-link" href="#Data.MultiPolygon.getAt"><span>getAt</span></a></code></td>
<td><div><code>getAt(n)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>n</code>:&nbsp; <code>number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="Data.Polygon.md">Data.Polygon</a></code></div>
<div class="desc">Returns the <code>n</code>-th contained <code>Data.Polygon</code>.</div></td>
</tr>
<tr id="Data.MultiPolygon.getLength">
<td itemprop="property"><code><a class="secret-link" href="#Data.MultiPolygon.getLength"><span>getLength</span></a></code></td>
<td><div><code>getLength()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the number of contained <code>Data.Polygon</code>s.</div></td>
</tr>
<tr id="Data.MultiPolygon.getType">
<td itemprop="property"><code><a class="secret-link" href="#Data.MultiPolygon.getType"><span>getType</span></a></code></td>
<td><div><code>getType()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the string <code>"MultiPolygon"</code>.</div></td>
</tr>
</tbody>
</table></div>
