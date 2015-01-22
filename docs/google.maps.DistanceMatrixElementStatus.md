<h2 id="DistanceMatrixElementStatus">
google.maps.DistanceMatrixElementStatus
class
</h2><p>The element-level status about a particular origin-destination pairing returned by the <code>DistanceMatrixService</code> upon completion of a distance matrix request.</p><h3 id="devsite_header_150">Constant</h3><table summary="class DistanceMatrixElementStatus - Constants" width="100%">
<thead>
<tr><th>Constant</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>NOT_FOUND</code></td>
<td>The origin and/or destination of this pairing could not be geocoded.</td>
</tr>
<tr>
<td><code>OK</code></td>
<td>The response contains a valid result.</td>
</tr>
<tr>
<td><code>ZERO_RESULTS</code></td>
<td>No route could be found between the origin and destination.</td>
</tr>
</tbody>
</table>