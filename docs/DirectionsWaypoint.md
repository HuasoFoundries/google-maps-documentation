[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/DirectionsWaypoint.html)

DirectionsWaypoint interface
----------------------------

google.maps.DirectionsWaypoint interface

A DirectionsWaypoint represents a location between origin and destination through which the trip should be routed.

Properties

[undefined](#DirectionsWaypoint.location)

**Type:**  string|[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[Place](/maps/documentation/javascript/reference/3.40/directions#Place) optional

Waypoint location. Can be an address string, a LatLng, or a Place. Optional.

[undefined](#DirectionsWaypoint.stopover)

**Type:**  boolean optional

If true, indicates that this waypoint is a stop between the origin and destination. This has the effect of splitting the route into two legs. If false, indicates that the route should be biased to go through this waypoint, but not split into two legs. This is useful if you want to create a route in response to the user dragging waypoints on a map. This value is true by default. Optional.