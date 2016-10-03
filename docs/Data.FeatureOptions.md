<h2 id="Data.FeatureOptions"> Data.FeatureOptions object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Data.FeatureOptions</span></code>
object specification
</p><p>Optional parameters for creating <code>Data.Feature</code> objects.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="record Data.FeatureOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>geometry</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Geometry.md">Data.Geometry</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md">LatLngLiteral</a></code></div>
<div class="desc">The feature geometry. If none is specified when a feature is constructed, the feature's geometry will be null. If a <code>LatLng</code> object or <code>LatLngLiteral</code> is given, this will be converted to a <code>Data.Point</code> geometry.</div></td>
</tr>
<tr>
<td><code><span>id</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number|string</code></div>
<div class="desc">Feature ID is optional. If provided, it can be used to look up the feature in a <code>Data</code> object using the <code>getFeatureById()</code> method. Note that a feature's ID cannot be subsequently changed.</div></td>
</tr>
<tr>
<td><code><span>properties</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Object</code></div>
<div class="desc">The feature properties. This is an arbitrary mapping of property names to values.</div></td>
</tr>
</tbody>
</table></div>