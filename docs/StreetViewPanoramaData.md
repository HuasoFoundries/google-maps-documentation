<h2 id="StreetViewPanoramaData"> StreetViewPanoramaData object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">StreetViewPanoramaData</span></code>
object specification
</p><p>The representation of a panorama returned from the provider defined using <code>registerPanoProvider</code>.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface StreetViewPanoramaData - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>copyright</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Specifies the copyright text for this panorama.</div></td>
</tr>
<tr>
<td><code><span>imageDate</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Specifies the year and month in which the imagery in this panorama was acquired. The date string is in the form YYYY-MM.</div></td>
</tr>
<tr>
<td><code><span>links</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewLink.md">StreetViewLink</a>&gt;</code></div>
<div class="desc">Specifies the navigational links to adjacent panoramas.</div></td>
</tr>
<tr>
<td><code><span>location</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewLocation.md">StreetViewLocation</a></code></div>
<div class="desc">Specifies the location meta-data for this panorama.</div></td>
</tr>
<tr>
<td><code><span>tiles</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewTileData.md">StreetViewTileData</a></code></div>
<div class="desc">Specifies the custom tiles for this panorama.</div></td>
</tr>
</tbody>
</table></div>