<h2 id="MaxZoomService">
MaxZoomService
class
</h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">MaxZoomService</span></code>
class
</p><p>A service for obtaining the highest zoom level at which satellite imagery is available for a given location.</p><table class="constructors responsive" summary="class MaxZoomService - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code>MaxZoomService()</code></td>
<td>Creates a new instance of a <code>MaxZoomService</code> that can be used to send queries about the maximum zoom level available for satellite imagery.</td>
</tr>
</tbody>
</table><table class="methods responsive" summary="class MaxZoomService - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code>getMaxZoomAtLatLng(latlng:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md">LatLngLiteral</a>, callback:function(<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MaxZoomResult.md">MaxZoomResult</a>))</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Returns the maximum zoom level available at a particular <code>LatLng</code> for the Satellite map type. As this request is asynchronous, you must pass a <code>callback</code> function which will be executed upon completion of the request, being passed a <code>MaxZoomResult</code>.</div></td>
</tr>
</tbody>
</table>