<h2 id="PlacesServiceStatus">
google.maps.places.PlacesServiceStatus
class
</h2><p>The status returned by the <code>PlacesService</code> on the completion of its searches.</p><h3>Library</h3><p>places</p><h3>Constant</h3><table summary="class PlacesServiceStatus - Constants" width="100%">
<thead>
<tr><th>Constant</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>INVALID_REQUEST</code></td>
<td>This request was invalid.</td>
</tr>
<tr>
<td><code>OK</code></td>
<td>The response contains a valid result.</td>
</tr>
<tr>
<td><code>OVER_QUERY_LIMIT</code></td>
<td>The application has gone over its request quota.</td>
</tr>
<tr>
<td><code>REQUEST_DENIED</code></td>
<td>The application is not allowed to use the <code>PlacesService</code>.</td>
</tr>
<tr>
<td><code>UNKNOWN_ERROR</code></td>
<td>The <code>PlacesService</code> request could not be processed due to a server error. The request may succeed if you try again.</td>
</tr>
<tr>
<td><code>ZERO_RESULTS</code></td>
<td>No result was found for this request.</td>
</tr>
</tbody>
</table>