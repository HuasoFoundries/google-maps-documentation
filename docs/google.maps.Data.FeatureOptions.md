<h2 id="Data.FeatureOptions">
google.maps.Data.FeatureOptions
object specification
</h2><p>Optional parameters for creating <code>Data.Feature</code> objects.</p><h3>Properties</h3><table summary="interface Data.FeatureOptions - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>geometry</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.Geometry.md">Data.Geometry</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngLiteral.md">LatLngLiteral</a></code></td>
<td>The feature geometry. If none is specified when a feature is constructed, the feature's geometry will be null. If a <code>LatLng</code> object or <code>LatLngLiteral</code> is given, this will be converted to a <code>Data.Point</code> geometry.</td>
</tr>
<tr>
<td><code>id</code></td>
<td><code>string</code></td>
<td>Feature ID is optional. If provided, it can be used to lookup the feature in a <code>Data</code> object using the <code>getFeatureById()</code> method. Note that a feature's ID cannot be subsequently changed.</td>
</tr>
<tr>
<td><code>properties</code></td>
<td><code>Object</code></td>
<td>The feature properties. This is an arbitrary mapping of property names to values.</td>
</tr>
</tbody>
</table>