
<h2 id="PlaceOpeningHours">PlaceOpeningHours interface</h2>
<p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">PlaceOpeningHours</span></code>
interface
</p>
<p>Defines information about the opening hours of a Place.</p>
<h4>Library</h4>
<p>places</p>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="interface PlaceOpeningHours - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="PlaceOpeningHours.isOpen">
<td itemprop="property"><code><a class="secret-link" href="#PlaceOpeningHours.isOpen"><span>isOpen</span></a></code></td>
<td><div><code>isOpen([date])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>date</code>:&nbsp; <code>Date <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Check whether the place is open now (when no date is passed), or at the given date. If this place does not have <code><a href="https://developers.google.com/maps/documentation/javascript/reference/places-service#PlaceResult.utc_offset_minutes">PlaceResult.utc_offset_minutes</a></code> or <code><a href="https://developers.google.com/maps/documentation/javascript/reference/places-service#PlaceOpeningHours.periods">PlaceOpeningHours.periods</a></code> then undefined is returned.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface PlaceOpeningHours - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="PlaceOpeningHours.open_now">
<td itemprop="property"><code><a class="secret-link" href="#PlaceOpeningHours.open_now"><span>open_now</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Whether the Place is open at the current time.</div></td>
</tr>
<tr id="PlaceOpeningHours.periods">
<td itemprop="property"><code><a class="secret-link" href="#PlaceOpeningHours.periods"><span>periods</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="PlaceOpeningHoursPeriod.md">PlaceOpeningHoursPeriod</a>&gt; <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Opening periods covering for each day of the week, starting from Sunday, in chronological order. Days in which the Place is not open are not included. Only available with <code><a href="https://developers.google.com/maps/documentation/javascript/reference/places-service#PlacesService.getDetails">PlacesService.getDetails</a></code>.</div></td>
</tr>
<tr id="PlaceOpeningHours.weekday_text">
<td itemprop="property"><code><a class="secret-link" href="#PlaceOpeningHours.weekday_text"><span>weekday_text</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt; <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">An array of seven strings representing the formatted opening hours for each day of the week. The Places Service will format and localize the opening hours appropriately for the current language. The ordering of the elements in this array depends on the language. Some languages start the week on Monday while others start on Sunday. Only available with <code><a href="https://developers.google.com/maps/documentation/javascript/reference/places-service#PlacesService.getDetails">PlacesService.getDetails</a></code>. Other calls may return an empty array.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
