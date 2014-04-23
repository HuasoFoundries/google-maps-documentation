<h2 id="Marker">
google.maps.Marker
class
</h2><p>This class extends
<code><a href="#MVCObject">MVCObject</a></code>.
</p><h3>Constructor</h3><table summary="class Marker - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>Marker(opts?:<a href="#MarkerOptions"><em>MarkerOptions</em></a>)</code></td>
<td>Creates a marker with the options specified. If a map is specified, the marker is added to the map upon construction. Note that the position must be set for the marker to display.</td>
</tr>
</tbody>
</table><h3>Methods</h3><table summary="class Marker - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getAnimation()</code></td>
<td><code><a href="#Animation">Animation</a></code></td>
<td></td>
</tr>
<tr>
<td><code>getClickable()</code></td>
<td><code>boolean</code></td>
<td></td>
</tr>
<tr>
<td><code>getCursor()</code></td>
<td><code>string</code></td>
<td></td>
</tr>
<tr>
<td><code>getDraggable()</code></td>
<td><code>boolean</code></td>
<td></td>
</tr>
<tr>
<td><code>getIcon()</code></td>
<td><code>string|<a href="#Icon">Icon</a>|<a href="#Symbol">Symbol</a></code></td>
<td></td>
</tr>
<tr>
<td><code>getMap()</code></td>
<td><code><a href="#Map">Map</a>|<a href="#StreetViewPanorama">StreetViewPanorama</a></code></td>
<td></td>
</tr>
<tr>
<td><code>getPosition()</code></td>
<td><code><a href="#LatLng">LatLng</a></code></td>
<td></td>
</tr>
<tr>
<td><code>getShape()</code></td>
<td><code><a href="#MarkerShape">MarkerShape</a></code></td>
<td></td>
</tr>
<tr>
<td><code>getTitle()</code></td>
<td><code>string</code></td>
<td></td>
</tr>
<tr>
<td><code>getVisible()</code></td>
<td><code>boolean</code></td>
<td></td>
</tr>
<tr>
<td><code>getZIndex()</code></td>
<td><code>number</code></td>
<td></td>
</tr>
<tr>
<td><code>setAnimation(animation:<a href="#Animation">Animation</a>)</code></td>
<td><code>None</code></td>
<td>Start an animation. Any ongoing animation will be cancelled. Currently supported animations are: BOUNCE, DROP. Passing in <code>null</code> will cause any animation to stop.</td>
</tr>
<tr>
<td><code>setClickable(flag:boolean)</code></td>
<td><code>None</code></td>
<td></td>
</tr>
<tr>
<td><code>setCursor(cursor:string)</code></td>
<td><code>None</code></td>
<td></td>
</tr>
<tr>
<td><code>setDraggable(flag:boolean)</code></td>
<td><code>None</code></td>
<td></td>
</tr>
<tr>
<td><code>setIcon(icon:string|<a href="#Icon">Icon</a>|<a href="#Symbol">Symbol</a>)</code></td>
<td><code>None</code></td>
<td></td>
</tr>
<tr>
<td><code>setMap(map:<a href="#Map">Map</a>|<a href="#StreetViewPanorama">StreetViewPanorama</a>)</code></td>
<td><code>None</code></td>
<td>Renders the marker on the specified map or panorama. If map is set to null, the marker will be removed.</td>
</tr>
<tr>
<td><code>setOptions(options:<a href="#MarkerOptions"><em>MarkerOptions</em></a>)</code></td>
<td><code>None</code></td>
<td></td>
</tr>
<tr>
<td><code>setPosition(latlng:<a href="#LatLng">LatLng</a>|<a href="#LatLngLiteral">LatLngLiteral</a>)</code></td>
<td><code>None</code></td>
<td></td>
</tr>
<tr>
<td><code>setShape(shape:<a href="#MarkerShape"><em>MarkerShape</em></a>)</code></td>
<td><code>None</code></td>
<td></td>
</tr>
<tr>
<td><code>setTitle(title:string)</code></td>
<td><code>None</code></td>
<td></td>
</tr>
<tr>
<td><code>setVisible(visible:boolean)</code></td>
<td><code>None</code></td>
<td></td>
</tr>
<tr>
<td><code>setZIndex(zIndex:number)</code></td>
<td><code>None</code></td>
<td></td>
</tr>
</tbody>
</table><h3>Constant</h3><table summary="class Marker - Constants" width="100%">
<thead>
<tr><th>Constant</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>MAX_ZINDEX</code></td>
<td>The maximum default z-index that the API will assign to a marker. You may set a higher z-index to bring a marker to the front.</td>
</tr>
</tbody>
</table><h3>Events</h3><table summary="class Marker - Events" width="100%">
<thead>
<tr><th>Events</th>
<th>Arguments</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>animation_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the marker's animation property changes.</td>
</tr>
<tr>
<td><code>click</code></td>
<td><code><a href="#MouseEvent"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the marker icon was clicked.</td>
</tr>
<tr>
<td><code>clickable_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the marker's clickable property changes.</td>
</tr>
<tr>
<td><code>cursor_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the marker's cursor property changes.</td>
</tr>
<tr>
<td><code>dblclick</code></td>
<td><code><a href="#MouseEvent"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the marker icon was double clicked.</td>
</tr>
<tr>
<td><code>drag</code></td>
<td><code><a href="#MouseEvent"><em>MouseEvent</em></a></code></td>
<td>This event is repeatedly fired while the user drags the marker.</td>
</tr>
<tr>
<td><code>dragend</code></td>
<td><code><a href="#MouseEvent"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the user stops dragging the marker.</td>
</tr>
<tr>
<td><code>draggable_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the marker's draggable property changes.</td>
</tr>
<tr>
<td><code>dragstart</code></td>
<td><code><a href="#MouseEvent"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the user starts dragging the marker.</td>
</tr>
<tr>
<td><code>flat_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the marker's flat property changes.</td>
</tr>
<tr>
<td><code>icon_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the marker icon property changes.</td>
</tr>
<tr>
<td><code>mousedown</code></td>
<td><code><a href="#MouseEvent"><em>MouseEvent</em></a></code></td>
<td>This event is fired for a mousedown on the marker.</td>
</tr>
<tr>
<td><code>mouseout</code></td>
<td><code><a href="#MouseEvent"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the mouse leaves the area of the marker icon.</td>
</tr>
<tr>
<td><code>mouseover</code></td>
<td><code><a href="#MouseEvent"><em>MouseEvent</em></a></code></td>
<td>This event is fired when the mouse enters the area of the marker icon.</td>
</tr>
<tr>
<td><code>mouseup</code></td>
<td><code><a href="#MouseEvent"><em>MouseEvent</em></a></code></td>
<td>This event is fired for a mouseup on the marker.</td>
</tr>
<tr>
<td><code>position_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the marker position property changes.</td>
</tr>
<tr>
<td><code>rightclick</code></td>
<td><code><a href="#MouseEvent"><em>MouseEvent</em></a></code></td>
<td>This event is fired for a rightclick on the marker.</td>
</tr>
<tr>
<td><code>shape_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the marker's shape property changes.</td>
</tr>
<tr>
<td><code>title_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the marker title property changes.</td>
</tr>
<tr>
<td><code>visible_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the marker's visible property changes.</td>
</tr>
<tr>
<td><code>zindex_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the marker's zIndex property changes.</td>
</tr>
</tbody>
</table>