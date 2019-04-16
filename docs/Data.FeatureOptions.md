
<h2 id="Data.FeatureOptions">Data.FeatureOptions interface</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Data.FeatureOptions</span></code>
interface
</p>
<p>Optional parameters for creating <code>Data.Feature</code> objects.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface Data.FeatureOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="Data.FeatureOptions.geometry">
<td itemprop="property"><code><a class="secret-link" href="#Data.FeatureOptions.geometry"><span>geometry</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="Data.Geometry.md">Data.Geometry</a>|<a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a></code></div>
<div class="desc">The feature geometry. If none is specified when a feature is constructed, the feature's geometry will be null. If a <code>LatLng</code> object or <code>LatLngLiteral</code> is given, this will be converted to a <code>Data.Point</code> geometry.</div></td>
</tr>
<tr id="Data.FeatureOptions.id">
<td itemprop="property"><code><a class="secret-link" href="#Data.FeatureOptions.id"><span>id</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number|string</code></div>
<div class="desc">Feature ID is optional. If provided, it can be used to look up the feature in a <code>Data</code> object using the <code>getFeatureById()</code> method. Note that a feature's ID cannot be subsequently changed.</div></td>
</tr>
<tr id="Data.FeatureOptions.properties">
<td itemprop="property"><code><a class="secret-link" href="#Data.FeatureOptions.properties"><span>properties</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Object</code></div>
<div class="desc">The feature properties. This is an arbitrary mapping of property names to values.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
