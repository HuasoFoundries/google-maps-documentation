[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/SaveWidget.html)

## SaveWidget class

google.maps.SaveWidget class

A control that users can use to save a place to Google Maps from your website. In this context, 'place' means a business, point of interest or geographic location. The SaveWidget has a fixed height of 22px.

The SaveWidget is only available when signed_in=true has been passed as a URL parameter in the bootstrap request.

**Note:** The signed-in maps feature is **deprecated**. Versions 3.27 and earlier of the Google Maps JavaScript API continue to support signed-in maps. A future version will no longer support signed-in maps, and will not support saving a place directly from within your website. Read more about [signed-in maps](https://developers.google.com/maps/documentation/javascript/signedin).

This class extends [MVCObject](MVCObject.md).

Constructor

SaveWidget(container:Node, opts?:[SaveWidgetOptions](SaveWidgetOptions.md))

Creates a new SaveWidget, and renders it in a given div.

Methods

getAttribution()

**Return Value:**  [Attribution](Attribution.md)

Returns the Attribution associated with this SaveWidget.

getPlace()

**Return Value:**  [MarkerPlace](MarkerPlace.md)

Returns the Place associated with this SaveWidget.

setAttribution(attribution:[_Attribution_](Attribution.md))

**Return Value:**  None

Sets the Attribution associated with this SaveWidget.

setOptions(opts:[_SaveWidgetOptions_](SaveWidgetOptions.md))

**Return Value:**  None

setPlace(place:[_MarkerPlace_](MarkerPlace.md))

**Return Value:**  None

Changes the Place associated with this SaveWidget.
