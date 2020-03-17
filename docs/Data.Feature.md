
<devsite-heading text=" Data.Feature class" for="Data.Feature" level="h2" link="" toc="" back-to-top=""><h2 id="Data.Feature" is-upgraded="">Data.Feature class</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">Data.Feature</span></code>
class
</p>
<p>A feature has a geometry, an id, and a set of properties.</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Data.Feature - Constructor">
<thead>
<tr><th colspan="2" id="Data.Feature.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code translate="no" dir="ltr"><a class="secret-link" href="#Data.Feature.constructor"><span>Data.Feature</span></a></code></td>
<td><div><code translate="no" dir="ltr">Data.Feature([options])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">options</code>:&nbsp; <code translate="no" dir="ltr"><a href="Data.FeatureOptions.md">Data.FeatureOptions</a> <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc">Constructs a Feature with the given options.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class Data.Feature - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Data.Feature.forEachProperty">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.Feature.forEachProperty"><span>forEachProperty</span></a></code></td>
<td><div><code translate="no" dir="ltr">forEachProperty(callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">callback</code>:&nbsp; <code translate="no" dir="ltr">function(*, string)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Repeatedly invokes the given function, passing a property value and name on each invocation. The order of iteration through the properties is undefined.</div></td>
</tr>
<tr id="Data.Feature.getGeometry">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.Feature.getGeometry"><span>getGeometry</span></a></code></td>
<td><div><code translate="no" dir="ltr">getGeometry()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Data.Geometry.md">Data.Geometry</a></code></div>
<div class="desc">Returns the feature's geometry.</div></td>
</tr>
<tr id="Data.Feature.getId">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.Feature.getId"><span>getId</span></a></code></td>
<td><div><code translate="no" dir="ltr">getId()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">number|string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Returns the feature ID.</div></td>
</tr>
<tr id="Data.Feature.getProperty">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.Feature.getProperty"><span>getProperty</span></a></code></td>
<td><div><code translate="no" dir="ltr">getProperty(name)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">name</code>:&nbsp; <code translate="no" dir="ltr">string</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">*</code></div>
<div class="desc">Returns the value of the requested property, or undefined if the property does not exist.</div></td>
</tr>
<tr id="Data.Feature.removeProperty">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.Feature.removeProperty"><span>removeProperty</span></a></code></td>
<td><div><code translate="no" dir="ltr">removeProperty(name)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">name</code>:&nbsp; <code translate="no" dir="ltr">string</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Removes the property with the given name.</div></td>
</tr>
<tr id="Data.Feature.setGeometry">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.Feature.setGeometry"><span>setGeometry</span></a></code></td>
<td><div><code translate="no" dir="ltr">setGeometry(newGeometry)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">newGeometry</code>:&nbsp; <code translate="no" dir="ltr"><a href="Data.Geometry.md">Data.Geometry</a>|<a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the feature's geometry.</div></td>
</tr>
<tr id="Data.Feature.setProperty">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.Feature.setProperty"><span>setProperty</span></a></code></td>
<td><div><code translate="no" dir="ltr">setProperty(name, newValue)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">name</code>:&nbsp; <code translate="no" dir="ltr">string</code></li>
<li><code translate="no" dir="ltr">newValue</code>:&nbsp; <code translate="no" dir="ltr">*</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the value of the specified property. If <code translate="no" dir="ltr">newValue</code> is <code translate="no" dir="ltr">undefined</code> this is equivalent to calling <code translate="no" dir="ltr">removeProperty</code>.</div></td>
</tr>
<tr id="Data.Feature.toGeoJson">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.Feature.toGeoJson"><span>toGeoJson</span></a></code></td>
<td><div><code translate="no" dir="ltr">toGeoJson(callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">callback</code>:&nbsp; <code translate="no" dir="ltr">function(Object)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Exports the feature to a GeoJSON object.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="details responsive" summary="class Data.Feature - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="Data.Feature.removeproperty">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.Feature.removeproperty"><span>removeproperty</span></a></code></td>
<td><div><code translate="no" dir="ltr">function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">event</code>:&nbsp; <code translate="no" dir="ltr"><a href="Data.RemovePropertyEvent.md">Data.RemovePropertyEvent</a></code></li>
</ul></div>
<div class="desc">This event is triggered when a feature's property is removed.</div></td>
</tr>
<tr id="Data.Feature.setgeometry">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.Feature.setgeometry"><span>setgeometry</span></a></code></td>
<td><div><code translate="no" dir="ltr">function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">event</code>:&nbsp; <code translate="no" dir="ltr"><a href="Data.SetGeometryEvent.md">Data.SetGeometryEvent</a></code></li>
</ul></div>
<div class="desc">This event is triggered when a feature's geometry is set.</div></td>
</tr>
<tr id="Data.Feature.setproperty">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Data.Feature.setproperty"><span>setproperty</span></a></code></td>
<td><div><code translate="no" dir="ltr">function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">event</code>:&nbsp; <code translate="no" dir="ltr"><a href="Data.SetPropertyEvent.md">Data.SetPropertyEvent</a></code></li>
</ul></div>
<div class="desc">This event is triggered when a feature's property is set.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
