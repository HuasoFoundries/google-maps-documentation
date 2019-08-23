
<h2 id="PlaceOpeningHoursPeriod">PlaceOpeningHoursPeriod interface</h2>
<p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">PlaceOpeningHoursPeriod</span></code>
interface
</p>
<p>Defines structured information about the opening hours of a Place. <strong>Note:</strong> If a Place is <strong>always open</strong>, the <code>close</code> section will be missing from the response. Clients can rely on always-open being represented as an <code>open</code> period containing <code>day</code> with value <code>0</code> and <code>time</code> with value <code>"0000"</code>, and no <code>close</code>.</p>
<h4>Library</h4>
<p>places</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface PlaceOpeningHoursPeriod - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="PlaceOpeningHoursPeriod.close">
<td itemprop="property"><code><a class="secret-link" href="#PlaceOpeningHoursPeriod.close"><span>close</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="PlaceOpeningHoursTime.md">PlaceOpeningHoursTime</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The closing time for the Place.</div></td>
</tr>
<tr id="PlaceOpeningHoursPeriod.open">
<td itemprop="property"><code><a class="secret-link" href="#PlaceOpeningHoursPeriod.open"><span>open</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="PlaceOpeningHoursTime.md">PlaceOpeningHoursTime</a></code></div>
<div class="desc">The opening time for the Place.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
