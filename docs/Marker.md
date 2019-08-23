
<h2 id="Marker">Marker class</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Marker</span></code>
class
</p>
<p>This class extends
<code><a href="MVCObject.md">MVCObject</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Marker - Constructor">
<thead>
<tr><th colspan="2" id="Marker.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><a class="secret-link" href="#Marker.constructor"><span>Marker</span></a></code></td>
<td><div><code>Marker([opts])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>opts</code>:&nbsp; <code><a href="MarkerOptions.md">MarkerOptions</a> <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc">Creates a marker with the options specified. If a map is specified, the marker is added to the map upon construction. Note that the position must be set for the marker to display.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class Marker - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Marker.getAnimation">
<td itemprop="property"><code><a class="secret-link" href="#Marker.getAnimation"><span>getAnimation</span></a></code></td>
<td><div><code>getAnimation()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="Animation.md">Animation</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.getClickable">
<td itemprop="property"><code><a class="secret-link" href="#Marker.getClickable"><span>getClickable</span></a></code></td>
<td><div><code>getClickable()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.getCursor">
<td itemprop="property"><code><a class="secret-link" href="#Marker.getCursor"><span>getCursor</span></a></code></td>
<td><div><code>getCursor()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.getDraggable">
<td itemprop="property"><code><a class="secret-link" href="#Marker.getDraggable"><span>getDraggable</span></a></code></td>
<td><div><code>getDraggable()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.getIcon">
<td itemprop="property"><code><a class="secret-link" href="#Marker.getIcon"><span>getIcon</span></a></code></td>
<td><div><code>getIcon()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>string|<a href="Icon.md">Icon</a>|<a href="Symbol.md">Symbol</a></code></div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.getLabel">
<td itemprop="property"><code><a class="secret-link" href="#Marker.getLabel"><span>getLabel</span></a></code></td>
<td><div><code>getLabel()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="MarkerLabel.md">MarkerLabel</a></code></div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.getMap">
<td itemprop="property"><code><a class="secret-link" href="#Marker.getMap"><span>getMap</span></a></code></td>
<td><div><code>getMap()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="Map.md">Map</a>|<a href="StreetViewPanorama.md">StreetViewPanorama</a></code></div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.getOpacity">
<td itemprop="property"><code><a class="secret-link" href="#Marker.getOpacity"><span>getOpacity</span></a></code></td>
<td><div><code>getOpacity()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.getPosition">
<td itemprop="property"><code><a class="secret-link" href="#Marker.getPosition"><span>getPosition</span></a></code></td>
<td><div><code>getPosition()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="LatLng.md">LatLng</a></code></div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.getShape">
<td itemprop="property"><code><a class="secret-link" href="#Marker.getShape"><span>getShape</span></a></code></td>
<td><div><code>getShape()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="MarkerShape.md">MarkerShape</a></code></div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.getTitle">
<td itemprop="property"><code><a class="secret-link" href="#Marker.getTitle"><span>getTitle</span></a></code></td>
<td><div><code>getTitle()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.getVisible">
<td itemprop="property"><code><a class="secret-link" href="#Marker.getVisible"><span>getVisible</span></a></code></td>
<td><div><code>getVisible()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.getZIndex">
<td itemprop="property"><code><a class="secret-link" href="#Marker.getZIndex"><span>getZIndex</span></a></code></td>
<td><div><code>getZIndex()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.setAnimation">
<td itemprop="property"><code><a class="secret-link" href="#Marker.setAnimation"><span>setAnimation</span></a></code></td>
<td><div><code>setAnimation(animation)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>animation</code>:&nbsp; <code><a href="Animation.md">Animation</a> <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Start an animation. Any ongoing animation will be cancelled. Currently supported animations are: BOUNCE, DROP. Passing in <code>null</code> will cause any animation to stop.</div></td>
</tr>
<tr id="Marker.setClickable">
<td itemprop="property"><code><a class="secret-link" href="#Marker.setClickable"><span>setClickable</span></a></code></td>
<td><div><code>setClickable(flag)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>flag</code>:&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.setCursor">
<td itemprop="property"><code><a class="secret-link" href="#Marker.setCursor"><span>setCursor</span></a></code></td>
<td><div><code>setCursor(cursor)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>cursor</code>:&nbsp; <code>string</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.setDraggable">
<td itemprop="property"><code><a class="secret-link" href="#Marker.setDraggable"><span>setDraggable</span></a></code></td>
<td><div><code>setDraggable(flag)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>flag</code>:&nbsp; <code>boolean <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.setIcon">
<td itemprop="property"><code><a class="secret-link" href="#Marker.setIcon"><span>setIcon</span></a></code></td>
<td><div><code>setIcon(icon)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>icon</code>:&nbsp; <code>string|<a href="Icon.md">Icon</a>|<a href="Symbol.md">Symbol</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.setLabel">
<td itemprop="property"><code><a class="secret-link" href="#Marker.setLabel"><span>setLabel</span></a></code></td>
<td><div><code>setLabel(label)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>label</code>:&nbsp; <code>string|<a href="MarkerLabel.md">MarkerLabel</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.setMap">
<td itemprop="property"><code><a class="secret-link" href="#Marker.setMap"><span>setMap</span></a></code></td>
<td><div><code>setMap(map)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>map</code>:&nbsp; <code><a href="Map.md">Map</a>|<a href="StreetViewPanorama.md">StreetViewPanorama</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Renders the marker on the specified map or panorama. If map is set to null, the marker will be removed.</div></td>
</tr>
<tr id="Marker.setOpacity">
<td itemprop="property"><code><a class="secret-link" href="#Marker.setOpacity"><span>setOpacity</span></a></code></td>
<td><div><code>setOpacity(opacity)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>opacity</code>:&nbsp; <code>number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.setOptions">
<td itemprop="property"><code><a class="secret-link" href="#Marker.setOptions"><span>setOptions</span></a></code></td>
<td><div><code>setOptions(options)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>options</code>:&nbsp; <code><a href="MarkerOptions.md">MarkerOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.setPosition">
<td itemprop="property"><code><a class="secret-link" href="#Marker.setPosition"><span>setPosition</span></a></code></td>
<td><div><code>setPosition(latlng)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>latlng</code>:&nbsp; <code><a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.setShape">
<td itemprop="property"><code><a class="secret-link" href="#Marker.setShape"><span>setShape</span></a></code></td>
<td><div><code>setShape(shape)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>shape</code>:&nbsp; <code><a href="MarkerShape.md">MarkerShape</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.setTitle">
<td itemprop="property"><code><a class="secret-link" href="#Marker.setTitle"><span>setTitle</span></a></code></td>
<td><div><code>setTitle(title)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>title</code>:&nbsp; <code>string</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.setVisible">
<td itemprop="property"><code><a class="secret-link" href="#Marker.setVisible"><span>setVisible</span></a></code></td>
<td><div><code>setVisible(visible)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>visible</code>:&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Marker.setZIndex">
<td itemprop="property"><code><a class="secret-link" href="#Marker.setZIndex"><span>setZIndex</span></a></code></td>
<td><div><code>setZIndex(zIndex)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>zIndex</code>:&nbsp; <code>number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="constants responsive" summary="Marker constants">
<thead>
<tr><th colspan="2">Constants</th>
</tr></thead>
<tbody>
<tr id="Marker.MAX_ZINDEX">
<td itemprop="property"><code><a class="secret-link" href="#Marker.MAX_ZINDEX"><span>MAX_ZINDEX</span></a></code></td>
<td>The maximum default z-index that the API will assign to a marker. You may set a higher z-index to bring a marker to the front.</td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="details responsive" summary="class Marker - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="Marker.animation_changed">
<td itemprop="property"><code><a class="secret-link" href="#Marker.animation_changed"><span>animation_changed</span></a></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the marker's animation property changes.</div></td>
</tr>
<tr id="Marker.click">
<td itemprop="property"><code><a class="secret-link" href="#Marker.click"><span>click</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the marker icon was clicked.</div></td>
</tr>
<tr id="Marker.clickable_changed">
<td itemprop="property"><code><a class="secret-link" href="#Marker.clickable_changed"><span>clickable_changed</span></a></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the marker's clickable property changes.</div></td>
</tr>
<tr id="Marker.cursor_changed">
<td itemprop="property"><code><a class="secret-link" href="#Marker.cursor_changed"><span>cursor_changed</span></a></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the marker's cursor property changes.</div></td>
</tr>
<tr id="Marker.dblclick">
<td itemprop="property"><code><a class="secret-link" href="#Marker.dblclick"><span>dblclick</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the marker icon was double clicked.</div></td>
</tr>
<tr id="Marker.drag">
<td itemprop="property"><code><a class="secret-link" href="#Marker.drag"><span>drag</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is repeatedly fired while the user drags the marker.</div></td>
</tr>
<tr id="Marker.dragend">
<td itemprop="property"><code><a class="secret-link" href="#Marker.dragend"><span>dragend</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user stops dragging the marker.</div></td>
</tr>
<tr id="Marker.draggable_changed">
<td itemprop="property"><code><a class="secret-link" href="#Marker.draggable_changed"><span>draggable_changed</span></a></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the marker's draggable property changes.</div></td>
</tr>
<tr id="Marker.dragstart">
<td itemprop="property"><code><a class="secret-link" href="#Marker.dragstart"><span>dragstart</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user starts dragging the marker.</div></td>
</tr>
<tr id="Marker.flat_changed">
<td itemprop="property"><code><a class="secret-link" href="#Marker.flat_changed"><span>flat_changed</span></a></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the marker's flat property changes.</div></td>
</tr>
<tr id="Marker.icon_changed">
<td itemprop="property"><code><a class="secret-link" href="#Marker.icon_changed"><span>icon_changed</span></a></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the marker icon property changes.</div></td>
</tr>
<tr id="Marker.mousedown">
<td itemprop="property"><code><a class="secret-link" href="#Marker.mousedown"><span>mousedown</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired for a mousedown on the marker.</div></td>
</tr>
<tr id="Marker.mouseout">
<td itemprop="property"><code><a class="secret-link" href="#Marker.mouseout"><span>mouseout</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the mouse leaves the area of the marker icon.</div></td>
</tr>
<tr id="Marker.mouseover">
<td itemprop="property"><code><a class="secret-link" href="#Marker.mouseover"><span>mouseover</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the mouse enters the area of the marker icon.</div></td>
</tr>
<tr id="Marker.mouseup">
<td itemprop="property"><code><a class="secret-link" href="#Marker.mouseup"><span>mouseup</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired for a mouseup on the marker.</div></td>
</tr>
<tr id="Marker.position_changed">
<td itemprop="property"><code><a class="secret-link" href="#Marker.position_changed"><span>position_changed</span></a></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the marker position property changes.</div></td>
</tr>
<tr id="Marker.rightclick">
<td itemprop="property"><code><a class="secret-link" href="#Marker.rightclick"><span>rightclick</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired for a rightclick on the marker.</div></td>
</tr>
<tr id="Marker.shape_changed">
<td itemprop="property"><code><a class="secret-link" href="#Marker.shape_changed"><span>shape_changed</span></a></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the marker's shape property changes.</div></td>
</tr>
<tr id="Marker.title_changed">
<td itemprop="property"><code><a class="secret-link" href="#Marker.title_changed"><span>title_changed</span></a></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the marker title property changes.</div></td>
</tr>
<tr id="Marker.visible_changed">
<td itemprop="property"><code><a class="secret-link" href="#Marker.visible_changed"><span>visible_changed</span></a></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the marker's visible property changes.</div></td>
</tr>
<tr id="Marker.zindex_changed">
<td itemprop="property"><code><a class="secret-link" href="#Marker.zindex_changed"><span>zindex_changed</span></a></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the marker's zIndex property changes.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
