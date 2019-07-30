
<h2 id="Data.MultiPoint">Data.MultiPoint class</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Data.MultiPoint</span></code>
class
</p>
<p>A MultiPoint geometry contains a number of <code>LatLng</code>s.</p>
<p>This class implements
<code><a href="Data.Geometry.md">Data.Geometry</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Data.MultiPoint - Constructor">
<thead>
<tr><th colspan="2" id="Data.MultiPoint.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><a class="secret-link" href="#Data.MultiPoint.constructor"><span>Data.MultiPoint</span></a></code></td>
<td><div><code>Data.MultiPoint(elements)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>elements</code>:&nbsp; <code>Array&lt;<a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a>&gt;</code></li>
</ul></div>
<div class="desc">Constructs a <code>Data.MultiPoint</code> from the given <code>LatLng</code>s or <code>LatLngLiteral</code>s.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class Data.MultiPoint - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Data.MultiPoint.forEachLatLng">
<td itemprop="property"><code><a class="secret-link" href="#Data.MultiPoint.forEachLatLng"><span>forEachLatLng</span></a></code></td>
<td><div><code>forEachLatLng(callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>callback</code>:&nbsp; <code>function(<a href="LatLng.md">LatLng</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Data.MultiPoint.getArray">
<td itemprop="property"><code><a class="secret-link" href="#Data.MultiPoint.getArray"><span>getArray</span></a></code></td>
<td><div><code>getArray()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>Array&lt;<a href="LatLng.md">LatLng</a>&gt;</code></div>
<div class="desc">Returns an array of the contained <code>LatLng</code>s. A new array is returned each time <code>getArray()</code> is called.</div></td>
</tr>
<tr id="Data.MultiPoint.getAt">
<td itemprop="property"><code><a class="secret-link" href="#Data.MultiPoint.getAt"><span>getAt</span></a></code></td>
<td><div><code>getAt(n)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>n</code>:&nbsp; <code>number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="LatLng.md">LatLng</a></code></div>
<div class="desc">Returns the <code>n</code>-th contained <code>LatLng</code>.</div></td>
</tr>
<tr id="Data.MultiPoint.getLength">
<td itemprop="property"><code><a class="secret-link" href="#Data.MultiPoint.getLength"><span>getLength</span></a></code></td>
<td><div><code>getLength()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the number of contained <code>LatLng</code>s.</div></td>
</tr>
<tr id="Data.MultiPoint.getType">
<td itemprop="property"><code><a class="secret-link" href="#Data.MultiPoint.getType"><span>getType</span></a></code></td>
<td><div><code>getType()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the string <code>"MultiPoint"</code>.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
