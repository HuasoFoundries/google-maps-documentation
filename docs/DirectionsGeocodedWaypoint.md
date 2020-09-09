[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/DirectionsGeocodedWaypoint.html)

DirectionsGeocodedWaypoint interface
------------------------------------

google.maps.DirectionsGeocodedWaypoint interface

A single geocoded waypoint.

Properties

[undefined](#DirectionsGeocodedWaypoint.partial_match)

**Type:**  boolean

Whether the geocoder did not return an exact match for the original waypoint, though it was able to match part of the requested address.

[undefined](#DirectionsGeocodedWaypoint.place_id)

**Type:**  string

The place ID associated with the waypoint. Place IDs uniquely identify a place in the Google Places database and on Google Maps. Learn more about [Place IDs](/places/place-id) in the Places API developer guide.

[undefined](#DirectionsGeocodedWaypoint.types)

**Type:**  Array<string>

An array of strings denoting the type of the returned geocoded element. For a list of possible strings, refer to the [Address Component Types](/maps/documentation/javascript/geocoding#GeocodingAddressTypes) section of the Developer's Guide.