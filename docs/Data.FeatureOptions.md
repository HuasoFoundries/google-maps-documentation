
<devsite-heading text=" Data.FeatureOptions interface" for="Data.FeatureOptions" level="h2" link="" toc="" back-to-top=""><h2 id="Data.FeatureOptions" is-upgraded="">Data.FeatureOptions interface </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">Data.FeatureOptions</span></code>
interface
</p>
<p>Optional parameters for creating <code translate="no" dir="ltr">Data.Feature</code> objects.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface Data.FeatureOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="Data.FeatureOptions.geometry">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.FeatureOptions.geometry"><span>geometry</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Data.Geometry.md">Data.Geometry</a>|<a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The feature geometry. If none is specified when a feature is constructed, the feature's geometry will be null. If a <code translate="no" dir="ltr">LatLng</code> object or <code translate="no" dir="ltr">LatLngLiteral</code> is given, this will be converted to a <code translate="no" dir="ltr">Data.Point</code> geometry.</div></td>
</tr>
<tr id="Data.FeatureOptions.id">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.FeatureOptions.id"><span>id</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number|string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Feature ID is optional. If provided, it can be used to look up the feature in a <code translate="no" dir="ltr">Data</code> object using the <code translate="no" dir="ltr">getFeatureById()</code> method. Note that a feature's ID cannot be subsequently changed.</div></td>
</tr>
<tr id="Data.FeatureOptions.properties">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.FeatureOptions.properties"><span>properties</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Object <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The feature properties. This is an arbitrary mapping of property names to values.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
