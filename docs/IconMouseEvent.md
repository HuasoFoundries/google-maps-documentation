
<h2 id="IconMouseEvent">IconMouseEvent interface</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">IconMouseEvent</span></code>
interface
</p>
<p>This object is sent in an event when a user clicks on an icon on the map. The place ID of this place is stored in the placeId member. To prevent the default info window from showing up, call the stop() method on this event to prevent it being propagated. Learn more about <a href="https://developers.google.com/places/place-id">place IDs</a> in the Places API developer guide.</p>
<p>This interface extends
<code><a href="MouseEvent.md">MouseEvent</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface IconMouseEvent - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="IconMouseEvent.placeId">
<td itemprop="property"><code><a class="secret-link" href="#IconMouseEvent.placeId"><span>placeId</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The place ID of the place that was clicked. This place ID can be used to query more information about the feature that was clicked. <p> Learn more about <a href="https://developers.google.com/places/place-id">place IDs</a> in the Places API developer guide.</p></div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
