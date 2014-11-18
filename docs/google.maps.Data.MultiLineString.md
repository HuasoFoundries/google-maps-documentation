<h2 id="Data.MultiLineString">
google.maps.Data.MultiLineString
class
</h2><p>A MultiLineString geometry contains a number of <code>LineString</code>s.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.Geometry.md">Data.Geometry</a></code>.
</p><h3>Constructor</h3><table summary="class Data.MultiLineString - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>Data.MultiLineString(elements:Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.LineString.md">Data.LineString</a>|Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngLiteral.md">LatLngLiteral</a>&gt;&gt;)</code></td>
<td>Constructs a <code>Data.MultiLineString</code> from the given <code>Data.LineString</code>s or arrays of positions.</td>
</tr>
</tbody>
</table><h3>Methods</h3><table summary="class Data.MultiLineString - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getArray()</code></td>
<td><code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.LineString.md">Data.LineString</a>&gt;</code></td>
<td>Returns an array of the contained <code>Data.LineString</code>s. A new array is returned each time <code>getArray()</code> is called.</td>
</tr>
<tr>
<td><code>getAt(n:number)</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.LineString.md">Data.LineString</a></code></td>
<td>Returns the <code>n</code>-th contained <code>Data.LineString</code>.</td>
</tr>
<tr>
<td><code>getLength()</code></td>
<td><code>number</code></td>
<td>Returns the number of contained <code>Data.LineString</code>s.</td>
</tr>
<tr>
<td><code>getType()</code></td>
<td><code>string</code></td>
<td>Returns the string <code>"MultiLineString"</code>.</td>
</tr>
</tbody>
</table>