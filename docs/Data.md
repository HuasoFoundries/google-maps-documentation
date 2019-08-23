
<h2 id="Data">Data class</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Data</span></code>
class
</p>
<p>A layer for displaying geospatial data. Points, line-strings and polygons can be displayed. </p><p> Every <code>Map</code> has a <code>Data</code> object by default, so most of the time there is no need to construct one. For example: </p><pre><div class="devsite-code-button-wrapper"><div class="devsite-code-button gc-analytics-event material-icons devsite-dark-code-button" data-category="Site-Wide Custom Events" data-label="Dark Code Toggle" track-type="exampleCode" track-name="darkCodeToggle" tabindex="0" role="button" data-tooltip-align="b,c" data-tooltip="Dark code theme" aria-label="Dark code theme" data-title="Dark code theme"></div></div> var myMap = new google.maps.Map(...);<br> myMap.data.addGeoJson(...);<br> myMap.data.setStyle(...); </pre> The <code>Data</code> object is a collection of <a href="Data.Feature.md"><code>Features</code></a>.<p></p>
<p>This class extends
<code><a href="MVCObject.md">MVCObject</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Data - Constructor">
<thead>
<tr><th colspan="2" id="Data.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><a class="secret-link" href="#Data.constructor"><span>Data</span></a></code></td>
<td><div><code>Data([options])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>options</code>:&nbsp; <code><a href="Data.DataOptions.md">Data.DataOptions</a> <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc">Creates an empty collection, with the given <code>DataOptions</code>.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class Data - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Data.add">
<td itemprop="property"><code><a class="secret-link" href="#Data.add"><span>add</span></a></code></td>
<td><div><code>add([feature])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>feature</code>:&nbsp; <code><a href="Data.Feature.md">Data.Feature</a>|<a href="Data.FeatureOptions.md">Data.FeatureOptions</a> <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="Data.Feature.md">Data.Feature</a></code></div>
<div class="desc">Adds a feature to the collection, and returns the added feature. <p> If the feature has an ID, it will replace any existing feature in the collection with the same ID. If no feature is given, a new feature will be created with null geometry and no properties. If <code>FeatureOptions</code> are given, a new feature will be created with the specified properties. </p><p> Note that the IDs <code>1234</code> and <code>'1234'</code> are equivalent. Adding a feature with ID <code>1234</code> will replace a feature with ID <code>'1234'</code>, and vice versa.</p></div></td>
</tr>
<tr id="Data.addGeoJson">
<td itemprop="property"><code><a class="secret-link" href="#Data.addGeoJson"><span>addGeoJson</span></a></code></td>
<td><div><code>addGeoJson(geoJson[, options])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>geoJson</code>:&nbsp; <code>Object</code></li>
<li><code>options</code>:&nbsp; <code><a href="Data.GeoJsonOptions.md">Data.GeoJsonOptions</a> <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>Array&lt;<a href="Data.Feature.md">Data.Feature</a>&gt;</code></div>
<div class="desc">Adds GeoJSON features to the collection. Give this method a parsed JSON. The imported features are returned. Throws an exception if the GeoJSON could not be imported.</div></td>
</tr>
<tr id="Data.contains">
<td itemprop="property"><code><a class="secret-link" href="#Data.contains"><span>contains</span></a></code></td>
<td><div><code>contains(feature)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>feature</code>:&nbsp; <code><a href="Data.Feature.md">Data.Feature</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Checks whether the given feature is in the collection.</div></td>
</tr>
<tr id="Data.forEach">
<td itemprop="property"><code><a class="secret-link" href="#Data.forEach"><span>forEach</span></a></code></td>
<td><div><code>forEach(callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>callback</code>:&nbsp; <code>function(<a href="Data.Feature.md">Data.Feature</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Repeatedly invokes the given function, passing a feature in the collection to the function on each invocation. The order of iteration through the features is undefined.</div></td>
</tr>
<tr id="Data.getControlPosition">
<td itemprop="property"><code><a class="secret-link" href="#Data.getControlPosition"><span>getControlPosition</span></a></code></td>
<td><div><code>getControlPosition()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="ControlPosition.md">ControlPosition</a></code></div>
<div class="desc">Returns the position of the drawing controls on the map.</div></td>
</tr>
<tr id="Data.getControls">
<td itemprop="property"><code><a class="secret-link" href="#Data.getControls"><span>getControls</span></a></code></td>
<td><div><code>getControls()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">Returns which drawing modes are available for the user to select, in the order they are displayed. This does not include the null drawing mode, which is added by default. Possible drawing modes are <code>"Point"</code>, <code>"LineString"</code> or <code>"Polygon"</code>.</div></td>
</tr>
<tr id="Data.getDrawingMode">
<td itemprop="property"><code><a class="secret-link" href="#Data.getDrawingMode"><span>getDrawingMode</span></a></code></td>
<td><div><code>getDrawingMode()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Returns the current drawing mode of the given Data layer. A drawing mode of null means that the user can interact with the map as normal, and clicks do not draw anything. Possible drawing modes are <code>null</code>, <code>"Point"</code>, <code>"LineString"</code> or <code>"Polygon"</code>.</div></td>
</tr>
<tr id="Data.getFeatureById">
<td itemprop="property"><code><a class="secret-link" href="#Data.getFeatureById"><span>getFeatureById</span></a></code></td>
<td><div><code>getFeatureById(id)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>id</code>:&nbsp; <code>number|string</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="Data.Feature.md">Data.Feature</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Returns the feature with the given ID, if it exists in the collection. Otherwise returns <code>undefined</code>. <p> Note that the IDs <code>1234</code> and <code>'1234'</code> are equivalent. Either can be used to look up the same feature.</p></div></td>
</tr>
<tr id="Data.getMap">
<td itemprop="property"><code><a class="secret-link" href="#Data.getMap"><span>getMap</span></a></code></td>
<td><div><code>getMap()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="Map.md">Map</a></code></div>
<div class="desc">Returns the map on which the features are displayed.</div></td>
</tr>
<tr id="Data.getStyle">
<td itemprop="property"><code><a class="secret-link" href="#Data.getStyle"><span>getStyle</span></a></code></td>
<td><div><code>getStyle()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="Data.StylingFunction.md">Data.StylingFunction</a>|<a href="Data.StyleOptions.md">Data.StyleOptions</a></code></div>
<div class="desc">Gets the style for all features in the collection.</div></td>
</tr>
<tr id="Data.loadGeoJson">
<td itemprop="property"><code><a class="secret-link" href="#Data.loadGeoJson"><span>loadGeoJson</span></a></code></td>
<td><div><code>loadGeoJson(url[, options, callback])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>url</code>:&nbsp; <code>string</code></li>
<li><code>options</code>:&nbsp; <code><a href="Data.GeoJsonOptions.md">Data.GeoJsonOptions</a> <span class="optional-type-annotation">optional</span></code></li>
<li><code>callback</code>:&nbsp; <code>function(Array&lt;<a href="Data.Feature.md">Data.Feature</a>&gt;) <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Loads GeoJSON from a URL, and adds the features to the collection. <p> NOTE: The GeoJSON is fetched using XHR, and may not work cross-domain. If you have issues, we recommend you fetch the GeoJSON using your choice of AJAX library, and then call <code>addGeoJson()</code>.</p></div></td>
</tr>
<tr id="Data.overrideStyle">
<td itemprop="property"><code><a class="secret-link" href="#Data.overrideStyle"><span>overrideStyle</span></a></code></td>
<td><div><code>overrideStyle(feature, style)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>feature</code>:&nbsp; <code><a href="Data.Feature.md">Data.Feature</a></code></li>
<li><code>style</code>:&nbsp; <code><a href="Data.StyleOptions.md">Data.StyleOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Changes the style of a feature. These changes are applied on top of the style specified by <code>setStyle()</code>. Style properties set to null revert to the value specified via <code>setStyle()</code>.</div></td>
</tr>
<tr id="Data.remove">
<td itemprop="property"><code><a class="secret-link" href="#Data.remove"><span>remove</span></a></code></td>
<td><div><code>remove(feature)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>feature</code>:&nbsp; <code><a href="Data.Feature.md">Data.Feature</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Removes a feature from the collection.</div></td>
</tr>
<tr id="Data.revertStyle">
<td itemprop="property"><code><a class="secret-link" href="#Data.revertStyle"><span>revertStyle</span></a></code></td>
<td><div><code>revertStyle([feature])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>feature</code>:&nbsp; <code><a href="Data.Feature.md">Data.Feature</a> <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Removes the effect of previous <code>overrideStyle()</code> calls. The style of the given feature reverts to the style specified by <code>setStyle()</code>. <p>If no feature is given, all features have their style reverted.</p></div></td>
</tr>
<tr id="Data.setControlPosition">
<td itemprop="property"><code><a class="secret-link" href="#Data.setControlPosition"><span>setControlPosition</span></a></code></td>
<td><div><code>setControlPosition(controlPosition)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>controlPosition</code>:&nbsp; <code><a href="ControlPosition.md">ControlPosition</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the position of the drawing controls on the map.</div></td>
</tr>
<tr id="Data.setControls">
<td itemprop="property"><code><a class="secret-link" href="#Data.setControls"><span>setControls</span></a></code></td>
<td><div><code>setControls(controls)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>controls</code>:&nbsp; <code>Array&lt;string&gt;</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets which drawing modes are available for the user to select, in the order they are displayed. This should not include the null drawing mode, which is added by default. If null, drawing controls are disabled and not displayed. Possible drawing modes are <code>"Point"</code>, <code>"LineString"</code> or <code>"Polygon"</code>.</div></td>
</tr>
<tr id="Data.setDrawingMode">
<td itemprop="property"><code><a class="secret-link" href="#Data.setDrawingMode"><span>setDrawingMode</span></a></code></td>
<td><div><code>setDrawingMode(drawingMode)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>drawingMode</code>:&nbsp; <code>string <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the current drawing mode of the given Data layer. A drawing mode of null means that the user can interact with the map as normal, and clicks do not draw anything. Possible drawing modes are <code>null</code>, <code>"Point"</code>, <code>"LineString"</code> or <code>"Polygon"</code>.</div></td>
</tr>
<tr id="Data.setMap">
<td itemprop="property"><code><a class="secret-link" href="#Data.setMap"><span>setMap</span></a></code></td>
<td><div><code>setMap(map)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>map</code>:&nbsp; <code><a href="Map.md">Map</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Renders the features on the specified map. If map is set to null, the features will be removed from the map.</div></td>
</tr>
<tr id="Data.setStyle">
<td itemprop="property"><code><a class="secret-link" href="#Data.setStyle"><span>setStyle</span></a></code></td>
<td><div><code>setStyle(style)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>style</code>:&nbsp; <code><a href="Data.StylingFunction.md">Data.StylingFunction</a>|<a href="Data.StyleOptions.md">Data.StyleOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the style for all features in the collection. Styles specified on a per-feature basis via <code>overrideStyle()</code> continue to apply. <p>Pass either an object with the desired style options, or a function that computes the style for each feature. The function will be called every time a feature's properties are updated.</p></div></td>
</tr>
<tr id="Data.toGeoJson">
<td itemprop="property"><code><a class="secret-link" href="#Data.toGeoJson"><span>toGeoJson</span></a></code></td>
<td><div><code>toGeoJson(callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>callback</code>:&nbsp; <code>function(Object)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Exports the features in the collection to a GeoJSON object.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="details responsive" summary="class Data - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="Data.addfeature">
<td itemprop="property"><code><a class="secret-link" href="#Data.addfeature"><span>addfeature</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="Data.AddFeatureEvent.md">Data.AddFeatureEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when a feature is added to the collection.</div></td>
</tr>
<tr id="Data.click">
<td itemprop="property"><code><a class="secret-link" href="#Data.click"><span>click</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="Data.MouseEvent.md">Data.MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired for a click on the geometry.</div></td>
</tr>
<tr id="Data.dblclick">
<td itemprop="property"><code><a class="secret-link" href="#Data.dblclick"><span>dblclick</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="Data.MouseEvent.md">Data.MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired for a double click on the geometry.</div></td>
</tr>
<tr id="Data.mousedown">
<td itemprop="property"><code><a class="secret-link" href="#Data.mousedown"><span>mousedown</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="Data.MouseEvent.md">Data.MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired for a mousedown on the geometry.</div></td>
</tr>
<tr id="Data.mouseout">
<td itemprop="property"><code><a class="secret-link" href="#Data.mouseout"><span>mouseout</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="Data.MouseEvent.md">Data.MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the mouse leaves the area of the geometry.</div></td>
</tr>
<tr id="Data.mouseover">
<td itemprop="property"><code><a class="secret-link" href="#Data.mouseover"><span>mouseover</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="Data.MouseEvent.md">Data.MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the mouse enters the area of the geometry.</div></td>
</tr>
<tr id="Data.mouseup">
<td itemprop="property"><code><a class="secret-link" href="#Data.mouseup"><span>mouseup</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="Data.MouseEvent.md">Data.MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired for a mouseup on the geometry.</div></td>
</tr>
<tr id="Data.removefeature">
<td itemprop="property"><code><a class="secret-link" href="#Data.removefeature"><span>removefeature</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="Data.RemoveFeatureEvent.md">Data.RemoveFeatureEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when a feature is removed from the collection.</div></td>
</tr>
<tr id="Data.removeproperty">
<td itemprop="property"><code><a class="secret-link" href="#Data.removeproperty"><span>removeproperty</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="Data.RemovePropertyEvent.md">Data.RemovePropertyEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when a feature's property is removed.</div></td>
</tr>
<tr id="Data.rightclick">
<td itemprop="property"><code><a class="secret-link" href="#Data.rightclick"><span>rightclick</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="Data.MouseEvent.md">Data.MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired for a rightclick on the geometry.</div></td>
</tr>
<tr id="Data.setgeometry">
<td itemprop="property"><code><a class="secret-link" href="#Data.setgeometry"><span>setgeometry</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="Data.SetGeometryEvent.md">Data.SetGeometryEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when a feature's geometry is set.</div></td>
</tr>
<tr id="Data.setproperty">
<td itemprop="property"><code><a class="secret-link" href="#Data.setproperty"><span>setproperty</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="Data.SetPropertyEvent.md">Data.SetPropertyEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when a feature's property is set.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
