<h2 id="ElevationStatus">
ElevationStatus
class
</h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">ElevationStatus</span></code>
class
</p><p>The status returned by the <code>ElevationService</code> upon completion of an elevation requerst.</p><table class="constants responsive" summary="class ElevationStatus - Constants">
<thead>
<tr><th colspan="2">Constant</th>
</tr></thead>
<tbody>
<tr>
<td><code>INVALID_REQUEST</code></td>
<td>This request was invalid.</td>
</tr>
<tr>
<td><code>OK</code></td>
<td>The request did not encounter any errors.</td>
</tr>
<tr>
<td><code>OVER_QUERY_LIMIT</code></td>
<td>The webpage has gone over the requests limit in too short a period of time.</td>
</tr>
<tr>
<td><code>REQUEST_DENIED</code></td>
<td>The webpage is not allowed to use the elevation service for some reason.</td>
</tr>
<tr>
<td><code>UNKNOWN_ERROR</code></td>
<td>A geocoding, directions or elevation request could not be successfully processed, yet the exact reason for the failure is not known.</td>
</tr>
</tbody>
</table>