<h2 id="MapTypeStyleFeatureType"> MapTypeStyleFeatureType object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">MapTypeStyleFeatureType</span></code>
object specification
</p><p>Possible values for feature types. Specify these values as strings, i.e. <code>'administrative'</code> or <code>'poi.park'</code>. Stylers applied to a parent feature type automatically apply to all child feature types. Note however that parent features may include some additional features that are not included in one of their child feature types.</p><div class="devsite-table-wrapper"><table class="constants responsive" summary="MapTypeStyleFeatureType constants">
<thead>
<tr><th colspan="2">Constant</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>administrative</span></code></td>
<td>Apply the rule to administrative areas.</td>
</tr>
<tr>
<td><code><span>administrative.<wbr>country</span></code></td>
<td>Apply the rule to countries.</td>
</tr>
<tr>
<td><code><span>administrative.<wbr>land_parcel</span></code></td>
<td>Apply the rule to land parcels.</td>
</tr>
<tr>
<td><code><span>administrative.<wbr>locality</span></code></td>
<td>Apply the rule to localities.</td>
</tr>
<tr>
<td><code><span>administrative.<wbr>neighborhood</span></code></td>
<td>Apply the rule to neighborhoods.</td>
</tr>
<tr>
<td><code><span>administrative.<wbr>province</span></code></td>
<td>Apply the rule to provinces.</td>
</tr>
<tr>
<td><code><span>all</span></code></td>
<td>Apply the rule to all selector types.</td>
</tr>
<tr>
<td><code><span>landscape</span></code></td>
<td>Apply the rule to landscapes.</td>
</tr>
<tr>
<td><code><span>landscape.<wbr>man_made</span></code></td>
<td>Apply the rule to man made structures.</td>
</tr>
<tr>
<td><code><span>landscape.<wbr>natural</span></code></td>
<td>Apply the rule to natural features.</td>
</tr>
<tr>
<td><code><span>landscape.<wbr>natural.<wbr>landcover</span></code></td>
<td>Apply the rule to landcover.</td>
</tr>
<tr>
<td><code><span>landscape.<wbr>natural.<wbr>terrain</span></code></td>
<td>Apply the rule to terrain.</td>
</tr>
<tr>
<td><code><span>poi</span></code></td>
<td>Apply the rule to points of interest.</td>
</tr>
<tr>
<td><code><span>poi.<wbr>attraction</span></code></td>
<td>Apply the rule to attractions for tourists.</td>
</tr>
<tr>
<td><code><span>poi.<wbr>business</span></code></td>
<td>Apply the rule to businesses.</td>
</tr>
<tr>
<td><code><span>poi.<wbr>government</span></code></td>
<td>Apply the rule to government buildings.</td>
</tr>
<tr>
<td><code><span>poi.<wbr>medical</span></code></td>
<td>Apply the rule to emergency services (hospitals, pharmacies, police, doctors, etc).</td>
</tr>
<tr>
<td><code><span>poi.<wbr>park</span></code></td>
<td>Apply the rule to parks.</td>
</tr>
<tr>
<td><code><span>poi.<wbr>place_of_worship</span></code></td>
<td>Apply the rule to places of worship, such as churches, temples, or mosques.</td>
</tr>
<tr>
<td><code><span>poi.<wbr>school</span></code></td>
<td>Apply the rule to schools.</td>
</tr>
<tr>
<td><code><span>poi.<wbr>sports_complex</span></code></td>
<td>Apply the rule to sports complexes.</td>
</tr>
<tr>
<td><code><span>road</span></code></td>
<td>Apply the rule to all roads.</td>
</tr>
<tr>
<td><code><span>road.<wbr>arterial</span></code></td>
<td>Apply the rule to arterial roads.</td>
</tr>
<tr>
<td><code><span>road.<wbr>highway</span></code></td>
<td>Apply the rule to highways.</td>
</tr>
<tr>
<td><code><span>road.<wbr>highway.<wbr>controlled_access</span></code></td>
<td>Apply the rule to controlled-access highways.</td>
</tr>
<tr>
<td><code><span>road.<wbr>local</span></code></td>
<td>Apply the rule to local roads.</td>
</tr>
<tr>
<td><code><span>transit</span></code></td>
<td>Apply the rule to all transit stations and lines.</td>
</tr>
<tr>
<td><code><span>transit.<wbr>line</span></code></td>
<td>Apply the rule to transit lines.</td>
</tr>
<tr>
<td><code><span>transit.<wbr>station</span></code></td>
<td>Apply the rule to all transit stations.</td>
</tr>
<tr>
<td><code><span>transit.<wbr>station.<wbr>airport</span></code></td>
<td>Apply the rule to airports.</td>
</tr>
<tr>
<td><code><span>transit.<wbr>station.<wbr>bus</span></code></td>
<td>Apply the rule to bus stops.</td>
</tr>
<tr>
<td><code><span>transit.<wbr>station.<wbr>rail</span></code></td>
<td>Apply the rule to rail stations.</td>
</tr>
<tr>
<td><code><span>water</span></code></td>
<td>Apply the rule to bodies of water.</td>
</tr>
</tbody>
</table></div>