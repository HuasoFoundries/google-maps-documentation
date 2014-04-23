<h2 id="StreetViewPanoramaData">
google.maps.StreetViewPanoramaData
object specification
</h2><p>The representation of a panorama returned from the provider defined using <code>registerPanoProvider</code>.</p><h3>Properties</h3><table summary="interface StreetViewPanoramaData - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>copyright</code></td>
<td><code>string</code></td>
<td>Specifies the copyright text for this panorama.</td>
</tr>
<tr>
<td><code>imageDate</code></td>
<td><code>string</code></td>
<td>Specifies the year and month in which the imagery in this panorama was acquired. The date string is in the form YYYY-MM.</td>
</tr>
<tr>
<td><code>links</code></td>
<td><code>Array.&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.StreetViewLink.md">StreetViewLink</a>&gt;</code></td>
<td>Specifies the navigational links to adjacent panoramas.</td>
</tr>
<tr>
<td><code>location</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.StreetViewLocation.md">StreetViewLocation</a></code></td>
<td>Specifies the location meta-data for this panorama.</td>
</tr>
<tr>
<td><code>tiles</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.StreetViewTileData.md">StreetViewTileData</a></code></td>
<td>Specifies the custom tiles for this panorama.</td>
</tr>
</tbody>
</table>