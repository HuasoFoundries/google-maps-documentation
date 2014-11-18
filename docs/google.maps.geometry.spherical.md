<h2 id="spherical">
google.maps.geometry.spherical
namespace
</h2><p>Utility functions for computing geodesic angles, distances and areas. The default radius is Earth's radius of 6378137 meters.</p><h3>Library</h3><p>geometry</p><h3>Static Methods</h3><table summary="namespace spherical - Static Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>computeArea(path:Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>&gt;|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>&gt;, radius?:number)</code></td>
<td><code>number</code></td>
<td>Returns the area of a closed path. The computed area uses the same units as the radius. The radius defaults to the Earth's radius in meters, in which case the area is in square meters.</td>
</tr>
<tr>
<td><code>computeDistanceBetween(from:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>, to:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>, radius?:number)</code></td>
<td><code>number</code></td>
<td>Returns the distance between two LatLngs.</td>
</tr>
<tr>
<td><code>computeHeading(from:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>, to:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>)</code></td>
<td><code>number</code></td>
<td>Returns the heading from one LatLng to another LatLng. Headings are expressed in degrees clockwise from North within the range [-180,180).</td>
</tr>
<tr>
<td><code>computeLength(path:Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>&gt;|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>&gt;, radius?:number)</code></td>
<td><code>number</code></td>
<td>Returns the length of the given path.</td>
</tr>
<tr>
<td><code>computeOffset(from:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>, distance:number, heading:number, radius?:number)</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a></code></td>
<td>Returns the LatLng resulting from moving a distance from an origin in the specified heading (expressed in degrees clockwise from north).</td>
</tr>
<tr>
<td><code>computeOffsetOrigin(to:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>, distance:number, heading:number, radius?:number)</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a></code></td>
<td>Returns the location of origin when provided with a LatLng destination, meters travelled and original heading. Headings are expressed in degrees clockwise from North. This function returns null when no solution is available.</td>
</tr>
<tr>
<td><code>computeSignedArea(loop:Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>&gt;|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>&gt;, radius?:number)</code></td>
<td><code>number</code></td>
<td>Returns the signed area of a closed path. The signed area may be used to determine the orientation of the path. The computed area uses the same units as the radius. The radius defaults to the Earth's radius in meters, in which case the area is in square meters.</td>
</tr>
<tr>
<td><code>interpolate(from:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>, to:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>, fraction:number)</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a></code></td>
<td>Returns the LatLng which lies the given fraction of the way between the origin LatLng and the destination LatLng.</td>
</tr>
</tbody>
</table>