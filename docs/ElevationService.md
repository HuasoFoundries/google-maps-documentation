
<h2 id="ElevationService">ElevationService class</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">ElevationService</span></code>
class
</p>
<p>Defines a service class that talks directly to Google servers for requesting elevation data.</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class ElevationService - Constructor">
<thead>
<tr><th colspan="2" id="ElevationService.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><a class="secret-link" href="#ElevationService.constructor"><span>ElevationService</span></a></code></td>
<td><div><code>ElevationService()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc">Creates a new instance of a <code>ElevationService</code> that sends elevation queries to Google servers.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class ElevationService - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="ElevationService.getElevationAlongPath">
<td itemprop="property"><code><a class="secret-link" href="#ElevationService.getElevationAlongPath"><span>getElevationAlongPath</span></a></code></td>
<td><div><code>getElevationAlongPath(request, callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>request</code>:&nbsp; <code><a href="PathElevationRequest.md">PathElevationRequest</a></code></li>
<li><code>callback</code>:&nbsp; <code>function(Array&lt;<a href="ElevationResult.md">ElevationResult</a>&gt;, <a href="ElevationStatus.md">ElevationStatus</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Makes an elevation request along a path, where the elevation data are returned as distance-based samples along that path.</div></td>
</tr>
<tr id="ElevationService.getElevationForLocations">
<td itemprop="property"><code><a class="secret-link" href="#ElevationService.getElevationForLocations"><span>getElevationForLocations</span></a></code></td>
<td><div><code>getElevationForLocations(request, callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>request</code>:&nbsp; <code><a href="LocationElevationRequest.md">LocationElevationRequest</a></code></li>
<li><code>callback</code>:&nbsp; <code>function(Array&lt;<a href="ElevationResult.md">ElevationResult</a>&gt;, <a href="ElevationStatus.md">ElevationStatus</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Makes an elevation request for a list of discrete locations.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
