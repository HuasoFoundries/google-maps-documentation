<h2 id="Data"> Data class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Data</span></code>
class
</p><p>A layer for displaying geospatial data. Points, line-strings and polygons can be displayed. </p><p> Every <code>Map</code> has a <code>Data</code> object by default, so most of the time there is no need to construct one. For example: </p><pre> var myMap = new google.maps.Map(...);<br> myMap.data.addGeoJson(...);<br> myMap.data.setStyle(...); </pre><code>Data</code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Feature.md"><code>Features</code></a><p></p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Data - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>Data(<wbr>options?:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.DataOptions.md"><span>Data.<wbr>DataOptions</span></a><span>)</span></code></td>
<td>Creates an empty collection, with the given <code><span>DataOptions</span></code>.</td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class Data - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>add(<wbr>feature?:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Feature.md"><span>Data.<wbr>Feature</span></a><span>|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.FeatureOptions.md"><span>Data.<wbr>FeatureOptions</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Feature.md">Data.Feature</a></code></div>
<div class="desc">Adds a feature to the collection, and returns the added feature. <p> If the feature has an ID, it will replace any existing feature in the collection with the same ID. If no feature is given, a new feature will be created with null geometry and no properties. If <code>FeatureOptions</code> are given, a new feature will be created with the specified properties. </p><p> Note that the IDs <code>1234</code> and <code>'1234'</code> are equivalent. Adding a feature with ID <code>1234</code> will replace a feature with ID <code>'1234'</code>, and vice versa.</p></div></td>
</tr>
<tr>
<td><code><span>addGeoJson(<wbr>geoJson:Object,<wbr> options?:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.GeoJsonOptions.md"><span>Data.<wbr>GeoJsonOptions</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Feature.md">Data.Feature</a>&gt;</code></div>
<div class="desc">Adds GeoJSON features to the collection. Give this method a parsed JSON. The imported features are returned. Throws an exception if the GeoJSON could not be imported.</div></td>
</tr>
<tr>
<td><code><span>contains(<wbr>feature:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Feature.md"><span>Data.<wbr>Feature</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Checks whether the given feature is in the collection.</div></td>
</tr>
<tr>
<td><code><span>forEach(<wbr>callback:function(<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Feature.md"><span>Data.<wbr>Feature</span></a><span>))</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Repeatedly invokes the given function, passing a feature in the collection to the function on each invocation. The order of iteration through the features is undefined.</div></td>
</tr>
<tr>
<td><code><span>getControlPosition()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ControlPosition.md">ControlPosition</a></code></div>
<div class="desc">Returns the position of the drawing controls on the map.</div></td>
</tr>
<tr>
<td><code><span>getControls()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">Returns which drawing modes are available for the user to select, in the order they are displayed. This does not include the null drawing mode, which is added by default. Possible drawing modes are <code>"Point"</code>, <code>"LineString"</code> or <code>"Polygon"</code>.</div></td>
</tr>
<tr>
<td><code><span>getDrawingMode()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the current drawing mode of the given Data layer. A drawing mode of null means that the user can interact with the map as normal, and clicks do not draw anything. Possible drawing modes are <code>null</code>, <code>"Point"</code>, <code>"LineString"</code> or <code>"Polygon"</code>.</div></td>
</tr>
<tr>
<td><code><span>getFeatureById(<wbr>id:number|<wbr>string)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Feature.md">Data.Feature</a></code></div>
<div class="desc">Returns the feature with the given ID, if it exists in the collection. Otherwise returns <code>undefined</code>. <p> Note that the IDs <code>1234</code> and <code>'1234'</code> are equivalent. Either can be used to look up the same feature.</p></div></td>
</tr>
<tr>
<td><code><span>getMap()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc">Returns the map on which the features are displayed.</div></td>
</tr>
<tr>
<td><code><span>getStyle()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.StylingFunction.md">Data.StylingFunction</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.StyleOptions.md">Data.StyleOptions</a></code></div>
<div class="desc">Gets the style for all features in the collection.</div></td>
</tr>
<tr>
<td><code><span>loadGeoJson(<wbr>url:string,<wbr> options?:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.GeoJsonOptions.md"><span>Data.<wbr>GeoJsonOptions</span></a><span>,<wbr> callback?:function(<wbr>Array&lt;</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Feature.md"><span>Data.<wbr>Feature</span></a><span>&gt;))</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Loads GeoJSON from a URL, and adds the features to the collection. <p></p></div></td>
</tr>
<tr>
<td><code><span>overrideStyle(<wbr>feature:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Feature.md"><span>Data.<wbr>Feature</span></a><span>,<wbr> style:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.StyleOptions.md"><span>Data.<wbr>StyleOptions</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Changes the style of a feature. These changes are applied on top of the style specified by <code>setStyle()</code>. Style properties set to null revert to the value specified via <code>setStyle()</code>.</div></td>
</tr>
<tr>
<td><code><span>remove(<wbr>feature:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Feature.md"><span>Data.<wbr>Feature</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Removes a feature from the collection.</div></td>
</tr>
<tr>
<td><code><span>revertStyle(<wbr>feature?:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Feature.md"><span>Data.<wbr>Feature</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Removes the effect of previous <code>overrideStyle()</code> calls. The style of the given feature reverts to the style specified by <code>setStyle()</code>. <p>If no feature is given, all features have their style reverted.</p></div></td>
</tr>
<tr>
<td><code><span>setControlPosition(<wbr>controlPosition:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ControlPosition.md"><span>ControlPosition</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the position of the drawing controls on the map.</div></td>
</tr>
<tr>
<td><code><span>setControls(<wbr>controls:Array&lt;string&gt;)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets which drawing modes are available for the user to select, in the order they are displayed. This should not include the null drawing mode, which is added by default. If null, drawing controls are disabled and not displayed. Possible drawing modes are <code>"Point"</code>, <code>"LineString"</code> or <code>"Polygon"</code>.</div></td>
</tr>
<tr>
<td><code><span>setDrawingMode(<wbr>drawingMode:string)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the current drawing mode of the given Data layer. A drawing mode of null means that the user can interact with the map as normal, and clicks do not draw anything. Possible drawing modes are <code>null</code>, <code>"Point"</code>, <code>"LineString"</code> or <code>"Polygon"</code>.</div></td>
</tr>
<tr>
<td><code><span>setMap(<wbr>map:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md"><span>Map</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Renders the features on the specified map. If map is set to null, the features will be removed from the map.</div></td>
</tr>
<tr>
<td><code><span>setStyle(<wbr>style:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.StylingFunction.md"><span>Data.<wbr>StylingFunction</span></a><span>|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.StyleOptions.md"><span>Data.<wbr>StyleOptions</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the style for all features in the collection. Styles specified on a per-feature basis via <code>overrideStyle()</code> continue to apply. <p>Pass either an object with the desired style options, or a function that computes the style for each feature. The function will be called every time a feature's properties are updated.</p></div></td>
</tr>
<tr>
<td><code><span>toGeoJson(<wbr>callback:function(<wbr>Object))</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Exports the features in the collection to a GeoJSON object.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="details responsive" summary="class Data - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>addfeature</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.AddFeatureEvent.md"><em>Data.AddFeatureEvent</em></a></code></div>
<div class="desc">This event is fired when a feature is added to the collection.</div></td>
</tr>
<tr>
<td><code><span>click</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.MouseEvent.md"><em>Data.MouseEvent</em></a></code></div>
<div class="desc">This event is fired for a click on the geometry.</div></td>
</tr>
<tr>
<td><code><span>dblclick</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.MouseEvent.md"><em>Data.MouseEvent</em></a></code></div>
<div class="desc">This event is fired for a double click on the geometry.</div></td>
</tr>
<tr>
<td><code><span>mousedown</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.MouseEvent.md"><em>Data.MouseEvent</em></a></code></div>
<div class="desc">This event is fired for a mousedown on the geometry.</div></td>
</tr>
<tr>
<td><code><span>mouseout</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.MouseEvent.md"><em>Data.MouseEvent</em></a></code></div>
<div class="desc">This event is fired when the mouse leaves the area of the geometry.</div></td>
</tr>
<tr>
<td><code><span>mouseover</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.MouseEvent.md"><em>Data.MouseEvent</em></a></code></div>
<div class="desc">This event is fired when the mouse enters the area of the geometry.</div></td>
</tr>
<tr>
<td><code><span>mouseup</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.MouseEvent.md"><em>Data.MouseEvent</em></a></code></div>
<div class="desc">This event is fired for a mouseup on the geometry.</div></td>
</tr>
<tr>
<td><code><span>removefeature</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.RemoveFeatureEvent.md"><em>Data.RemoveFeatureEvent</em></a></code></div>
<div class="desc">This event is fired when a feature is removed from the collection.</div></td>
</tr>
<tr>
<td><code><span>removeproperty</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.RemovePropertyEvent.md"><em>Data.RemovePropertyEvent</em></a></code></div>
<div class="desc">This event is fired when a feature's property is removed.</div></td>
</tr>
<tr>
<td><code><span>rightclick</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.MouseEvent.md"><em>Data.MouseEvent</em></a></code></div>
<div class="desc">This event is fired for a rightclick on the geometry.</div></td>
</tr>
<tr>
<td><code><span>setgeometry</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.SetGeometryEvent.md"><em>Data.SetGeometryEvent</em></a></code></div>
<div class="desc">This event is fired when a feature's geometry is set.</div></td>
</tr>
<tr>
<td><code><span>setproperty</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.SetPropertyEvent.md"><em>Data.SetPropertyEvent</em></a></code></div>
<div class="desc">This event is fired when a feature's property is set.</div></td>
</tr>
</tbody>
</table></div>