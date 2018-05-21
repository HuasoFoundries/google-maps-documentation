<h2 id="MaxZoomService"> MaxZoomService class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">MaxZoomService</span></code>
class
</p><p>A service for obtaining the highest zoom level at which satellite imagery is available for a given location.</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class MaxZoomService - Constructor">
<thead>
<tr><th colspan="2" id="MaxZoomService.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>MaxZoomService</span></code></td>
<td><div><code>MaxZoomService()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc">Creates a new instance of a <code>MaxZoomService</code> that can be used to send queries about the maximum zoom level available for satellite imagery.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class MaxZoomService - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="MaxZoomService.getMaxZoomAtLatLng">
<td><code><span>getMaxZoomAtLatLng</span></code></td>
<td><div><code>getMaxZoomAtLatLng(latlng, callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>latlng</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md">LatLngLiteral</a></code></li>
<li><code>callback</code>:&nbsp; <code>function(<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MaxZoomResult.md">MaxZoomResult</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Returns the maximum zoom level for which detailed imagery is available at a particular <code>LatLng</code> for the <code>satellite</code> map type. As this request is asynchronous, you must pass a <code>callback</code> function which will be executed upon completion of the request, being passed a <code>MaxZoomResult</code>.</div></td>
</tr>
</tbody>
</table></div>