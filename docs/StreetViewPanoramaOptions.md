
<devsite-heading text=" StreetViewPanoramaOptions interface" for="StreetViewPanoramaOptions" level="h2" link="" toc="" back-to-top=""><h2 id="StreetViewPanoramaOptions" is-upgraded="">StreetViewPanoramaOptions interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">StreetViewPanoramaOptions</span></code>
interface
</p>
<p>Options defining the properties of a <code translate="no" dir="ltr">StreetViewPanorama</code> object.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface StreetViewPanoramaOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="StreetViewPanoramaOptions.addressControl">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanoramaOptions.addressControl"><span>addressControl</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The enabled/disabled state of the address control.</div></td>
</tr>
<tr id="StreetViewPanoramaOptions.addressControlOptions">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanoramaOptions.addressControlOptions"><span>addressControlOptions</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="StreetViewAddressControlOptions.md">StreetViewAddressControlOptions</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The display options for the address control.</div></td>
</tr>
<tr id="StreetViewPanoramaOptions.clickToGo">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanoramaOptions.clickToGo"><span>clickToGo</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The enabled/disabled state of click-to-go.</div></td>
</tr>
<tr id="StreetViewPanoramaOptions.controlSize">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanoramaOptions.controlSize"><span>controlSize</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Size in pixels of the controls appearing on the panorama. This value must be supplied directly when creating the Panorama, updating this value later may bring the controls into an undefined state. Only governs the controls made by the Maps API itself. Does not scale developer created custom controls.</div></td>
</tr>
<tr id="StreetViewPanoramaOptions.disableDefaultUI">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanoramaOptions.disableDefaultUI"><span>disableDefaultUI</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Enables/disables all default UI. May be overridden individually.</div></td>
</tr>
<tr id="StreetViewPanoramaOptions.disableDoubleClickZoom">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanoramaOptions.disableDoubleClickZoom"><span>disableDoubleClickZoom</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Enables/disables zoom on double click. Disabled by default.</div></td>
</tr>
<tr id="StreetViewPanoramaOptions.enableCloseButton">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanoramaOptions.enableCloseButton"><span>enableCloseButton</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">If <code translate="no" dir="ltr">true</code>, the close button is displayed. Disabled by default.</div></td>
</tr>
<tr id="StreetViewPanoramaOptions.fullscreenControl">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanoramaOptions.fullscreenControl"><span>fullscreenControl</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The enabled/disabled state of the fullscreen control.</div></td>
</tr>
<tr id="StreetViewPanoramaOptions.fullscreenControlOptions">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanoramaOptions.fullscreenControlOptions"><span>fullscreenControlOptions</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="FullscreenControlOptions.md">FullscreenControlOptions</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The display options for the fullscreen control.</div></td>
</tr>
<tr id="StreetViewPanoramaOptions.imageDateControl">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanoramaOptions.imageDateControl"><span>imageDateControl</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The enabled/disabled state of the imagery acquisition date control. Disabled by default.</div></td>
</tr>
<tr id="StreetViewPanoramaOptions.linksControl">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanoramaOptions.linksControl"><span>linksControl</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The enabled/disabled state of the links control.</div></td>
</tr>
<tr id="StreetViewPanoramaOptions.motionTracking">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanoramaOptions.motionTracking"><span>motionTracking</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Whether motion tracking is on or off. Enabled by default when the motion tracking control is present, so that the POV (point of view) follows the orientation of the device. This is primarily applicable to mobile devices. If <code translate="no" dir="ltr">motionTracking</code> is set to false while <code translate="no" dir="ltr">motionTrackingControl</code> is enabled, the motion tracking control appears but tracking is off. The user can tap the motion tracking control to toggle this option.</div></td>
</tr>
<tr id="StreetViewPanoramaOptions.motionTrackingControl">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanoramaOptions.motionTrackingControl"><span>motionTrackingControl</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The enabled/disabled state of the motion tracking control. Enabled by default when the device has motion data, so that the control appears on the map. This is primarily applicable to mobile devices.</div></td>
</tr>
<tr id="StreetViewPanoramaOptions.motionTrackingControlOptions">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanoramaOptions.motionTrackingControlOptions"><span>motionTrackingControlOptions</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="MotionTrackingControlOptions.md">MotionTrackingControlOptions</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The display options for the motion tracking control.</div></td>
</tr>
<tr id="StreetViewPanoramaOptions.panControl">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanoramaOptions.panControl"><span>panControl</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The enabled/disabled state of the pan control.</div></td>
</tr>
<tr id="StreetViewPanoramaOptions.panControlOptions">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanoramaOptions.panControlOptions"><span>panControlOptions</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="PanControlOptions.md">PanControlOptions</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The display options for the pan control.</div></td>
</tr>
<tr id="StreetViewPanoramaOptions.pano">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanoramaOptions.pano"><span>pano</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The panorama ID, which should be set when specifying a custom panorama.</div></td>
</tr>
<tr id="StreetViewPanoramaOptions.position">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanoramaOptions.position"><span>position</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The <code translate="no" dir="ltr">LatLng</code> position of the Street View panorama.</div></td>
</tr>
<tr id="StreetViewPanoramaOptions.pov">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanoramaOptions.pov"><span>pov</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="StreetViewPov.md">StreetViewPov</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The camera orientation, specified as heading and pitch, for the panorama.</div></td>
</tr>
<tr id="StreetViewPanoramaOptions.scrollwheel">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanoramaOptions.scrollwheel"><span>scrollwheel</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">If false, disables scrollwheel zooming in Street View. The scrollwheel is enabled by default.</div></td>
</tr>
<tr id="StreetViewPanoramaOptions.showRoadLabels">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanoramaOptions.showRoadLabels"><span>showRoadLabels</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The display of street names on the panorama. If this value is not specified, or is set to <code translate="no" dir="ltr">true</code>, street names are displayed on the panorama. If set to <code translate="no" dir="ltr">false</code>, street names are not displayed.</div></td>
</tr>
<tr id="StreetViewPanoramaOptions.visible">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanoramaOptions.visible"><span>visible</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">If <code translate="no" dir="ltr">true</code>, the Street View panorama is visible on load.</div></td>
</tr>
<tr id="StreetViewPanoramaOptions.zoom">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanoramaOptions.zoom"><span>zoom</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The zoom of the panorama, specified as a number. A zoom of 0 gives a 180 degrees Field of View.</div></td>
</tr>
<tr id="StreetViewPanoramaOptions.zoomControl">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanoramaOptions.zoomControl"><span>zoomControl</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The enabled/disabled state of the zoom control.</div></td>
</tr>
<tr id="StreetViewPanoramaOptions.zoomControlOptions">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanoramaOptions.zoomControlOptions"><span>zoomControlOptions</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="ZoomControlOptions.md">ZoomControlOptions</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The display options for the zoom control.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
