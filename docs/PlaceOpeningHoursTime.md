[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/PlaceOpeningHoursTime.html)


PlaceOpeningHoursTime interface
-------------------------------

google.maps.places.PlaceOpeningHoursTime interface

Defines when a Place opens or closes.

#### Library

places

Properties

[day](#PlaceOpeningHoursTime.day)

**Type:**  number

The days of the week, as a number in the range \[0, 6\], starting on Sunday. For example, 2 means Tuesday.

[hours](#PlaceOpeningHoursTime.hours)

**Type:**  number

The hours of the [PlaceOpeningHoursTime.time](/maps/documentation/javascript/reference/places-service#PlaceOpeningHoursTime.time) as a number, in the range \[0, 23\]. This will be reported in the Place’s time zone.

[minutes](#PlaceOpeningHoursTime.minutes)

**Type:**  number

The minutes of the [PlaceOpeningHoursTime.time](/maps/documentation/javascript/reference/places-service#PlaceOpeningHoursTime.time) as a number, in the range \[0, 59\]. This will be reported in the Place’s time zone.

[nextDate](#PlaceOpeningHoursTime.nextDate)

**Type:**  number optional

The timestamp (as milliseconds since the epoch, suitable for use with new Date()) representing the next occurrence of this PlaceOpeningHoursTime. It is calculated from the [PlaceOpeningHoursTime.day](/maps/documentation/javascript/reference/places-service#PlaceOpeningHoursTime.day) of week, the [PlaceOpeningHoursTime.time](/maps/documentation/javascript/reference/places-service#PlaceOpeningHoursTime.time), and the [PlaceResult.utc\_offset](/maps/documentation/javascript/reference/places-service#PlaceResult.utc_offset). If the [PlaceResult.utc\_offset](/maps/documentation/javascript/reference/places-service#PlaceResult.utc_offset) is undefined, then nextDate will be undefined.

[time](#PlaceOpeningHoursTime.time)

**Type:**  string

The time of day in 24-hour "hhmm" format. Values are in the range \["0000", "2359"\]. The time will be reported in the Place’s time zone.