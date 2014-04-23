<h2 id="DistanceMatrixStatus">
google.maps.DistanceMatrixStatus
class
</h2><p>The top-level status about the request in general returned by the <code>DistanceMatrixService</code> upon completion of a distance matrix request.</p><h3>Constant</h3><table summary="class DistanceMatrixStatus - Constants" width="100%">
<thead>
<tr><th>Constant</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>INVALID_REQUEST</code></td>
<td>The provided request was invalid.</td>
</tr>
<tr>
<td><code>MAX_DIMENSIONS_EXCEEDED</code></td>
<td>The request contains more than 25 origins, or more than 25 destinations.</td>
</tr>
<tr>
<td><code>MAX_ELEMENTS_EXCEEDED</code></td>
<td>The product of origins and destinations exceeds the per-query limit.</td>
</tr>
<tr>
<td><code>OK</code></td>
<td>The response contains a valid result.</td>
</tr>
<tr>
<td><code>OVER_QUERY_LIMIT</code></td>
<td>Too many elements have been requested within the allowed time period. The request should succeed if you try again after a reasonable amount of time.</td>
</tr>
<tr>
<td><code>REQUEST_DENIED</code></td>
<td>The service denied use of the Distance Matrix service by your web page.</td>
</tr>
<tr>
<td><code>UNKNOWN_ERROR</code></td>
<td>A Distance Matrix request could not be processed due to a server error. The request may succeed if you try again.</td>
</tr>
</tbody>
</table>