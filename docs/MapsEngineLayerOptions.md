<h2 id="MapsEngineLayerOptions"> MapsEngineLayerOptions object specification </h2><p>
<code><span itemprop="path">google.maps.visualization</span>.<span itemprop="name">MapsEngineLayerOptions</span></code>
object specification
</p><p>This object defines the properties that can be set on a <code>MapsEngineLayer</code> object. <code>layerId</code>, or both <code>mapId</code> and <code>layerKey</code>, must be set.</p><h4>Library</h4><p>visualization</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface MapsEngineLayerOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>accessToken</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The authentication token returned by an OAuth 2.0 authentication request.</div></td>
</tr>
<tr>
<td><code><span>clickable</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If true, the layer receives mouse events. Default value is true.</div></td>
</tr>
<tr>
<td><code><span>fitBounds</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If this option is set to true, the map viewport is centered and zoomed to the bounding box of the contents of the layer. Default value is false. Applies only to KML layers. Note: Be careful when setting this option for other layer types, as it may become effective in the future.</div></td>
</tr>
<tr>
<td><code><span>layerId</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The ID of a single Maps Engine layer to display.</div></td>
</tr>
<tr>
<td><code><span>layerKey</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The key of the layer to display. Maps Engine layer keys are only unique within a single map, and can be changed by map owners.</div></td>
</tr>
<tr>
<td><code><span>map</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc">The map on which to display the layer.</div></td>
</tr>
<tr>
<td><code><span>mapId</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The ID of the Maps Engine map that contains the layer with the given <code>layerKey</code>.</div></td>
</tr>
<tr>
<td><code><span>opacity</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The opacity of the layer, expressed as a number between 0 and 1. Defaults to 1. Applies only to imagery layers. Note: Be careful of setting this option for other layer types, as it may become effective in the future.</div></td>
</tr>
<tr>
<td><code><span>suppressInfoWindows</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Suppress the rendering of info windows when layer features are clicked.</div></td>
</tr>
<tr>
<td><code><span>zIndex</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The z-index of the layer. Only applies to Vector and KML layers.</div></td>
</tr>
</tbody>
</table></div>