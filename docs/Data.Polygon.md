
<h2 id="Data.Polygon">Data.Polygon class</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Data.Polygon</span></code>
class
</p>
<p>A Polygon geometry contains a number of <code>Data.LinearRing</code>s. The first linear-ring must be the polygon exterior boundary and subsequent linear-rings must be interior boundaries, also known as holes. See the <a href="https://developers.google.com/maps/documentation/javascript/examples/layer-data-polygon">sample polygon with a hole</a>.</p>
<p>This class implements
<code><a href="Data.Geometry.md">Data.Geometry</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Data.Polygon - Constructor">
<thead>
<tr><th colspan="2" id="Data.Polygon.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><a class="secret-link" href="#Data.Polygon.constructor"><span>Data.Polygon</span></a></code></td>
<td><div><code>Data.Polygon(elements)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>elements</code>:&nbsp; <code>Array&lt;<a href="Data.LinearRing.md">Data.LinearRing</a>|Array&lt;<a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a>&gt;&gt;</code></li>
</ul></div>
<div class="desc">Constructs a <code>Data.Polygon</code> from the given <code>Data.LinearRing</code>s or arrays of positions.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class Data.Polygon - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Data.Polygon.forEachLatLng">
<td itemprop="property"><code><a class="secret-link" href="#Data.Polygon.forEachLatLng"><span>forEachLatLng</span></a></code></td>
<td><div><code>forEachLatLng(callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>callback</code>:&nbsp; <code>function(<a href="LatLng.md">LatLng</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Data.Polygon.getArray">
<td itemprop="property"><code><a class="secret-link" href="#Data.Polygon.getArray"><span>getArray</span></a></code></td>
<td><div><code>getArray()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>Array&lt;<a href="Data.LinearRing.md">Data.LinearRing</a>&gt;</code></div>
<div class="desc">Returns an array of the contained <code>Data.LinearRing</code>s. A new array is returned each time <code>getArray()</code> is called.</div></td>
</tr>
<tr id="Data.Polygon.getAt">
<td itemprop="property"><code><a class="secret-link" href="#Data.Polygon.getAt"><span>getAt</span></a></code></td>
<td><div><code>getAt(n)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>n</code>:&nbsp; <code>number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="Data.LinearRing.md">Data.LinearRing</a></code></div>
<div class="desc">Returns the <code>n</code>-th contained <code>Data.LinearRing</code>.</div></td>
</tr>
<tr id="Data.Polygon.getLength">
<td itemprop="property"><code><a class="secret-link" href="#Data.Polygon.getLength"><span>getLength</span></a></code></td>
<td><div><code>getLength()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the number of contained <code>Data.LinearRing</code>s.</div></td>
</tr>
<tr id="Data.Polygon.getType">
<td itemprop="property"><code><a class="secret-link" href="#Data.Polygon.getType"><span>getType</span></a></code></td>
<td><div><code>getType()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the string <code>"Polygon"</code>.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
