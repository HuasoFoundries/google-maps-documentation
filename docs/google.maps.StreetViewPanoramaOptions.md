<h2 id="StreetViewPanoramaOptions">
google.maps.StreetViewPanoramaOptions
object specification
</h2><p>Options defining the properties of a <code>StreetViewPanorama</code> object.</p><h3>Properties</h3><table summary="interface StreetViewPanoramaOptions - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>addressControl</code></td>
<td><code>boolean</code></td>
<td>The enabled/disabled state of the address control.</td>
</tr>
<tr>
<td><code>addressControlOptions</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.StreetViewAddressControlOptions.md">StreetViewAddressControlOptions</a></code></td>
<td>The display options for the address control.</td>
</tr>
<tr>
<td><code>clickToGo</code></td>
<td><code>boolean</code></td>
<td>The enabled/disabled state of click-to-go.</td>
</tr>
<tr>
<td><code>disableDefaultUI</code></td>
<td><code>boolean</code></td>
<td>Enables/disables all default UI. May be overridden individually.</td>
</tr>
<tr>
<td><code>disableDoubleClickZoom</code></td>
<td><code>boolean</code></td>
<td>Enables/disables zoom on double click. Disabled by default.</td>
</tr>
<tr>
<td><code>enableCloseButton</code></td>
<td><code>boolean</code></td>
<td>If <code>true</code>, the close button is displayed. Disabled by default.</td>
</tr>
<tr>
<td><code>imageDateControl</code></td>
<td><code>boolean</code></td>
<td>The enabled/disabled state of the imagery acquisition date control. Disabled by default.</td>
</tr>
<tr>
<td><code>linksControl</code></td>
<td><code>boolean</code></td>
<td>The enabled/disabled state of the links control.</td>
</tr>
<tr>
<td><code>panControl</code></td>
<td><code>boolean</code></td>
<td>The enabled/disabled state of the pan control.</td>
</tr>
<tr>
<td><code>panControlOptions</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.PanControlOptions.md">PanControlOptions</a></code></td>
<td>The display options for the pan control.</td>
</tr>
<tr>
<td><code>pano</code></td>
<td><code>string</code></td>
<td>The panorama ID, which should be set when specifying a custom panorama.</td>
</tr>
<tr>
<td><code>panoProvider</code></td>
<td><code>function(string): <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.StreetViewPanoramaData.md">StreetViewPanoramaData</a></code></td>
<td>Custom panorama provider, which takes a string pano id and returns an object defining the panorama given that id. This function must be defined to specify custom panorama imagery.</td>
</tr>
<tr>
<td><code>position</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngLiteral.md">LatLngLiteral</a></code></td>
<td>The <code>LatLng</code> position of the Street View panorama.</td>
</tr>
<tr>
<td><code>pov</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.StreetViewPov.md">StreetViewPov</a></code></td>
<td>The camera orientation, specified as heading and pitch, for the panorama.</td>
</tr>
<tr>
<td><code>scrollwheel</code></td>
<td><code>boolean</code></td>
<td>If false, disables scrollwheel zooming in Street View. The scrollwheel is enabled by default.</td>
</tr>
<tr>
<td><code>visible</code></td>
<td><code>boolean</code></td>
<td>If <code>true</code>, the Street View panorama is visible on load.</td>
</tr>
<tr>
<td><code>zoomControl</code></td>
<td><code>boolean</code></td>
<td>The enabled/disabled state of the zoom control.</td>
</tr>
<tr>
<td><code>zoomControlOptions</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.ZoomControlOptions.md">ZoomControlOptions</a></code></td>
<td>The display options for the zoom control.</td>
</tr>
</tbody>
</table>