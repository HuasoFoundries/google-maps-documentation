
<h2 id="MarkerOptions">MarkerOptions interface</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">MarkerOptions</span></code>
interface
</p>
<p>MarkerOptions object used to define the properties that can be set on a Marker.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface MarkerOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="MarkerOptions.anchorPoint">
<td itemprop="property"><code><a class="secret-link" href="#MarkerOptions.anchorPoint"><span>anchorPoint</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="Point.md">Point</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The offset from the marker's position to the tip of an InfoWindow that has been opened with the marker as anchor.</div></td>
</tr>
<tr id="MarkerOptions.animation">
<td itemprop="property"><code><a class="secret-link" href="#MarkerOptions.animation"><span>animation</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="Animation.md">Animation</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Which animation to play when marker is added to a map.</div></td>
</tr>
<tr id="MarkerOptions.clickable">
<td itemprop="property"><code><a class="secret-link" href="#MarkerOptions.clickable"><span>clickable</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">If true, the marker receives mouse and touch events. Default value is true.</div></td>
</tr>
<tr id="MarkerOptions.crossOnDrag">
<td itemprop="property"><code><a class="secret-link" href="#MarkerOptions.crossOnDrag"><span>crossOnDrag</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">If false, disables cross that appears beneath the marker when dragging. This option is <code>true</code> by default.</div></td>
</tr>
<tr id="MarkerOptions.cursor">
<td itemprop="property"><code><a class="secret-link" href="#MarkerOptions.cursor"><span>cursor</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Mouse cursor to show on hover</div></td>
</tr>
<tr id="MarkerOptions.draggable">
<td itemprop="property"><code><a class="secret-link" href="#MarkerOptions.draggable"><span>draggable</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">If true, the marker can be dragged. Default value is false.</div></td>
</tr>
<tr id="MarkerOptions.icon">
<td itemprop="property"><code><a class="secret-link" href="#MarkerOptions.icon"><span>icon</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string|<a href="Icon.md">Icon</a>|<a href="Symbol.md">Symbol</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Icon for the foreground. If a string is provided, it is treated as though it were an <code>Icon</code> with the string as <code>url</code>.</div></td>
</tr>
<tr id="MarkerOptions.label">
<td itemprop="property"><code><a class="secret-link" href="#MarkerOptions.label"><span>label</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string|<a href="MarkerLabel.md">MarkerLabel</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Adds a label to the marker. The label can either be a string, or a <code>MarkerLabel</code> object.</div></td>
</tr>
<tr id="MarkerOptions.map">
<td itemprop="property"><code><a class="secret-link" href="#MarkerOptions.map"><span>map</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="Map.md">Map</a>|<a href="StreetViewPanorama.md">StreetViewPanorama</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Map on which to display Marker.</div></td>
</tr>
<tr id="MarkerOptions.opacity">
<td itemprop="property"><code><a class="secret-link" href="#MarkerOptions.opacity"><span>opacity</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The marker's opacity between 0.0 and 1.0.</div></td>
</tr>
<tr id="MarkerOptions.optimized">
<td itemprop="property"><code><a class="secret-link" href="#MarkerOptions.optimized"><span>optimized</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Optimization renders many markers as a single static element. Optimized rendering is enabled by default. Disable optimized rendering for animated GIFs or PNGs, or when each marker must be rendered as a separate DOM element (advanced usage only).</div></td>
</tr>
<tr id="MarkerOptions.position">
<td itemprop="property"><code><a class="secret-link" href="#MarkerOptions.position"><span>position</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Marker position. Required.</div></td>
</tr>
<tr id="MarkerOptions.shape">
<td itemprop="property"><code><a class="secret-link" href="#MarkerOptions.shape"><span>shape</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="MarkerShape.md">MarkerShape</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Image map region definition used for drag/click.</div></td>
</tr>
<tr id="MarkerOptions.title">
<td itemprop="property"><code><a class="secret-link" href="#MarkerOptions.title"><span>title</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Rollover text</div></td>
</tr>
<tr id="MarkerOptions.visible">
<td itemprop="property"><code><a class="secret-link" href="#MarkerOptions.visible"><span>visible</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">If true, the marker is visible</div></td>
</tr>
<tr id="MarkerOptions.zIndex">
<td itemprop="property"><code><a class="secret-link" href="#MarkerOptions.zIndex"><span>zIndex</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">All markers are displayed on the map in order of their zIndex, with higher values displaying in front of markers with lower values. By default, markers are displayed according to their vertical position on screen, with lower markers appearing in front of markers further up the screen.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
