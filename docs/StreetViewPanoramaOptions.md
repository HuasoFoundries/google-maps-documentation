<h2 id="StreetViewPanoramaOptions">
StreetViewPanoramaOptions
object specification
</h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">StreetViewPanoramaOptions</span></code>
object specification
</p><p>Options defining the properties of a <code>StreetViewPanorama</code> object.</p><table class="properties responsive" summary="interface StreetViewPanoramaOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code>addressControl</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">The enabled/disabled state of the address control.</div></td>
</tr>
<tr>
<td><code>addressControlOptions</code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewAddressControlOptions.md">StreetViewAddressControlOptions</a></code></div>
<div class="desc">The display options for the address control.</div></td>
</tr>
<tr>
<td><code>clickToGo</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">The enabled/disabled state of click-to-go.</div></td>
</tr>
<tr>
<td><code>disableDefaultUI</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Enables/disables all default UI. May be overridden individually.</div></td>
</tr>
<tr>
<td><code>disableDoubleClickZoom</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Enables/disables zoom on double click. Disabled by default.</div></td>
</tr>
<tr>
<td><code>enableCloseButton</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If <code>true</code>, the close button is displayed. Disabled by default.</div></td>
</tr>
<tr>
<td><code>imageDateControl</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">The enabled/disabled state of the imagery acquisition date control. Disabled by default.</div></td>
</tr>
<tr>
<td><code>linksControl</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">The enabled/disabled state of the links control.</div></td>
</tr>
<tr>
<td><code>panControl</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">The enabled/disabled state of the pan control.</div></td>
</tr>
<tr>
<td><code>panControlOptions</code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PanControlOptions.md">PanControlOptions</a></code></div>
<div class="desc">The display options for the pan control.</div></td>
</tr>
<tr>
<td><code>pano</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The panorama ID, which should be set when specifying a custom panorama.</div></td>
</tr>
<tr>
<td><code>panoProvider</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>function(string): <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPanoramaData.md">StreetViewPanoramaData</a></code></div>
<div class="desc">Custom panorama provider, which takes a string pano id and returns an object defining the panorama given that id. This function must be defined to specify custom panorama imagery.</div></td>
</tr>
<tr>
<td><code>position</code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md">LatLngLiteral</a></code></div>
<div class="desc">The <code>LatLng</code> position of the Street View panorama.</div></td>
</tr>
<tr>
<td><code>pov</code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPov.md">StreetViewPov</a></code></div>
<div class="desc">The camera orientation, specified as heading and pitch, for the panorama.</div></td>
</tr>
<tr>
<td><code>scrollwheel</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If false, disables scrollwheel zooming in Street View. The scrollwheel is enabled by default.</div></td>
</tr>
<tr>
<td><code>visible</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If <code>true</code>, the Street View panorama is visible on load.</div></td>
</tr>
<tr>
<td><code>zoomControl</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">The enabled/disabled state of the zoom control.</div></td>
</tr>
<tr>
<td><code>zoomControlOptions</code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ZoomControlOptions.md">ZoomControlOptions</a></code></div>
<div class="desc">The display options for the zoom control.</div></td>
</tr>
</tbody>
</table>