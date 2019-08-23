
<h2 id="StreetViewLocationRequest">StreetViewLocationRequest interface</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">StreetViewLocationRequest</span></code>
interface
</p>
<p>A Street View request to be sent with <code>getPanorama</code>. <code>StreetViewLocationRequest</code> lets you search for a Street View panoroma at a specified location.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface StreetViewLocationRequest - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="StreetViewLocationRequest.location">
<td itemprop="property"><code><a class="secret-link" href="#StreetViewLocationRequest.location"><span>location</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Specifies the location where to search for a Street View panorama.</div></td>
</tr>
<tr id="StreetViewLocationRequest.preference">
<td itemprop="property"><code><a class="secret-link" href="#StreetViewLocationRequest.preference"><span>preference</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="StreetViewPreference.md">StreetViewPreference</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Sets a preference for which panorama should be found within the radius: the one nearest to the provided location, or the best one within the radius.</div></td>
</tr>
<tr id="StreetViewLocationRequest.radius">
<td itemprop="property"><code><a class="secret-link" href="#StreetViewLocationRequest.radius"><span>radius</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Sets a radius in meters in which to search for a panorama. Defaults to 50 when not supplied.</div></td>
</tr>
<tr id="StreetViewLocationRequest.source">
<td itemprop="property"><code><a class="secret-link" href="#StreetViewLocationRequest.source"><span>source</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="StreetViewSource.md">StreetViewSource</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Specifies the source of panoramas to search. This allows a restriction to search for just outdoor panoramas for example. If not specified it is set to <code>DEFAULT</code>.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
