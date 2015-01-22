<h2 id="MarkerOptions">
google.maps.MarkerOptions
object specification
</h2><h3 id="devsite_header_60">Properties</h3><table summary="interface MarkerOptions - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>anchorPoint</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Point.md">Point</a></code></td>
<td>The offset from the marker's position to the tip of an InfoWindow that has been opened with the marker as anchor.</td>
</tr>
<tr>
<td><code>animation</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Animation.md">Animation</a></code></td>
<td>Which animation to play when marker is added to a map.</td>
</tr>
<tr>
<td><code>attribution</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Attribution.md">Attribution</a></code></td>
<td>Contains all the information needed to identify your application as the source of a save. In this context, 'place' means a business, point of interest or geographic location. <code>attribution</code> must be specified with a <code>place</code> in order to enable a save.</td>
</tr>
<tr>
<td><code>clickable</code></td>
<td><code>boolean</code></td>
<td>If true, the marker receives mouse and touch events. Default value is true.</td>
</tr>
<tr>
<td><code>crossOnDrag</code></td>
<td><code>boolean</code></td>
<td>If false, disables cross that appears beneath the marker when dragging. This option is <code>true</code> by default.</td>
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
<td><code>string|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Icon.md">Icon</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Symbol.md">Symbol</a></code></td>
<td>Icon for the foreground. If a string is provided, it is treated as though it were an <code>Icon</code> with the string as <code>url</code>.</td>
</tr>
<tr>
<td><code>map</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.StreetViewPanorama.md">StreetViewPanorama</a></code></td>
<td>Map on which to display Marker.</td>
</tr>
<tr>
<td><code>opacity</code></td>
<td><code>number</code></td>
<td>The marker's opacity between 0.0 and 1.0.</td>
</tr>
<tr>
<td><code>optimized</code></td>
<td><code>boolean</code></td>
<td>Optimization renders many markers as a single static element. Optimized rendering is enabled by default. Disable optimized rendering for animated GIFs or PNGs, or when each marker must be rendered as a separate DOM element (advanced usage only).</td>
</tr>
<tr>
<td><code>place</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Place.md">Place</a></code></td>
<td>Place information, used to identify and describe the place associated with this <code>Marker</code>. In this context, 'place' means a business, point of interest or geographic location. To allow a user to save this place, open an info window anchored on this marker. The info window will contain information about the place and an option for the user to save it. Only one of position or place can be specified.</td>
</tr>
<tr>
<td><code>position</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a></code></td>
<td>Marker position. Required.</td>
</tr>
<tr>
<td><code>shape</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MarkerShape.md">MarkerShape</a></code></td>
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