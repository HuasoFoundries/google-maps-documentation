<h2 id="Data.Feature">
google.maps.Data.Feature
class
</h2><p>A feature has a geometry, an id, and a set of properties.</p><h3>Constructor</h3><table summary="class Data.Feature - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>Data.Feature(options?:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.FeatureOptions.md">Data.FeatureOptions</a>)</code></td>
<td>Constructs a Feature with the given options.</td>
</tr>
</tbody>
</table><h3>Methods</h3><table summary="class Data.Feature - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>forEachProperty(callback:function(*, string))</code></td>
<td><code>None</code></td>
<td>Repeatedly invokes the given function, passing a property value and name on each invocation. The order of iteration through the properties is undefined.</td>
</tr>
<tr>
<td><code>getGeometry()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.Geometry.md">Data.Geometry</a></code></td>
<td>Returns the feature's geometry.</td>
</tr>
<tr>
<td><code>getId()</code></td>
<td><code>number|string|undefined</code></td>
<td>Returns the feature ID.</td>
</tr>
<tr>
<td><code>getProperty(name:string)</code></td>
<td><code>*</code></td>
<td>Returns the value of the requested property, or undefined if the property does not exist.</td>
</tr>
<tr>
<td><code>removeProperty(name:string)</code></td>
<td><code>None</code></td>
<td>Removes the property with the given name.</td>
</tr>
<tr>
<td><code>setGeometry(newGeometry:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.Geometry.md">Data.Geometry</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngLiteral.md">LatLngLiteral</a>)</code></td>
<td><code>None</code></td>
<td>Sets the feature's geometry.</td>
</tr>
<tr>
<td><code>setProperty(name:string, newValue:*)</code></td>
<td><code>None</code></td>
<td>Sets the value of the specified property. If <code>newValue</code> is <code>undefined</code> this is equivalent to calling <code>removeProperty</code>.</td>
</tr>
<tr>
<td><code>toGeoJson(callback:function(Object))</code></td>
<td><code>None</code></td>
<td>Exports the feature to a GeoJSON object.</td>
</tr>
</tbody>
</table><h3>Events</h3><table summary="class Data.Feature - Events" width="100%">
<thead>
<tr><th>Events</th>
<th>Arguments</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>remove_property</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.RemovePropertyEvent.md">Data.RemovePropertyEvent</a></code></td>
<td>This event is triggered when a feature's property is removed.</td>
</tr>
<tr>
<td><code>set_geometry</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.SetGeometryEvent.md">Data.SetGeometryEvent</a></code></td>
<td>This event is triggered when a feature's geometry is set.</td>
</tr>
<tr>
<td><code>set_property</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.SetPropertyEvent.md">Data.SetPropertyEvent</a></code></td>
<td>This event is triggered when a feature's property is set.</td>
</tr>
</tbody>
</table>