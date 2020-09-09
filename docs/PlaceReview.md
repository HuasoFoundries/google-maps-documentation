[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/PlaceReview.html)

PlaceReview interface
---------------------

google.maps.places.PlaceReview interface

Represents a single review of a place.

#### Library

places

Properties

[undefined](#PlaceReview.aspects)

**Type:**  Array<[PlaceAspectRating](/maps/documentation/javascript/reference/3.40/places-service#PlaceAspectRating)\>

The aspects rated by the review. The ratings on a scale of 0 to 3.

[undefined](#PlaceReview.author_name)

**Type:**  string

The name of the reviewer.

[undefined](#PlaceReview.author_url)

**Type:**  string optional

A URL to the reviewer's profile. This will be undefined when the reviewer's profile is unavailable.

[undefined](#PlaceReview.language)

**Type:**  string

An IETF language code indicating the language in which this review is written. Note that this code includes only the main language tag without any secondary tag indicating country or region. For example, all the English reviews are tagged as 'en' rather than 'en-AU' or 'en-UK'.

[undefined](#PlaceReview.profile_photo_url)

**Type:**  string

A URL to the reviwer's profile image.

[undefined](#PlaceReview.relative_time_description)

**Type:**  string

A string of formatted recent time, expressing the review time relative to the current time in a form appropriate for the language and country. For example "a month ago".

[undefined](#PlaceReview.text)

**Type:**  string

The text of a review.

[undefined](#PlaceReview.time)

**Type:**  number

Timestamp for the review, expressed in seconds since epoch.