<h2 id="Data.Feature"> Data.Feature class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Data.Feature</span></code>
class
</p><p>A feature has a geometry, an id, and a set of properties.</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Data.Feature - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>Data.<wbr>Feature(<wbr>options?:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.FeatureOptions.md"><span>Data.<wbr>FeatureOptions</span></a><span>)</span></code></td>
<td>Constructs a Feature with the given options.</td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class Data.Feature - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>forEachProperty(<wbr>callback:function(<wbr>*,<wbr> string))</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Repeatedly invokes the given function, passing a property value and name on each invocation. The order of iteration through the properties is undefined.</div></td>
</tr>
<tr>
<td><code><span>getGeometry()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Geometry.md">Data.Geometry</a></code></div>
<div class="desc">Returns the feature's geometry.</div></td>
</tr>
<tr>
<td><code><span>getId()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number|string</code></div>
<div class="desc">Returns the feature ID.</div></td>
</tr>
<tr>
<td><code><span>getProperty(<wbr>name:string)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>*</code></div>
<div class="desc">Returns the value of the requested property, or undefined if the property does not exist.</div></td>
</tr>
<tr>
<td><code><span>removeProperty(<wbr>name:string)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Removes the property with the given name.</div></td>
</tr>
<tr>
<td><code><span>setGeometry(<wbr>newGeometry:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Geometry.md"><span>Data.<wbr>Geometry</span></a><span>|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md"><span>LatLngLiteral</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the feature's geometry.</div></td>
</tr>
<tr>
<td><code><span>setProperty(<wbr>name:string,<wbr> newValue:*)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the value of the specified property. If <code>newValue</code> is <code>undefined</code> this is equivalent to calling <code>removeProperty</code>.</div></td>
</tr>
<tr>
<td><code><span>toGeoJson(<wbr>callback:function(<wbr>Object))</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Exports the feature to a GeoJSON object.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="details responsive" summary="class Data.Feature - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>removeproperty</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.RemovePropertyEvent.md">Data.RemovePropertyEvent</a></code></div>
<div class="desc">This event is triggered when a feature's property is removed.</div></td>
</tr>
<tr>
<td><code><span>setgeometry</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.SetGeometryEvent.md">Data.SetGeometryEvent</a></code></div>
<div class="desc">This event is triggered when a feature's geometry is set.</div></td>
</tr>
<tr>
<td><code><span>setproperty</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.SetPropertyEvent.md">Data.SetPropertyEvent</a></code></div>
<div class="desc">This event is triggered when a feature's property is set.</div></td>
</tr>
</tbody>
</table></div>