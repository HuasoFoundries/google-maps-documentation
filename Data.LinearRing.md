
<devsite-heading text=" Data.LinearRing class" for="Data.LinearRing" level="h2" link="" toc="" back-to-top=""><h2 id="Data.LinearRing" is-upgraded="">Data.LinearRing class</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">Data.LinearRing</span></code>
class
</p>
<p>A LinearRing geometry contains a number of <code translate="no" dir="ltr">LatLng</code>s, representing a closed LineString. There is no need to make the first <code translate="no" dir="ltr">LatLng</code> equal to the last <code translate="no" dir="ltr">LatLng</code>. The LinearRing is closed implicitly.</p>
<p>This class implements
<code translate="no" dir="ltr"><a href="Data.Geometry.md">Data.Geometry</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Data.LinearRing - Constructor">
<thead>
<tr><th colspan="2" id="Data.LinearRing.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code translate="no" dir="ltr"><a class="secret-link" href="#Data.LinearRing.constructor"><span>Data.LinearRing</span></a></code></td>
<td><div><code translate="no" dir="ltr">Data.LinearRing(elements)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">elements</code>:&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a>&gt;</code></li>
</ul></div>
<div class="desc">Constructs a <code translate="no" dir="ltr">Data.LinearRing</code> from the given <code translate="no" dir="ltr">LatLng</code>s or <code translate="no" dir="ltr">LatLngLiteral</code>s.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class Data.LinearRing - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Data.LinearRing.forEachLatLng">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.LinearRing.forEachLatLng"><span>forEachLatLng</span></a></code></td>
<td><div><code translate="no" dir="ltr">forEachLatLng(callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">callback</code>:&nbsp; <code translate="no" dir="ltr">function(<a href="LatLng.md">LatLng</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Data.LinearRing.getArray">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.LinearRing.getArray"><span>getArray</span></a></code></td>
<td><div><code translate="no" dir="ltr">getArray()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="LatLng.md">LatLng</a>&gt;</code></div>
<div class="desc">Returns an array of the contained <code translate="no" dir="ltr">LatLng</code>s. A new array is returned each time <code translate="no" dir="ltr">getArray()</code> is called.</div></td>
</tr>
<tr id="Data.LinearRing.getAt">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.LinearRing.getAt"><span>getAt</span></a></code></td>
<td><div><code translate="no" dir="ltr">getAt(n)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">n</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a></code></div>
<div class="desc">Returns the <code translate="no" dir="ltr">n</code>-th contained <code translate="no" dir="ltr">LatLng</code>.</div></td>
</tr>
<tr id="Data.LinearRing.getLength">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.LinearRing.getLength"><span>getLength</span></a></code></td>
<td><div><code translate="no" dir="ltr">getLength()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">Returns the number of contained <code translate="no" dir="ltr">LatLng</code>s.</div></td>
</tr>
<tr id="Data.LinearRing.getType">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.LinearRing.getType"><span>getType</span></a></code></td>
<td><div><code translate="no" dir="ltr">getType()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">Returns the string <code translate="no" dir="ltr">"LinearRing"</code>.</div></td>
</tr>
</tbody>
</table></div>
