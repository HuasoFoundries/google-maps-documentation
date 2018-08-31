
<h2 id="MapOptions">MapOptions interface</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">MapOptions</span></code>
interface
</p>
<p>MapOptions object used to define the properties that can be set on a Map.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface MapOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="MapOptions.backgroundColor">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.backgroundColor"><span>backgroundColor</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Color used for the background of the Map div. This color will be visible when tiles have not yet loaded as the user pans. This option can only be set when the map is initialized.</div></td>
</tr>
<tr id="MapOptions.center">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.center"><span>center</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a></code></div>
<div class="desc">The initial Map center. Required.</div></td>
</tr>
<tr id="MapOptions.clickableIcons">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.clickableIcons"><span>clickableIcons</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">When <code>false</code>, map icons are not clickable. A map icon represents a point of interest, also known as a POI. By default map icons are clickable.</div></td>
</tr>
<tr id="MapOptions.disableDefaultUI">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.disableDefaultUI"><span>disableDefaultUI</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Enables/disables all default UI. May be overridden individually.</div></td>
</tr>
<tr id="MapOptions.disableDoubleClickZoom">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.disableDoubleClickZoom"><span>disableDoubleClickZoom</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Enables/disables zoom and center on double click. Enabled by default. <p><strong>Note</strong>: This property is <strong>not recommended</strong>. To disable zooming on double click, you can use the <code>gestureHandling</code> property, and set it to <code>"none"</code>.</p></div></td>
</tr>
<tr id="MapOptions.draggable">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.draggable"><span>draggable</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If false, prevents the map from being dragged. Dragging is enabled by default. <p><strong>Note</strong>: This property is <strong>deprecated</strong>. To disable dragging on the map, you can use the <code>gestureHandling</code> property, and set it to <code>"none"</code>.</p></div></td>
</tr>
<tr id="MapOptions.draggableCursor">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.draggableCursor"><span>draggableCursor</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The name or url of the cursor to display when mousing over a draggable map. This property uses the css <code>cursor</code> attribute to change the icon. As with the css property, you must specify at least one fallback cursor that is not a URL. For example: <code>draggableCursor: 'url(http://www.example.com/icon.png), auto;'</code>.</div></td>
</tr>
<tr id="MapOptions.draggingCursor">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.draggingCursor"><span>draggingCursor</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The name or url of the cursor to display when the map is being dragged. This property uses the css <code>cursor</code> attribute to change the icon. As with the css property, you must specify at least one fallback cursor that is not a URL. For example: <code>draggingCursor: 'url(http://www.example.com/icon.png), auto;'</code>.</div></td>
</tr>
<tr id="MapOptions.fullscreenControl">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.fullscreenControl"><span>fullscreenControl</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">The enabled/disabled state of the Fullscreen control.</div></td>
</tr>
<tr id="MapOptions.fullscreenControlOptions">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.fullscreenControlOptions"><span>fullscreenControlOptions</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="FullscreenControlOptions.md">FullscreenControlOptions</a></code></div>
<div class="desc">The display options for the Fullscreen control.</div></td>
</tr>
<tr id="MapOptions.gestureHandling">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.gestureHandling"><span>gestureHandling</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">This setting controls how the API handles gestures on the map. Allowed values: <ul> <li> <code>"cooperative"</code>: Scroll events and one-finger touch gestures scroll the page, and do not zoom or pan the map. Two-finger touch gestures pan and zoom the map. Scroll events with a ctrl key or ⌘ key pressed zoom the map.<br> In this mode the map <em>cooperates</em> with the page. </li><li> <code>"greedy"</code>: All touch gestures and scroll events pan or zoom the map. </li><li> <code>"none"</code>: The map cannot be panned or zoomed by user gestures. </li><li> <code>"auto"</code>: (default) Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or in an iframe. </li></ul></div></td>
</tr>
<tr id="MapOptions.heading">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.heading"><span>heading</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The heading for aerial imagery in degrees measured clockwise from cardinal direction North. Headings are snapped to the nearest available angle for which imagery is available.</div></td>
</tr>
<tr id="MapOptions.keyboardShortcuts">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.keyboardShortcuts"><span>keyboardShortcuts</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are enabled by default.</div></td>
</tr>
<tr id="MapOptions.mapTypeControl">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.mapTypeControl"><span>mapTypeControl</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">The initial enabled/disabled state of the Map type control.</div></td>
</tr>
<tr id="MapOptions.mapTypeControlOptions">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.mapTypeControlOptions"><span>mapTypeControlOptions</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="MapTypeControlOptions.md">MapTypeControlOptions</a></code></div>
<div class="desc">The initial display options for the Map type control.</div></td>
</tr>
<tr id="MapOptions.mapTypeId">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.mapTypeId"><span>mapTypeId</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="MapTypeId.md">MapTypeId</a>|string</code></div>
<div class="desc">The initial Map mapTypeId. Defaults to <code>ROADMAP</code>.</div></td>
</tr>
<tr id="MapOptions.maxZoom">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.maxZoom"><span>maxZoom</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The maximum zoom level which will be displayed on the map. If omitted, or set to null, the maximum zoom from the current map type is used instead. Valid values: Integers between zero, and up to the supported <a href="https://developers.google.com/maps/documentation/javascript/maxzoom">maximum zoom level</a>.</div></td>
</tr>
<tr id="MapOptions.minZoom">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.minZoom"><span>minZoom</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The minimum zoom level which will be displayed on the map. If omitted, or set to null, the minimum zoom from the current map type is used instead. Valid values: Integers between zero, and up to the supported <a href="https://developers.google.com/maps/documentation/javascript/maxzoom">maximum zoom level</a>.</div></td>
</tr>
<tr id="MapOptions.noClear">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.noClear"><span>noClear</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If true, do not clear the contents of the Map div.</div></td>
</tr>
<tr id="MapOptions.panControl">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.panControl"><span>panControl</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">The enabled/disabled state of the Pan control. <p> Note: The Pan control is not available in the new set of controls introduced in v3.22 of the Google Maps JavaScript API. While using v3.22 and v3.23, you can choose to use the earlier set of controls rather than the new controls, thus making the Pan control available as part of the old control set. See <a href="https://developers.google.com/maps/articles/v322-controls-diff">What's New in the v3.22 Map Controls</a>.</p></div></td>
</tr>
<tr id="MapOptions.panControlOptions">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.panControlOptions"><span>panControlOptions</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="PanControlOptions.md">PanControlOptions</a></code></div>
<div class="desc">The display options for the Pan control. <p> Note: The Pan control is not available in the new set of controls introduced in v3.22 of the Google Maps JavaScript API. While using v3.22 and v3.23, you can choose to use the earlier set of controls rather than the new controls, thus making the Pan control available as part of the old control set. See <a href="https://developers.google.com/maps/articles/v322-controls-diff">What's New in the v3.22 Map Controls</a>.</p></div></td>
</tr>
<tr id="MapOptions.rotateControl">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.rotateControl"><span>rotateControl</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">The enabled/disabled state of the Rotate control.</div></td>
</tr>
<tr id="MapOptions.rotateControlOptions">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.rotateControlOptions"><span>rotateControlOptions</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="RotateControlOptions.md">RotateControlOptions</a></code></div>
<div class="desc">The display options for the Rotate control.</div></td>
</tr>
<tr id="MapOptions.scaleControl">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.scaleControl"><span>scaleControl</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">The initial enabled/disabled state of the Scale control.</div></td>
</tr>
<tr id="MapOptions.scaleControlOptions">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.scaleControlOptions"><span>scaleControlOptions</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="ScaleControlOptions.md">ScaleControlOptions</a></code></div>
<div class="desc">The initial display options for the Scale control.</div></td>
</tr>
<tr id="MapOptions.scrollwheel">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.scrollwheel"><span>scrollwheel</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If false, disables zooming on the map using a mouse scroll wheel. The scrollwheel is enabled by default. <p><strong>Note</strong>: This property is <strong>not recommended</strong>. To disable zooming using scrollwheel, you can use the <code>gestureHandling</code> property, and set it to either <code>"cooperative"</code> or <code>"none"</code>.</p></div></td>
</tr>
<tr id="MapOptions.streetView">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.streetView"><span>streetView</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="StreetViewPanorama.md">StreetViewPanorama</a></code></div>
<div class="desc">A <code>StreetViewPanorama</code> to display when the Street View pegman is dropped on the map. If no panorama is specified, a default <code>StreetViewPanorama</code> will be displayed in the map's <code>div</code> when the pegman is dropped.</div></td>
</tr>
<tr id="MapOptions.streetViewControl">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.streetViewControl"><span>streetViewControl</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">The initial enabled/disabled state of the Street View Pegman control. This control is part of the default UI, and should be set to <code>false</code> when displaying a map type on which the Street View road overlay should not appear (e.g. a non-Earth map type).</div></td>
</tr>
<tr id="MapOptions.streetViewControlOptions">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.streetViewControlOptions"><span>streetViewControlOptions</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="StreetViewControlOptions.md">StreetViewControlOptions</a></code></div>
<div class="desc">The initial display options for the Street View Pegman control.</div></td>
</tr>
<tr id="MapOptions.styles">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.styles"><span>styles</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="MapTypeStyle.md">MapTypeStyle</a>&gt;</code></div>
<div class="desc">Styles to apply to each of the default map types. Note that for <code>satellite</code>/<code>hybrid</code> and <code>terrain</code> modes, these styles will only apply to labels and geometry.</div></td>
</tr>
<tr id="MapOptions.tilt">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.tilt"><span>tilt</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">Controls the automatic switching behavior for the angle of incidence of the map. The only allowed values are <code>0</code> and <code>45</code>. The value <code>0</code> causes the map to always use a 0° overhead view regardless of the zoom level and viewport. The value <code>45</code> causes the tilt angle to automatically switch to 45 whenever 45° imagery is available for the current zoom level and viewport, and switch back to 0 whenever 45° imagery is not available (this is the default behavior). 45° imagery is only available for <code>satellite</code> and <code>hybrid</code> map types, within some locations, and at some zoom levels. <b>Note:</b> <code>getTilt</code> returns the current tilt angle, not the value specified by this option. Because <code>getTilt</code> and this option refer to different things, do not <code>bind()</code> the <code>tilt</code> property; doing so may yield unpredictable effects.</div></td>
</tr>
<tr id="MapOptions.zoom">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.zoom"><span>zoom</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The initial Map zoom level. Required. Valid values: Integers between zero, and up to the supported <a href="https://developers.google.com/maps/documentation/javascript/maxzoom">maximum zoom level</a>.</div></td>
</tr>
<tr id="MapOptions.zoomControl">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.zoomControl"><span>zoomControl</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">The enabled/disabled state of the Zoom control.</div></td>
</tr>
<tr id="MapOptions.zoomControlOptions">
<td itemprop="property"><code><a class="secret-link" href="#MapOptions.zoomControlOptions"><span>zoomControlOptions</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="ZoomControlOptions.md">ZoomControlOptions</a></code></div>
<div class="desc">The display options for the Zoom control.</div></td>
</tr>
</tbody>
</table></div>
