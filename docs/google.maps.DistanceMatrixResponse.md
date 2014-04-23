<h2 id="DistanceMatrixResponse">
google.maps.DistanceMatrixResponse
object specification
</h2><p>The response to a <code>DistanceMatrixService</code> request, consisting of the formatted origin and destination addresses, and a sequence of <code>DistanceMatrixResponseRow</code>s, one for each corresponding origin address.</p><h3>Properties</h3><table summary="interface DistanceMatrixResponse - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>destinationAddresses</code></td>
<td><code>Array.&lt;string&gt;</code></td>
<td>The formatted destination addresses.</td>
</tr>
<tr>
<td><code>originAddresses</code></td>
<td><code>Array.&lt;string&gt;</code></td>
<td>The formatted origin addresses.</td>
</tr>
<tr>
<td><code>rows</code></td>
<td><code>Array.&lt;<a href="#DistanceMatrixResponseRow">DistanceMatrixResponseRow</a>&gt;</code></td>
<td>The rows of the matrix, corresponding to the origin addresses.</td>
</tr>
</tbody>
</table>