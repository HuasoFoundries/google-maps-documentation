[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/TransitOptions.html)

TransitOptions interface
------------------------

google.maps.TransitOptions interface

The TransitOptions object to be included in a [DirectionsRequest](#DirectionsRequest) when the travel mode is set to TRANSIT.

Properties

[undefined](#TransitOptions.arrivalTime)

**Type:**  Date optional

The desired arrival time for the route, specified as a Date object. The Date object measures time in milliseconds since 1 January 1970. If arrival time is specified, departure time is ignored.

[undefined](#TransitOptions.departureTime)

**Type:**  Date optional

The desired departure time for the route, specified as a Date object. The Date object measures time in milliseconds since 1 January 1970. If neither departure time nor arrival time is specified, the time is assumed to be "now".

[undefined](#TransitOptions.modes)

**Type:**  Array<[TransitMode](/maps/documentation/javascript/reference/3.40/directions#TransitMode)\> optional

One or more preferred modes of transit, such as bus or train. If no preference is given, the API returns the default best route.

[undefined](#TransitOptions.routingPreference)

**Type:**  [TransitRoutePreference](/maps/documentation/javascript/reference/3.40/directions#TransitRoutePreference) optional

A preference that can bias the choice of transit route, such as less walking. If no preference is given, the API returns the default best route.