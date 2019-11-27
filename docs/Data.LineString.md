
<devsite-heading text=" Data.LineString class" for="Data.LineString" level="h2" link="" toc="" back-to-top=""><h2 id="Data.LineString" is-upgraded="">Data.LineString class </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">Data.LineString</span></code>
class
</p>
<p>A LineString geometry contains a number of <code translate="no" dir="ltr">LatLng</code>s.</p>
<p>This class implements
<code translate="no" dir="ltr"><a href="Data.Geometry.md">Data.Geometry</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Data.LineString - Constructor">
<thead>
<tr><th colspan="2" id="Data.LineString.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code translate="no" dir="ltr"><a class="secret-link" href="#Data.LineString.constructor"><span>Data.LineString</span></a></code></td>
<td><div><code translate="no" dir="ltr">Data.LineString(elements)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">elements</code>:&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a>&gt;</code></li>
</ul></div>
<div class="desc">Constructs a <code translate="no" dir="ltr">Data.LineString</code> from the given <code translate="no" dir="ltr">LatLng</code>s or <code translate="no" dir="ltr">LatLngLiteral</code>s.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class Data.LineString - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Data.LineString.forEachLatLng">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.LineString.forEachLatLng"><span>forEachLatLng</span></a></code></td>
<td><div><code translate="no" dir="ltr">forEachLatLng(callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">callback</code>:&nbsp; <code translate="no" dir="ltr">function(<a href="LatLng.md">LatLng</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Data.LineString.getArray">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.LineString.getArray"><span>getArray</span></a></code></td>
<td><div><code translate="no" dir="ltr">getArray()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="LatLng.md">LatLng</a>&gt;</code></div>
<div class="desc">Returns an array of the contained <code translate="no" dir="ltr">LatLngs</code>. A new array is returned each time <code translate="no" dir="ltr">getArray()</code> is called.</div></td>
</tr>
<tr id="Data.LineString.getAt">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.LineString.getAt"><span>getAt</span></a></code></td>
<td><div><code translate="no" dir="ltr">getAt(n)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">n</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a></code></div>
<div class="desc">Returns the <code translate="no" dir="ltr">n</code>-th contained <code translate="no" dir="ltr">LatLng</code>.</div></td>
</tr>
<tr id="Data.LineString.getLength">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.LineString.getLength"><span>getLength</span></a></code></td>
<td><div><code translate="no" dir="ltr">getLength()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">Returns the number of contained <code translate="no" dir="ltr">LatLng</code>s.</div></td>
</tr>
<tr id="Data.LineString.getType">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.LineString.getType"><span>getType</span></a></code></td>
<td><div><code translate="no" dir="ltr">getType()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">Returns the string <code translate="no" dir="ltr">"LineString"</code>.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
