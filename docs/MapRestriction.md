
<devsite-heading text=" MapRestriction interface" for="MapRestriction" level="h2" link="" toc="" back-to-top=""><h2 id="MapRestriction" is-upgraded="">MapRestriction interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">MapRestriction</span></code>
interface
</p>
<p>A restriction that can be applied to the Map. The map's viewport will not exceed these restrictions.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface MapRestriction - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="MapRestriction.latLngBounds">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MapRestriction.latLngBounds"><span>latLngBounds</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLngBounds.md">LatLngBounds</a>|<a href="LatLngBoundsLiteral.md">LatLngBoundsLiteral</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">When set, a user can only pan and zoom inside the given bounds. Bounds can restrict both longitude and latitude, or can restrict latitude only. For latitude-only bounds use west and east longitudes of -180 and 180, respectively. For example, <devsite-code no-copy=""><pre translate="no" dir="ltr" is-upgraded=""> latLngBounds: {north: northLat, south: southLat, west: -180, east: 180} </pre></devsite-code></div></td>
</tr>
<tr id="MapRestriction.strictBounds">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MapRestriction.strictBounds"><span>strictBounds</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean</code></div>
<div class="desc">By default bounds are relaxed, meaning that a user can zoom out until the entire bounded area is in view. Bounds can be made more restrictive by setting the <code translate="no" dir="ltr">strictBounds</code> flag to true. This reduces how far a user can zoom out, ensuring that everything outside of the restricted bounds stays hidden.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
