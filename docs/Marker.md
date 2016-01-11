<h2 id="Marker"> Marker class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Marker</span></code>
class
</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Marker - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>Marker(<wbr>opts?:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MarkerOptions.md"><em><span>MarkerOptions</span></em></a><span>)</span></code></td>
<td>Creates a marker with the options specified. If a map is specified, the marker is added to the map upon construction. Note that the position must be set for the marker to display.</td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class Marker - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>getAnimation()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Animation.md">Animation</a></code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>getAttribution()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Attribution.md">Attribution</a></code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>getClickable()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>getCursor()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>getDraggable()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>getIcon()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Icon.md">Icon</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Symbol.md">Symbol</a></code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>getLabel()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MarkerLabel.md">MarkerLabel</a></code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>getMap()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPanorama.md">StreetViewPanorama</a></code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>getOpacity()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>getPlace()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MarkerPlace.md">MarkerPlace</a></code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>getPosition()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>getShape()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MarkerShape.md">MarkerShape</a></code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>getTitle()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>getVisible()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>getZIndex()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>setAnimation(<wbr>animation:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Animation.md"><span>Animation</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Start an animation. Any ongoing animation will be cancelled. Currently supported animations are: BOUNCE, DROP. Passing in <code>null</code> will cause any animation to stop.</div></td>
</tr>
<tr>
<td><code><span>setAttribution(<wbr>attribution:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Attribution.md"><em><span>Attribution</span></em></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>setClickable(<wbr>flag:boolean)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>setCursor(<wbr>cursor:string)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>setDraggable(<wbr>flag:boolean)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>setIcon(<wbr>icon:string|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Icon.md"><span>Icon</span></a><span>|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Symbol.md"><span>Symbol</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>setLabel(<wbr>label:string|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MarkerLabel.md"><span>MarkerLabel</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>setMap(<wbr>map:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md"><span>Map</span></a><span>|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPanorama.md"><span>StreetViewPanorama</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Renders the marker on the specified map or panorama. If map is set to null, the marker will be removed.</div></td>
</tr>
<tr>
<td><code><span>setOpacity(<wbr>opacity:number)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>setOptions(<wbr>options:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MarkerOptions.md"><em><span>MarkerOptions</span></em></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>setPlace(<wbr>place:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MarkerPlace.md"><em><span>MarkerPlace</span></em></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>setPosition(<wbr>latlng:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md"><span>LatLngLiteral</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>setShape(<wbr>shape:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MarkerShape.md"><em><span>MarkerShape</span></em></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>setTitle(<wbr>title:string)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>setVisible(<wbr>visible:boolean)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>setZIndex(<wbr>zIndex:number)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="constants responsive" summary="Marker constants">
<thead>
<tr><th colspan="2">Constant</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>MAX_ZINDEX</span></code></td>
<td>The maximum default z-index that the API will assign to a marker. You may set a higher z-index to bring a marker to the front.</td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="details responsive" summary="class Marker - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>animation_changed</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the marker's animation property changes.</div></td>
</tr>
<tr>
<td><code><span>click</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired when the marker icon was clicked.</div></td>
</tr>
<tr>
<td><code><span>clickable_changed</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the marker's clickable property changes.</div></td>
</tr>
<tr>
<td><code><span>cursor_changed</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the marker's cursor property changes.</div></td>
</tr>
<tr>
<td><code><span>dblclick</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired when the marker icon was double clicked.</div></td>
</tr>
<tr>
<td><code><span>drag</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is repeatedly fired while the user drags the marker.</div></td>
</tr>
<tr>
<td><code><span>dragend</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired when the user stops dragging the marker.</div></td>
</tr>
<tr>
<td><code><span>draggable_changed</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the marker's draggable property changes.</div></td>
</tr>
<tr>
<td><code><span>dragstart</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired when the user starts dragging the marker.</div></td>
</tr>
<tr>
<td><code><span>flat_changed</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the marker's flat property changes.</div></td>
</tr>
<tr>
<td><code><span>icon_changed</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the marker icon property changes.</div></td>
</tr>
<tr>
<td><code><span>mousedown</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired for a mousedown on the marker.</div></td>
</tr>
<tr>
<td><code><span>mouseout</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired when the mouse leaves the area of the marker icon.</div></td>
</tr>
<tr>
<td><code><span>mouseover</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired when the mouse enters the area of the marker icon.</div></td>
</tr>
<tr>
<td><code><span>mouseup</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired for a mouseup on the marker.</div></td>
</tr>
<tr>
<td><code><span>position_changed</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the marker position property changes.</div></td>
</tr>
<tr>
<td><code><span>rightclick</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md"><em>MouseEvent</em></a></code></div>
<div class="desc">This event is fired for a rightclick on the marker.</div></td>
</tr>
<tr>
<td><code><span>shape_changed</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the marker's shape property changes.</div></td>
</tr>
<tr>
<td><code><span>title_changed</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the marker title property changes.</div></td>
</tr>
<tr>
<td><code><span>visible_changed</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the marker's visible property changes.</div></td>
</tr>
<tr>
<td><code><span>zindex_changed</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the marker's zIndex property changes.</div></td>
</tr>
</tbody>
</table></div>