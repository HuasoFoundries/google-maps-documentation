[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/DirectionsResult.html)

DirectionsResult interface
--------------------------

google.maps.DirectionsResult interface

The directions response retrieved from the directions server. You can render these using a [DirectionsRenderer](#DirectionsRenderer) or parse this object and render it yourself. You must display the warnings and copyrights as noted in the [Google Maps Platform Terms of Service](/maps/terms). Note that though this result is "JSON-like," it is not strictly JSON, as it indirectly includes LatLng objects.

Properties

[undefined](#DirectionsResult.geocoded_waypoints)

**Type:**  Array<[DirectionsGeocodedWaypoint](/maps/documentation/javascript/reference/3.40/directions#DirectionsGeocodedWaypoint)\>

An array of DirectionsGeocodedWaypoints, each of which contains information about the geocoding of origin, destination and waypoints.

[undefined](#DirectionsResult.routes)

**Type:**  Array<[DirectionsRoute](/maps/documentation/javascript/reference/3.40/directions#DirectionsRoute)\>

An array of DirectionsRoutes, each of which contains information about the legs and steps of which it is composed. There will only be one route unless the DirectionsRequest was made with provideRouteAlternatives set to true.