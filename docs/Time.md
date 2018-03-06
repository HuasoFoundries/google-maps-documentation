<h2 id="Time"> Time interface </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Time</span></code>
interface
</p><p>A representation of time as a Date object, a localized string, and a time zone.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface Time - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="Time.text">
<td><code><span>text</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">A string representing the time's value. The time is displayed in the time zone of the transit stop.</div></td>
</tr>
<tr id="Time.time_zone">
<td><code><span>time_zone</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The time zone in which this stop lies. The value is the name of the time zone as defined in the IANA Time Zone Database, e.g. "America/New_York".</div></td>
</tr>
<tr id="Time.value">
<td><code><span>value</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Date</code></div>
<div class="desc">The time of this departure or arrival, specified as a JavaScript Date object.</div></td>
</tr>
</tbody>
</table></div>