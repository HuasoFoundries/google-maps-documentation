[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/TrafficModel.html)

TrafficModel constants
----------------------

google.maps.TrafficModel constants

The assumptions to use when predicting duration in traffic. Specified as part of a [DirectionsRequest](#DirectionsRequest) or [DistanceMatrixRequest](#DistanceMatrixRequest). Specify these by value, or by using the constant's name. For example, 'bestguess' or google.maps.TrafficModel.BEST\_GUESS.

Constants

[undefined](#TrafficModel.BEST_GUESS)

Use historical traffic data to best estimate the time spent in traffic.

[undefined](#TrafficModel.OPTIMISTIC)

Use historical traffic data to make an optimistic estimate of what the duration in traffic will be.

[undefined](#TrafficModel.PESSIMISTIC)

Use historical traffic data to make a pessimistic estimate of what the duration in traffic will be.