<h2 id="Data.GeometryCollection"> Data.GeometryCollection class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Data.GeometryCollection</span></code>
class
</p><p>A GeometryCollection contains a number of geometry objects. Any <code>LatLng</code> or <code>LatLngLiteral</code> objects are automatically converted to <code>Data.Point</code> geometry objects.</p><p>This class implements
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Geometry.md">Data.Geometry</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Data.GeometryCollection - Constructor">
<thead>
<tr><th colspan="2" id="Data.GeometryCollection.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>Data.GeometryCollection</span></code></td>
<td><div><code>Data.GeometryCollection(elements)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>elements</code>:&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Geometry.md">Data.Geometry</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md">LatLngLiteral</a>&gt;</code></li>
</ul></div>
<div class="desc">Constructs a <code>Data.GeometryCollection</code> from the given geometry objects or <code>LatLng</code>s.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class Data.GeometryCollection - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Data.GeometryCollection.forEachLatLng">
<td><code><span>forEachLatLng</span></code></td>
<td><div><code>forEachLatLng(callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>callback</code>:&nbsp; <code>function(<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Data.GeometryCollection.getArray">
<td><code><span>getArray</span></code></td>
<td><div><code>getArray()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Geometry.md">Data.Geometry</a>&gt;</code></div>
<div class="desc">Returns an array of the contained geometry objects. A new array is returned each time <code>getArray()</code> is called.</div></td>
</tr>
<tr id="Data.GeometryCollection.getAt">
<td><code><span>getAt</span></code></td>
<td><div><code>getAt(n)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>n</code>:&nbsp; <code>number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Geometry.md">Data.Geometry</a></code></div>
<div class="desc">Returns the <code>n</code>-th contained geometry object.</div></td>
</tr>
<tr id="Data.GeometryCollection.getLength">
<td><code><span>getLength</span></code></td>
<td><div><code>getLength()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the number of contained geometry objects.</div></td>
</tr>
<tr id="Data.GeometryCollection.getType">
<td><code><span>getType</span></code></td>
<td><div><code>getType()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the string <code>"GeometryCollection"</code>.</div></td>
</tr>
</tbody>
</table></div>