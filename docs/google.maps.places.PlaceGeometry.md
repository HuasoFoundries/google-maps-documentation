<h2 id="PlaceGeometry">
google.maps.places.PlaceGeometry
object specification
</h2><p>Defines information about the geometry of a Place.</p><h3>Library</h3><p>places</p><h3>Properties</h3><table summary="interface PlaceGeometry - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>location</code></td>
<td><code><a href="#LatLng">LatLng</a></code></td>
<td>The Place's position.</td>
</tr>
<tr>
<td><code>viewport</code></td>
<td><code><a href="#LatLngBounds">LatLngBounds</a></code></td>
<td>The preferred viewport when displaying this Place on a map. This property will be null if the preferred viewport for the Place is not known.</td>
</tr>
</tbody>
</table>