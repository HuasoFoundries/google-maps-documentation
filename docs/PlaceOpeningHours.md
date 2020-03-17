
<devsite-heading text=" PlaceOpeningHours interface" for="PlaceOpeningHours" level="h2" link="" toc="" back-to-top=""><h2 id="PlaceOpeningHours" is-upgraded="">PlaceOpeningHours interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps.places</span>.<span itemprop="name">PlaceOpeningHours</span></code>
interface
</p>
<p>Defines information about the opening hours of a Place.</p>
<devsite-heading text="Library" for="library_13" level="h4" link=""><h4 is-upgraded="" id="library_13">Library</h4></devsite-heading>
<p>places</p>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="interface PlaceOpeningHours - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="PlaceOpeningHours.isOpen">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceOpeningHours.isOpen"><span>isOpen</span></a></code></td>
<td><div><code translate="no" dir="ltr">isOpen([date])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">date</code>:&nbsp; <code translate="no" dir="ltr">Date <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Check whether the place is open now (when no date is passed), or at the given date. If this place does not have <code translate="no" dir="ltr"><a href="/maps/documentation/javascript/reference/places-service#PlaceResult.utc_offset_minutes">PlaceResult.utc_offset_minutes</a></code> or <code translate="no" dir="ltr"><a href="/maps/documentation/javascript/reference/places-service#PlaceOpeningHours.periods">PlaceOpeningHours.periods</a></code> then <code translate="no" dir="ltr">undefined</code> is returned (<code translate="no" dir="ltr"><a href="/maps/documentation/javascript/reference/places-service#PlaceOpeningHours.periods">PlaceOpeningHours.periods</a></code> is only available via <code translate="no" dir="ltr"><a href="/maps/documentation/javascript/reference/places-service#PlacesService.getDetails">PlacesService.getDetails</a></code>).</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface PlaceOpeningHours - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="PlaceOpeningHours.open_now">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceOpeningHours.open_now"><span>open_now</span></a></code></td>
<td><aside class="warning"><p><b>Notice:</b> <code translate="no" dir="ltr">open_now</code> is deprecated as of November 2019 and will be turned off in November 2020. Use the <code translate="no" dir="ltr"><a href="/maps/documentation/javascript/reference/places-service#PlaceOpeningHours.isOpen">PlaceOpeningHours.isOpen</a></code> function from a <code translate="no" dir="ltr"><a href="/maps/documentation/javascript/reference/places-service#PlacesService.getDetails">PlacesService.getDetails</a></code> result instead.</p></aside><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Whether the Place is open at the current time.</div></td>
</tr>
<tr id="PlaceOpeningHours.periods">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceOpeningHours.periods"><span>periods</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="PlaceOpeningHoursPeriod.md">PlaceOpeningHoursPeriod</a>&gt; <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Opening periods covering for each day of the week, starting from Sunday, in chronological order. Days in which the Place is not open are not included. Only available with <code translate="no" dir="ltr"><a href="/maps/documentation/javascript/reference/places-service#PlacesService.getDetails">PlacesService.getDetails</a></code>.</div></td>
</tr>
<tr id="PlaceOpeningHours.weekday_text">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceOpeningHours.weekday_text"><span>weekday_text</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;string&gt; <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">An array of seven strings representing the formatted opening hours for each day of the week. The Places Service will format and localize the opening hours appropriately for the current language. The ordering of the elements in this array depends on the language. Some languages start the week on Monday while others start on Sunday. Only available with <code translate="no" dir="ltr"><a href="/maps/documentation/javascript/reference/places-service#PlacesService.getDetails">PlacesService.getDetails</a></code>. Other calls may return an empty array.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
