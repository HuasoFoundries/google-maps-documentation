<h2 id="Data">
google.maps.Data
class
</h2><p>A layer for displaying geospatial data. Points, line-strings and polygons can be displayed. </p><p> Every <code>Map</code> has a <code>Data</code> object by default, so most of the time there is no need to construct one. For example: </p><pre> var myMap = new google.maps.Map(...);<br> myMap.data.addGeoJson(...);<br> myMap.data.setStyle(...); </pre><code>Data</code><a href="#Data.Feature"><code>Features</code></a><p></p><p>This class extends
<code><a href="#MVCObject">MVCObject</a></code>.
</p><h3>Constructor</h3><table summary="class Data - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>Data(options?:<a href="#Data.DataOptions">Data.DataOptions</a>)</code></td>
<td>Creates an empty collection, with the given <code>DataOptions</code>.</td>
</tr>
</tbody>
</table><h3>Methods</h3><table summary="class Data - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>add(feature:<a href="#Data.Feature">Data.Feature</a>|<a href="#Data.FeatureOptions">Data.FeatureOptions</a>)</code></td>
<td><code><a href="#Data.Feature">Data.Feature</a></code></td>
<td>Adds a feature to the collection, and returns the added feature. <p>If the feature has an ID, it will replace any existing feature in the collection with the same ID. If no feature is given, a new feature will be created with null geometry and no properties. If <code>FeatureOptions</code> are given, a new feature will be created with the specified properties.</p></td>
</tr>
<tr>
<td><code>addGeoJson(geoJson:Object, options?:<a href="#Data.GeoJsonOptions">Data.GeoJsonOptions</a>)</code></td>
<td><code>Array.&lt;<a href="#Data.Feature">Data.Feature</a>&gt;</code></td>
<td>Adds GeoJSON features to the collection. Give this method a parsed JSON. The imported features are returned. Throws an exception if the GeoJSON could not be imported.</td>
</tr>
<tr>
<td><code>contains(feature:<a href="#Data.Feature">Data.Feature</a>)</code></td>
<td><code>boolean</code></td>
<td>Checks whether the given feature is in the collection.</td>
</tr>
<tr>
<td><code>forEach(callback:function(<a href="#Data.Feature">Data.Feature</a>))</code></td>
<td><code>None</code></td>
<td>Repeatedly invokes the given function, passing a feature in the collection to the function on each invocation. The order of iteration through the features is undefined.</td>
</tr>
<tr>
<td><code>getFeatureById(id:string)</code></td>
<td><code><a href="#Data.Feature">Data.Feature</a>|undefined</code></td>
<td>Returns the feature with the given ID, if it exists in the collection. Otherwise returns <code>undefined</code>.</td>
</tr>
<tr>
<td><code>getMap()</code></td>
<td><code><a href="#Map">Map</a></code></td>
<td>Returns the map on which the features are displayed.</td>
</tr>
<tr>
<td><code>getStyle()</code></td>
<td><code><a href="#Data.StylingFunction">Data.StylingFunction</a>|<a href="#Data.StyleOptions">Data.StyleOptions</a></code></td>
<td>Gets the style for all features in the collection.</td>
</tr>
<tr>
<td><code>loadGeoJson(url:string, options?:<a href="#Data.GeoJsonOptions">Data.GeoJsonOptions</a>)</code></td>
<td><code>None</code></td>
<td>Loads GeoJSON from a URL, and adds the features to the collection.</td>
</tr>
<tr>
<td><code>overrideStyle(feature:<a href="#Data.Feature">Data.Feature</a>, style:<a href="#Data.StyleOptions">Data.StyleOptions</a>)</code></td>
<td><code>None</code></td>
<td>Changes the style of a feature. These changes are applied on top of the style specified by <code>setStyle()</code>. Style properties set to null revert to the value specified via <code>setStyle()</code>.</td>
</tr>
<tr>
<td><code>remove(feature:<a href="#Data.Feature">Data.Feature</a>)</code></td>
<td><code>None</code></td>
<td>Removes a feature from the collection.</td>
</tr>
<tr>
<td><code>revertStyle(feature?:<a href="#Data.Feature">Data.Feature</a>)</code></td>
<td><code>None</code></td>
<td>Removes the effect of previous <code>overrideStyle()</code> calls. The style of the given feature reverts to the style specified by <code>setStyle()</code>. <p>If no feature is given, all features have their style reverted.</p></td>
</tr>
<tr>
<td><code>setMap(map:<a href="#Map">Map</a>)</code></td>
<td><code>None</code></td>
<td>Renders the features on the specified map. If map is set to null, the features will be removed from the map.</td>
</tr>
<tr>
<td><code>setStyle(style:<a href="#Data.StylingFunction">Data.StylingFunction</a>|<a href="#Data.StyleOptions">Data.StyleOptions</a>)</code></td>
<td><code>None</code></td>
<td>Sets the style for all features in the collection. Styles specified on a per-feature basis via <code>overrideStyle()</code> continue to apply. <p>Pass either an object with the desired style options, or a function that computes the style for each feature. The function will be called every time a feature's properties are updated.</p></td>
</tr>
</tbody>
</table><h3>Events</h3><table summary="class Data - Events" width="100%">
<thead>
<tr><th>Events</th>
<th>Arguments</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>addfeature</code></td>
<td><code><a href="#Data.AddFeatureEvent"><em>Data.AddFeatureEvent</em></a></code></td>
<td>This event is fired when a feature is added to the collection.</td>
</tr>
<tr>
<td><code>click</code></td>
<td><code><a href="#Data.MouseEvent"><em>Data.MouseEvent</em></a></code></td>
<td>This event is fired for a click on the geometry.</td>
</tr>
<tr>
<td><code>dblclick</code></td>
<td><code><a href="#Data.MouseEvent"><em>Data.MouseEvent</em></a></code></td>
<td>This event is fired for a double click on the geometry.</td>
</tr>
<tr>
<td><code>mousedown</code></td>
<td><code><a href="#Data.MouseEvent"><em>Data.MouseEvent</em></a></code></td>
<td>This event is fired for a mousedown on the geometry.</td>
</tr>
<tr>
<td><code>mouseout</code></td>
<td><code><a href="#Data.MouseEvent"><em>Data.MouseEvent</em></a></code></td>
<td>This event is fired when the mouse leaves the area of the geometry.</td>
</tr>
<tr>
<td><code>mouseover</code></td>
<td><code><a href="#Data.MouseEvent"><em>Data.MouseEvent</em></a></code></td>
<td>This event is fired when the mouse enters the area of the geometry.</td>
</tr>
<tr>
<td><code>mouseup</code></td>
<td><code><a href="#Data.MouseEvent"><em>Data.MouseEvent</em></a></code></td>
<td>This event is fired for a mouseup on the geometry.</td>
</tr>
<tr>
<td><code>removefeature</code></td>
<td><code><a href="#Data.RemoveFeatureEvent"><em>Data.RemoveFeatureEvent</em></a></code></td>
<td>This event is fired when a feature is removed from the collection.</td>
</tr>
<tr>
<td><code>removeproperty</code></td>
<td><code><a href="#Data.RemovePropertyEvent"><em>Data.RemovePropertyEvent</em></a></code></td>
<td>This event is fired when a feature's property is removed.</td>
</tr>
<tr>
<td><code>rightclick</code></td>
<td><code><a href="#Data.MouseEvent"><em>Data.MouseEvent</em></a></code></td>
<td>This event is fired for a rightclick on the geometry.</td>
</tr>
<tr>
<td><code>setgeometry</code></td>
<td><code><a href="#Data.SetGeometryEvent"><em>Data.SetGeometryEvent</em></a></code></td>
<td>This event is fired when a feature's geometry is set.</td>
</tr>
<tr>
<td><code>setproperty</code></td>
<td><code><a href="#Data.SetPropertyEvent"><em>Data.SetPropertyEvent</em></a></code></td>
<td>This event is fired when a feature's property is set.</td>
</tr>
</tbody>
</table>