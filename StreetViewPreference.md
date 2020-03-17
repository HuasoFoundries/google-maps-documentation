
<devsite-heading text=" StreetViewPreference constants" for="StreetViewPreference" level="h2" link="" toc="" back-to-top=""><h2 id="StreetViewPreference" is-upgraded="">StreetViewPreference constants</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">StreetViewPreference</span></code>
constants
</p>
<p>Options that bias a search result towards returning a Street View panorama that is nearest to the request location, or a panorama that is considered most likely to be what the user wants to see. Specify these by value, or by using the constant's name. For example, <code translate="no" dir="ltr">'best'</code> or <code translate="no" dir="ltr">google.maps.StreetViewPreference.BEST</code>.</p>
<div class="devsite-table-wrapper"><table class="constants responsive" summary="StreetViewPreference constants">
<thead>
<tr><th colspan="2">Constants</th>
</tr></thead>
<tbody>
<tr id="StreetViewPreference.BEST">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPreference.BEST"><span>BEST</span></a></code></td>
<td>Return the Street View panorama that is considered most likely to be what the user wants to see. The best result is determined by algorithms based on user research and parameters such as recognised points of interest, image quality, and distance from the given location.</td>
</tr>
<tr id="StreetViewPreference.NEAREST">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#StreetViewPreference.NEAREST"><span>NEAREST</span></a></code></td>
<td>Return the Street View panorama that is the shortest distance from the provided location. This works well only within a limited radius. The recommended radius is 1km or less.</td>
</tr>
</tbody>
</table></div>
