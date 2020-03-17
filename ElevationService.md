
<devsite-heading text=" ElevationService class" for="ElevationService" level="h2" link="" toc="" back-to-top=""><h2 id="ElevationService" is-upgraded="">ElevationService class</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">ElevationService</span></code>
class
</p>
<p>Defines a service class that talks directly to Google servers for requesting elevation data.</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class ElevationService - Constructor">
<thead>
<tr><th colspan="2" id="ElevationService.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code translate="no" dir="ltr"><a class="secret-link" href="#ElevationService.constructor"><span>ElevationService</span></a></code></td>
<td><div><code translate="no" dir="ltr">ElevationService()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc">Creates a new instance of a <code translate="no" dir="ltr">ElevationService</code> that sends elevation queries to Google servers.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class ElevationService - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="ElevationService.getElevationAlongPath">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#ElevationService.getElevationAlongPath"><span>getElevationAlongPath</span></a></code></td>
<td><div><code translate="no" dir="ltr">getElevationAlongPath(request, callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">request</code>:&nbsp; <code translate="no" dir="ltr"><a href="PathElevationRequest.md">PathElevationRequest</a></code></li>
<li><code translate="no" dir="ltr">callback</code>:&nbsp; <code translate="no" dir="ltr">function(Array&lt;<a href="ElevationResult.md">ElevationResult</a>&gt; <span class="optional-type-annotation">optional</span>, <a href="ElevationStatus.md">ElevationStatus</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Makes an elevation request along a path, where the elevation data are returned as distance-based samples along that path.</div></td>
</tr>
<tr id="ElevationService.getElevationForLocations">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#ElevationService.getElevationForLocations"><span>getElevationForLocations</span></a></code></td>
<td><div><code translate="no" dir="ltr">getElevationForLocations(request, callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">request</code>:&nbsp; <code translate="no" dir="ltr"><a href="LocationElevationRequest.md">LocationElevationRequest</a></code></li>
<li><code translate="no" dir="ltr">callback</code>:&nbsp; <code translate="no" dir="ltr">function(Array&lt;<a href="ElevationResult.md">ElevationResult</a>&gt; <span class="optional-type-annotation">optional</span>, <a href="ElevationStatus.md">ElevationStatus</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Makes an elevation request for a list of discrete locations.</div></td>
</tr>
</tbody>
</table></div>
