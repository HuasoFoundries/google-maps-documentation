<h2 id="MarkerOptions">
google.maps.MarkerOptions
object specification
</h2><h3>Properties</h3><table summary="interface MarkerOptions - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>anchorPoint</code></td>
<td><code><a href="#Point">Point</a></code></td>
<td>The offset from the marker's position to the tip of an InfoWindow that has been opened with the marker as anchor.</td>
</tr>
<tr>
<td><code>animation</code></td>
<td><code><a href="#Animation">Animation</a></code></td>
<td>Which animation to play when marker is added to a map.</td>
</tr>
<tr>
<td><code>clickable</code></td>
<td><code>boolean</code></td>
<td>If true, the marker receives mouse and touch events. Default value is true.</td>
</tr>
<tr>
<td><code>crossOnDrag</code></td>
<td><code>boolean</code></td>
<td>If false, disables cross that appears beneath the marker when dragging. This option is <code>true</code> by default. This option is only enabled when <code>google.maps.visualRefresh</code> is set to <code>true</code>. For backwards compatibility, if <code>raiseOnDrag</code> is set to <code>false</code> then the default for <code>crossOnDrag</code> changes to <code>false</code>.</td>
</tr>
<tr>
<td><code>cursor</code></td>
<td><code>string</code></td>
<td>Mouse cursor to show on hover</td>
</tr>
<tr>
<td><code>draggable</code></td>
<td><code>boolean</code></td>
<td>If true, the marker can be dragged. Default value is false.</td>
</tr>
<tr>
<td><code>icon</code></td>
<td><code>string|<a href="#Icon">Icon</a>|<a href="#Symbol">Symbol</a></code></td>
<td>Icon for the foreground. If a string is provided, it is treated as though it were an <code>Icon</code> with the string as <code>url</code>.</td>
</tr>
<tr>
<td><code>map</code></td>
<td><code><a href="#Map">Map</a>|<a href="#StreetViewPanorama">StreetViewPanorama</a></code></td>
<td>Map on which to display Marker.</td>
</tr>
<tr>
<td><code>optimized</code></td>
<td><code>boolean</code></td>
<td>Optimization renders many markers as a single static element. Optimized rendering is enabled by default. Disable optimized rendering for animated GIFs or PNGs, or when each marker must be rendered as a separate DOM element (advanced usage only).</td>
</tr>
<tr>
<td><code>position</code></td>
<td><code><a href="#LatLng">LatLng</a></code></td>
<td>Marker position. Required.</td>
</tr>
<tr>
<td><code>raiseOnDrag</code></td>
<td><code>boolean</code></td>
<td>If false, disables raising and lowering the marker on drag. This option is <code>true</code> by default. This option is disabled when <code>google.maps.visualRefresh</code> is set to <code>true</code>. Instead, a cross will appear beneath the marker icon while dragging. Please refer to the <code>crossOnDrag</code> property for new code. For backwards compatibility, if this is set to <code>false</code> then the default for <code>crossOnDrag</code> changes to <code>false</code>.</td>
</tr>
<tr>
<td><code>shape</code></td>
<td><code><a href="#MarkerShape">MarkerShape</a></code></td>
<td>Image map region definition used for drag/click.</td>
</tr>
<tr>
<td><code>title</code></td>
<td><code>string</code></td>
<td>Rollover text</td>
</tr>
<tr>
<td><code>visible</code></td>
<td><code>boolean</code></td>
<td>If true, the marker is visible</td>
</tr>
<tr>
<td><code>zIndex</code></td>
<td><code>number</code></td>
<td>All markers are displayed on the map in order of their zIndex, with higher values displaying in front of markers with lower values. By default, markers are displayed according to their vertical position on screen, with lower markers appearing in front of markers further up the screen.</td>
</tr>
</tbody>
</table>