[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/TransitDetails.html)

TransitDetails interface
------------------------

google.maps.TransitDetails interface

Details about the departure, arrival, and mode of transit used in this step.

Properties

[undefined](#TransitDetails.arrival_stop)

**Type:**  [TransitStop](/maps/documentation/javascript/reference/3.40/directions#TransitStop)

The arrival stop of this transit step.

[undefined](#TransitDetails.arrival_time)

**Type:**  [Time](/maps/documentation/javascript/reference/3.40/directions#Time)

The arrival time of this step, specified as a Time object.

[undefined](#TransitDetails.departure_stop)

**Type:**  [TransitStop](/maps/documentation/javascript/reference/3.40/directions#TransitStop)

The departure stop of this transit step.

[undefined](#TransitDetails.departure_time)

**Type:**  [Time](/maps/documentation/javascript/reference/3.40/directions#Time)

The departure time of this step, specified as a Time object.

[undefined](#TransitDetails.headsign)

**Type:**  string

The direction in which to travel on this line, as it is marked on the vehicle or at the departure stop.

[undefined](#TransitDetails.headway)

**Type:**  number

The expected number of seconds between equivalent vehicles at this stop.

[undefined](#TransitDetails.line)

**Type:**  [TransitLine](/maps/documentation/javascript/reference/3.40/directions#TransitLine)

Details about the transit line used in this step.

[undefined](#TransitDetails.num_stops)

**Type:**  number

The number of stops on this step. Includes the arrival stop, but not the departure stop.

[undefined](#TransitDetails.trip_short_name)

**Type:**  string

The text that appears in schedules and sign boards to identify a transit trip to passengers, for example, to identify train numbers for commuter rail trips. The text uniquely identifies a trip within a service day.