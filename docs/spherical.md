<h2 id="spherical">
spherical
namespace
</h2><p>
<code><span itemprop="path">google.maps.geometry</span>.<span itemprop="name">spherical</span></code>
namespace
</p><p>Utility functions for computing geodesic angles, distances and areas. The default radius is Earth's radius of 6378137 meters.</p><h4>Library</h4><p>geometry</p><table class="methods responsive" summary="namespace spherical - Static Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code>computeArea(path:Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>&gt;|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>&gt;, radius?:number)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the area of a closed path. The computed area uses the same units as the radius. The radius defaults to the Earth's radius in meters, in which case the area is in square meters.</div></td>
</tr>
<tr>
<td><code>computeDistanceBetween(from:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>, to:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>, radius?:number)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the distance between two LatLngs.</div></td>
</tr>
<tr>
<td><code>computeHeading(from:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>, to:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the heading from one LatLng to another LatLng. Headings are expressed in degrees clockwise from North within the range [-180,180).</div></td>
</tr>
<tr>
<td><code>computeLength(path:Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>&gt;|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>&gt;, radius?:number)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the length of the given path.</div></td>
</tr>
<tr>
<td><code>computeOffset(from:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>, distance:number, heading:number, radius?:number)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc">Returns the LatLng resulting from moving a distance from an origin in the specified heading (expressed in degrees clockwise from north).</div></td>
</tr>
<tr>
<td><code>computeOffsetOrigin(to:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>, distance:number, heading:number, radius?:number)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc">Returns the location of origin when provided with a LatLng destination, meters travelled and original heading. Headings are expressed in degrees clockwise from North. This function returns null when no solution is available.</div></td>
</tr>
<tr>
<td><code>computeSignedArea(loop:Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>&gt;|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md">MVCArray</a>&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>&gt;, radius?:number)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the signed area of a closed path. The signed area may be used to determine the orientation of the path. The computed area uses the same units as the radius. The radius defaults to the Earth's radius in meters, in which case the area is in square meters.</div></td>
</tr>
<tr>
<td><code>interpolate(from:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>, to:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>, fraction:number)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc">Returns the LatLng which lies the given fraction of the way between the origin LatLng and the destination LatLng.</div></td>
</tr>
</tbody>
</table>