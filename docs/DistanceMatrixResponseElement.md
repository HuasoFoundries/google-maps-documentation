[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/DistanceMatrixResponseElement.html)

DistanceMatrixResponseElement interface
---------------------------------------

google.maps.DistanceMatrixResponseElement interface

A single element of a response to a DistanceMatrixService request, which contains the duration and distance from one origin to one destination.

Properties

[undefined](#DistanceMatrixResponseElement.distance)

**Type:**  [Distance](/maps/documentation/javascript/reference/3.40/directions#Distance)

The distance for this origin-destination pairing. This property may be undefined as the distance may be unknown.

[undefined](#DistanceMatrixResponseElement.duration)

**Type:**  [Duration](/maps/documentation/javascript/reference/3.40/directions#Duration)

The duration for this origin-destination pairing. This property may be undefined as the duration may be unknown.

[undefined](#DistanceMatrixResponseElement.duration_in_traffic)

**Type:**  [Duration](/maps/documentation/javascript/reference/3.40/directions#Duration)

The duration for this origin-destination pairing, taking into account the traffic conditions indicated by the trafficModel property. This property may be undefined as the duration may be unknown. Only available to Premium Plan customers when drivingOptions is defined when making the request.

[undefined](#DistanceMatrixResponseElement.fare)

**Type:**  [TransitFare](/maps/documentation/javascript/reference/3.40/directions#TransitFare)

The total fare for this origin-destination pairing. Only applicable to transit requests.

[undefined](#DistanceMatrixResponseElement.status)

**Type:**  [DistanceMatrixElementStatus](/maps/documentation/javascript/reference/3.40/distance-matrix#DistanceMatrixElementStatus)

The status of this particular origin-destination pairing.