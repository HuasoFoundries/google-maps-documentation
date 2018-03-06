<h2 id="StreetViewService"> StreetViewService class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">StreetViewService</span></code>
class
</p><p>A <code>StreetViewService</code> object performs searches for Street View data.</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class StreetViewService - Constructor">
<thead>
<tr><th colspan="2" id="StreetViewService.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>StreetViewService</span></code></td>
<td><div><code>StreetViewService()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc">Creates a <code>StreetViewService</code>, which provides an interface to the data stored in the Street View service.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class StreetViewService - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="StreetViewService.getPanorama">
<td><code><span>getPanorama</span></code></td>
<td><div><code>getPanorama(request, callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>request</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewLocationRequest.md">StreetViewLocationRequest</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPanoRequest.md">StreetViewPanoRequest</a></code></li>
<li><code>callback</code>:&nbsp; <code>function(<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPanoramaData.md">StreetViewPanoramaData</a>, <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewStatus.md">StreetViewStatus</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Retrieves the <code>StreetViewPanoramaData</code> for a panorama that matches the supplied Street View query request. The <code>StreetViewPanoramaData</code> is passed to the provided callback.</div></td>
</tr>
</tbody>
</table></div>