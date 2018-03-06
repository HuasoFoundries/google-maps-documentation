<h2 id="MarkerOptions"> MarkerOptions interface </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">MarkerOptions</span></code>
interface
</p><p>MarkerOptions object used to define the properties that can be set on a Marker.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface MarkerOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="MarkerOptions.anchorPoint">
<td><code><span>anchorPoint</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Point.md">Point</a></code></div>
<div class="desc">The offset from the marker's position to the tip of an InfoWindow that has been opened with the marker as anchor.</div></td>
</tr>
<tr id="MarkerOptions.animation">
<td><code><span>animation</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Animation.md">Animation</a></code></div>
<div class="desc">Which animation to play when marker is added to a map.</div></td>
</tr>
<tr id="MarkerOptions.clickable">
<td><code><span>clickable</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If true, the marker receives mouse and touch events. Default value is true.</div></td>
</tr>
<tr id="MarkerOptions.crossOnDrag">
<td><code><span>crossOnDrag</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If false, disables cross that appears beneath the marker when dragging. This option is <code>true</code> by default.</div></td>
</tr>
<tr id="MarkerOptions.cursor">
<td><code><span>cursor</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Mouse cursor to show on hover</div></td>
</tr>
<tr id="MarkerOptions.draggable">
<td><code><span>draggable</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If true, the marker can be dragged. Default value is false.</div></td>
</tr>
<tr id="MarkerOptions.icon">
<td><code><span>icon</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Icon.md">Icon</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Symbol.md">Symbol</a></code></div>
<div class="desc">Icon for the foreground. If a string is provided, it is treated as though it were an <code>Icon</code> with the string as <code>url</code>.</div></td>
</tr>
<tr id="MarkerOptions.label">
<td><code><span>label</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MarkerLabel.md">MarkerLabel</a></code></div>
<div class="desc">Adds a label to the marker. The label can either be a string, or a <code>MarkerLabel</code> object.</div></td>
</tr>
<tr id="MarkerOptions.map">
<td><code><span>map</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPanorama.md">StreetViewPanorama</a></code></div>
<div class="desc">Map on which to display Marker.</div></td>
</tr>
<tr id="MarkerOptions.opacity">
<td><code><span>opacity</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The marker's opacity between 0.0 and 1.0.</div></td>
</tr>
<tr id="MarkerOptions.optimized">
<td><code><span>optimized</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Optimization renders many markers as a single static element. Optimized rendering is enabled by default. Disable optimized rendering for animated GIFs or PNGs, or when each marker must be rendered as a separate DOM element (advanced usage only).</div></td>
</tr>
<tr id="MarkerOptions.position">
<td><code><span>position</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md">LatLngLiteral</a></code></div>
<div class="desc">Marker position. Required.</div></td>
</tr>
<tr id="MarkerOptions.shape">
<td><code><span>shape</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MarkerShape.md">MarkerShape</a></code></div>
<div class="desc">Image map region definition used for drag/click.</div></td>
</tr>
<tr id="MarkerOptions.title">
<td><code><span>title</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Rollover text</div></td>
</tr>
<tr id="MarkerOptions.visible">
<td><code><span>visible</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If true, the marker is visible</div></td>
</tr>
<tr id="MarkerOptions.zIndex">
<td><code><span>zIndex</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">All markers are displayed on the map in order of their zIndex, with higher values displaying in front of markers with lower values. By default, markers are displayed according to their vertical position on screen, with lower markers appearing in front of markers further up the screen.</div></td>
</tr>
</tbody>
</table></div>