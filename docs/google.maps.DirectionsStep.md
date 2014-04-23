<h2 id="DirectionsStep">
google.maps.DirectionsStep
object specification
</h2><p>A single <code>DirectionsStep</code> in a <code>DirectionsResult</code>. Some fields may be undefined. Note that though this object is "JSON-like," it is not strictly JSON, as it directly includes <code>LatLng</code> objects.</p><h3>Properties</h3><table summary="interface DirectionsStep - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>distance</code></td>
<td><code><a href="#Distance">Distance</a></code></td>
<td>The distance covered by this step. This property may be undefined as the distance may be unknown.</td>
</tr>
<tr>
<td><code>duration</code></td>
<td><code><a href="#Duration">Duration</a></code></td>
<td>The typical time required to perform this step in seconds and in text form. This property may be undefined as the duration may be unknown.</td>
</tr>
<tr>
<td><code>end_location</code></td>
<td><code><a href="#LatLng">LatLng</a></code></td>
<td>The ending location of this step.</td>
</tr>
<tr>
<td><code>instructions</code></td>
<td><code>string</code></td>
<td>Instructions for this step.</td>
</tr>
<tr>
<td><code>path</code></td>
<td><code>Array.&lt;<a href="#LatLng">LatLng</a>&gt;</code></td>
<td>A sequence of <code>LatLng</code>s describing the course of this step.</td>
</tr>
<tr>
<td><code>start_location</code></td>
<td><code><a href="#LatLng">LatLng</a></code></td>
<td>The starting location of this step.</td>
</tr>
<tr>
<td><code>steps</code></td>
<td><code><a href="#DirectionsStep">DirectionsStep</a></code></td>
<td>Sub-steps of this step. Specified for non-transit sections of transit routes.</td>
</tr>
<tr>
<td><code>transit</code></td>
<td><code><a href="#TransitDetails">TransitDetails</a></code></td>
<td>Transit-specific details about this step. This property will be undefined unless the travel mode of this step is <code>TRANSIT</code>.</td>
</tr>
<tr>
<td><code>travel_mode</code></td>
<td><code><a href="#TravelMode">TravelMode</a></code></td>
<td>The mode of travel used in this step.</td>
</tr>
</tbody>
</table>