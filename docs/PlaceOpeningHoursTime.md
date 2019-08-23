
<h2 id="PlaceOpeningHoursTime">PlaceOpeningHoursTime interface</h2>
<p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">PlaceOpeningHoursTime</span></code>
interface
</p>
<p>Defines when a Place opens or closes.</p>
<h4>Library</h4>
<p>places</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface PlaceOpeningHoursTime - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="PlaceOpeningHoursTime.day">
<td itemprop="property"><code><a class="secret-link" href="#PlaceOpeningHoursTime.day"><span>day</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The days of the week, as a number in the range [<code>0</code>, <code>6</code>], starting on Sunday. For example, <code>2</code> means Tuesday.</div></td>
</tr>
<tr id="PlaceOpeningHoursTime.hours">
<td itemprop="property"><code><a class="secret-link" href="#PlaceOpeningHoursTime.hours"><span>hours</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The hours of the <code><a href="https://developers.google.com/maps/documentation/javascript/reference/places-service#PlaceOpeningHoursTime.time">PlaceOpeningHoursTime.time</a></code> as a number, in the range [<code>0</code>, <code>23</code>]. This will be reported in the Place’s time zone.</div></td>
</tr>
<tr id="PlaceOpeningHoursTime.minutes">
<td itemprop="property"><code><a class="secret-link" href="#PlaceOpeningHoursTime.minutes"><span>minutes</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The minutes of the <code><a href="https://developers.google.com/maps/documentation/javascript/reference/places-service#PlaceOpeningHoursTime.time">PlaceOpeningHoursTime.time</a></code> as a number, in the range [<code>0</code>, <code>59</code>]. This will be reported in the Place’s time zone.</div></td>
</tr>
<tr id="PlaceOpeningHoursTime.nextDate">
<td itemprop="property"><code><a class="secret-link" href="#PlaceOpeningHoursTime.nextDate"><span>nextDate</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The timestamp (as milliseconds since the epoch, suitable for use with <code>new Date()</code>) representing the next occurrence of this PlaceOpeningHoursTime. It is calculated from the <code><a href="https://developers.google.com/maps/documentation/javascript/reference/places-service#PlaceOpeningHoursTime.day">PlaceOpeningHoursTime.day</a></code> of week, the <code><a href="https://developers.google.com/maps/documentation/javascript/reference/places-service#PlaceOpeningHoursTime.time">PlaceOpeningHoursTime.time</a></code>, and the <code><a href="https://developers.google.com/maps/documentation/javascript/reference/places-service#PlaceResult.utc_offset">PlaceResult.utc_offset</a></code>. If the <code><a href="https://developers.google.com/maps/documentation/javascript/reference/places-service#PlaceResult.utc_offset">PlaceResult.utc_offset</a></code> is <code>undefined</code>, then <code>nextDate</code> will be <code>undefined</code>.</div></td>
</tr>
<tr id="PlaceOpeningHoursTime.time">
<td itemprop="property"><code><a class="secret-link" href="#PlaceOpeningHoursTime.time"><span>time</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The time of day in 24-hour "hhmm" format. Values are in the range [<code>"0000"</code>, <code>"2359"</code>]. The time will be reported in the Place’s time zone.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
