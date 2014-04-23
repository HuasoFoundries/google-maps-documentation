<h2 id="MaxZoomService">
google.maps.MaxZoomService
class
</h2><p>A service for obtaining the highest zoom level at which satellite imagery is available for a given location.</p><h3>Constructor</h3><table summary="class MaxZoomService - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>MaxZoomService()</code></td>
<td>Creates a new instance of a <code>MaxZoomService</code> that can be used to send queries about the maximum zoom level available for satellite imagery.</td>
</tr>
</tbody>
</table><h3>Methods</h3><table summary="class MaxZoomService - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getMaxZoomAtLatLng(latlng:<a href="#LatLng">LatLng</a>, callback:function(<a href="#MaxZoomResult">MaxZoomResult</a>))</code></td>
<td><code>None</code></td>
<td>Returns the maximum zoom level available at a particular <code>LatLng</code> for the Satellite map type. As this request is asynchronous, you must pass a <code>callback</code> function which will be executed upon completion of the request, being passed a <code>MaxZoomResult</code>.</td>
</tr>
</tbody>
</table>