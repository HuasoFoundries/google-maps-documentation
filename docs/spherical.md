<h2 id="spherical"> spherical namespace </h2><p>
<code><span itemprop="path">google.maps.geometry</span>.<span itemprop="name">spherical</span></code>
namespace
</p><p>Utility functions for computing geodesic angles, distances and areas. The default radius is Earth's radius of 6378137 meters.</p><h4>Library</h4><p>geometry</p><div class="devsite-table-wrapper"><table class="methods responsive" summary="namespace spherical - Static Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>computeArea(<wbr>path:Array&lt;</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>&gt;|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md"><span>MVCArray</span></a><span>&lt;</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>&gt;,<wbr> radius?:number)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the area of a closed path. The computed area uses the same units as the radius. The radius defaults to the Earth's radius in meters, in which case the area is in square meters.</div></td>
</tr>
<tr>
<td><code><span>computeDistanceBetween(<wbr>from:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>,<wbr> to:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>,<wbr> radius?:number)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the distance between two LatLngs.</div></td>
</tr>
<tr>
<td><code><span>computeHeading(<wbr>from:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>,<wbr> to:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the heading from one LatLng to another LatLng. Headings are expressed in degrees clockwise from North within the range [-180,180).</div></td>
</tr>
<tr>
<td><code><span>computeLength(<wbr>path:Array&lt;</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>&gt;|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md"><span>MVCArray</span></a><span>&lt;</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>&gt;,<wbr> radius?:number)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the length of the given path.</div></td>
</tr>
<tr>
<td><code><span>computeOffset(<wbr>from:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>,<wbr> distance:number,<wbr> heading:number,<wbr> radius?:number)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc">Returns the LatLng resulting from moving a distance from an origin in the specified heading (expressed in degrees clockwise from north).</div></td>
</tr>
<tr>
<td><code><span>computeOffsetOrigin(<wbr>to:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>,<wbr> distance:number,<wbr> heading:number,<wbr> radius?:number)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc">Returns the location of origin when provided with a LatLng destination, meters travelled and original heading. Headings are expressed in degrees clockwise from North. This function returns null when no solution is available.</div></td>
</tr>
<tr>
<td><code><span>computeSignedArea(<wbr>loop:Array&lt;</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>&gt;|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCArray.md"><span>MVCArray</span></a><span>&lt;</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>&gt;,<wbr> radius?:number)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the signed area of a closed path. The signed area may be used to determine the orientation of the path. The computed area uses the same units as the radius. The radius defaults to the Earth's radius in meters, in which case the area is in square meters.</div></td>
</tr>
<tr>
<td><code><span>interpolate(<wbr>from:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>,<wbr> to:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>,<wbr> fraction:number)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc">Returns the LatLng which lies the given fraction of the way between the origin LatLng and the destination LatLng.</div></td>
</tr>
</tbody>
</table></div>