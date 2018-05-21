<h2 id="Data.Feature"> Data.Feature class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Data.Feature</span></code>
class
</p><p>A feature has a geometry, an id, and a set of properties.</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Data.Feature - Constructor">
<thead>
<tr><th colspan="2" id="Data.Feature.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>Data.Feature</span></code></td>
<td><div><code>Data.Feature([options])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>options</code> (optional):&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.FeatureOptions.md">Data.FeatureOptions</a></code></li>
</ul></div>
<div class="desc">Constructs a Feature with the given options.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class Data.Feature - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Data.Feature.forEachProperty">
<td><code><span>forEachProperty</span></code></td>
<td><div><code>forEachProperty(callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>callback</code>:&nbsp; <code>function(*, string)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Repeatedly invokes the given function, passing a property value and name on each invocation. The order of iteration through the properties is undefined.</div></td>
</tr>
<tr id="Data.Feature.getGeometry">
<td><code><span>getGeometry</span></code></td>
<td><div><code>getGeometry()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Geometry.md">Data.Geometry</a></code></div>
<div class="desc">Returns the feature's geometry.</div></td>
</tr>
<tr id="Data.Feature.getId">
<td><code><span>getId</span></code></td>
<td><div><code>getId()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>number|string|undefined</code></div>
<div class="desc">Returns the feature ID.</div></td>
</tr>
<tr id="Data.Feature.getProperty">
<td><code><span>getProperty</span></code></td>
<td><div><code>getProperty(name)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>name</code>:&nbsp; <code>string</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>*</code></div>
<div class="desc">Returns the value of the requested property, or undefined if the property does not exist.</div></td>
</tr>
<tr id="Data.Feature.removeProperty">
<td><code><span>removeProperty</span></code></td>
<td><div><code>removeProperty(name)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>name</code>:&nbsp; <code>string</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Removes the property with the given name.</div></td>
</tr>
<tr id="Data.Feature.setGeometry">
<td><code><span>setGeometry</span></code></td>
<td><div><code>setGeometry(newGeometry)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>newGeometry</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Geometry.md">Data.Geometry</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md">LatLngLiteral</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the feature's geometry.</div></td>
</tr>
<tr id="Data.Feature.setProperty">
<td><code><span>setProperty</span></code></td>
<td><div><code>setProperty(name, newValue)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>name</code>:&nbsp; <code>string</code></li>
<li><code>newValue</code>:&nbsp; <code>*</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the value of the specified property. If <code>newValue</code> is <code>undefined</code> this is equivalent to calling <code>removeProperty</code>.</div></td>
</tr>
<tr id="Data.Feature.toGeoJson">
<td><code><span>toGeoJson</span></code></td>
<td><div><code>toGeoJson(callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>callback</code>:&nbsp; <code>function(Object)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Exports the feature to a GeoJSON object.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="details responsive" summary="class Data.Feature - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="Data.Feature.removeproperty">
<td><code><span>removeproperty</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.RemovePropertyEvent.md">Data.RemovePropertyEvent</a></code></li>
</ul></div>
<div class="desc">This event is triggered when a feature's property is removed.</div></td>
</tr>
<tr id="Data.Feature.setgeometry">
<td><code><span>setgeometry</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.SetGeometryEvent.md">Data.SetGeometryEvent</a></code></li>
</ul></div>
<div class="desc">This event is triggered when a feature's geometry is set.</div></td>
</tr>
<tr id="Data.Feature.setproperty">
<td><code><span>setproperty</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.SetPropertyEvent.md">Data.SetPropertyEvent</a></code></li>
</ul></div>
<div class="desc">This event is triggered when a feature's property is set.</div></td>
</tr>
</tbody>
</table></div>