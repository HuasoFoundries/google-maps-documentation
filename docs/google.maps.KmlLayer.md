<h2 id="KmlLayer">
google.maps.KmlLayer
class
</h2><p>A <code>KmlLayer</code> adds geographic markup to the map from a KML, KMZ or GeoRSS file that is hosted on a publicly accessible web server. A <code>KmlFeatureData</code> object is provided for each feature when clicked.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCObject.md">MVCObject</a></code>.
</p><h3 id="devsite_header_189">Constructor</h3><table summary="class KmlLayer - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>KmlLayer(opts?:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.KmlLayerOptions.md"><em>KmlLayerOptions</em></a>)</code></td>
<td>Creates a <code>KmlLayer</code> which renders the contents of the specified KML/KMZ file (<a href="https://developers.google.com/kml/documentation/kmlreference">https://developers.google.com/kml/documentation/kmlreference</a>) or GeoRSS file (<a href="http://www.georss.org">http://www.georss.org</a>).</td>
</tr>
</tbody>
</table><h3 id="devsite_header_190">Methods</h3><table summary="class KmlLayer - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getDefaultViewport()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngBounds.md">LatLngBounds</a></code></td>
<td>Get the default viewport for the layer being displayed.</td>
</tr>
<tr>
<td><code>getMap()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a></code></td>
<td>Get the map on which the KML Layer is being rendered.</td>
</tr>
<tr>
<td><code>getMetadata()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.KmlLayerMetadata.md">KmlLayerMetadata</a></code></td>
<td>Get the metadata associated with this layer, as specified in the layer markup.</td>
</tr>
<tr>
<td><code>getStatus()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.KmlLayerStatus.md">KmlLayerStatus</a></code></td>
<td>Get the status of the layer, set once the requested document has loaded.</td>
</tr>
<tr>
<td><code>getUrl()</code></td>
<td><code>string</code></td>
<td>Gets the URL of the KML file being displayed.</td>
</tr>
<tr>
<td><code>getZIndex()</code></td>
<td><code>number</code></td>
<td>Gets the z-index of the KML Layer.</td>
</tr>
<tr>
<td><code>setMap(map:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a>)</code></td>
<td><code>None</code></td>
<td>Renders the KML Layer on the specified map. If map is set to null, the layer is removed.</td>
</tr>
<tr>
<td><code>setUrl(url:string)</code></td>
<td><code>None</code></td>
<td>Sets the URL of the KML file to display.</td>
</tr>
<tr>
<td><code>setZIndex(zIndex:number)</code></td>
<td><code>None</code></td>
<td>Sets the z-index of the KML Layer.</td>
</tr>
</tbody>
</table><h3 id="devsite_header_191">Events</h3><table summary="class KmlLayer - Events" width="100%">
<thead>
<tr><th>Events</th>
<th>Arguments</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>click</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.KmlMouseEvent.md"><em>KmlMouseEvent</em></a></code></td>
<td>This event is fired when a feature in the layer is clicked.</td>
</tr>
<tr>
<td><code>defaultviewport_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the KML layers default viewport has changed.</td>
</tr>
<tr>
<td><code>status_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the KML layer has finished loading. At this point it is safe to read the status property to determine if the layer loaded successfully.</td>
</tr>
</tbody>
</table>