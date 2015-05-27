<h2 id="DirectionsRendererOptions">
google.maps.DirectionsRendererOptions
object specification
</h2><p>This object defines the properties that can be set on a <code>DirectionsRenderer</code> object.</p><h3>Properties</h3><table summary="interface DirectionsRendererOptions - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>directions</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.DirectionsResult.md">DirectionsResult</a></code></td>
<td>The directions to display on the map and/or in a <code>&lt;div&gt;</code> panel, retrieved as a <code>DirectionsResult</code> object from <code>DirectionsService</code>.</td>
</tr>
<tr>
<td><code>draggable</code></td>
<td><code>boolean</code></td>
<td>If true, allows the user to drag and modify the paths of routes rendered by this <code>DirectionsRenderer</code>.</td>
</tr>
<tr>
<td><code>hideRouteList</code></td>
<td><code>boolean</code></td>
<td>This property indicates whether the renderer should provide UI to select amongst alternative routes. By default, this flag is <code>false</code> and a user-selectable list of routes will be shown in the directions' associated panel. To hide that list, set <code>hideRouteList</code> to <code>true</code>.</td>
</tr>
<tr>
<td><code>infoWindow</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.InfoWindow.md">InfoWindow</a></code></td>
<td>The <code>InfoWindow</code> in which to render text information when a marker is clicked. Existing info window content will be overwritten and its position moved. If no info window is specified, the <code>DirectionsRenderer</code> will create and use its own info window. This property will be ignored if <code>suppressInfoWindows</code> is set to true.</td>
</tr>
<tr>
<td><code>map</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a></code></td>
<td>Map on which to display the directions.</td>
</tr>
<tr>
<td><code>markerOptions</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MarkerOptions.md">MarkerOptions</a></code></td>
<td>Options for the markers. All markers rendered by the <code>DirectionsRenderer</code> will use these options.</td>
</tr>
<tr>
<td><code>panel</code></td>
<td><code>Node</code></td>
<td>The <code>&lt;div&gt;</code> in which to display the directions steps.</td>
</tr>
<tr>
<td><code>polylineOptions</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.PolylineOptions.md">PolylineOptions</a></code></td>
<td>Options for the polylines. All polylines rendered by the <code>DirectionsRenderer</code> will use these options.</td>
</tr>
<tr>
<td><code>preserveViewport</code></td>
<td><code>boolean</code></td>
<td>By default, the input map is centered and zoomed to the bounding box of this set of directions. If this option is set to <code>true</code>, the viewport is left unchanged, unless the map's center and zoom were never set.</td>
</tr>
<tr>
<td><code>routeIndex</code></td>
<td><code>number</code></td>
<td>The index of the route within the <code>DirectionsResult</code> object. The default value is 0.</td>
</tr>
<tr>
<td><code>suppressBicyclingLayer</code></td>
<td><code>boolean</code></td>
<td>Suppress the rendering of the <code>BicyclingLayer</code> when bicycling directions are requested.</td>
</tr>
<tr>
<td><code>suppressInfoWindows</code></td>
<td><code>boolean</code></td>
<td>Suppress the rendering of info windows.</td>
</tr>
<tr>
<td><code>suppressMarkers</code></td>
<td><code>boolean</code></td>
<td>Suppress the rendering of markers.</td>
</tr>
<tr>
<td><code>suppressPolylines</code></td>
<td><code>boolean</code></td>
<td>Suppress the rendering of polylines.</td>
</tr>
</tbody>
</table>