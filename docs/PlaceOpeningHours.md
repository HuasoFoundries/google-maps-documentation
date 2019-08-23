[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/PlaceOpeningHours.html)


PlaceOpeningHours interface
---------------------------

google.maps.places.PlaceOpeningHours interface

Defines information about the opening hours of a Place.

#### Library

places

Methods

[isOpen](#PlaceOpeningHours.isOpen)

isOpen(\[date\])

**Parameters:** 

*   date:  Date optional

**Return Value:**  boolean optional

Check whether the place is open now (when no date is passed), or at the given date. If this place does not have [PlaceResult.utc\_offset\_minutes](https://developers.google.com/maps/documentation/javascript/reference/places-service#PlaceResult.utc_offset_minutes) or [PlaceOpeningHours.periods](https://developers.google.com/maps/documentation/javascript/reference/places-service#PlaceOpeningHours.periods) then undefined is returned.

Properties

[open\_now](#PlaceOpeningHours.open_now)

**Type:**  boolean optional

Whether the Place is open at the current time.

[periods](#PlaceOpeningHours.periods)

**Type:**  Array<[PlaceOpeningHoursPeriod](PlaceOpeningHoursPeriod.md)\> optional

Opening periods covering for each day of the week, starting from Sunday, in chronological order. Days in which the Place is not open are not included. Only available with [PlacesService.getDetails](https://developers.google.com/maps/documentation/javascript/reference/places-service#PlacesService.getDetails).

[weekday\_text](#PlaceOpeningHours.weekday_text)

**Type:**  Array<string> optional

An array of seven strings representing the formatted opening hours for each day of the week. The Places Service will format and localize the opening hours appropriately for the current language. The ordering of the elements in this array depends on the language. Some languages start the week on Monday while others start on Sunday. Only available with [PlacesService.getDetails](https://developers.google.com/maps/documentation/javascript/reference/places-service#PlacesService.getDetails). Other calls may return an empty array.