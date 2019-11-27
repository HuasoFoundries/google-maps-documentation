
<devsite-heading text=" DistanceMatrixStatus constants" for="DistanceMatrixStatus" level="h2" link="" toc="" back-to-top=""><h2 id="DistanceMatrixStatus" is-upgraded="">DistanceMatrixStatus constants </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">DistanceMatrixStatus</span></code>
constants
</p>
<p>The top-level status about the request in general returned by the <code translate="no" dir="ltr">DistanceMatrixService</code> upon completion of a distance matrix request. Specify these by value, or by using the constant's name. For example, <code translate="no" dir="ltr">'OK'</code> or <code translate="no" dir="ltr">google.maps.DistanceMatrixStatus.OK</code>.</p>
<div class="devsite-table-wrapper"><table class="constants responsive" summary="DistanceMatrixStatus constants">
<thead>
<tr><th colspan="2">Constants</th>
</tr></thead>
<tbody>
<tr id="DistanceMatrixStatus.INVALID_REQUEST">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DistanceMatrixStatus.INVALID_REQUEST"><span>INVALID_REQUEST</span></a></code></td>
<td>The provided request was invalid.</td>
</tr>
<tr id="DistanceMatrixStatus.MAX_DIMENSIONS_EXCEEDED">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DistanceMatrixStatus.MAX_DIMENSIONS_EXCEEDED"><span>MAX_DIMENSIONS_EXCEEDED</span></a></code></td>
<td>The request contains more than 25 origins, or more than 25 destinations.</td>
</tr>
<tr id="DistanceMatrixStatus.MAX_ELEMENTS_EXCEEDED">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DistanceMatrixStatus.MAX_ELEMENTS_EXCEEDED"><span>MAX_ELEMENTS_EXCEEDED</span></a></code></td>
<td>The product of origins and destinations exceeds the per-query limit.</td>
</tr>
<tr id="DistanceMatrixStatus.OK">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DistanceMatrixStatus.OK"><span>OK</span></a></code></td>
<td>The response contains a valid result.</td>
</tr>
<tr id="DistanceMatrixStatus.OVER_QUERY_LIMIT">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DistanceMatrixStatus.OVER_QUERY_LIMIT"><span>OVER_QUERY_LIMIT</span></a></code></td>
<td>Too many elements have been requested within the allowed time period. The request should succeed if you try again after a reasonable amount of time.</td>
</tr>
<tr id="DistanceMatrixStatus.REQUEST_DENIED">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DistanceMatrixStatus.REQUEST_DENIED"><span>REQUEST_DENIED</span></a></code></td>
<td>The service denied use of the Distance Matrix service by your web page.</td>
</tr>
<tr id="DistanceMatrixStatus.UNKNOWN_ERROR">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DistanceMatrixStatus.UNKNOWN_ERROR"><span>UNKNOWN_ERROR</span></a></code></td>
<td>A Distance Matrix request could not be processed due to a server error. The request may succeed if you try again.</td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
