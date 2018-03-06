<h2 id="StreetViewPanorama"> StreetViewPanorama class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">StreetViewPanorama</span></code>
class
</p><p>Displays the panorama for a given <code>LatLng</code> or panorama ID. A <code>StreetViewPanorama</code> object provides a Street View "viewer" which can be stand-alone within a separate <code>&lt;div&gt;</code> or bound to a <code>Map</code>.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class StreetViewPanorama - Constructor">
<thead>
<tr><th colspan="2" id="StreetViewPanorama.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>StreetViewPanorama</span></code></td>
<td><div><code>StreetViewPanorama(container[, opts])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>container</code>:&nbsp; <code>Element</code></li>
<li><code>opts</code> (optional):&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPanoramaOptions.md">StreetViewPanoramaOptions</a></code></li>
</ul></div>
<div class="desc">Creates a panorama with the passed <code>StreetViewPanoramaOptions</code>.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class StreetViewPanorama - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="StreetViewPanorama.getLinks">
<td><code><span>getLinks</span></code></td>
<td><div><code>getLinks()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewLink.md">StreetViewLink</a>&gt;</code></div>
<div class="desc">Returns the set of navigation links for the Street View panorama.</div></td>
</tr>
<tr id="StreetViewPanorama.getLocation">
<td><code><span>getLocation</span></code></td>
<td><div><code>getLocation()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewLocation.md">StreetViewLocation</a></code></div>
<div class="desc">Returns the StreetViewLocation of the current panorama.</div></td>
</tr>
<tr id="StreetViewPanorama.getMotionTracking">
<td><code><span>getMotionTracking</span></code></td>
<td><div><code>getMotionTracking()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns the state of motion tracker. If true when the user physically moves the device and the browser supports it, the Street View Panorama tracks the physical movements.</div></td>
</tr>
<tr id="StreetViewPanorama.getPano">
<td><code><span>getPano</span></code></td>
<td><div><code>getPano()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the current panorama ID for the Street View panorama. This id is stable within the browser's current session only.</div></td>
</tr>
<tr id="StreetViewPanorama.getPhotographerPov">
<td><code><span>getPhotographerPov</span></code></td>
<td><div><code>getPhotographerPov()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPov.md">StreetViewPov</a></code></div>
<div class="desc">Returns the heading and pitch of the photographer when this panorama was taken. For Street View panoramas on the road, this also reveals in which direction the car was travelling. This data is available after the <code>pano_changed</code> event.</div></td>
</tr>
<tr id="StreetViewPanorama.getPosition">
<td><code><span>getPosition</span></code></td>
<td><div><code>getPosition()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc">Returns the current <code>LatLng</code> position for the Street View panorama.</div></td>
</tr>
<tr id="StreetViewPanorama.getPov">
<td><code><span>getPov</span></code></td>
<td><div><code>getPov()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPov.md">StreetViewPov</a></code></div>
<div class="desc">Returns the current point of view for the Street View panorama.</div></td>
</tr>
<tr id="StreetViewPanorama.getStatus">
<td><code><span>getStatus</span></code></td>
<td><div><code>getStatus()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewStatus.md">StreetViewStatus</a></code></div>
<div class="desc">Returns the status of the panorama on completion of the <code>setPosition()</code> or <code>setPano()</code> request.</div></td>
</tr>
<tr id="StreetViewPanorama.getVisible">
<td><code><span>getVisible</span></code></td>
<td><div><code>getVisible()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns <code>true</code> if the panorama is visible. It does not specify whether Street View imagery is available at the specified position.</div></td>
</tr>
<tr id="StreetViewPanorama.getZoom">
<td><code><span>getZoom</span></code></td>
<td><div><code>getZoom()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the zoom level of the panorama. Fully zoomed-out is level 0, where the field of view is 180 degrees. Zooming in increases the zoom level.</div></td>
</tr>
<tr id="StreetViewPanorama.registerPanoProvider">
<td><code><span>registerPanoProvider</span></code></td>
<td><div><code>registerPanoProvider(provider[, opt_options])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>provider</code>:&nbsp; <code>function(string): <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPanoramaData.md">StreetViewPanoramaData</a></code></li>
<li><code>opt_options</code> (optional):&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PanoProviderOptions.md">PanoProviderOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Set the custom panorama provider called on pano change to load custom panoramas.</div></td>
</tr>
<tr id="StreetViewPanorama.setLinks">
<td><code><span>setLinks</span></code></td>
<td><div><code>setLinks(links)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>links</code>:&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewLink.md">StreetViewLink</a>&gt;</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the set of navigation links for the Street View panorama.</div></td>
</tr>
<tr id="StreetViewPanorama.setMotionTracking">
<td><code><span>setMotionTracking</span></code></td>
<td><div><code>setMotionTracking(motionTracking)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>motionTracking</code>:&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the state of motion tracker. If true when the user physically moves the device and the browser supports it, the Street View Panorama tracks the physical movements.</div></td>
</tr>
<tr id="StreetViewPanorama.setOptions">
<td><code><span>setOptions</span></code></td>
<td><div><code>setOptions(options)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>options</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPanoramaOptions.md">StreetViewPanoramaOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets a collection of key-value pairs.</div></td>
</tr>
<tr id="StreetViewPanorama.setPano">
<td><code><span>setPano</span></code></td>
<td><div><code>setPano(pano)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>pano</code>:&nbsp; <code>string</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the current panorama ID for the Street View panorama.</div></td>
</tr>
<tr id="StreetViewPanorama.setPosition">
<td><code><span>setPosition</span></code></td>
<td><div><code>setPosition(latLng)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>latLng</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md">LatLngLiteral</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the current <code>LatLng</code> position for the Street View panorama.</div></td>
</tr>
<tr id="StreetViewPanorama.setPov">
<td><code><span>setPov</span></code></td>
<td><div><code>setPov(pov)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>pov</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPov.md">StreetViewPov</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the point of view for the Street View panorama.</div></td>
</tr>
<tr id="StreetViewPanorama.setVisible">
<td><code><span>setVisible</span></code></td>
<td><div><code>setVisible(flag)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>flag</code>:&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets to <code>true</code> to make the panorama visible. If set to <code>false</code>, the panorama will be hidden whether it is embedded in the map or in its own <code>&lt;div&gt;</code>.</div></td>
</tr>
<tr id="StreetViewPanorama.setZoom">
<td><code><span>setZoom</span></code></td>
<td><div><code>setZoom(zoom)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>zoom</code>:&nbsp; <code>number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the zoom level of the panorama. Fully zoomed-out is level 0, where the field of view is 180 degrees. Zooming in increases the zoom level.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="properties responsive" summary="class StreetViewPanorama - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="StreetViewPanorama.controls">
<td><code><span>controls</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md">MVCArray</a>&lt;Node&gt;&gt;</code></div>
<div class="desc">Additional controls to attach to the panorama. To add a control to the panorama, add the control's <code>&lt;div&gt;</code> to the <code>MVCArray</code> corresponding to the <code>ControlPosition</code> where it should be rendered.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="details responsive" summary="class StreetViewPanorama - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="StreetViewPanorama.closeclick">
<td><code><span>closeclick</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code>Event</code></li>
</ul></div>
<div class="desc">This event is fired when the close button is clicked.</div></td>
</tr>
<tr id="StreetViewPanorama.pano_changed">
<td><code><span>pano_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the panorama's pano id changes. The pano may change as the user navigates through the panorama or the position is manually set. Note that not all position changes trigger a <code>pano_changed</code>.</div></td>
</tr>
<tr id="StreetViewPanorama.position_changed">
<td><code><span>position_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the panorama's position changes. The position changes as the user navigates through the panorama or the position is set manually.</div></td>
</tr>
<tr id="StreetViewPanorama.pov_changed">
<td><code><span>pov_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the panorama's point-of-view changes. The point of view changes as the pitch, zoom, or heading changes.</div></td>
</tr>
<tr id="StreetViewPanorama.resize">
<td><code><span>resize</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">Developers should trigger this event on the panorama when its div changes size: <code> <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/event.md">google.maps.event.trigger</a>(panorama, 'resize')</code>.</div></td>
</tr>
<tr id="StreetViewPanorama.status_changed">
<td><code><span>status_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired after every panorama lookup by id or location, via <code>setPosition()</code> or <code>setPano()</code>.</div></td>
</tr>
<tr id="StreetViewPanorama.visible_changed">
<td><code><span>visible_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the panorama's visibility changes. The visibility is changed when the Pegman is dragged onto the map, the close button is clicked, or <code>setVisible()</code> is called.</div></td>
</tr>
<tr id="StreetViewPanorama.zoom_changed">
<td><code><span>zoom_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the panorama's zoom level changes.</div></td>
</tr>
</tbody>
</table></div>