
<h2 id="DirectionsStep">DirectionsStep interface</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">DirectionsStep</span></code>
interface
</p>
<p>A single <code>DirectionsStep</code> in a <code>DirectionsResult</code>. Some fields may be undefined. Note that though this object is "JSON-like," it is not strictly JSON, as it directly includes <code>LatLng</code> objects.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface DirectionsStep - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="DirectionsStep.distance">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsStep.distance"><span>distance</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="Distance.md">Distance</a></code></div>
<div class="desc">The distance covered by this step. This property may be undefined as the distance may be unknown.</div></td>
</tr>
<tr id="DirectionsStep.duration">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsStep.duration"><span>duration</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="Duration.md">Duration</a></code></div>
<div class="desc">The typical time required to perform this step in seconds and in text form. This property may be undefined as the duration may be unknown.</div></td>
</tr>
<tr id="DirectionsStep.end_location">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsStep.end_location"><span>end_location</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="LatLng.md">LatLng</a></code></div>
<div class="desc">The ending location of this step.</div></td>
</tr>
<tr id="DirectionsStep.instructions">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsStep.instructions"><span>instructions</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Instructions for this step.</div></td>
</tr>
<tr id="DirectionsStep.path">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsStep.path"><span>path</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="LatLng.md">LatLng</a>&gt;</code></div>
<div class="desc">A sequence of <code>LatLng</code>s describing the course of this step.</div></td>
</tr>
<tr id="DirectionsStep.start_location">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsStep.start_location"><span>start_location</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="LatLng.md">LatLng</a></code></div>
<div class="desc">The starting location of this step.</div></td>
</tr>
<tr id="DirectionsStep.steps">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsStep.steps"><span>steps</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="DirectionsStep.md">DirectionsStep</a>&gt;</code></div>
<div class="desc">Sub-steps of this step. Specified for non-transit sections of transit routes.</div></td>
</tr>
<tr id="DirectionsStep.transit">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsStep.transit"><span>transit</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="TransitDetails.md">TransitDetails</a></code></div>
<div class="desc">Transit-specific details about this step. This property will be undefined unless the travel mode of this step is <code>TRANSIT</code>.</div></td>
</tr>
<tr id="DirectionsStep.travel_mode">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsStep.travel_mode"><span>travel_mode</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="TravelMode.md">TravelMode</a></code></div>
<div class="desc">The mode of travel used in this step.</div></td>
</tr>
</tbody>
</table></div>
