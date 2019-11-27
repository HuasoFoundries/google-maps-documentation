
<devsite-heading text=" IconMouseEvent interface" for="IconMouseEvent" level="h2" link="" toc="" back-to-top=""><h2 id="IconMouseEvent" is-upgraded="">IconMouseEvent interface </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">IconMouseEvent</span></code>
interface
</p>
<p>This object is sent in an event when a user clicks on an icon on the map. The place ID of this place is stored in the placeId member. To prevent the default info window from showing up, call the stop() method on this event to prevent it being propagated. Learn more about <a href="/places/place-id">place IDs</a> in the Places API developer guide.</p>
<p>This interface extends
<code translate="no" dir="ltr"><a href="MouseEvent.md">MouseEvent</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface IconMouseEvent - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="IconMouseEvent.placeId">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#IconMouseEvent.placeId"><span>placeId</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The place ID of the place that was clicked. This place ID can be used to query more information about the feature that was clicked. <p> Learn more about <a href="/places/place-id">place IDs</a> in the Places API developer guide.</p></div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
