[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/PlaceOpeningHours.html)

PlaceOpeningHours interface
---------------------------

google.maps.places.PlaceOpeningHours interface

Defines information about the opening hours of a Place.

#### Library

places

Methods

[undefined](#PlaceOpeningHours.isOpen)

isOpen(\[date\])

**Parameters:** 

*   date:  Date optional

**Return Value:**  boolean optional

Check whether the place is open now (when no date is passed), or at the given date. If this place does not have [PlaceResult.utc\_offset\_minutes](PlaceResult.md) or [PlaceOpeningHours.periods](PlaceOpeningHours.md) then undefined is returned ([PlaceOpeningHours.periods](PlaceOpeningHours.md) is only available via [PlacesService.getDetails](PlacesService.md)).

Properties

[undefined](#PlaceOpeningHours.open_now)

**Notice:** open\_now is deprecated as of November 2019 and will be turned off in November 2020. Use the [PlaceOpeningHours.isOpen](PlaceOpeningHours.md) function from a [PlacesService.getDetails](PlacesService.md) result instead.

**Type:**  boolean optional

Whether the Place is open at the current time.

[undefined](#PlaceOpeningHours.periods)

**Type:**  Array<[PlaceOpeningHoursPeriod](/maps/documentation/javascript/reference/3.40/places-service#PlaceOpeningHoursPeriod)\> optional

Opening periods covering for each day of the week, starting from Sunday, in chronological order. Days in which the Place is not open are not included. Only available with [PlacesService.getDetails](PlacesService.md).

[undefined](#PlaceOpeningHours.weekday_text)

**Type:**  Array<string> optional

An array of seven strings representing the formatted opening hours for each day of the week. The Places Service will format and localize the opening hours appropriately for the current language. The ordering of the elements in this array depends on the language. Some languages start the week on Monday while others start on Sunday. Only available with [PlacesService.getDetails](PlacesService.md). Other calls may return an empty array.