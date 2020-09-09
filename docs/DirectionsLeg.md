[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/DirectionsLeg.html)

DirectionsLeg interface
-----------------------

google.maps.DirectionsLeg interface

A single leg consisting of a set of steps in a [DirectionsResult](#DirectionsResult). Some fields in the leg may not be returned for all requests. Note that though this result is "JSON-like," it is not strictly JSON, as it directly and indirectly includes LatLng objects.

Properties

[undefined](#DirectionsLeg.arrival_time)

**Type:**  [Time](/maps/documentation/javascript/reference/3.40/directions#Time)

An estimated arrival time for this leg. Only applicable for TRANSIT requests.

[undefined](#DirectionsLeg.departure_time)

**Type:**  [Time](/maps/documentation/javascript/reference/3.40/directions#Time)

An estimated departure time for this leg. Only applicable for TRANSIT requests.

[undefined](#DirectionsLeg.distance)

**Type:**  [Distance](/maps/documentation/javascript/reference/3.40/directions#Distance)

The total distance covered by this leg. This property may be undefined as the distance may be unknown.

[undefined](#DirectionsLeg.duration)

**Type:**  [Duration](/maps/documentation/javascript/reference/3.40/directions#Duration)

The total duration of this leg. This property may be undefined as the duration may be unknown.

[undefined](#DirectionsLeg.duration_in_traffic)

**Type:**  [Duration](/maps/documentation/javascript/reference/3.40/directions#Duration)

The total duration of this leg, taking into account the traffic conditions indicated by the trafficModel property. This property may be undefined as the duration may be unknown. Only available to Premium Plan customers when drivingOptions is defined when making the request.

[undefined](#DirectionsLeg.end_address)

**Type:**  string

The address of the destination of this leg.

[undefined](#DirectionsLeg.end_location)

**Type:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)

The DirectionsService calculates directions between locations by using the nearest transportation option (usually a road) at the start and end locations. end\_location indicates the actual geocoded destination, which may be different than the end\_location of the last step if, for example, the road is not near the destination of this leg.

[undefined](#DirectionsLeg.start_address)

**Type:**  string

The address of the origin of this leg.

[undefined](#DirectionsLeg.start_location)

**Type:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)

The DirectionsService calculates directions between locations by using the nearest transportation option (usually a road) at the start and end locations. start\_location indicates the actual geocoded origin, which may be different than the start\_location of the first step if, for example, the road is not near the origin of this leg.

[undefined](#DirectionsLeg.steps)

**Type:**  Array<[DirectionsStep](/maps/documentation/javascript/reference/3.40/directions#DirectionsStep)\>

An array of DirectionsSteps, each of which contains information about the individual steps in this leg.

[undefined](#DirectionsLeg.via_waypoints)

**Type:**  Array<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)\>

An array of non-stopover waypoints along this leg, which were specified in the original request.

**Deprecated in alternative routes**. Version 3.27 will be the last version of the API that adds extra via\_waypoints in alternative routes.

When using the Directions Service to implement draggable directions, it is recommended to disable dragging of alternative routes. Only the main route should be draggable. Users can drag the main route until it matches an alternative route.