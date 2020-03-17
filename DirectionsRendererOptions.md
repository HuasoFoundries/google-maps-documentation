
<devsite-heading text=" DirectionsRendererOptions interface" for="DirectionsRendererOptions" level="h2" link="" toc="" back-to-top=""><h2 id="DirectionsRendererOptions" is-upgraded="">DirectionsRendererOptions interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">DirectionsRendererOptions</span></code>
interface
</p>
<p>This object defines the properties that can be set on a <code translate="no" dir="ltr">DirectionsRenderer</code> object.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface DirectionsRendererOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="DirectionsRendererOptions.directions">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsRendererOptions.directions"><span>directions</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="DirectionsResult.md">DirectionsResult</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The directions to display on the map and/or in a <code translate="no" dir="ltr">&lt;div&gt;</code> panel, retrieved as a <code translate="no" dir="ltr">DirectionsResult</code> object from <code translate="no" dir="ltr">DirectionsService</code>.</div></td>
</tr>
<tr id="DirectionsRendererOptions.draggable">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsRendererOptions.draggable"><span>draggable</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">If true, allows the user to drag and modify the paths of routes rendered by this <code translate="no" dir="ltr">DirectionsRenderer</code>.</div></td>
</tr>
<tr id="DirectionsRendererOptions.hideRouteList">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsRendererOptions.hideRouteList"><span>hideRouteList</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">This property indicates whether the renderer should provide UI to select amongst alternative routes. By default, this flag is <code translate="no" dir="ltr">false</code> and a user-selectable list of routes will be shown in the directions' associated panel. To hide that list, set <code translate="no" dir="ltr">hideRouteList</code> to <code translate="no" dir="ltr">true</code>.</div></td>
</tr>
<tr id="DirectionsRendererOptions.infoWindow">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsRendererOptions.infoWindow"><span>infoWindow</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="InfoWindow.md">InfoWindow</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The <code translate="no" dir="ltr">InfoWindow</code> in which to render text information when a marker is clicked. Existing info window content will be overwritten and its position moved. If no info window is specified, the <code translate="no" dir="ltr">DirectionsRenderer</code> will create and use its own info window. This property will be ignored if <code translate="no" dir="ltr">suppressInfoWindows</code> is set to true.</div></td>
</tr>
<tr id="DirectionsRendererOptions.map">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsRendererOptions.map"><span>map</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Map.md">Map</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Map on which to display the directions.</div></td>
</tr>
<tr id="DirectionsRendererOptions.markerOptions">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsRendererOptions.markerOptions"><span>markerOptions</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="MarkerOptions.md">MarkerOptions</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Options for the markers. All markers rendered by the <code translate="no" dir="ltr">DirectionsRenderer</code> will use these options.</div></td>
</tr>
<tr id="DirectionsRendererOptions.panel">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsRendererOptions.panel"><span>panel</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Node <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The <code translate="no" dir="ltr">&lt;div&gt;</code> in which to display the directions steps.</div></td>
</tr>
<tr id="DirectionsRendererOptions.polylineOptions">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsRendererOptions.polylineOptions"><span>polylineOptions</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="PolylineOptions.md">PolylineOptions</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Options for the polylines. All polylines rendered by the <code translate="no" dir="ltr">DirectionsRenderer</code> will use these options.</div></td>
</tr>
<tr id="DirectionsRendererOptions.preserveViewport">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsRendererOptions.preserveViewport"><span>preserveViewport</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">By default, the input map is centered and zoomed to the bounding box of this set of directions. If this option is set to <code translate="no" dir="ltr">true</code>, the viewport is left unchanged, unless the map's center and zoom were never set.</div></td>
</tr>
<tr id="DirectionsRendererOptions.routeIndex">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsRendererOptions.routeIndex"><span>routeIndex</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The index of the route within the <code translate="no" dir="ltr">DirectionsResult</code> object. The default value is 0.</div></td>
</tr>
<tr id="DirectionsRendererOptions.suppressBicyclingLayer">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsRendererOptions.suppressBicyclingLayer"><span>suppressBicyclingLayer</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Suppress the rendering of the <code translate="no" dir="ltr">BicyclingLayer</code> when bicycling directions are requested.</div></td>
</tr>
<tr id="DirectionsRendererOptions.suppressInfoWindows">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsRendererOptions.suppressInfoWindows"><span>suppressInfoWindows</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Suppress the rendering of info windows.</div></td>
</tr>
<tr id="DirectionsRendererOptions.suppressMarkers">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsRendererOptions.suppressMarkers"><span>suppressMarkers</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Suppress the rendering of markers.</div></td>
</tr>
<tr id="DirectionsRendererOptions.suppressPolylines">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsRendererOptions.suppressPolylines"><span>suppressPolylines</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Suppress the rendering of polylines.</div></td>
</tr>
</tbody>
</table></div>
