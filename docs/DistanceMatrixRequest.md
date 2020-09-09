[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/DistanceMatrixRequest.html)

DistanceMatrixRequest interface
-------------------------------

google.maps.DistanceMatrixRequest interface

A distance matrix query sent by the DistanceMatrixService containing arrays of origin and destination locations, and various options for computing metrics.

Properties

[undefined](#DistanceMatrixRequest.avoidFerries)

**Type:**  boolean optional

If true, instructs the Distance Matrix service to avoid ferries where possible. Optional.

[undefined](#DistanceMatrixRequest.avoidHighways)

**Type:**  boolean optional

If true, instructs the Distance Matrix service to avoid highways where possible. Optional.

[undefined](#DistanceMatrixRequest.avoidTolls)

**Type:**  boolean optional

If true, instructs the Distance Matrix service to avoid toll roads where possible. Optional.

[undefined](#DistanceMatrixRequest.destinations)

**Type:**  Array<string|[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[Place](/maps/documentation/javascript/reference/3.40/directions#Place)\>

An array containing destination address strings, or LatLng, or Place objects, to which to calculate distance and time. Required.

[undefined](#DistanceMatrixRequest.drivingOptions)

**Type:**  [DrivingOptions](/maps/documentation/javascript/reference/3.40/directions#DrivingOptions) optional

Settings that apply only to requests where travelMode is DRIVING. This object will have no effect for other travel modes.

[undefined](#DistanceMatrixRequest.origins)

**Type:**  Array<string|[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[Place](/maps/documentation/javascript/reference/3.40/directions#Place)\>

An array containing origin address strings, or LatLng, or Place objects, from which to calculate distance and time. Required.

[undefined](#DistanceMatrixRequest.region)

**Type:**  string optional

Region code used as a bias for geocoding requests. Optional.

[undefined](#DistanceMatrixRequest.transitOptions)

**Type:**  [TransitOptions](/maps/documentation/javascript/reference/3.40/directions#TransitOptions) optional

Settings that apply only to requests where travelMode is TRANSIT. This object will have no effect for other travel modes.

[undefined](#DistanceMatrixRequest.travelMode)

**Type:**  [TravelMode](/maps/documentation/javascript/reference/3.40/directions#TravelMode)

Type of routing requested. Required.

[undefined](#DistanceMatrixRequest.unitSystem)

**Type:**  [UnitSystem](/maps/documentation/javascript/reference/3.40/directions#UnitSystem) optional

Preferred unit system to use when displaying distance. Optional; defaults to metric.