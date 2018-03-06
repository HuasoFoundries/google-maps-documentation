<h2 id="Marker"> Marker class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Marker</span></code>
class
</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Marker - Constructor">
<thead>
<tr><th colspan="2" id="Marker.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>Marker</span></code></td>
<td><div><code>Marker([opts])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>opts</code> (optional):&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MarkerOptions.md">MarkerOptions</a></code></li>
</ul></div>
<div class="desc">Creates a marker with the options specified. If a map is specified, the marker is added to the map upon construction. Note that the position must be set for the marker to display.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class Marker - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Marker.getAnimation">
<td><code><span>getAnimation</span></code></td>
<td><div><code>getAnimation()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Animation.md">Animation</a></code></div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.getClickable">
<td><code><span>getClickable</span></code></td>
<td><div><code>getClickable()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.getCursor">
<td><code><span>getCursor</span></code></td>
<td><div><code>getCursor()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.getDraggable">
<td><code><span>getDraggable</span></code></td>
<td><div><code>getDraggable()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.getIcon">
<td><code><span>getIcon</span></code></td>
<td><div><code>getIcon()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>string|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Icon.md">Icon</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Symbol.md">Symbol</a></code></div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.getLabel">
<td><code><span>getLabel</span></code></td>
<td><div><code>getLabel()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MarkerLabel.md">MarkerLabel</a></code></div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.getMap">
<td><code><span>getMap</span></code></td>
<td><div><code>getMap()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPanorama.md">StreetViewPanorama</a></code></div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.getOpacity">
<td><code><span>getOpacity</span></code></td>
<td><div><code>getOpacity()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.getPosition">
<td><code><span>getPosition</span></code></td>
<td><div><code>getPosition()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.getShape">
<td><code><span>getShape</span></code></td>
<td><div><code>getShape()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MarkerShape.md">MarkerShape</a></code></div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.getTitle">
<td><code><span>getTitle</span></code></td>
<td><div><code>getTitle()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.getVisible">
<td><code><span>getVisible</span></code></td>
<td><div><code>getVisible()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.getZIndex">
<td><code><span>getZIndex</span></code></td>
<td><div><code>getZIndex()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.setAnimation">
<td><code><span>setAnimation</span></code></td>
<td><div><code>setAnimation(animation)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>animation</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Animation.md">Animation</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Start an animation. Any ongoing animation will be cancelled. Currently supported animations are: BOUNCE, DROP. Passing in <code>null</code> will cause any animation to stop.</div></td>
</tr>
<tr id="Marker.setClickable">
<td><code><span>setClickable</span></code></td>
<td><div><code>setClickable(flag)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>flag</code>:&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.setCursor">
<td><code><span>setCursor</span></code></td>
<td><div><code>setCursor(cursor)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>cursor</code>:&nbsp; <code>string</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.setDraggable">
<td><code><span>setDraggable</span></code></td>
<td><div><code>setDraggable(flag)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>flag</code>:&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.setIcon">
<td><code><span>setIcon</span></code></td>
<td><div><code>setIcon(icon)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>icon</code>:&nbsp; <code>string|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Icon.md">Icon</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Symbol.md">Symbol</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.setLabel">
<td><code><span>setLabel</span></code></td>
<td><div><code>setLabel(label)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>label</code>:&nbsp; <code>string|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MarkerLabel.md">MarkerLabel</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.setMap">
<td><code><span>setMap</span></code></td>
<td><div><code>setMap(map)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>map</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPanorama.md">StreetViewPanorama</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Renders the marker on the specified map or panorama. If map is set to null, the marker will be removed.</div></td>
</tr>
<tr id="Marker.setOpacity">
<td><code><span>setOpacity</span></code></td>
<td><div><code>setOpacity(opacity)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>opacity</code>:&nbsp; <code>number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.setOptions">
<td><code><span>setOptions</span></code></td>
<td><div><code>setOptions(options)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>options</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MarkerOptions.md">MarkerOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.setPosition">
<td><code><span>setPosition</span></code></td>
<td><div><code>setPosition(latlng)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>latlng</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md">LatLngLiteral</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.setShape">
<td><code><span>setShape</span></code></td>
<td><div><code>setShape(shape)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>shape</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MarkerShape.md">MarkerShape</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.setTitle">
<td><code><span>setTitle</span></code></td>
<td><div><code>setTitle(title)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>title</code>:&nbsp; <code>string</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.setVisible">
<td><code><span>setVisible</span></code></td>
<td><div><code>setVisible(visible)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>visible</code>:&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.setZIndex">
<td><code><span>setZIndex</span></code></td>
<td><div><code>setZIndex(zIndex)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>zIndex</code>:&nbsp; <code>number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="constants responsive" summary="Marker constants">
<thead>
<tr><th colspan="2">Constants</th>
</tr></thead>
<tbody>
<tr id="Marker.MAX_ZINDEX">
<td><code><span>MAX_ZINDEX</span></code></td>
<td>The maximum default z-index that the API will assign to a marker. You may set a higher z-index to bring a marker to the front.</td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="details responsive" summary="class Marker - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="Marker.animation_changed">
<td><code><span>animation_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the marker's animation property changes.</div></td>
</tr>
<tr id="Marker.click">
<td><code><span>click</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the marker icon was clicked.</div></td>
</tr>
<tr id="Marker.clickable_changed">
<td><code><span>clickable_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the marker's clickable property changes.</div></td>
</tr>
<tr id="Marker.cursor_changed">
<td><code><span>cursor_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the marker's cursor property changes.</div></td>
</tr>
<tr id="Marker.dblclick">
<td><code><span>dblclick</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the marker icon was double clicked.</div></td>
</tr>
<tr id="Marker.drag">
<td><code><span>drag</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is repeatedly fired while the user drags the marker.</div></td>
</tr>
<tr id="Marker.dragend">
<td><code><span>dragend</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user stops dragging the marker.</div></td>
</tr>
<tr id="Marker.draggable_changed">
<td><code><span>draggable_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the marker's draggable property changes.</div></td>
</tr>
<tr id="Marker.dragstart">
<td><code><span>dragstart</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user starts dragging the marker.</div></td>
</tr>
<tr id="Marker.flat_changed">
<td><code><span>flat_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the marker's flat property changes.</div></td>
</tr>
<tr id="Marker.icon_changed">
<td><code><span>icon_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the marker icon property changes.</div></td>
</tr>
<tr id="Marker.mousedown">
<td><code><span>mousedown</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired for a mousedown on the marker.</div></td>
</tr>
<tr id="Marker.mouseout">
<td><code><span>mouseout</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the mouse leaves the area of the marker icon.</div></td>
</tr>
<tr id="Marker.mouseover">
<td><code><span>mouseover</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the mouse enters the area of the marker icon.</div></td>
</tr>
<tr id="Marker.mouseup">
<td><code><span>mouseup</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired for a mouseup on the marker.</div></td>
</tr>
<tr id="Marker.position_changed">
<td><code><span>position_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the marker position property changes.</div></td>
</tr>
<tr id="Marker.rightclick">
<td><code><span>rightclick</span></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired for a rightclick on the marker.</div></td>
</tr>
<tr id="Marker.shape_changed">
<td><code><span>shape_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the marker's shape property changes.</div></td>
</tr>
<tr id="Marker.title_changed">
<td><code><span>title_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the marker title property changes.</div></td>
</tr>
<tr id="Marker.visible_changed">
<td><code><span>visible_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the marker's visible property changes.</div></td>
</tr>
<tr id="Marker.zindex_changed">
<td><code><span>zindex_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the marker's zIndex property changes.</div></td>
</tr>
</tbody>
</table></div>