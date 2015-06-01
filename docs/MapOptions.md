<h2 id="MapOptions">google.maps.MapOptions object specification</h2>
<h3>Properties</h3><table summary="interface MapOptions - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>backgroundColor</code></td>
<td><code>string</code></td>
<td>Color used for the background of the Map div. This color will be visible when tiles have not yet loaded as the user pans. This option can only be set when the map is initialized.</td>
</tr>
<tr>
<td><code>center</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></td>
<td>The initial Map center. Required.</td>
</tr>
<tr>
<td><code>disableDefaultUI</code></td>
<td><code>boolean</code></td>
<td>Enables/disables all default UI. May be overridden individually.</td>
</tr>
<tr>
<td><code>disableDoubleClickZoom</code></td>
<td><code>boolean</code></td>
<td>Enables/disables zoom and center on double click. Enabled by default.</td>
</tr>
<tr>
<td><code>draggable</code></td>
<td><code>boolean</code></td>
<td>If false, prevents the map from being dragged. Dragging is enabled by default.</td>
</tr>
<tr>
<td><code>draggableCursor</code></td>
<td><code>string</code></td>
<td>The name or url of the cursor to display when mousing over a draggable map. This property uses the css <code>cursor</code> attribute to change the icon. As with the css property, you must specify at least one fallback cursor that is not a URL. For example: <code>draggableCursor: 'url(http://www.example.com/icon.png), auto;'</code>.</td>
</tr>
<tr>
<td><code>draggingCursor</code></td>
<td><code>string</code></td>
<td>The name or url of the cursor to display when the map is being dragged. This property uses the css <code>cursor</code> attribute to change the icon. As with the css property, you must specify at least one fallback cursor that is not a URL. For example: <code>draggingCursor: 'url(http://www.example.com/icon.png), auto;'</code>.</td>
</tr>
<tr>
<td><code>heading</code></td>
<td><code>number</code></td>
<td>The heading for aerial imagery in degrees measured clockwise from cardinal direction North. Headings are snapped to the nearest available angle for which imagery is available.</td>
</tr>
<tr>
<td><code>keyboardShortcuts</code></td>
<td><code>boolean</code></td>
<td>If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are enabled by default.</td>
</tr>
<tr>
<td><code>mapMaker</code></td>
<td><code>boolean</code></td>
<td>True if <a href="http://www.google.com/mapmaker">Map Maker</a> tiles should be used instead of regular tiles.</td>
</tr>
<tr>
<td><code>mapTypeControl</code></td>
<td><code>boolean</code></td>
<td>The initial enabled/disabled state of the Map type control.</td>
</tr>
<tr>
<td><code>mapTypeControlOptions</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapTypeControlOptions.md">MapTypeControlOptions</a></code></td>
<td>The initial display options for the Map type control.</td>
</tr>
<tr>
<td><code>mapTypeId</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapTypeId.md">MapTypeId</a></code></td>
<td>The initial Map mapTypeId. Defaults to <code>ROADMAP</code>.</td>
</tr>
<tr>
<td><code>maxZoom</code></td>
<td><code>number</code></td>
<td>The maximum zoom level which will be displayed on the map. If omitted, or set to null, the maximum zoom from the current map type is used instead.</td>
</tr>
<tr>
<td><code>minZoom</code></td>
<td><code>number</code></td>
<td>The minimum zoom level which will be displayed on the map. If omitted, or set to null, the minimum zoom from the current map type is used instead.</td>
</tr>
<tr>
<td><code>noClear</code></td>
<td><code>boolean</code></td>
<td>If true, do not clear the contents of the Map div.</td>
</tr>
<tr>
<td><code>overviewMapControl</code></td>
<td><code>boolean</code></td>
<td>The enabled/disabled state of the Overview Map control.</td>
</tr>
<tr>
<td><code>overviewMapControlOptions</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/OverviewMapControlOptions.md">OverviewMapControlOptions</a></code></td>
<td>The display options for the Overview Map control.</td>
</tr>
<tr>
<td><code>panControl</code></td>
<td><code>boolean</code></td>
<td>The enabled/disabled state of the Pan control.</td>
</tr>
<tr>
<td><code>panControlOptions</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PanControlOptions.md">PanControlOptions</a></code></td>
<td>The display options for the Pan control.</td>
</tr>
<tr>
<td><code>rotateControl</code></td>
<td><code>boolean</code></td>
<td>The enabled/disabled state of the Rotate control.</td>
</tr>
<tr>
<td><code>rotateControlOptions</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/RotateControlOptions.md">RotateControlOptions</a></code></td>
<td>The display options for the Rotate control.</td>
</tr>
<tr>
<td><code>scaleControl</code></td>
<td><code>boolean</code></td>
<td>The initial enabled/disabled state of the Scale control.</td>
</tr>
<tr>
<td><code>scaleControlOptions</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ScaleControlOptions.md">ScaleControlOptions</a></code></td>
<td>The initial display options for the Scale control.</td>
</tr>
<tr>
<td><code>scrollwheel</code></td>
<td><code>boolean</code></td>
<td>If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.</td>
</tr>
<tr>
<td><code>streetView</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPanorama.md">StreetViewPanorama</a></code></td>
<td>A <code>StreetViewPanorama</code> to display when the Street View pegman is dropped on the map. If no panorama is specified, a default <code>StreetViewPanorama</code> will be displayed in the map's <code>div</code> when the pegman is dropped.</td>
</tr>
<tr>
<td><code>streetViewControl</code></td>
<td><code>boolean</code></td>
<td>The initial enabled/disabled state of the Street View Pegman control. This control is part of the default UI, and should be set to <code>false</code> when displaying a map type on which the Street View road overlay should not appear (e.g. a non-Earth map type).</td>
</tr>
<tr>
<td><code>streetViewControlOptions</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewControlOptions.md">StreetViewControlOptions</a></code></td>
<td>The initial display options for the Street View Pegman control.</td>
</tr>
<tr>
<td><code>styles</code></td>
<td><code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapTypeStyle.md">MapTypeStyle</a>&gt;</code></td>
<td>Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain modes, these styles will only apply to labels and geometry.</td>
</tr>
<tr>
<td><code>tilt</code></td>
<td><code>number</code></td>
<td>Controls the automatic switching behavior for the angle of incidence of the map. The only allowed values are <code>0</code> and <code>45</code>. The value <code>0</code> causes the map to always use a 0° overhead view regardless of the zoom level and viewport. The value <code>45</code> causes the tilt angle to automatically switch to 45 whenever 45° imagery is available for the current zoom level and viewport, and switch back to 0 whenever 45° imagery is not available (this is the default behavior). 45° imagery is only available for <code>SATELLITE</code> and <code>HYBRID</code> map types, within some locations, and at some zoom levels. <b>Note:</b> <code>getTilt</code> returns the current tilt angle, not the value specified by this option. Because <code>getTilt</code> and this option refer to different things, do not <code>bind()</code> the <code>tilt</code> property; doing so may yield unpredictable effects.</td>
</tr>
<tr>
<td><code>zoom</code></td>
<td><code>number</code></td>
<td>The initial Map zoom level. Required.</td>
</tr>
<tr>
<td><code>zoomControl</code></td>
<td><code>boolean</code></td>
<td>The enabled/disabled state of the Zoom control.</td>
</tr>
<tr>
<td><code>zoomControlOptions</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ZoomControlOptions.md">ZoomControlOptions</a></code></td>
<td>The display options for the Zoom control.</td>
</tr>
</tbody>
</table>