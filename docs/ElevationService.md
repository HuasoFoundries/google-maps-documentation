<h2 id="ElevationService"> ElevationService class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">ElevationService</span></code>
class
</p><p>Defines a service class that talks directly to Google servers for requesting elevation data.</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class ElevationService - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>ElevationService()</span></code></td>
<td>Creates a new instance of a <code><span>ElevationService</span></code> that sends elevation queries to Google servers.</td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class ElevationService - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>getElevationAlongPath(<wbr>request:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PathElevationRequest.md"><span>PathElevationRequest</span></a><span>,<wbr> callback:function(<wbr>Array&lt;</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ElevationResult.md"><span>ElevationResult</span></a><span>&gt;,<wbr> </span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ElevationStatus.md"><span>ElevationStatus</span></a><span>))</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Makes an elevation request along a path, where the elevation data are returned as distance-based samples along that path.</div></td>
</tr>
<tr>
<td><code><span>getElevationForLocations(<wbr>request:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LocationElevationRequest.md"><span>LocationElevationRequest</span></a><span>,<wbr> callback:function(<wbr>Array&lt;</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ElevationResult.md"><span>ElevationResult</span></a><span>&gt;,<wbr> </span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ElevationStatus.md"><span>ElevationStatus</span></a><span>))</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Makes an elevation request for a list of discrete locations.</div></td>
</tr>
</tbody>
</table></div>