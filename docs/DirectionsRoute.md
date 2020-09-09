[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/DirectionsRoute.html)

DirectionsRoute interface
-------------------------

google.maps.DirectionsRoute interface

A single route containing a set of legs in a [DirectionsResult](#DirectionsResult). Note that though this object is "JSON-like," it is not strictly JSON, as it directly and indirectly includes LatLng objects.

Properties

[undefined](#DirectionsRoute.bounds)

**Type:**  [LatLngBounds](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBounds)

The bounds for this route.

[undefined](#DirectionsRoute.copyrights)

**Type:**  string

Copyrights text to be displayed for this route.

[undefined](#DirectionsRoute.fare)

**Type:**  [TransitFare](/maps/documentation/javascript/reference/3.40/directions#TransitFare)

The total fare for the whole transit trip. Only applicable to transit requests.

[undefined](#DirectionsRoute.legs)

**Type:**  Array<[DirectionsLeg](/maps/documentation/javascript/reference/3.40/directions#DirectionsLeg)\>

An array of DirectionsLegs, each of which contains information about the steps of which it is composed. There will be one leg for each stopover waypoint or destination specified. So a route with no stopover waypoints will contain one DirectionsLeg and a route with one stopover waypoint will contain two.

[undefined](#DirectionsRoute.overview_path)

**Type:**  Array<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)\>

An array of LatLngs representing the entire course of this route. The path is simplified in order to make it suitable in contexts where a small number of vertices is required (such as Static Maps API URLs).

[undefined](#DirectionsRoute.overview_polyline)

**Type:**  string

An [encoded polyline representation](/maps/documentation/utilities/polylinealgorithm) of the route in overview\_path. This polyline is an approximate (smoothed) path of the resulting directions.

[undefined](#DirectionsRoute.warnings)

**Type:**  Array<string>

Warnings to be displayed when showing these directions.

[undefined](#DirectionsRoute.waypoint_order)

**Type:**  Array<number>

If optimizeWaypoints was set to true, this field will contain the re-ordered permutation of the input waypoints. For example, if the input was:  
  Origin: Los Angeles  
  Waypoints: Dallas, Bangor, Phoenix  
  Destination: New York  
and the optimized output was ordered as follows:  
  Origin: Los Angeles  
  Waypoints: Phoenix, Dallas, Bangor  
  Destination: New York  
then this field will be an Array containing the values \[2, 0, 1\]. Note that the numbering of waypoints is zero-based.  
If any of the input waypoints has stopover set to false, this field will be empty, since route optimization is not available for such queries.