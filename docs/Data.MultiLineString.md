
<h2 id="Data.MultiLineString">Data.MultiLineString class</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Data.MultiLineString</span></code>
class
</p>
<p>A MultiLineString geometry contains a number of <code>LineString</code>s.</p>
<p>This class implements
<code><a href="Data.Geometry.md">Data.Geometry</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Data.MultiLineString - Constructor">
<thead>
<tr><th colspan="2" id="Data.MultiLineString.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><a class="secret-link" href="#Data.MultiLineString.constructor"><span>Data.MultiLineString</span></a></code></td>
<td><div><code>Data.MultiLineString(elements)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>elements</code>:&nbsp; <code>Array&lt;<a href="Data.LineString.md">Data.LineString</a>|Array&lt;<a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a>&gt;&gt;</code></li>
</ul></div>
<div class="desc">Constructs a <code>Data.MultiLineString</code> from the given <code>Data.LineString</code>s or arrays of positions.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class Data.MultiLineString - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Data.MultiLineString.forEachLatLng">
<td itemprop="property"><code><a class="secret-link" href="#Data.MultiLineString.forEachLatLng"><span>forEachLatLng</span></a></code></td>
<td><div><code>forEachLatLng(callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>callback</code>:&nbsp; <code>function(<a href="LatLng.md">LatLng</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Data.MultiLineString.getArray">
<td itemprop="property"><code><a class="secret-link" href="#Data.MultiLineString.getArray"><span>getArray</span></a></code></td>
<td><div><code>getArray()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>Array&lt;<a href="Data.LineString.md">Data.LineString</a>&gt;</code></div>
<div class="desc">Returns an array of the contained <code>Data.LineString</code>s. A new array is returned each time <code>getArray()</code> is called.</div></td>
</tr>
<tr id="Data.MultiLineString.getAt">
<td itemprop="property"><code><a class="secret-link" href="#Data.MultiLineString.getAt"><span>getAt</span></a></code></td>
<td><div><code>getAt(n)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>n</code>:&nbsp; <code>number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="Data.LineString.md">Data.LineString</a></code></div>
<div class="desc">Returns the <code>n</code>-th contained <code>Data.LineString</code>.</div></td>
</tr>
<tr id="Data.MultiLineString.getLength">
<td itemprop="property"><code><a class="secret-link" href="#Data.MultiLineString.getLength"><span>getLength</span></a></code></td>
<td><div><code>getLength()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the number of contained <code>Data.LineString</code>s.</div></td>
</tr>
<tr id="Data.MultiLineString.getType">
<td itemprop="property"><code><a class="secret-link" href="#Data.MultiLineString.getType"><span>getType</span></a></code></td>
<td><div><code>getType()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the string <code>"MultiLineString"</code>.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
