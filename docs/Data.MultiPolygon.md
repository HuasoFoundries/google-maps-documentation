
<devsite-heading text=" Data.MultiPolygon class" for="Data.MultiPolygon" level="h2" link="" toc="" back-to-top=""><h2 id="Data.MultiPolygon" is-upgraded="">Data.MultiPolygon class </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">Data.MultiPolygon</span></code>
class
</p>
<p>A MultiPolygon geometry contains a number of <code translate="no" dir="ltr">Data.Polygon</code>s.</p>
<p>This class implements
<code translate="no" dir="ltr"><a href="Data.Geometry.md">Data.Geometry</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Data.MultiPolygon - Constructor">
<thead>
<tr><th colspan="2" id="Data.MultiPolygon.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code translate="no" dir="ltr"><a class="secret-link" href="#Data.MultiPolygon.constructor"><span>Data.MultiPolygon</span></a></code></td>
<td><div><code translate="no" dir="ltr">Data.MultiPolygon(elements)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">elements</code>:&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="Data.Polygon.md">Data.Polygon</a>|Array&lt;<a href="Data.LinearRing.md">Data.LinearRing</a>|Array&lt;<a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a>&gt;&gt;&gt;</code></li>
</ul></div>
<div class="desc">Constructs a <code translate="no" dir="ltr">Data.MultiPolygon</code> from the given <code translate="no" dir="ltr">Data.Polygon</code>s or arrays of positions.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class Data.MultiPolygon - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Data.MultiPolygon.forEachLatLng">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.MultiPolygon.forEachLatLng"><span>forEachLatLng</span></a></code></td>
<td><div><code translate="no" dir="ltr">forEachLatLng(callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">callback</code>:&nbsp; <code translate="no" dir="ltr">function(<a href="LatLng.md">LatLng</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Data.MultiPolygon.getArray">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.MultiPolygon.getArray"><span>getArray</span></a></code></td>
<td><div><code translate="no" dir="ltr">getArray()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="Data.Polygon.md">Data.Polygon</a>&gt;</code></div>
<div class="desc">Returns an array of the contained <code translate="no" dir="ltr">Data.Polygon</code>s. A new array is returned each time <code translate="no" dir="ltr">getArray()</code> is called.</div></td>
</tr>
<tr id="Data.MultiPolygon.getAt">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.MultiPolygon.getAt"><span>getAt</span></a></code></td>
<td><div><code translate="no" dir="ltr">getAt(n)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">n</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Data.Polygon.md">Data.Polygon</a></code></div>
<div class="desc">Returns the <code translate="no" dir="ltr">n</code>-th contained <code translate="no" dir="ltr">Data.Polygon</code>.</div></td>
</tr>
<tr id="Data.MultiPolygon.getLength">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.MultiPolygon.getLength"><span>getLength</span></a></code></td>
<td><div><code translate="no" dir="ltr">getLength()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">Returns the number of contained <code translate="no" dir="ltr">Data.Polygon</code>s.</div></td>
</tr>
<tr id="Data.MultiPolygon.getType">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.MultiPolygon.getType"><span>getType</span></a></code></td>
<td><div><code translate="no" dir="ltr">getType()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">Returns the string <code translate="no" dir="ltr">"MultiPolygon"</code>.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
