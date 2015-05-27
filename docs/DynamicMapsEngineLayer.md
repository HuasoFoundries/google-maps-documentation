<h2 id="DynamicMapsEngineLayer">
DynamicMapsEngineLayer
class
</h2><p>
<code><span itemprop="path">google.maps.visualization</span>.<span itemprop="name">DynamicMapsEngineLayer</span></code>
class
</p><p>A <code>DynamicMapsEngineLayer</code> allows you to display data from <a href="https://mapsengine.google.com/">Google Maps Engine</a> or the <a href="http://www.google.com/gadgets/directory?synd=earth">Google Earth Gallery</a>.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><h4>Library</h4><p>visualization</p><table class="constructors responsive" summary="class DynamicMapsEngineLayer - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code>DynamicMapsEngineLayer(options:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DynamicMapsEngineLayerOptions.md"><em>DynamicMapsEngineLayerOptions</em></a>)</code></td>
<td>Creates a new instance of <code>DynamicMapsEngineLayer</code>.</td>
</tr>
</tbody>
</table><table class="methods responsive" summary="class DynamicMapsEngineLayer - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code>getFeatureStyle(featureId:string)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/FeatureStyle.md">FeatureStyle</a></code></div>
<div class="desc">Returns the style for the given feature, with which individual style properties can be retrieved or set.</div></td>
</tr>
<tr>
<td><code>getLayerId()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the ID of the Maps Engine layer being displayed, if set.</div></td>
</tr>
<tr>
<td><code>getLayerKey()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the key of the layer to be displayed.</div></td>
</tr>
<tr>
<td><code>getMap()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc">Returns the map on which this layer is displayed.</div></td>
</tr>
<tr>
<td><code>getMapId()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the ID of the Maps Engine map to which the layer belongs.</div></td>
</tr>
<tr>
<td><code>getOpacity()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the opacity of the layer. Applies only to imagery layers.</div></td>
</tr>
<tr>
<td><code>getStatus()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapsEngineStatus.md">MapsEngineStatus</a></code></div>
<div class="desc">Returns the status of the layer, set once the requested layer has loaded.</div></td>
</tr>
<tr>
<td><code>setLayerId(layerId:string)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the ID of a single Maps Engine layer to display.</div></td>
</tr>
<tr>
<td><code>setLayerKey(layerKey:string)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the key of the layer to be displayed. Maps Engine Layer Keys are only unique within a single map, and can be changed by map owners. Changing this value will cause the layer to be redrawn.</div></td>
</tr>
<tr>
<td><code>setMap(map:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a>)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Renders the layer on the specified map. If map is set to null, the layer will be removed.</div></td>
</tr>
<tr>
<td><code>setMapId(mapId:string)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the ID of the Maps Engine map to which the layer belongs. Changing this value will cause the layer to be redrawn.</div></td>
</tr>
<tr>
<td><code>setOpacity(opacity:number)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the opacity of the layer, expressed as a number between 0 and 1. Applies only to imagery layers. Note: Be careful of setting this option for other layer types, as it may become effective in the future.</div></td>
</tr>
<tr>
<td><code>setOptions(options:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DynamicMapsEngineLayerOptions.md"><em>DynamicMapsEngineLayerOptions</em></a>)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
</tbody>
</table><table class="details responsive" summary="class DynamicMapsEngineLayer - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr>
<td><code>click</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DynamicMapsEngineMouseEvent.md"><em>DynamicMapsEngineMouseEvent</em></a></code></div>
<div class="desc">This event is fired when a feature in the layer is clicked.</div></td>
</tr>
<tr>
<td><code>dblclick</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DynamicMapsEngineMouseEvent.md"><em>DynamicMapsEngineMouseEvent</em></a></code></div>
<div class="desc">This event is fired when a feature in the layer is double clicked.</div></td>
</tr>
<tr>
<td><code>mousedown</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DynamicMapsEngineMouseEvent.md"><em>DynamicMapsEngineMouseEvent</em></a></code></div>
<div class="desc">This event is fired for a mousedown on a feature in the layer.</div></td>
</tr>
<tr>
<td><code>mousemove</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DynamicMapsEngineMouseEvent.md"><em>DynamicMapsEngineMouseEvent</em></a></code></div>
<div class="desc">This event is fired when the mouse moves over a feature in the layer.</div></td>
</tr>
<tr>
<td><code>mouseout</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DynamicMapsEngineMouseEvent.md"><em>DynamicMapsEngineMouseEvent</em></a></code></div>
<div class="desc">This event is fired when the mouse leaves a feature in the layer.</div></td>
</tr>
<tr>
<td><code>mouseover</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DynamicMapsEngineMouseEvent.md"><em>DynamicMapsEngineMouseEvent</em></a></code></div>
<div class="desc">This event is fired when the mouse enters a feature in the layer.</div></td>
</tr>
<tr>
<td><code>mouseup</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DynamicMapsEngineMouseEvent.md"><em>DynamicMapsEngineMouseEvent</em></a></code></div>
<div class="desc">This event is fired for a mouseup on a feature in the layer.</div></td>
</tr>
<tr>
<td><code>properties_changed</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the layer's properties are available for reading.</div></td>
</tr>
<tr>
<td><code>rightclick</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DynamicMapsEngineMouseEvent.md"><em>DynamicMapsEngineMouseEvent</em></a></code></div>
<div class="desc">This event is fired for a rightclick on a feature in the layer.</div></td>
</tr>
<tr>
<td><code>status_changed</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the layer has finished loading, and the status is available to determine if the layer loaded successfully.</div></td>
</tr>
</tbody>
</table>