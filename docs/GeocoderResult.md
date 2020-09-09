[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/GeocoderResult.html)

GeocoderResult interface
------------------------

google.maps.GeocoderResult interface

A single geocoder result retrieved from the geocode server. A geocode request may return multiple result objects. Note that though this result is "JSON-like," it is not strictly JSON, as it indirectly includes a LatLng object.

Properties

[undefined](#GeocoderResult.address_components)

**Type:**  Array<[GeocoderAddressComponent](/maps/documentation/javascript/reference/3.40/geocoder#GeocoderAddressComponent)\>

An array of GeocoderAddressComponents

[undefined](#GeocoderResult.formatted_address)

**Type:**  string

A string containing the human-readable address of this location.

[undefined](#GeocoderResult.geometry)

**Type:**  [GeocoderGeometry](/maps/documentation/javascript/reference/3.40/geocoder#GeocoderGeometry)

A GeocoderGeometry object

[undefined](#GeocoderResult.partial_match)

**Type:**  boolean

Whether the geocoder did not return an exact match for the original request, though it was able to match part of the requested address.

[undefined](#GeocoderResult.place_id)

**Type:**  string

The place ID associated with the location. Place IDs uniquely identify a place in the Google Places database and on Google Maps. Learn more about [Place IDs](/places/place-id) in the Places API developer guide.

[undefined](#GeocoderResult.postcode_localities)

**Type:**  Array<string>

An array of strings denoting all the localities contained in a postal code. This is only present when the result is a postal code that contains multiple localities. This array can contain up to 10 localities.

[undefined](#GeocoderResult.types)

**Type:**  Array<string>

An array of strings denoting the type of the returned geocoded element. For a list of possible strings, refer to the [Address Component Types](/maps/documentation/javascript/geocoding#GeocodingAddressTypes) section of the Developer's Guide.