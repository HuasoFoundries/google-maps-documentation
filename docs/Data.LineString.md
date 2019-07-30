
<h2 id="Data.LineString">Data.LineString class</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Data.LineString</span></code>
class
</p>
<p>A LineString geometry contains a number of <code>LatLng</code>s.</p>
<p>This class implements
<code><a href="Data.Geometry.md">Data.Geometry</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Data.LineString - Constructor">
<thead>
<tr><th colspan="2" id="Data.LineString.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><a class="secret-link" href="#Data.LineString.constructor"><span>Data.LineString</span></a></code></td>
<td><div><code>Data.LineString(elements)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>elements</code>:&nbsp; <code>Array&lt;<a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a>&gt;</code></li>
</ul></div>
<div class="desc">Constructs a <code>Data.LineString</code> from the given <code>LatLng</code>s or <code>LatLngLiteral</code>s.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class Data.LineString - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Data.LineString.forEachLatLng">
<td itemprop="property"><code><a class="secret-link" href="#Data.LineString.forEachLatLng"><span>forEachLatLng</span></a></code></td>
<td><div><code>forEachLatLng(callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>callback</code>:&nbsp; <code>function(<a href="LatLng.md">LatLng</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Data.LineString.getArray">
<td itemprop="property"><code><a class="secret-link" href="#Data.LineString.getArray"><span>getArray</span></a></code></td>
<td><div><code>getArray()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>Array&lt;<a href="LatLng.md">LatLng</a>&gt;</code></div>
<div class="desc">Returns an array of the contained <code>LatLngs</code>. A new array is returned each time <code>getArray()</code> is called.</div></td>
</tr>
<tr id="Data.LineString.getAt">
<td itemprop="property"><code><a class="secret-link" href="#Data.LineString.getAt"><span>getAt</span></a></code></td>
<td><div><code>getAt(n)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>n</code>:&nbsp; <code>number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="LatLng.md">LatLng</a></code></div>
<div class="desc">Returns the <code>n</code>-th contained <code>LatLng</code>.</div></td>
</tr>
<tr id="Data.LineString.getLength">
<td itemprop="property"><code><a class="secret-link" href="#Data.LineString.getLength"><span>getLength</span></a></code></td>
<td><div><code>getLength()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the number of contained <code>LatLng</code>s.</div></td>
</tr>
<tr id="Data.LineString.getType">
<td itemprop="property"><code><a class="secret-link" href="#Data.LineString.getType"><span>getType</span></a></code></td>
<td><div><code>getType()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the string <code>"LineString"</code>.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
