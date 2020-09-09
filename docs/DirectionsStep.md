[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/DirectionsStep.html)

DirectionsStep interface
------------------------

google.maps.DirectionsStep interface

A single DirectionsStep in a DirectionsResult. Some fields may be undefined. Note that though this object is "JSON-like," it is not strictly JSON, as it directly includes LatLng objects.

Properties

[undefined](#DirectionsStep.distance)

**Type:**  [Distance](/maps/documentation/javascript/reference/3.40/directions#Distance)

The distance covered by this step. This property may be undefined as the distance may be unknown.

[undefined](#DirectionsStep.duration)

**Type:**  [Duration](/maps/documentation/javascript/reference/3.40/directions#Duration)

The typical time required to perform this step in seconds and in text form. This property may be undefined as the duration may be unknown.

[undefined](#DirectionsStep.end_location)

**Type:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)

The ending location of this step.

[undefined](#DirectionsStep.instructions)

**Type:**  string

Instructions for this step.

[undefined](#DirectionsStep.path)

**Type:**  Array<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)\>

A sequence of LatLngs describing the course of this step.

[undefined](#DirectionsStep.start_location)

**Type:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)

The starting location of this step.

[undefined](#DirectionsStep.steps)

**Type:**  Array<[DirectionsStep](/maps/documentation/javascript/reference/3.40/directions#DirectionsStep)\>

Sub-steps of this step. Specified for non-transit sections of transit routes.

[undefined](#DirectionsStep.transit)

**Type:**  [TransitDetails](/maps/documentation/javascript/reference/3.40/directions#TransitDetails)

Transit-specific details about this step. This property will be undefined unless the travel mode of this step is TRANSIT.

[undefined](#DirectionsStep.travel_mode)

**Type:**  [TravelMode](/maps/documentation/javascript/reference/3.40/directions#TravelMode)

The mode of travel used in this step.