
<devsite-heading text=" PlaceOpeningHoursTime interface" for="PlaceOpeningHoursTime" level="h2" link="" toc="" back-to-top=""><h2 id="PlaceOpeningHoursTime" is-upgraded="">PlaceOpeningHoursTime interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps.places</span>.<span itemprop="name">PlaceOpeningHoursTime</span></code>
interface
</p>
<p>Defines when a Place opens or closes.</p>
<devsite-heading text="Library" for="library_15" level="h4" link=""><h4 is-upgraded="" id="library_15">Library</h4></devsite-heading>
<p>places</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface PlaceOpeningHoursTime - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="PlaceOpeningHoursTime.day">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceOpeningHoursTime.day"><span>day</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">The days of the week, as a number in the range [<code translate="no" dir="ltr">0</code>, <code translate="no" dir="ltr">6</code>], starting on Sunday. For example, <code translate="no" dir="ltr">2</code> means Tuesday.</div></td>
</tr>
<tr id="PlaceOpeningHoursTime.hours">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceOpeningHoursTime.hours"><span>hours</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">The hours of the <code translate="no" dir="ltr"><a href="/maps/documentation/javascript/reference/places-service#PlaceOpeningHoursTime.time">PlaceOpeningHoursTime.time</a></code> as a number, in the range [<code translate="no" dir="ltr">0</code>, <code translate="no" dir="ltr">23</code>]. This will be reported in the Place’s time zone.</div></td>
</tr>
<tr id="PlaceOpeningHoursTime.minutes">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceOpeningHoursTime.minutes"><span>minutes</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">The minutes of the <code translate="no" dir="ltr"><a href="/maps/documentation/javascript/reference/places-service#PlaceOpeningHoursTime.time">PlaceOpeningHoursTime.time</a></code> as a number, in the range [<code translate="no" dir="ltr">0</code>, <code translate="no" dir="ltr">59</code>]. This will be reported in the Place’s time zone.</div></td>
</tr>
<tr id="PlaceOpeningHoursTime.nextDate">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceOpeningHoursTime.nextDate"><span>nextDate</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The timestamp (as milliseconds since the epoch, suitable for use with <code translate="no" dir="ltr">new Date()</code>) representing the next occurrence of this PlaceOpeningHoursTime. It is calculated from the <code translate="no" dir="ltr"><a href="/maps/documentation/javascript/reference/places-service#PlaceOpeningHoursTime.day">PlaceOpeningHoursTime.day</a></code> of week, the <code translate="no" dir="ltr"><a href="/maps/documentation/javascript/reference/places-service#PlaceOpeningHoursTime.time">PlaceOpeningHoursTime.time</a></code>, and the <code translate="no" dir="ltr"><a href="/maps/documentation/javascript/reference/places-service#PlaceResult.utc_offset">PlaceResult.utc_offset</a></code>. If the <code translate="no" dir="ltr"><a href="/maps/documentation/javascript/reference/places-service#PlaceResult.utc_offset">PlaceResult.utc_offset</a></code> is <code translate="no" dir="ltr">undefined</code>, then <code translate="no" dir="ltr">nextDate</code> will be <code translate="no" dir="ltr">undefined</code>.</div></td>
</tr>
<tr id="PlaceOpeningHoursTime.time">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlaceOpeningHoursTime.time"><span>time</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">The time of day in 24-hour "hhmm" format. Values are in the range [<code translate="no" dir="ltr">"0000"</code>, <code translate="no" dir="ltr">"2359"</code>]. The time will be reported in the Place’s time zone.</div></td>
</tr>
</tbody>
</table></div>
