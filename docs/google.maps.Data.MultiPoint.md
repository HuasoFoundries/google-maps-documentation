<h2 id="Data.MultiPoint">
google.maps.Data.MultiPoint
class
</h2><p>A MultiPoint geometry contains a number of <code>LatLng</code>s.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.Geometry.md">Data.Geometry</a></code>.
</p><h3 id="devsite_header_36">Constructor</h3><table summary="class Data.MultiPoint - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>Data.MultiPoint(elements:Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngLiteral.md">LatLngLiteral</a>&gt;)</code></td>
<td>Constructs a <code>Data.MultiPoint</code> from the given <code>LatLng</code>s or <code>LatLngLiteral</code>s.</td>
</tr>
</tbody>
</table><h3 id="devsite_header_37">Methods</h3><table summary="class Data.MultiPoint - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getArray()</code></td>
<td><code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>&gt;</code></td>
<td>Returns an array of the contained <code>LatLng</code>s. A new array is returned each time <code>getArray()</code> is called.</td>
</tr>
<tr>
<td><code>getAt(n:number)</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a></code></td>
<td>Returns the <code>n</code>-th contained <code>LatLng</code>.</td>
</tr>
<tr>
<td><code>getLength()</code></td>
<td><code>number</code></td>
<td>Returns the number of contained <code>LatLng</code>s.</td>
</tr>
<tr>
<td><code>getType()</code></td>
<td><code>string</code></td>
<td>Returns the string <code>"MultiPoint"</code>.</td>
</tr>
</tbody>
</table>