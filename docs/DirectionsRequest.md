[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/DirectionsRequest.html)

DirectionsRequest interface
---------------------------

google.maps.DirectionsRequest interface

A directions query to be sent to the [DirectionsService](#DirectionsService).

Properties

[undefined](#DirectionsRequest.avoidFerries)

**Type:**  boolean optional

If true, instructs the Directions service to avoid ferries where possible. Optional.

[undefined](#DirectionsRequest.avoidHighways)

**Type:**  boolean optional

If true, instructs the Directions service to avoid highways where possible. Optional.

[undefined](#DirectionsRequest.avoidTolls)

**Type:**  boolean optional

If true, instructs the Directions service to avoid toll roads where possible. Optional.

[undefined](#DirectionsRequest.destination)

**Type:**  string|[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[Place](/maps/documentation/javascript/reference/3.40/directions#Place)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral)

Location of destination. This can be specified as either a string to be geocoded, or a LatLng, or a Place. Required.

[undefined](#DirectionsRequest.drivingOptions)

**Type:**  [DrivingOptions](/maps/documentation/javascript/reference/3.40/directions#DrivingOptions) optional

Settings that apply only to requests where travelMode is DRIVING. This object will have no effect for other travel modes.

[undefined](#DirectionsRequest.optimizeWaypoints)

**Type:**  boolean optional

If set to true, the DirectionsService will attempt to re-order the supplied intermediate waypoints to minimize overall cost of the route. If waypoints are optimized, inspect DirectionsRoute.waypoint\_order in the response to determine the new ordering.

[undefined](#DirectionsRequest.origin)

**Type:**  string|[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[Place](/maps/documentation/javascript/reference/3.40/directions#Place)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral)

Location of origin. This can be specified as either a string to be geocoded, or a LatLng, or a Place. Required.

[undefined](#DirectionsRequest.provideRouteAlternatives)

**Type:**  boolean optional

Whether or not route alternatives should be provided. Optional.

[undefined](#DirectionsRequest.region)

**Type:**  string optional

Region code used as a bias for geocoding requests. Optional.

[undefined](#DirectionsRequest.transitOptions)

**Type:**  [TransitOptions](/maps/documentation/javascript/reference/3.40/directions#TransitOptions) optional

Settings that apply only to requests where travelMode is TRANSIT. This object will have no effect for other travel modes.

[undefined](#DirectionsRequest.travelMode)

**Type:**  [TravelMode](/maps/documentation/javascript/reference/3.40/directions#TravelMode)

Type of routing requested. Required.

[undefined](#DirectionsRequest.unitSystem)

**Type:**  [UnitSystem](/maps/documentation/javascript/reference/3.40/directions#UnitSystem) optional

Preferred unit system to use when displaying distance. Defaults to the unit system used in the country of origin.

[undefined](#DirectionsRequest.waypoints)

**Type:**  Array<[DirectionsWaypoint](/maps/documentation/javascript/reference/3.40/directions#DirectionsWaypoint)\> optional

Array of intermediate waypoints. Directions are calculated from the origin to the destination by way of each waypoint in this array. See the [developer's guide](/maps/documentation/javascript/directions#UsageLimits) for the maximum number of waypoints allowed. Waypoints are not supported for transit directions. Optional.