
<devsite-heading text=" MaxZoomService class" for="MaxZoomService" level="h2" link="" toc="" back-to-top=""><h2 id="MaxZoomService" is-upgraded="">MaxZoomService class</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">MaxZoomService</span></code>
class
</p>
<p>A service for obtaining the highest zoom level at which satellite imagery is available for a given location.</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class MaxZoomService - Constructor">
<thead>
<tr><th colspan="2" id="MaxZoomService.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code translate="no" dir="ltr"><a class="secret-link" href="#MaxZoomService.constructor"><span>MaxZoomService</span></a></code></td>
<td><div><code translate="no" dir="ltr">MaxZoomService()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc">Creates a new instance of a <code translate="no" dir="ltr">MaxZoomService</code> that can be used to send queries about the maximum zoom level available for satellite imagery.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class MaxZoomService - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="MaxZoomService.getMaxZoomAtLatLng">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MaxZoomService.getMaxZoomAtLatLng"><span>getMaxZoomAtLatLng</span></a></code></td>
<td><div><code translate="no" dir="ltr">getMaxZoomAtLatLng(latlng, callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">latlng</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a></code></li>
<li><code translate="no" dir="ltr">callback</code>:&nbsp; <code translate="no" dir="ltr">function(<a href="MaxZoomResult.md">MaxZoomResult</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Returns the maximum zoom level for which detailed imagery is available at a particular <code translate="no" dir="ltr">LatLng</code> for the <code translate="no" dir="ltr">satellite</code> map type. As this request is asynchronous, you must pass a <code translate="no" dir="ltr">callback</code> function which will be executed upon completion of the request, being passed a <code translate="no" dir="ltr">MaxZoomResult</code>.</div></td>
</tr>
</tbody>
</table></div>
