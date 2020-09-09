[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/PlaceResult.html)

PlaceResult interface
---------------------

google.maps.places.PlaceResult interface

Defines information about a Place.

#### Library

places

Properties

[undefined](#PlaceResult.address_components)

**Type:**  Array<[GeocoderAddressComponent](/maps/documentation/javascript/reference/3.40/geocoder#GeocoderAddressComponent)\> optional

The collection of address components for this Place’s location. Only available with [PlacesService.getDetails](PlacesService.md).

[undefined](#PlaceResult.adr_address)

**Type:**  string optional

The representation of the Place’s address in the [adr microformat](http://microformats.org/wiki/adr). Only available with [PlacesService.getDetails](PlacesService.md).

[undefined](#PlaceResult.aspects)

**Type:**  Array<[PlaceAspectRating](/maps/documentation/javascript/reference/3.40/places-service#PlaceAspectRating)\> optional

The rated aspects of this Place, based on Google and Zagat user reviews. The ratings are on a scale of 0 to 30.

[undefined](#PlaceResult.business_status)

**Type:**  [BusinessStatus](/maps/documentation/javascript/reference/3.40/places-service#BusinessStatus) optional

A flag indicating the operational status of the Place, if it is a business (indicates whether the place is operational, or closed either temporarily or permanently). If no data is available, the flag is not present in search or details responses.

[undefined](#PlaceResult.formatted_address)

**Type:**  string optional

The Place’s full address.

[undefined](#PlaceResult.formatted_phone_number)

**Type:**  string optional

The Place’s phone number, formatted according to the [number's regional convention](http://en.wikipedia.org/wiki/Local_conventions_for_writing_telephone_numbers). Only available with [PlacesService.getDetails](PlacesService.md).

[undefined](#PlaceResult.geometry)

**Type:**  [PlaceGeometry](/maps/documentation/javascript/reference/3.40/places-service#PlaceGeometry) optional

The Place’s geometry-related information.

[undefined](#PlaceResult.html_attributions)

**Type:**  Array<string> optional

Attribution text to be displayed for this Place result. Available html\_attributions are always returned regardless of what fields have been requested, and must be displayed.

[undefined](#PlaceResult.icon)

**Type:**  string optional

URL to an image resource that can be used to represent this Place’s category.

[undefined](#PlaceResult.international_phone_number)

**Type:**  string optional

The Place’s phone number in international format. International format includes the country code, and is prefixed with the plus (+) sign. Only available with [PlacesService.getDetails](PlacesService.md).

[undefined](#PlaceResult.name)

**Type:**  string optional

The Place’s name. Note: In the case of user entered Places, this is the raw text, as typed by the user. Please exercise caution when using this data, as malicious users may try to use it as a vector for code injection attacks (See [http://en.wikipedia.org/wiki/Code\_injection](http://en.wikipedia.org/wiki/Code_injection)).

[undefined](#PlaceResult.opening_hours)

**Type:**  [PlaceOpeningHours](/maps/documentation/javascript/reference/3.40/places-service#PlaceOpeningHours) optional

Defines when the Place opens or closes.

[undefined](#PlaceResult.permanently_closed)

**Type:**  boolean optional

A flag indicating whether the Place is closed, either permanently or temporarily. If the place is operational, or if no data is available, the flag is absent from the response.

[undefined](#PlaceResult.photos)

**Type:**  Array<[PlacePhoto](/maps/documentation/javascript/reference/3.40/places-service#PlacePhoto)\> optional

Photos of this Place. The collection will contain up to ten [PlacePhoto](/maps/documentation/javascript/reference/3.40/places-service#PlacePhoto) objects.

[undefined](#PlaceResult.place_id)

**Type:**  string optional

A unique identifier for the Place.

[undefined](#PlaceResult.plus_code)

**Type:**  [PlacePlusCode](/maps/documentation/javascript/reference/3.40/places-service#PlacePlusCode) optional

Defines Open Location Codes or "[plus codes](https://plus.codes/)" for the Place.

[undefined](#PlaceResult.price_level)

**Type:**  number optional

The price level of the Place, on a scale of 0 to 4. Price levels are interpreted as follows:

*   0: Free
*   1: Inexpensive
*   2: Moderate
*   3: Expensive
*   4: Very Expensive

[undefined](#PlaceResult.rating)

**Type:**  number optional

A rating, between 1.0 to 5.0, based on user reviews of this Place.

[undefined](#PlaceResult.reviews)

**Type:**  Array<[PlaceReview](/maps/documentation/javascript/reference/3.40/places-service#PlaceReview)\> optional

A list of reviews of this Place. Only available with [PlacesService.getDetails](PlacesService.md).

[undefined](#PlaceResult.types)

**Type:**  Array<string> optional

An array of [types for this Place](/places/supported_types) (for example, \["political", "locality"\] or \["restaurant", "establishment"\]).

[undefined](#PlaceResult.url)

**Type:**  string optional

URL of the official Google page for this place. This is the Google-owned page that contains the best available information about the Place. Only available with [PlacesService.getDetails](PlacesService.md).

[undefined](#PlaceResult.user_ratings_total)

**Type:**  number optional

The number of user ratings which contributed to this Place’s [PlaceResult.rating](PlaceResult.md).

[undefined](#PlaceResult.utc_offset)

**Notice:** utc\_offset is deprecated as of November 2019 and will be turned off in November 2020. Use [PlaceResult.utc\_offset\_minutes](PlaceResult.md) instead.

**Type:**  number optional

The offset from UTC of the Place’s current timezone, in minutes. For example, Sydney, Australia in daylight savings is 11 hours ahead of UTC, so the utc\_offset will be 660. For timezones behind UTC, the offset is negative. For example, the utc\_offset is \-60 for Cape Verde. Only available with [PlacesService.getDetails](PlacesService.md).

[undefined](#PlaceResult.utc_offset_minutes)

**Type:**  number optional

The offset from UTC of the Place’s current timezone, in minutes. For example, Sydney, Australia in daylight savings is 11 hours ahead of UTC, so the utc\_offset\_minutes will be 660. For timezones behind UTC, the offset is negative. For example, the utc\_offset\_minutes is \-60 for Cape Verde. Only available with [PlacesService.getDetails](PlacesService.md).

[undefined](#PlaceResult.vicinity)

**Type:**  string optional

The simplified address for the Place, including the street name, street number, and locality, but not the province/state, postal code, or country. For example, Google's Sydney, Australia office has a vicinity value of "48 Pirrama Road, Pyrmont". Only available with [PlacesService.getDetails](PlacesService.md).

[undefined](#PlaceResult.website)

**Type:**  string optional

The authoritative website for this Place, such as a business' homepage. Only available with [PlacesService.getDetails](PlacesService.md).