[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/RadarSearchRequest.html)

## RadarSearchRequest interface

google.maps.places.RadarSearchRequest interface

**Notice:** Radar Search is **deprecated** as of June 30, 2017. This feature will be turned down on June 30, 2018, and will no longer be available after that date.

A Radar Search request to be sent to the PlacesService.

#### Library

places

Properties

bounds

**Type:**  [LatLngBounds](LatLngBounds.md)|[LatLngBoundsLiteral](LatLngBoundsLiteral.md)

Bounds used to bias results when searching for Places (optional). Both location and radius will be ignored if bounds is set. Results will not be restricted to those inside these bounds; but, results inside it will rank higher.

keyword

**Type:**  string

A term to be matched against all available fields, including but not limited to name, type, and address, as well as customer reviews and other third-party content.

location

**Type:**  [LatLng](LatLng.md)|[LatLngLiteral](LatLngLiteral.md)

The center of the area used to bias results when searching for Places.

name

**Type:**  string

Restricts results to Places that include this text in the name.

radius

**Type:**  number

The radius of the area used to bias results when searching for Places, in meters.

type

**Type:**  string

Searches for places of the given type. The type will be translated to the local language of the request's target location and used as query. If a query is also provided, it will be concatenated to the localized type string. Results of a different type will be dropped from the response. Use this to search for language and region independent categorical search. [here](https://developers.google.com/maps/documentation/places/supported_types).
