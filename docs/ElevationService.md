<h2 id="ElevationService"> ElevationService class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">ElevationService</span></code>
class
</p><p>Defines a service class that talks directly to Google servers for requesting elevation data.</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class ElevationService - Constructor">
<thead>
<tr><th colspan="2" id="ElevationService.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>ElevationService</span></code></td>
<td><div><code>ElevationService()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc">Creates a new instance of a <code>ElevationService</code> that sends elevation queries to Google servers.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class ElevationService - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="ElevationService.getElevationAlongPath">
<td><code><span>getElevationAlongPath</span></code></td>
<td><div><code>getElevationAlongPath(request, callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>request</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PathElevationRequest.md">PathElevationRequest</a></code></li>
<li><code>callback</code>:&nbsp; <code>function(Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ElevationResult.md">ElevationResult</a>&gt;, <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ElevationStatus.md">ElevationStatus</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Makes an elevation request along a path, where the elevation data are returned as distance-based samples along that path.</div></td>
</tr>
<tr id="ElevationService.getElevationForLocations">
<td><code><span>getElevationForLocations</span></code></td>
<td><div><code>getElevationForLocations(request, callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>request</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LocationElevationRequest.md">LocationElevationRequest</a></code></li>
<li><code>callback</code>:&nbsp; <code>function(Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ElevationResult.md">ElevationResult</a>&gt;, <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ElevationStatus.md">ElevationStatus</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Makes an elevation request for a list of discrete locations.</div></td>
</tr>
</tbody>
</table></div>