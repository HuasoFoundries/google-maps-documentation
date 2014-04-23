<h2 id="DistanceMatrixResponseElement">
google.maps.DistanceMatrixResponseElement
object specification
</h2><p>A single element of a response to a <code>DistanceMatrixService</code> request, which contains the duration and distance from one origin to one destination.</p><h3>Properties</h3><table summary="interface DistanceMatrixResponseElement - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>distance</code></td>
<td><code><a href="#Distance">Distance</a></code></td>
<td>The distance for this origin-destination pairing. This property may be undefined as the distance may be unknown.</td>
</tr>
<tr>
<td><code>duration</code></td>
<td><code><a href="#Duration">Duration</a></code></td>
<td>The duration for this origin-destination pairing. This property may be undefined as the duration may be unknown.</td>
</tr>
<tr>
<td><code>status</code></td>
<td><code><a href="#DistanceMatrixElementStatus">DistanceMatrixElementStatus</a></code></td>
<td>The status of this particular origin-destination pairing.</td>
</tr>
</tbody>
</table>