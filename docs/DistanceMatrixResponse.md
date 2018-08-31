
<h2 id="DistanceMatrixResponse">DistanceMatrixResponse interface</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">DistanceMatrixResponse</span></code>
interface
</p>
<p>The response to a <code>DistanceMatrixService</code> request, consisting of the formatted origin and destination addresses, and a sequence of <code>DistanceMatrixResponseRow</code>s, one for each corresponding origin address.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface DistanceMatrixResponse - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="DistanceMatrixResponse.destinationAddresses">
<td itemprop="property"><code><a class="secret-link" href="#DistanceMatrixResponse.destinationAddresses"><span>destinationAddresses</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">The formatted destination addresses.</div></td>
</tr>
<tr id="DistanceMatrixResponse.originAddresses">
<td itemprop="property"><code><a class="secret-link" href="#DistanceMatrixResponse.originAddresses"><span>originAddresses</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">The formatted origin addresses.</div></td>
</tr>
<tr id="DistanceMatrixResponse.rows">
<td itemprop="property"><code><a class="secret-link" href="#DistanceMatrixResponse.rows"><span>rows</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="DistanceMatrixResponseRow.md">DistanceMatrixResponseRow</a>&gt;</code></div>
<div class="desc">The rows of the matrix, corresponding to the origin addresses.</div></td>
</tr>
</tbody>
</table></div>
