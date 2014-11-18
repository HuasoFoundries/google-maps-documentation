<h2 id="Data.GeometryCollection">
google.maps.Data.GeometryCollection
class
</h2><p>A GeometryCollection contains a number of geometry objects. Any <code>LatLng</code> or <code>LatLngLiteral</code> objects are automatically converted to <code>Data.Point</code> geometry objects.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.Geometry.md">Data.Geometry</a></code>.
</p><h3>Constructor</h3><table summary="class Data.GeometryCollection - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>Data.GeometryCollection(elements:Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.Geometry.md">Data.Geometry</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngLiteral.md">LatLngLiteral</a>&gt;)</code></td>
<td>Constructs a <code>Data.GeometryCollection</code> from the given geometry objects or <code>LatLng</code>s.</td>
</tr>
</tbody>
</table><h3>Methods</h3><table summary="class Data.GeometryCollection - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getArray()</code></td>
<td><code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.Geometry.md">Data.Geometry</a>&gt;</code></td>
<td>Returns an array of the contained geometry objects. A new array is returned each time <code>getArray()</code> is called.</td>
</tr>
<tr>
<td><code>getAt(n:number)</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.Geometry.md">Data.Geometry</a></code></td>
<td>Returns the <code>n</code>-th contained geometry object.</td>
</tr>
<tr>
<td><code>getLength()</code></td>
<td><code>number</code></td>
<td>Returns the number of contained geometry objects.</td>
</tr>
<tr>
<td><code>getType()</code></td>
<td><code>string</code></td>
<td>Returns the string <code>"GeometryCollection"</code>.</td>
</tr>
</tbody>
</table>