<h2 id="StreetViewService"> StreetViewService class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">StreetViewService</span></code>
class
</p><p>A <code>StreetViewService</code> object performs searches for Street View data.</p><div class="devsite-table-wrapper"><table class="methods responsive" summary="class StreetViewService - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>getPanoramaById(<wbr>pano:string,<wbr> callback:function(<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPanoramaData.md"><span>StreetViewPanoramaData</span></a><span>,<wbr> </span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewStatus.md"><span>StreetViewStatus</span></a><span>))</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Retrieves the data for the given pano id and passes it to the provided callback as a <code>StreetViewPanoramaData</code> object. Pano ids are unique per panorama and stable for the lifetime of a session, but are liable to change between sessions.</div></td>
</tr>
<tr>
<td><code><span>getPanoramaByLocation(<wbr>latlng:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md"><span>LatLngLiteral</span></a><span>,<wbr> radius:number,<wbr> callback:function(<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPanoramaData.md"><span>StreetViewPanoramaData</span></a><span>,<wbr> </span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewStatus.md"><span>StreetViewStatus</span></a><span>))</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Retrieves the <code>StreetViewPanoramaData</code> for a panorama within a given radius of the given <code>LatLng</code>. The <code>StreetViewPanoramaData</code> is passed to the provided callback. If the radius is less than 50 meters, the nearest panorama will be returned.</div></td>
</tr>
</tbody>
</table></div>