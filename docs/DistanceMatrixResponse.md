<h2 id="DistanceMatrixResponse"> DistanceMatrixResponse object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">DistanceMatrixResponse</span></code>
object specification
</p><p>The response to a <code>DistanceMatrixService</code> request, consisting of the formatted origin and destination addresses, and a sequence of <code>DistanceMatrixResponseRow</code>s, one for each corresponding origin address.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="record DistanceMatrixResponse - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>destinationAddresses</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">The formatted destination addresses.</div></td>
</tr>
<tr>
<td><code><span>originAddresses</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">The formatted origin addresses.</div></td>
</tr>
<tr>
<td><code><span>rows</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DistanceMatrixResponseRow.md">DistanceMatrixResponseRow</a>&gt;</code></div>
<div class="desc">The rows of the matrix, corresponding to the origin addresses.</div></td>
</tr>
</tbody>
</table></div>