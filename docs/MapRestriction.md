
<h2 id="MapRestriction">MapRestriction interface</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">MapRestriction</span></code>
interface
</p>
<p>A restriction that can be applied to the Map. The map's viewport will not exceed these restrictions.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface MapRestriction - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="MapRestriction.latLngBounds">
<td itemprop="property"><code><a class="secret-link" href="#MapRestriction.latLngBounds"><span>latLngBounds</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="LatLngBounds.md">LatLngBounds</a>|<a href="LatLngBoundsLiteral.md">LatLngBoundsLiteral</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">When set, a user can only pan and zoom inside the given bounds. Bounds can restrict both longitude and latitude, or can restrict latitude only. For latitude-only bounds use west and east longitudes of -180 and 180, respectively. For example, <pre><div class="devsite-code-button-wrapper"><div class="devsite-code-button gc-analytics-event material-icons devsite-dark-code-button" data-category="Site-Wide Custom Events" data-label="Dark Code Toggle" track-type="exampleCode" track-name="darkCodeToggle" tabindex="0" role="button" data-tooltip-align="b,c" data-tooltip="Dark code theme" aria-label="Dark code theme" data-title="Dark code theme"></div></div> latLngBounds: {north: northLat, south: southLat, west: -180, east: 180} </pre></div></td>
</tr>
<tr id="MapRestriction.strictBounds">
<td itemprop="property"><code><a class="secret-link" href="#MapRestriction.strictBounds"><span>strictBounds</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">By default bounds are relaxed, meaning that a user can zoom out until the entire bounded area is in view. Bounds can be made more restrictive by setting the <code>strictBounds</code> flag to true. This reduces how far a user can zoom out, ensuring that everything outside of the restricted bounds stays hidden.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
