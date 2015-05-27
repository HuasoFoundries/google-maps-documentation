<h2 id="KmlLayerStatus">
google.maps.KmlLayerStatus
class
</h2><p>The status returned by <code>KmlLayer</code> on the completion of loading a document.</p><h3>Constant</h3><table summary="class KmlLayerStatus - Constants" width="100%">
<thead>
<tr><th>Constant</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>DOCUMENT_NOT_FOUND</code></td>
<td>The document could not be found. Most likely it is an invalid URL, or the document is not publicly available.</td>
</tr>
<tr>
<td><code>DOCUMENT_TOO_LARGE</code></td>
<td>The document exceeds the file size limits of KmlLayer.</td>
</tr>
<tr>
<td><code>FETCH_ERROR</code></td>
<td>The document could not be fetched.</td>
</tr>
<tr>
<td><code>INVALID_DOCUMENT</code></td>
<td>The document is not a valid KML, KMZ or GeoRSS document.</td>
</tr>
<tr>
<td><code>INVALID_REQUEST</code></td>
<td>The <code>KmlLayer</code> is invalid.</td>
</tr>
<tr>
<td><code>LIMITS_EXCEEDED</code></td>
<td>The document exceeds the feature limits of KmlLayer.</td>
</tr>
<tr>
<td><code>OK</code></td>
<td>The layer loaded successfully.</td>
</tr>
<tr>
<td><code>TIMED_OUT</code></td>
<td>The document could not be loaded within a reasonable amount of time.</td>
</tr>
<tr>
<td><code>UNKNOWN</code></td>
<td>The document failed to load for an unknown reason.</td>
</tr>
</tbody>
</table>