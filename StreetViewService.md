
<devsite-heading text=" StreetViewService class" for="StreetViewService" level="h2" link="" toc="" back-to-top=""><h2 id="StreetViewService" is-upgraded="">StreetViewService class</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">StreetViewService</span></code>
class
</p>
<p>A <code translate="no" dir="ltr">StreetViewService</code> object performs searches for Street View data.</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class StreetViewService - Constructor">
<thead>
<tr><th colspan="2" id="StreetViewService.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewService.constructor"><span>StreetViewService</span></a></code></td>
<td><div><code translate="no" dir="ltr">StreetViewService()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc">Creates a <code translate="no" dir="ltr">StreetViewService</code>, which provides an interface to the data stored in the Street View service.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class StreetViewService - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="StreetViewService.getPanorama">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewService.getPanorama"><span>getPanorama</span></a></code></td>
<td><div><code translate="no" dir="ltr">getPanorama(request, callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">request</code>:&nbsp; <code translate="no" dir="ltr"><a href="StreetViewLocationRequest.md">StreetViewLocationRequest</a>|<a href="StreetViewPanoRequest.md">StreetViewPanoRequest</a></code></li>
<li><code translate="no" dir="ltr">callback</code>:&nbsp; <code translate="no" dir="ltr">function(<a href="StreetViewPanoramaData.md">StreetViewPanoramaData</a>, <a href="StreetViewStatus.md">StreetViewStatus</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Retrieves the <code translate="no" dir="ltr">StreetViewPanoramaData</code> for a panorama that matches the supplied Street View query request. The <code translate="no" dir="ltr">StreetViewPanoramaData</code> is passed to the provided callback.</div></td>
</tr>
</tbody>
</table></div>
