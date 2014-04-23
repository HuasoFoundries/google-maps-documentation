<h2 id="StreetViewService">
google.maps.StreetViewService
class
</h2><p>A <code>StreetViewService</code> object performs searches for Street View data.</p><h3>Methods</h3><table summary="class StreetViewService - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getPanoramaById(pano:string, callback:function(<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.StreetViewPanoramaData.md">StreetViewPanoramaData</a>, <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.StreetViewStatus.md">StreetViewStatus</a>))</code></td>
<td><code>None</code></td>
<td>Retrieves the data for the given pano id and passes it to the provided callback as a <code>StreetViewPanoramaData</code> object. Pano ids are unique per panorama and stable for the lifetime of a session, but are liable to change between sessions.</td>
</tr>
<tr>
<td><code>getPanoramaByLocation(latlng:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngLiteral.md">LatLngLiteral</a>, radius:number, callback:function(<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.StreetViewPanoramaData.md">StreetViewPanoramaData</a>, <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.StreetViewStatus.md">StreetViewStatus</a>))</code></td>
<td><code>None</code></td>
<td>Retrieves the <code>StreetViewPanoramaData</code> for a panorama within a given radius of the given <code>LatLng</code>. The <code>StreetViewPanoramaData</code> is passed to the provided callback. If the radius is less than 50 meters, the nearest panorama will be returned.</td>
</tr>
</tbody>
</table>