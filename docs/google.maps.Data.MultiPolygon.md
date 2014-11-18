<h2 id="Data.MultiPolygon">
google.maps.Data.MultiPolygon
class
</h2><p>A MultiPolygon geometry contains a number of <code>Data.Polygon</code>s.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.Geometry.md">Data.Geometry</a></code>.
</p><h3>Constructor</h3><table summary="class Data.MultiPolygon - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>Data.MultiPolygon(elements:Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.Polygon.md">Data.Polygon</a>|Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.LinearRing.md">Data.LinearRing</a>|Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngLiteral.md">LatLngLiteral</a>&gt;&gt;&gt;)</code></td>
<td>Constructs a <code>Data.MultiPolygon</code> from the given <code>Data.Polygon</code>s or arrays of positions.</td>
</tr>
</tbody>
</table><h3>Methods</h3><table summary="class Data.MultiPolygon - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getArray()</code></td>
<td><code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.Polygon.md">Data.Polygon</a>&gt;</code></td>
<td>Returns an array of the contained <code>Data.Polygon</code>s. A new array is returned each time <code>getArray()</code> is called.</td>
</tr>
<tr>
<td><code>getAt(n:number)</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.Polygon.md">Data.Polygon</a></code></td>
<td>Returns the <code>n</code>-th contained <code>Data.Polygon</code>.</td>
</tr>
<tr>
<td><code>getLength()</code></td>
<td><code>number</code></td>
<td>Returns the number of contained <code>Data.Polygon</code>s.</td>
</tr>
<tr>
<td><code>getType()</code></td>
<td><code>string</code></td>
<td>Returns the string <code>"MultiPolygon"</code>.</td>
</tr>
</tbody>
</table>