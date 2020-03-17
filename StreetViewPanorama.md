
<devsite-heading text=" StreetViewPanorama class" for="StreetViewPanorama" level="h2" link="" toc="" back-to-top=""><h2 id="StreetViewPanorama" is-upgraded="">StreetViewPanorama class</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">StreetViewPanorama</span></code>
class
</p>
<p>Displays the panorama for a given <code translate="no" dir="ltr">LatLng</code> or panorama ID. A <code translate="no" dir="ltr">StreetViewPanorama</code> object provides a Street View "viewer" which can be stand-alone within a separate <code translate="no" dir="ltr">&lt;div&gt;</code> or bound to a <code translate="no" dir="ltr">Map</code>.</p>
<p>This class extends
<code translate="no" dir="ltr"><a href="MVCObject.md">MVCObject</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class StreetViewPanorama - Constructor">
<thead>
<tr><th colspan="2" id="StreetViewPanorama.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.constructor"><span>StreetViewPanorama</span></a></code></td>
<td><div><code translate="no" dir="ltr">StreetViewPanorama(container[, opts])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">container</code>:&nbsp; <code translate="no" dir="ltr">Element</code></li>
<li><code translate="no" dir="ltr">opts</code>:&nbsp; <code translate="no" dir="ltr"><a href="StreetViewPanoramaOptions.md">StreetViewPanoramaOptions</a> <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc">Creates a panorama with the passed <code translate="no" dir="ltr">StreetViewPanoramaOptions</code>.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class StreetViewPanorama - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="StreetViewPanorama.getLinks">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.getLinks"><span>getLinks</span></a></code></td>
<td><div><code translate="no" dir="ltr">getLinks()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="StreetViewLink.md">StreetViewLink</a>&gt;</code></div>
<div class="desc">Returns the set of navigation links for the Street View panorama.</div></td>
</tr>
<tr id="StreetViewPanorama.getLocation">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.getLocation"><span>getLocation</span></a></code></td>
<td><div><code translate="no" dir="ltr">getLocation()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="StreetViewLocation.md">StreetViewLocation</a></code></div>
<div class="desc">Returns the StreetViewLocation of the current panorama.</div></td>
</tr>
<tr id="StreetViewPanorama.getMotionTracking">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.getMotionTracking"><span>getMotionTracking</span></a></code></td>
<td><div><code translate="no" dir="ltr">getMotionTracking()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">boolean</code></div>
<div class="desc">Returns the state of motion tracker. If true when the user physically moves the device and the browser supports it, the Street View Panorama tracks the physical movements.</div></td>
</tr>
<tr id="StreetViewPanorama.getPano">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.getPano"><span>getPano</span></a></code></td>
<td><div><code translate="no" dir="ltr">getPano()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">Returns the current panorama ID for the Street View panorama. This id is stable within the browser's current session only.</div></td>
</tr>
<tr id="StreetViewPanorama.getPhotographerPov">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.getPhotographerPov"><span>getPhotographerPov</span></a></code></td>
<td><div><code translate="no" dir="ltr">getPhotographerPov()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="StreetViewPov.md">StreetViewPov</a></code></div>
<div class="desc">Returns the heading and pitch of the photographer when this panorama was taken. For Street View panoramas on the road, this also reveals in which direction the car was travelling. This data is available after the <code translate="no" dir="ltr">pano_changed</code> event.</div></td>
</tr>
<tr id="StreetViewPanorama.getPosition">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.getPosition"><span>getPosition</span></a></code></td>
<td><div><code translate="no" dir="ltr">getPosition()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a></code></div>
<div class="desc">Returns the current <code translate="no" dir="ltr">LatLng</code> position for the Street View panorama.</div></td>
</tr>
<tr id="StreetViewPanorama.getPov">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.getPov"><span>getPov</span></a></code></td>
<td><div><code translate="no" dir="ltr">getPov()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="StreetViewPov.md">StreetViewPov</a></code></div>
<div class="desc">Returns the current point of view for the Street View panorama.</div></td>
</tr>
<tr id="StreetViewPanorama.getStatus">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.getStatus"><span>getStatus</span></a></code></td>
<td><div><code translate="no" dir="ltr">getStatus()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="StreetViewStatus.md">StreetViewStatus</a></code></div>
<div class="desc">Returns the status of the panorama on completion of the <code translate="no" dir="ltr">setPosition()</code> or <code translate="no" dir="ltr">setPano()</code> request.</div></td>
</tr>
<tr id="StreetViewPanorama.getVisible">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.getVisible"><span>getVisible</span></a></code></td>
<td><div><code translate="no" dir="ltr">getVisible()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">boolean</code></div>
<div class="desc">Returns <code translate="no" dir="ltr">true</code> if the panorama is visible. It does not specify whether Street View imagery is available at the specified position.</div></td>
</tr>
<tr id="StreetViewPanorama.getZoom">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.getZoom"><span>getZoom</span></a></code></td>
<td><div><code translate="no" dir="ltr">getZoom()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">Returns the zoom level of the panorama. Fully zoomed-out is level 0, where the field of view is 180 degrees. Zooming in increases the zoom level.</div></td>
</tr>
<tr id="StreetViewPanorama.registerPanoProvider">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.registerPanoProvider"><span>registerPanoProvider</span></a></code></td>
<td><div><code translate="no" dir="ltr">registerPanoProvider(provider[, opt_options])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">provider</code>:&nbsp; <code translate="no" dir="ltr">function(string): (<a href="StreetViewPanoramaData.md">StreetViewPanoramaData</a> <span class="optional-type-annotation">optional</span>)</code></li>
<li><code translate="no" dir="ltr">opt_options</code>:&nbsp; <code translate="no" dir="ltr"><a href="PanoProviderOptions.md">PanoProviderOptions</a> <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Set the custom panorama provider called on pano change to load custom panoramas.</div></td>
</tr>
<tr id="StreetViewPanorama.setLinks">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.setLinks"><span>setLinks</span></a></code></td>
<td><div><code translate="no" dir="ltr">setLinks(links)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">links</code>:&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="StreetViewLink.md">StreetViewLink</a>&gt;</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the set of navigation links for the Street View panorama.</div></td>
</tr>
<tr id="StreetViewPanorama.setMotionTracking">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.setMotionTracking"><span>setMotionTracking</span></a></code></td>
<td><div><code translate="no" dir="ltr">setMotionTracking(motionTracking)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">motionTracking</code>:&nbsp; <code translate="no" dir="ltr">boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the state of motion tracker. If true when the user physically moves the device and the browser supports it, the Street View Panorama tracks the physical movements.</div></td>
</tr>
<tr id="StreetViewPanorama.setOptions">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.setOptions"><span>setOptions</span></a></code></td>
<td><div><code translate="no" dir="ltr">setOptions(options)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">options</code>:&nbsp; <code translate="no" dir="ltr"><a href="StreetViewPanoramaOptions.md">StreetViewPanoramaOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets a collection of key-value pairs.</div></td>
</tr>
<tr id="StreetViewPanorama.setPano">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.setPano"><span>setPano</span></a></code></td>
<td><div><code translate="no" dir="ltr">setPano(pano)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">pano</code>:&nbsp; <code translate="no" dir="ltr">string</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the current panorama ID for the Street View panorama.</div></td>
</tr>
<tr id="StreetViewPanorama.setPosition">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.setPosition"><span>setPosition</span></a></code></td>
<td><div><code translate="no" dir="ltr">setPosition(latLng)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">latLng</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the current <code translate="no" dir="ltr">LatLng</code> position for the Street View panorama.</div></td>
</tr>
<tr id="StreetViewPanorama.setPov">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.setPov"><span>setPov</span></a></code></td>
<td><div><code translate="no" dir="ltr">setPov(pov)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">pov</code>:&nbsp; <code translate="no" dir="ltr"><a href="StreetViewPov.md">StreetViewPov</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the point of view for the Street View panorama.</div></td>
</tr>
<tr id="StreetViewPanorama.setVisible">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.setVisible"><span>setVisible</span></a></code></td>
<td><div><code translate="no" dir="ltr">setVisible(flag)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">flag</code>:&nbsp; <code translate="no" dir="ltr">boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets to <code translate="no" dir="ltr">true</code> to make the panorama visible. If set to <code translate="no" dir="ltr">false</code>, the panorama will be hidden whether it is embedded in the map or in its own <code translate="no" dir="ltr">&lt;div&gt;</code>.</div></td>
</tr>
<tr id="StreetViewPanorama.setZoom">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.setZoom"><span>setZoom</span></a></code></td>
<td><div><code translate="no" dir="ltr">setZoom(zoom)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">zoom</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the zoom level of the panorama. Fully zoomed-out is level 0, where the field of view is 180 degrees. Zooming in increases the zoom level.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="class StreetViewPanorama - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="StreetViewPanorama.controls">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.controls"><span>controls</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="MVCArray.md">MVCArray</a>&lt;Node&gt;&gt;</code></div>
<div class="desc">Additional controls to attach to the panorama. To add a control to the panorama, add the control's <code translate="no" dir="ltr">&lt;div&gt;</code> to the <code translate="no" dir="ltr">MVCArray</code> corresponding to the <code translate="no" dir="ltr">ControlPosition</code> where it should be rendered.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="details responsive" summary="class StreetViewPanorama - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="StreetViewPanorama.closeclick">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.closeclick"><span>closeclick</span></a></code></td>
<td><div><code translate="no" dir="ltr">function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">event</code>:&nbsp; <code translate="no" dir="ltr">Event</code></li>
</ul></div>
<div class="desc">This event is fired when the close button is clicked.</div></td>
</tr>
<tr id="StreetViewPanorama.pano_changed">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.pano_changed"><span>pano_changed</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the panorama's pano id changes. The pano may change as the user navigates through the panorama or the position is manually set. Note that not all position changes trigger a <code translate="no" dir="ltr">pano_changed</code>.</div></td>
</tr>
<tr id="StreetViewPanorama.position_changed">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.position_changed"><span>position_changed</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the panorama's position changes. The position changes as the user navigates through the panorama or the position is set manually.</div></td>
</tr>
<tr id="StreetViewPanorama.pov_changed">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.pov_changed"><span>pov_changed</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the panorama's point-of-view changes. The point of view changes as the pitch, zoom, or heading changes.</div></td>
</tr>
<tr id="StreetViewPanorama.resize">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.resize"><span>resize</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">Developers should trigger this event on the panorama when its div changes size: <code translate="no" dir="ltr"> <a href="#event">google.maps.event.trigger</a>(panorama, 'resize')</code>.</div></td>
</tr>
<tr id="StreetViewPanorama.status_changed">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.status_changed"><span>status_changed</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired after every panorama lookup by id or location, via <code translate="no" dir="ltr">setPosition()</code> or <code translate="no" dir="ltr">setPano()</code>.</div></td>
</tr>
<tr id="StreetViewPanorama.visible_changed">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.visible_changed"><span>visible_changed</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the panorama's visibility changes. The visibility is changed when the Pegman is dragged onto the map, the close button is clicked, or <code translate="no" dir="ltr">setVisible()</code> is called.</div></td>
</tr>
<tr id="StreetViewPanorama.zoom_changed">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPanorama.zoom_changed"><span>zoom_changed</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the panorama's zoom level changes.</div></td>
</tr>
</tbody>
</table></div>
