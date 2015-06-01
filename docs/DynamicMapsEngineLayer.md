<h2 id="DynamicMapsEngineLayer"> DynamicMapsEngineLayer class </h2><p>
<code><span itemprop="path">google.maps.visualization</span>.<span itemprop="name">DynamicMapsEngineLayer</span></code>
class
</p><p>A <code>DynamicMapsEngineLayer</code> allows you to display data from <a href="https://mapsengine.google.com/">Google Maps Engine</a> or the <a href="http://www.google.com/gadgets/directory?synd=earth">Google Earth Gallery</a>.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><h4>Library</h4><p>visualization</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class DynamicMapsEngineLayer - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>DynamicMapsEngineLayer(<wbr>options:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DynamicMapsEngineLayerOptions.md"><em><span>DynamicMapsEngineLayerOptions</span></em></a><span>)</span></code></td>
<td>Creates a new instance of <code><span>DynamicMapsEngineLayer</span></code>.</td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class DynamicMapsEngineLayer - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>getFeatureStyle(<wbr>featureId:string)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/FeatureStyle.md">FeatureStyle</a></code></div>
<div class="desc">Returns the style for the given feature, with which individual style properties can be retrieved or set.</div></td>
</tr>
<tr>
<td><code><span>getLayerId()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the ID of the Maps Engine layer being displayed, if set.</div></td>
</tr>
<tr>
<td><code><span>getLayerKey()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the key of the layer to be displayed.</div></td>
</tr>
<tr>
<td><code><span>getMap()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc">Returns the map on which this layer is displayed.</div></td>
</tr>
<tr>
<td><code><span>getMapId()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the ID of the Maps Engine map to which the layer belongs.</div></td>
</tr>
<tr>
<td><code><span>getOpacity()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the opacity of the layer. Applies only to imagery layers.</div></td>
</tr>
<tr>
<td><code><span>getStatus()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapsEngineStatus.md">MapsEngineStatus</a></code></div>
<div class="desc">Returns the status of the layer, set once the requested layer has loaded.</div></td>
</tr>
<tr>
<td><code><span>setLayerId(<wbr>layerId:string)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the ID of a single Maps Engine layer to display.</div></td>
</tr>
<tr>
<td><code><span>setLayerKey(<wbr>layerKey:string)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the key of the layer to be displayed. Maps Engine Layer Keys are only unique within a single map, and can be changed by map owners. Changing this value will cause the layer to be redrawn.</div></td>
</tr>
<tr>
<td><code><span>setMap(<wbr>map:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md"><span>Map</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Renders the layer on the specified map. If map is set to null, the layer will be removed.</div></td>
</tr>
<tr>
<td><code><span>setMapId(<wbr>mapId:string)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the ID of the Maps Engine map to which the layer belongs. Changing this value will cause the layer to be redrawn.</div></td>
</tr>
<tr>
<td><code><span>setOpacity(<wbr>opacity:number)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the opacity of the layer, expressed as a number between 0 and 1. Applies only to imagery layers. Note: Be careful of setting this option for other layer types, as it may become effective in the future.</div></td>
</tr>
<tr>
<td><code><span>setOptions(<wbr>options:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DynamicMapsEngineLayerOptions.md"><em><span>DynamicMapsEngineLayerOptions</span></em></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="details responsive" summary="class DynamicMapsEngineLayer - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>click</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DynamicMapsEngineMouseEvent.md"><em>DynamicMapsEngineMouseEvent</em></a></code></div>
<div class="desc">This event is fired when a feature in the layer is clicked.</div></td>
</tr>
<tr>
<td><code><span>dblclick</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DynamicMapsEngineMouseEvent.md"><em>DynamicMapsEngineMouseEvent</em></a></code></div>
<div class="desc">This event is fired when a feature in the layer is double clicked.</div></td>
</tr>
<tr>
<td><code><span>mousedown</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DynamicMapsEngineMouseEvent.md"><em>DynamicMapsEngineMouseEvent</em></a></code></div>
<div class="desc">This event is fired for a mousedown on a feature in the layer.</div></td>
</tr>
<tr>
<td><code><span>mousemove</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DynamicMapsEngineMouseEvent.md"><em>DynamicMapsEngineMouseEvent</em></a></code></div>
<div class="desc">This event is fired when the mouse moves over a feature in the layer.</div></td>
</tr>
<tr>
<td><code><span>mouseout</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DynamicMapsEngineMouseEvent.md"><em>DynamicMapsEngineMouseEvent</em></a></code></div>
<div class="desc">This event is fired when the mouse leaves a feature in the layer.</div></td>
</tr>
<tr>
<td><code><span>mouseover</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DynamicMapsEngineMouseEvent.md"><em>DynamicMapsEngineMouseEvent</em></a></code></div>
<div class="desc">This event is fired when the mouse enters a feature in the layer.</div></td>
</tr>
<tr>
<td><code><span>mouseup</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DynamicMapsEngineMouseEvent.md"><em>DynamicMapsEngineMouseEvent</em></a></code></div>
<div class="desc">This event is fired for a mouseup on a feature in the layer.</div></td>
</tr>
<tr>
<td><code><span>properties_changed</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the layer's properties are available for reading.</div></td>
</tr>
<tr>
<td><code><span>rightclick</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DynamicMapsEngineMouseEvent.md"><em>DynamicMapsEngineMouseEvent</em></a></code></div>
<div class="desc">This event is fired for a rightclick on a feature in the layer.</div></td>
</tr>
<tr>
<td><code><span>status_changed</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the layer has finished loading, and the status is available to determine if the layer loaded successfully.</div></td>
</tr>
</tbody>
</table></div>