[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/PlaceOpeningHoursPeriod.html)

PlaceOpeningHoursPeriod interface
---------------------------------

google.maps.places.PlaceOpeningHoursPeriod interface

Defines structured information about the opening hours of a Place. **Note:** If a Place is **always open**, the close section will be missing from the response. Clients can rely on always-open being represented as an open period containing day with value 0 and time with value "0000", and no close.

#### Library

places

Properties

[undefined](#PlaceOpeningHoursPeriod.close)

**Type:**  [PlaceOpeningHoursTime](/maps/documentation/javascript/reference/3.40/places-service#PlaceOpeningHoursTime) optional

The closing time for the Place.

[undefined](#PlaceOpeningHoursPeriod.open)

**Type:**  [PlaceOpeningHoursTime](/maps/documentation/javascript/reference/3.40/places-service#PlaceOpeningHoursTime)

The opening time for the Place.