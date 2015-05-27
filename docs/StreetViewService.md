<h2 id="StreetViewService">
StreetViewService
class
</h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">StreetViewService</span></code>
class
</p><p>A <code>StreetViewService</code> object performs searches for Street View data.</p><table class="methods responsive" summary="class StreetViewService - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code>getPanoramaById(pano:string, callback:function(<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPanoramaData.md">StreetViewPanoramaData</a>, <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewStatus.md">StreetViewStatus</a>))</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Retrieves the data for the given pano id and passes it to the provided callback as a <code>StreetViewPanoramaData</code> object. Pano ids are unique per panorama and stable for the lifetime of a session, but are liable to change between sessions.</div></td>
</tr>
<tr>
<td><code>getPanoramaByLocation(latlng:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md">LatLngLiteral</a>, radius:number, callback:function(<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPanoramaData.md">StreetViewPanoramaData</a>, <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewStatus.md">StreetViewStatus</a>))</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Retrieves the <code>StreetViewPanoramaData</code> for a panorama within a given radius of the given <code>LatLng</code>. The <code>StreetViewPanoramaData</code> is passed to the provided callback. If the radius is less than 50 meters, the nearest panorama will be returned.</div></td>
</tr>
</tbody>
</table>