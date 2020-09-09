[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/GeocoderRequest.html)

GeocoderRequest interface
-------------------------

google.maps.GeocoderRequest interface

The specification for a geocoding request to be sent to the Geocoder.

Properties

[undefined](#GeocoderRequest.address)

**Type:**  string optional

Address to geocode. One, and only one, of address, location and placeId must be supplied.

[undefined](#GeocoderRequest.bounds)

**Type:**  [LatLngBounds](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBounds)|[LatLngBoundsLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBoundsLiteral) optional

LatLngBounds within which to search. Optional.

[undefined](#GeocoderRequest.componentRestrictions)

**Type:**  [GeocoderComponentRestrictions](/maps/documentation/javascript/reference/3.40/geocoder#GeocoderComponentRestrictions) optional

Components are used to restrict results to a specific area. A filter consists of one or more of: route, locality, administrativeArea, postalCode, country. Only the results that match all the filters will be returned. Filter values support the same methods of spelling correction and partial matching as other geocoding requests. Optional.

[undefined](#GeocoderRequest.location)

**Type:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral) optional

LatLng (or LatLngLiteral) for which to search. The geocoder performs a reverse geocode. See [Reverse Geocoding](/maps/documentation/javascript/geocoding#ReverseGeocoding) for more information. One, and only one, of address, location and placeId must be supplied.

[undefined](#GeocoderRequest.placeId)

**Type:**  string optional

The place ID associated with the location. Place IDs uniquely identify a place in the Google Places database and on Google Maps. Learn more about [place IDs](/places/place-id) in the Places API developer guide. The geocoder performs a reverse geocode. See [Reverse Geocoding](/maps/documentation/javascript/geocoding#ReverseGeocoding) for more information. One, and only one, of address, location and placeId must be supplied.

[undefined](#GeocoderRequest.region)

**Type:**  string optional

Country code used to bias the search, specified as a Unicode region subtag / CLDR identifier. Optional.