<h2 id="DistanceMatrixService"> DistanceMatrixService class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">DistanceMatrixService</span></code>
class
</p><p>A service for computing distances between multiple origins and destinations.</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class DistanceMatrixService - Constructor">
<thead>
<tr><th colspan="2" id="DistanceMatrixService.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>DistanceMatrixService</span></code></td>
<td><div><code>DistanceMatrixService()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc">Creates a new instance of a <code>DistanceMatrixService</code> that sends distance matrix queries to Google servers.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class DistanceMatrixService - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="DistanceMatrixService.getDistanceMatrix">
<td><code><span>getDistanceMatrix</span></code></td>
<td><div><code>getDistanceMatrix(request, callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>request</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DistanceMatrixRequest.md">DistanceMatrixRequest</a></code></li>
<li><code>callback</code>:&nbsp; <code>function(<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DistanceMatrixResponse.md">DistanceMatrixResponse</a>, <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DistanceMatrixStatus.md">DistanceMatrixStatus</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Issues a distance matrix request.</div></td>
</tr>
</tbody>
</table></div>