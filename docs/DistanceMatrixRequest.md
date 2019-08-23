
<h2 id="DistanceMatrixRequest">DistanceMatrixRequest interface</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">DistanceMatrixRequest</span></code>
interface
</p>
<p>A distance matrix query sent by the <code>DistanceMatrixService</code> containing arrays of origin and destination locations, and various options for computing metrics.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface DistanceMatrixRequest - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="DistanceMatrixRequest.avoidFerries">
<td itemprop="property"><code><a class="secret-link" href="#DistanceMatrixRequest.avoidFerries"><span>avoidFerries</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">If true, instructs the Distance Matrix service to avoid ferries where possible. Optional.</div></td>
</tr>
<tr id="DistanceMatrixRequest.avoidHighways">
<td itemprop="property"><code><a class="secret-link" href="#DistanceMatrixRequest.avoidHighways"><span>avoidHighways</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">If true, instructs the Distance Matrix service to avoid highways where possible. Optional.</div></td>
</tr>
<tr id="DistanceMatrixRequest.avoidTolls">
<td itemprop="property"><code><a class="secret-link" href="#DistanceMatrixRequest.avoidTolls"><span>avoidTolls</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">If true, instructs the Distance Matrix service to avoid toll roads where possible. Optional.</div></td>
</tr>
<tr id="DistanceMatrixRequest.destinations">
<td itemprop="property"><code><a class="secret-link" href="#DistanceMatrixRequest.destinations"><span>destinations</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string|<a href="LatLng.md">LatLng</a>|<a href="Place.md">Place</a>&gt;</code></div>
<div class="desc">An array containing destination address strings, or <code>LatLng</code>, or <code>Place</code> objects, to which to calculate distance and time. Required.</div></td>
</tr>
<tr id="DistanceMatrixRequest.drivingOptions">
<td itemprop="property"><code><a class="secret-link" href="#DistanceMatrixRequest.drivingOptions"><span>drivingOptions</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="DrivingOptions.md">DrivingOptions</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Settings that apply only to requests where <code>travelMode</code> is <code>DRIVING</code>. This object will have no effect for other travel modes.</div></td>
</tr>
<tr id="DistanceMatrixRequest.origins">
<td itemprop="property"><code><a class="secret-link" href="#DistanceMatrixRequest.origins"><span>origins</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string|<a href="LatLng.md">LatLng</a>|<a href="Place.md">Place</a>&gt;</code></div>
<div class="desc">An array containing origin address strings, or <code>LatLng</code>, or <code>Place</code> objects, from which to calculate distance and time. Required.</div></td>
</tr>
<tr id="DistanceMatrixRequest.region">
<td itemprop="property"><code><a class="secret-link" href="#DistanceMatrixRequest.region"><span>region</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Region code used as a bias for geocoding requests. Optional.</div></td>
</tr>
<tr id="DistanceMatrixRequest.transitOptions">
<td itemprop="property"><code><a class="secret-link" href="#DistanceMatrixRequest.transitOptions"><span>transitOptions</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="TransitOptions.md">TransitOptions</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Settings that apply only to requests where <code>travelMode</code> is TRANSIT. This object will have no effect for other travel modes.</div></td>
</tr>
<tr id="DistanceMatrixRequest.travelMode">
<td itemprop="property"><code><a class="secret-link" href="#DistanceMatrixRequest.travelMode"><span>travelMode</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="TravelMode.md">TravelMode</a></code></div>
<div class="desc">Type of routing requested. Required.</div></td>
</tr>
<tr id="DistanceMatrixRequest.unitSystem">
<td itemprop="property"><code><a class="secret-link" href="#DistanceMatrixRequest.unitSystem"><span>unitSystem</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="UnitSystem.md">UnitSystem</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Preferred unit system to use when displaying distance. Optional; defaults to metric.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
