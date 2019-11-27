
<devsite-heading text=" TransitOptions interface" for="TransitOptions" level="h2" link="" toc="" back-to-top=""><h2 id="TransitOptions" is-upgraded="">TransitOptions interface </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">TransitOptions</span></code>
interface
</p>
<p>The TransitOptions object to be included in a <code translate="no" dir="ltr"><a href="DirectionsRequest.md">DirectionsRequest</a></code> when the travel mode is set to TRANSIT.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface TransitOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="TransitOptions.arrivalTime">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#TransitOptions.arrivalTime"><span>arrivalTime</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Date <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The desired arrival time for the route, specified as a Date object. The Date object measures time in milliseconds since 1 January 1970. If arrival time is specified, departure time is ignored.</div></td>
</tr>
<tr id="TransitOptions.departureTime">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#TransitOptions.departureTime"><span>departureTime</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Date <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The desired departure time for the route, specified as a Date object. The Date object measures time in milliseconds since 1 January 1970. If neither departure time nor arrival time is specified, the time is assumed to be "now".</div></td>
</tr>
<tr id="TransitOptions.modes">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#TransitOptions.modes"><span>modes</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="TransitMode.md">TransitMode</a>&gt; <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">One or more preferred modes of transit, such as bus or train. If no preference is given, the API returns the default best route.</div></td>
</tr>
<tr id="TransitOptions.routingPreference">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#TransitOptions.routingPreference"><span>routingPreference</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="TransitRoutePreference.md">TransitRoutePreference</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">A preference that can bias the choice of transit route, such as less walking. If no preference is given, the API returns the default best route.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
