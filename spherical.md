
<devsite-heading text=" spherical namespace" for="spherical" level="h2" link="" toc="" back-to-top=""><h2 id="spherical" is-upgraded="">spherical namespace</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps.geometry</span>.<span itemprop="name">spherical</span></code>
namespace
</p>
<p>Utility functions for computing geodesic angles, distances and areas. The default radius is Earth's radius of 6378137 meters.</p>
<devsite-heading text="Library" for="library_1" level="h4" link=""><h4 is-upgraded="" id="library_1">Library</h4></devsite-heading>
<p>geometry</p>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="namespace spherical - Static Methods">
<thead>
<tr><th colspan="2">Static Methods</th>
</tr></thead>
<tbody>
<tr id="spherical.computeArea">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#spherical.computeArea"><span>computeArea</span></a></code></td>
<td><div><code translate="no" dir="ltr">computeArea(path[, radius])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">path</code>:&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="LatLng.md">LatLng</a>&gt;|<a href="MVCArray.md">MVCArray</a>&lt;<a href="LatLng.md">LatLng</a>&gt;</code></li>
<li><code translate="no" dir="ltr">radius</code>:&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">Returns the area of a closed path. The computed area uses the same units as the radius. The radius defaults to the Earth's radius in meters, in which case the area is in square meters.</div></td>
</tr>
<tr id="spherical.computeDistanceBetween">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#spherical.computeDistanceBetween"><span>computeDistanceBetween</span></a></code></td>
<td><div><code translate="no" dir="ltr">computeDistanceBetween(from, to[, radius])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">from</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a></code></li>
<li><code translate="no" dir="ltr">to</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a></code></li>
<li><code translate="no" dir="ltr">radius</code>:&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">Returns the distance, in meters, between two LatLngs. You can optionally specify a custom radius. The radius defaults to the radius of the Earth.</div></td>
</tr>
<tr id="spherical.computeHeading">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#spherical.computeHeading"><span>computeHeading</span></a></code></td>
<td><div><code translate="no" dir="ltr">computeHeading(from, to)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">from</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a></code></li>
<li><code translate="no" dir="ltr">to</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">Returns the heading from one LatLng to another LatLng. Headings are expressed in degrees clockwise from North within the range [-180,180).</div></td>
</tr>
<tr id="spherical.computeLength">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#spherical.computeLength"><span>computeLength</span></a></code></td>
<td><div><code translate="no" dir="ltr">computeLength(path[, radius])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">path</code>:&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="LatLng.md">LatLng</a>&gt;|<a href="MVCArray.md">MVCArray</a>&lt;<a href="LatLng.md">LatLng</a>&gt;</code></li>
<li><code translate="no" dir="ltr">radius</code>:&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">Returns the length of the given path.</div></td>
</tr>
<tr id="spherical.computeOffset">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#spherical.computeOffset"><span>computeOffset</span></a></code></td>
<td><div><code translate="no" dir="ltr">computeOffset(from, distance, heading[, radius])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">from</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a></code></li>
<li><code translate="no" dir="ltr">distance</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
<li><code translate="no" dir="ltr">heading</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
<li><code translate="no" dir="ltr">radius</code>:&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a></code></div>
<div class="desc">Returns the LatLng resulting from moving a distance from an origin in the specified heading (expressed in degrees clockwise from north).</div></td>
</tr>
<tr id="spherical.computeOffsetOrigin">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#spherical.computeOffsetOrigin"><span>computeOffsetOrigin</span></a></code></td>
<td><div><code translate="no" dir="ltr">computeOffsetOrigin(to, distance, heading[, radius])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">to</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a></code></li>
<li><code translate="no" dir="ltr">distance</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
<li><code translate="no" dir="ltr">heading</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
<li><code translate="no" dir="ltr">radius</code>:&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a></code></div>
<div class="desc">Returns the location of origin when provided with a LatLng destination, meters travelled and original heading. Headings are expressed in degrees clockwise from North. This function returns null when no solution is available.</div></td>
</tr>
<tr id="spherical.computeSignedArea">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#spherical.computeSignedArea"><span>computeSignedArea</span></a></code></td>
<td><div><code translate="no" dir="ltr">computeSignedArea(loop[, radius])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">loop</code>:&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="LatLng.md">LatLng</a>&gt;|<a href="MVCArray.md">MVCArray</a>&lt;<a href="LatLng.md">LatLng</a>&gt;</code></li>
<li><code translate="no" dir="ltr">radius</code>:&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">Returns the signed area of a closed path. The signed area may be used to determine the orientation of the path. The computed area uses the same units as the radius. The radius defaults to the Earth's radius in meters, in which case the area is in square meters.</div></td>
</tr>
<tr id="spherical.interpolate">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#spherical.interpolate"><span>interpolate</span></a></code></td>
<td><div><code translate="no" dir="ltr">interpolate(from, to, fraction)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">from</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a></code></li>
<li><code translate="no" dir="ltr">to</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a></code></li>
<li><code translate="no" dir="ltr">fraction</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a></code></div>
<div class="desc">Returns the LatLng which lies the given fraction of the way between the origin LatLng and the destination LatLng.</div></td>
</tr>
</tbody>
</table></div>
