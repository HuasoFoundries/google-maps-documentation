<h2 id="ElevationService">
google.maps.ElevationService
class
</h2><p>Defines a service class that talks directly to Google servers for requesting elevation data.</p><h3>Constructor</h3><table summary="class ElevationService - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>ElevationService()</code></td>
<td>Creates a new instance of a <code>ElevationService</code> that sends elevation queries to Google servers.</td>
</tr>
</tbody>
</table><h3>Methods</h3><table summary="class ElevationService - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getElevationAlongPath(request:<a href="#PathElevationRequest"><em>PathElevationRequest</em></a>, callback:function(Array.&lt;<a href="#ElevationResult">ElevationResult</a>&gt;, <a href="#ElevationStatus">ElevationStatus</a>))</code></td>
<td><code>None</code></td>
<td>Makes an elevation request along a path, where the elevation data are returned as distance-based samples along that path.</td>
</tr>
<tr>
<td><code>getElevationForLocations(request:<a href="#LocationElevationRequest"><em>LocationElevationRequest</em></a>, callback:function(Array.&lt;<a href="#ElevationResult">ElevationResult</a>&gt;, <a href="#ElevationStatus">ElevationStatus</a>))</code></td>
<td><code>None</code></td>
<td>Makes an elevation request for a list of discrete locations.</td>
</tr>
</tbody>
</table>