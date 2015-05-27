<h2 id="ElevationService">
ElevationService
class
</h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">ElevationService</span></code>
class
</p><p>Defines a service class that talks directly to Google servers for requesting elevation data.</p><table class="constructors responsive" summary="class ElevationService - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code>ElevationService()</code></td>
<td>Creates a new instance of a <code>ElevationService</code> that sends elevation queries to Google servers.</td>
</tr>
</tbody>
</table><table class="methods responsive" summary="class ElevationService - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code>getElevationAlongPath(request:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PathElevationRequest.md"><em>PathElevationRequest</em></a>, callback:function(Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ElevationResult.md">ElevationResult</a>&gt;, <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ElevationStatus.md">ElevationStatus</a>))</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Makes an elevation request along a path, where the elevation data are returned as distance-based samples along that path.</div></td>
</tr>
<tr>
<td><code>getElevationForLocations(request:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LocationElevationRequest.md"><em>LocationElevationRequest</em></a>, callback:function(Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ElevationResult.md">ElevationResult</a>&gt;, <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ElevationStatus.md">ElevationStatus</a>))</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Makes an elevation request for a list of discrete locations.</div></td>
</tr>
</tbody>
</table>