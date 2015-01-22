<h2 id="Data.Polygon">
google.maps.Data.Polygon
class
</h2><p>A Polygon geometry contains a number of <code>Data.LinearRing</code>s. The first linear-ring must be the polygon exterior boundary, and subsequent linear-rings must be interior boundaries or "holes".</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.Geometry.md">Data.Geometry</a></code>.
</p><h3 id="devsite_header_44">Constructor</h3><table summary="class Data.Polygon - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>Data.Polygon(elements:Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.LinearRing.md">Data.LinearRing</a>|Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngLiteral.md">LatLngLiteral</a>&gt;&gt;)</code></td>
<td>Constructs a <code>Data.Polygon</code> from the given <code>Data.LinearRing</code>s or arrays of positions.</td>
</tr>
</tbody>
</table><h3 id="devsite_header_45">Methods</h3><table summary="class Data.Polygon - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getArray()</code></td>
<td><code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.LinearRing.md">Data.LinearRing</a>&gt;</code></td>
<td>Returns an array of the contained <code>Data.LinearRing</code>s. A new array is returned each time <code>getArray()</code> is called.</td>
</tr>
<tr>
<td><code>getAt(n:number)</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.LinearRing.md">Data.LinearRing</a></code></td>
<td>Returns the <code>n</code>-th contained <code>Data.LinearRing</code>.</td>
</tr>
<tr>
<td><code>getLength()</code></td>
<td><code>number</code></td>
<td>Returns the number of contained <code>Data.LinearRing</code>s.</td>
</tr>
<tr>
<td><code>getType()</code></td>
<td><code>string</code></td>
<td>Returns the string <code>"Polygon"</code>.</td>
</tr>
</tbody>
</table>