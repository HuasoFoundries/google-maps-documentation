
<h2 id="PlaceResult">PlaceResult interface</h2>
<p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">PlaceResult</span></code>
interface
</p>
<p>Defines information about a Place.</p>
<h4>Library</h4>
<p>places</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface PlaceResult - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="PlaceResult.address_components">
<td itemprop="property"><code><a class="secret-link" href="#PlaceResult.address_components"><span>address_components</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="GeocoderAddressComponent.md">GeocoderAddressComponent</a>&gt;</code></div>
<div class="desc">The collection of address components for this Place's location. Only available with <code><a href="https://developers.google.com/maps/documentation/javascript/reference/places-service#PlacesService.getDetails">PlacesService.getDetails</a></code>.</div></td>
</tr>
<tr id="PlaceResult.adr_address">
<td itemprop="property"><code><a class="secret-link" href="#PlaceResult.adr_address"><span>adr_address</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The representation of the Place's address in the <a href="http://microformats.org/wiki/adr">adr microformat</a>. Only available with <code><a href="https://developers.google.com/maps/documentation/javascript/reference/places-service#PlacesService.getDetails">PlacesService.getDetails</a></code>.</div></td>
</tr>
<tr id="PlaceResult.aspects">
<td itemprop="property"><code><a class="secret-link" href="#PlaceResult.aspects"><span>aspects</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="PlaceAspectRating.md">PlaceAspectRating</a>&gt;</code></div>
<div class="desc">The rated aspects of this Place, based on Google and Zagat user reviews. The ratings are on a scale of 0 to 30.</div></td>
</tr>
<tr id="PlaceResult.formatted_address">
<td itemprop="property"><code><a class="secret-link" href="#PlaceResult.formatted_address"><span>formatted_address</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The Place's full address.</div></td>
</tr>
<tr id="PlaceResult.formatted_phone_number">
<td itemprop="property"><code><a class="secret-link" href="#PlaceResult.formatted_phone_number"><span>formatted_phone_number</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The Place's phone number, formatted according to the <a href="http://en.wikipedia.org/wiki/Local_conventions_for_writing_telephone_numbers"> number's regional convention</a>. Only available with <code><a href="https://developers.google.com/maps/documentation/javascript/reference/places-service#PlacesService.getDetails">PlacesService.getDetails</a></code>.</div></td>
</tr>
<tr id="PlaceResult.geometry">
<td itemprop="property"><code><a class="secret-link" href="#PlaceResult.geometry"><span>geometry</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="PlaceGeometry.md">PlaceGeometry</a></code></div>
<div class="desc">The Place's geometry-related information.</div></td>
</tr>
<tr id="PlaceResult.html_attributions">
<td itemprop="property"><code><a class="secret-link" href="#PlaceResult.html_attributions"><span>html_attributions</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">Attribution text to be displayed for this Place result. Available <code>html_attributions</code> are always returned regardless of what <code>fields</code> have been requested, and must be displayed.</div></td>
</tr>
<tr id="PlaceResult.icon">
<td itemprop="property"><code><a class="secret-link" href="#PlaceResult.icon"><span>icon</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">URL to an image resource that can be used to represent this Place's category.</div></td>
</tr>
<tr id="PlaceResult.international_phone_number">
<td itemprop="property"><code><a class="secret-link" href="#PlaceResult.international_phone_number"><span>international_phone_number</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The Place's phone number in international format. International format includes the country code, and is prefixed with the plus (+) sign. Only available with <code><a href="https://developers.google.com/maps/documentation/javascript/reference/places-service#PlacesService.getDetails">PlacesService.getDetails</a></code>.</div></td>
</tr>
<tr id="PlaceResult.name">
<td itemprop="property"><code><a class="secret-link" href="#PlaceResult.name"><span>name</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The Place's name. Note: In the case of user entered Places, this is the raw text, as typed by the user. Please exercise caution when using this data, as malicious users may try to use it as a vector for code injection attacks (See <a href="http://en.wikipedia.org/wiki/Code_injection"> http://en.wikipedia.org/wiki/Code_injection</a>).</div></td>
</tr>
<tr id="PlaceResult.opening_hours">
<td itemprop="property"><code><a class="secret-link" href="#PlaceResult.opening_hours"><span>opening_hours</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="PlaceOpeningHours.md">PlaceOpeningHours</a></code></div>
<div class="desc">Defines when the Place opens or closes.</div></td>
</tr>
<tr id="PlaceResult.permanently_closed">
<td itemprop="property"><code><a class="secret-link" href="#PlaceResult.permanently_closed"><span>permanently_closed</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">A flag indicating whether the Place is permanently closed. If the Place is not permanently closed, the flag is not present in search or details responses.</div></td>
</tr>
<tr id="PlaceResult.photos">
<td itemprop="property"><code><a class="secret-link" href="#PlaceResult.photos"><span>photos</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="PlacePhoto.md">PlacePhoto</a>&gt;</code></div>
<div class="desc">Photos of this Place. The collection will contain up to ten <code><a href="PlacePhoto.md">PlacePhoto</a></code> objects.</div></td>
</tr>
<tr id="PlaceResult.place_id">
<td itemprop="property"><code><a class="secret-link" href="#PlaceResult.place_id"><span>place_id</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">A unique identifier for the Place.</div></td>
</tr>
<tr id="PlaceResult.plus_code">
<td itemprop="property"><code><a class="secret-link" href="#PlaceResult.plus_code"><span>plus_code</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="PlacePlusCode.md">PlacePlusCode</a></code></div>
<div class="desc">Defines Open Location Codes or "<a href="https://plus.codes/">plus codes</a>" for the Place.</div></td>
</tr>
<tr id="PlaceResult.price_level">
<td itemprop="property"><code><a class="secret-link" href="#PlaceResult.price_level"><span>price_level</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The price level of the Place, on a scale of 0 to 4. Price levels are interpreted as follows: <ul style="list-style-type: none;"> <li><code>0</code>: Free </li><li><code>1</code>: Inexpensive </li><li><code>2</code>: Moderate </li><li><code>3</code>: Expensive </li><li><code>4</code>: Very Expensive </li></ul></div></td>
</tr>
<tr id="PlaceResult.rating">
<td itemprop="property"><code><a class="secret-link" href="#PlaceResult.rating"><span>rating</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">A rating, between 1.0 to 5.0, based on user reviews of this Place.</div></td>
</tr>
<tr id="PlaceResult.reviews">
<td itemprop="property"><code><a class="secret-link" href="#PlaceResult.reviews"><span>reviews</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="PlaceReview.md">PlaceReview</a>&gt;</code></div>
<div class="desc">A list of reviews of this Place. Only available with <code><a href="https://developers.google.com/maps/documentation/javascript/reference/places-service#PlacesService.getDetails">PlacesService.getDetails</a></code>.</div></td>
</tr>
<tr id="PlaceResult.types">
<td itemprop="property"><code><a class="secret-link" href="#PlaceResult.types"><span>types</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">An array of <a href="https://developers.google.com/places/supported_types">types for this Place</a> (for example, <code>["political", "locality"]</code> or <code>["restaurant", "establishment"]</code>).</div></td>
</tr>
<tr id="PlaceResult.url">
<td itemprop="property"><code><a class="secret-link" href="#PlaceResult.url"><span>url</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">URL of the official Google page for this place. This is the Google-owned page that contains the best available information about the Place. Only available with <code><a href="https://developers.google.com/maps/documentation/javascript/reference/places-service#PlacesService.getDetails">PlacesService.getDetails</a></code>.</div></td>
</tr>
<tr id="PlaceResult.utc_offset">
<td itemprop="property"><code><a class="secret-link" href="#PlaceResult.utc_offset"><span>utc_offset</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The offset from UTC of the Place's current timezone, in minutes. For example, Sydney, Australia in daylight savings is 11 hours ahead of UTC, so the <code>utc_offset</code> will be <code>660</code>. For timezones behind UTC, the offset is negative. For example, the  is <code>-60</code> for Cape Verde. Only available with <code><a href="https://developers.google.com/maps/documentation/javascript/reference/places-service#PlacesService.getDetails">PlacesService.getDetails</a></code>.</div></td>
</tr>
<tr id="PlaceResult.vicinity">
<td itemprop="property"><code><a class="secret-link" href="#PlaceResult.vicinity"><span>vicinity</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The simplified address for the Place, including the street name, street number, and locality, but not the province/state, postal code, or country. For example, Google's Sydney, Australia office has a vicinity value of <code>"48 Pirrama Road, Pyrmont"</code>. Only available with <code><a href="https://developers.google.com/maps/documentation/javascript/reference/places-service#PlacesService.getDetails">PlacesService.getDetails</a></code>.</div></td>
</tr>
<tr id="PlaceResult.website">
<td itemprop="property"><code><a class="secret-link" href="#PlaceResult.website"><span>website</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The authoritative website for this Place, such as a business' homepage. Only available with <code><a href="https://developers.google.com/maps/documentation/javascript/reference/places-service#PlacesService.getDetails">PlacesService.getDetails</a></code>.</div></td>
</tr>
</tbody>
</table></div>
