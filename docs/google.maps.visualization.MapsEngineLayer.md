<h2 id="MapsEngineLayer">
google.maps.visualization.MapsEngineLayer
class
</h2><p>A <code>MapsEngineLayer</code> allows you to display data from <a href="https://mapsengine.google.com/">Google Maps Engine</a> or the <a href="http://www.google.com/gadgets/directory?synd=earth">Google Earth Gallery</a>.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCObject.md">MVCObject</a></code>.
</p><h3>Library</h3><p>visualization</p><h3>Constructor</h3><table summary="class MapsEngineLayer - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>MapsEngineLayer(options:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.visualization.MapsEngineLayerOptions.md"><em>MapsEngineLayerOptions</em></a>)</code></td>
<td>Creates a new instance of <code>MapsEngineLayer</code>.</td>
</tr>
</tbody>
</table><h3>Methods</h3><table summary="class MapsEngineLayer - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getLayerId()</code></td>
<td><code>string</code></td>
<td>Returns the ID of the Maps Engine layer being displayed, if set.</td>
</tr>
<tr>
<td><code>getLayerKey()</code></td>
<td><code>string</code></td>
<td>Returns the key of the layer to be displayed.</td>
</tr>
<tr>
<td><code>getMap()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a></code></td>
<td>Returns the map on which this layer is displayed.</td>
</tr>
<tr>
<td><code>getMapId()</code></td>
<td><code>string</code></td>
<td>Returns the ID of the Maps Engine map to which the layer belongs.</td>
</tr>
<tr>
<td><code>getOpacity()</code></td>
<td><code>number</code></td>
<td>Returns the opacity of the layer. Applies only to imagery layers.</td>
</tr>
<tr>
<td><code>getProperties()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.visualization.MapsEngineLayerProperties.md">MapsEngineLayerProperties</a></code></td>
<td>Returns properties of the Maps Engine layer, which are available once the layer has loaded.</td>
</tr>
<tr>
<td><code>getStatus()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.visualization.MapsEngineStatus.md">MapsEngineStatus</a></code></td>
<td>Returns the status of the layer, which is available once the requested layer has loaded.</td>
</tr>
<tr>
<td><code>getZIndex()</code></td>
<td><code>number</code></td>
<td>Returns the z-index.</td>
</tr>
<tr>
<td><code>setLayerId(layerId:string)</code></td>
<td><code>None</code></td>
<td>Sets the ID of a single Maps Engine layer to display. Changing this value will cause the layer to be redrawn.</td>
</tr>
<tr>
<td><code>setLayerKey(layerKey:string)</code></td>
<td><code>None</code></td>
<td>Sets the key of the layer to be displayed. Maps Engine layer keys are only unique within a single map, and can be changed by map owners. Changing this value will cause the layer to be redrawn.</td>
</tr>
<tr>
<td><code>setMap(map:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a>)</code></td>
<td><code>None</code></td>
<td>Renders the layer on the specified map. If map is set to null, the layer will be removed.</td>
</tr>
<tr>
<td><code>setMapId(mapId:string)</code></td>
<td><code>None</code></td>
<td>Sets the ID of the Maps Engine map that contains the layer with the given <code>layerKey</code>. Changing this value will cause the layer to be redrawn.</td>
</tr>
<tr>
<td><code>setOpacity(opacity:number)</code></td>
<td><code>None</code></td>
<td>Sets the opacity of the layer, expressed as a number between 0 and 1. Applies only to imagery layers. Note: Be careful of setting this option for other layer types, as it may become effective in the future.</td>
</tr>
<tr>
<td><code>setOptions(options:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.visualization.MapsEngineLayerOptions.md"><em>MapsEngineLayerOptions</em></a>)</code></td>
<td><code>None</code></td>
<td></td>
</tr>
<tr>
<td><code>setZIndex(zIndex:number)</code></td>
<td><code>None</code></td>
<td>Sets the z-index. Only applies to Vector and KML layers.</td>
</tr>
</tbody>
</table><h3>Events</h3><table summary="class MapsEngineLayer - Events" width="100%">
<thead>
<tr><th>Events</th>
<th>Arguments</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>click</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.visualization.MapsEngineMouseEvent.md"><em>MapsEngineMouseEvent</em></a></code></td>
<td>This event is fired when a feature in the layer is clicked.</td>
</tr>
<tr>
<td><code>properties_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the layer has finished loading, and the layer's properties are available for reading.</td>
</tr>
<tr>
<td><code>status_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the layer has finished loading, and the status is available to determine if the layer loaded successfully.</td>
</tr>
</tbody>
</table>