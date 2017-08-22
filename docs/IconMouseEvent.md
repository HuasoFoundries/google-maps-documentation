<h2 id="IconMouseEvent"> IconMouseEvent object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">IconMouseEvent</span></code>
object specification
</p><p>This object is sent in an event when a user clicks on an icon on the map. The place ID of this place is stored in the placeId member. To prevent the default info window from showing up, call the stop() method on this event to prevent it being propagated. Learn more about <a href="https://developers.google.com/places/place-id">place IDs</a> in the Places API developer guide.</p><p>This object extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MouseEvent.md">MouseEvent</a></code>.
</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="record IconMouseEvent - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>placeId</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The place ID of the place that was clicked. This place ID can be used to query more information about the feature that was clicked. <p> Learn more about <a href="https://developers.google.com/places/place-id">place IDs</a> in the Places API developer guide.</p></div></td>
</tr>
</tbody>
</table></div>