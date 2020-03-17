
<devsite-heading text=" Data.Geometry interface" for="Data.Geometry" level="h2" link="" toc="" back-to-top=""><h2 id="Data.Geometry" is-upgraded="">Data.Geometry interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">Data.Geometry</span></code>
interface
</p>
<p>A superclass for the various geometry objects.</p>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="interface Data.Geometry - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Data.Geometry.forEachLatLng">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.Geometry.forEachLatLng"><span>forEachLatLng</span></a></code></td>
<td><div><code translate="no" dir="ltr">forEachLatLng(callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">callback</code>:&nbsp; <code translate="no" dir="ltr">function(<a href="LatLng.md">LatLng</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Repeatedly invokes the given function, passing a point from the geometry to the function on each invocation.</div></td>
</tr>
<tr id="Data.Geometry.getType">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.Geometry.getType"><span>getType</span></a></code></td>
<td><div><code translate="no" dir="ltr">getType()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">Returns the type of the geometry object. Possibilities are <code translate="no" dir="ltr">"Point"</code>, <code translate="no" dir="ltr">"MultiPoint"</code>, <code translate="no" dir="ltr">"LineString"</code>, <code translate="no" dir="ltr">"MultiLineString"</code>, <code translate="no" dir="ltr">"LinearRing"</code>, <code translate="no" dir="ltr">"Polygon"</code>, <code translate="no" dir="ltr">"MultiPolygon"</code>, or <code translate="no" dir="ltr">"GeometryCollection"</code>.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
