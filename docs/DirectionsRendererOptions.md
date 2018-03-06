<h2 id="DirectionsRendererOptions"> DirectionsRendererOptions interface </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">DirectionsRendererOptions</span></code>
interface
</p><p>This object defines the properties that can be set on a <code>DirectionsRenderer</code> object.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface DirectionsRendererOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="DirectionsRendererOptions.directions">
<td><code><span>directions</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DirectionsResult.md">DirectionsResult</a></code></div>
<div class="desc">The directions to display on the map and/or in a <code>&lt;div&gt;</code> panel, retrieved as a <code>DirectionsResult</code> object from <code>DirectionsService</code>.</div></td>
</tr>
<tr id="DirectionsRendererOptions.draggable">
<td><code><span>draggable</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If true, allows the user to drag and modify the paths of routes rendered by this <code>DirectionsRenderer</code>.</div></td>
</tr>
<tr id="DirectionsRendererOptions.hideRouteList">
<td><code><span>hideRouteList</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">This property indicates whether the renderer should provide UI to select amongst alternative routes. By default, this flag is <code>false</code> and a user-selectable list of routes will be shown in the directions' associated panel. To hide that list, set <code>hideRouteList</code> to <code>true</code>.</div></td>
</tr>
<tr id="DirectionsRendererOptions.infoWindow">
<td><code><span>infoWindow</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/InfoWindow.md">InfoWindow</a></code></div>
<div class="desc">The <code>InfoWindow</code> in which to render text information when a marker is clicked. Existing info window content will be overwritten and its position moved. If no info window is specified, the <code>DirectionsRenderer</code> will create and use its own info window. This property will be ignored if <code>suppressInfoWindows</code> is set to true.</div></td>
</tr>
<tr id="DirectionsRendererOptions.map">
<td><code><span>map</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc">Map on which to display the directions.</div></td>
</tr>
<tr id="DirectionsRendererOptions.markerOptions">
<td><code><span>markerOptions</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MarkerOptions.md">MarkerOptions</a></code></div>
<div class="desc">Options for the markers. All markers rendered by the <code>DirectionsRenderer</code> will use these options.</div></td>
</tr>
<tr id="DirectionsRendererOptions.panel">
<td><code><span>panel</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Node</code></div>
<div class="desc">The <code>&lt;div&gt;</code> in which to display the directions steps.</div></td>
</tr>
<tr id="DirectionsRendererOptions.polylineOptions">
<td><code><span>polylineOptions</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PolylineOptions.md">PolylineOptions</a></code></div>
<div class="desc">Options for the polylines. All polylines rendered by the <code>DirectionsRenderer</code> will use these options.</div></td>
</tr>
<tr id="DirectionsRendererOptions.preserveViewport">
<td><code><span>preserveViewport</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">By default, the input map is centered and zoomed to the bounding box of this set of directions. If this option is set to <code>true</code>, the viewport is left unchanged, unless the map's center and zoom were never set.</div></td>
</tr>
<tr id="DirectionsRendererOptions.routeIndex">
<td><code><span>routeIndex</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The index of the route within the <code>DirectionsResult</code> object. The default value is 0.</div></td>
</tr>
<tr id="DirectionsRendererOptions.suppressBicyclingLayer">
<td><code><span>suppressBicyclingLayer</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Suppress the rendering of the <code>BicyclingLayer</code> when bicycling directions are requested.</div></td>
</tr>
<tr id="DirectionsRendererOptions.suppressInfoWindows">
<td><code><span>suppressInfoWindows</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Suppress the rendering of info windows.</div></td>
</tr>
<tr id="DirectionsRendererOptions.suppressMarkers">
<td><code><span>suppressMarkers</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Suppress the rendering of markers.</div></td>
</tr>
<tr id="DirectionsRendererOptions.suppressPolylines">
<td><code><span>suppressPolylines</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Suppress the rendering of polylines.</div></td>
</tr>
</tbody>
</table></div>