[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/MapOptions.html)

MapOptions interface
--------------------

google.maps.MapOptions interface

MapOptions object used to define the properties that can be set on a Map.

Properties

[undefined](#MapOptions.backgroundColor)

**Type:**  string optional

Color used for the background of the Map div. This color will be visible when tiles have not yet loaded as the user pans. This option can only be set when the map is initialized.

[undefined](#MapOptions.center)

**Type:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral) optional

The initial Map center. Required.

[undefined](#MapOptions.clickableIcons)

**Type:**  boolean optional

When false, map icons are not clickable. A map icon represents a point of interest, also known as a POI. By default map icons are clickable.

[undefined](#MapOptions.controlSize)

**Type:**  number optional

Size in pixels of the controls appearing on the map. This value must be supplied directly when creating the Map, updating this value later may bring the controls into an undefined state. Only governs the controls made by the Maps API itself. Does not scale developer created custom controls.

[undefined](#MapOptions.disableDefaultUI)

**Type:**  boolean optional

Enables/disables all default UI. May be overridden individually.

[undefined](#MapOptions.disableDoubleClickZoom)

**Type:**  boolean optional

Enables/disables zoom and center on double click. Enabled by default.

**Note**: This property is **not recommended**. To disable zooming on double click, you can use the gestureHandling property, and set it to "none".

[undefined](#MapOptions.draggable)

**Type:**  boolean optional

If false, prevents the map from being dragged. Dragging is enabled by default.

**Note**: This property is **deprecated**. To disable dragging on the map, you can use the gestureHandling property, and set it to "none".

[undefined](#MapOptions.draggableCursor)

**Type:**  string optional

The name or url of the cursor to display when mousing over a draggable map. This property uses the css cursor attribute to change the icon. As with the css property, you must specify at least one fallback cursor that is not a URL. For example: draggableCursor: 'url([http://www.example.com/icon.png](http://www.example.com/icon.png)), auto;'.

[undefined](#MapOptions.draggingCursor)

**Type:**  string optional

The name or url of the cursor to display when the map is being dragged. This property uses the css cursor attribute to change the icon. As with the css property, you must specify at least one fallback cursor that is not a URL. For example: draggingCursor: 'url([http://www.example.com/icon.png](http://www.example.com/icon.png)), auto;'.

[undefined](#MapOptions.fullscreenControl)

**Type:**  boolean optional

The enabled/disabled state of the Fullscreen control.

[undefined](#MapOptions.fullscreenControlOptions)

**Type:**  [FullscreenControlOptions](/maps/documentation/javascript/reference/3.40/control#FullscreenControlOptions) optional

The display options for the Fullscreen control.

[undefined](#MapOptions.gestureHandling)

**Type:**  string optional

This setting controls how the API handles gestures on the map. Allowed values:

*   "cooperative": Scroll events and one-finger touch gestures scroll the page, and do not zoom or pan the map. Two-finger touch gestures pan and zoom the map. Scroll events with a ctrl key or ⌘ key pressed zoom the map.  
    In this mode the map _cooperates_ with the page.
*   "greedy": All touch gestures and scroll events pan or zoom the map.
*   "none": The map cannot be panned or zoomed by user gestures.
*   "auto": (default) Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or in an iframe.

[undefined](#MapOptions.heading)

**Type:**  number optional

The heading for aerial imagery in degrees measured clockwise from cardinal direction North. Headings are snapped to the nearest available angle for which imagery is available.

[undefined](#MapOptions.keyboardShortcuts)

**Type:**  boolean optional

If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are enabled by default.

[undefined](#MapOptions.mapTypeControl)

**Type:**  boolean optional

The initial enabled/disabled state of the Map type control.

[undefined](#MapOptions.mapTypeControlOptions)

**Type:**  [MapTypeControlOptions](/maps/documentation/javascript/reference/3.40/control#MapTypeControlOptions) optional

The initial display options for the Map type control.

[undefined](#MapOptions.mapTypeId)

**Type:**  [MapTypeId](/maps/documentation/javascript/reference/3.40/map#MapTypeId)|string optional

The initial Map mapTypeId. Defaults to ROADMAP.

[undefined](#MapOptions.maxZoom)

**Type:**  number optional

The maximum zoom level which will be displayed on the map. If omitted, or set to null, the maximum zoom from the current map type is used instead. Valid values: Integers between zero, and up to the supported [maximum zoom level](/maps/documentation/javascript/maxzoom).

[undefined](#MapOptions.minZoom)

**Type:**  number optional

The minimum zoom level which will be displayed on the map. If omitted, or set to null, the minimum zoom from the current map type is used instead. Valid values: Integers between zero, and up to the supported [maximum zoom level](/maps/documentation/javascript/maxzoom).

[undefined](#MapOptions.noClear)

**Type:**  boolean optional

If true, do not clear the contents of the Map div.

[undefined](#MapOptions.panControl)

**Type:**  boolean optional

The enabled/disabled state of the Pan control.

Note: The Pan control is not available in the new set of controls introduced in v3.22 of the Google Maps JavaScript API. While using v3.22 and v3.23, you can choose to use the earlier set of controls rather than the new controls, thus making the Pan control available as part of the old control set. See [What's New in the v3.22 Map Controls](/maps/articles/v322-controls-diff).

[undefined](#MapOptions.panControlOptions)

**Type:**  [PanControlOptions](/maps/documentation/javascript/reference/3.40/control#PanControlOptions) optional

The display options for the Pan control.

Note: The Pan control is not available in the new set of controls introduced in v3.22 of the Google Maps JavaScript API. While using v3.22 and v3.23, you can choose to use the earlier set of controls rather than the new controls, thus making the Pan control available as part of the old control set. See [What's New in the v3.22 Map Controls](/maps/articles/v322-controls-diff).

[undefined](#MapOptions.restriction)

**Type:**  [MapRestriction](/maps/documentation/javascript/reference/3.40/map#MapRestriction) optional

Defines a boundary that restricts the area of the map accessible to users. When set, a user can only pan and zoom while the camera view stays inside the limits of the boundary.

[undefined](#MapOptions.rotateControl)

**Type:**  boolean optional

The enabled/disabled state of the Rotate control.

[undefined](#MapOptions.rotateControlOptions)

**Type:**  [RotateControlOptions](/maps/documentation/javascript/reference/3.40/control#RotateControlOptions) optional

The display options for the Rotate control.

[undefined](#MapOptions.scaleControl)

**Type:**  boolean optional

The initial enabled/disabled state of the Scale control.

[undefined](#MapOptions.scaleControlOptions)

**Type:**  [ScaleControlOptions](/maps/documentation/javascript/reference/3.40/control#ScaleControlOptions) optional

The initial display options for the Scale control.

[undefined](#MapOptions.scrollwheel)

**Type:**  boolean optional

If false, disables zooming on the map using a mouse scroll wheel. The scrollwheel is enabled by default.

**Note**: This property is **not recommended**. To disable zooming using scrollwheel, you can use the gestureHandling property, and set it to either "cooperative" or "none".

[undefined](#MapOptions.streetView)

**Type:**  [StreetViewPanorama](/maps/documentation/javascript/reference/3.40/street-view#StreetViewPanorama) optional

A StreetViewPanorama to display when the Street View pegman is dropped on the map. If no panorama is specified, a default StreetViewPanorama will be displayed in the map's div when the pegman is dropped.

[undefined](#MapOptions.streetViewControl)

**Type:**  boolean optional

The initial enabled/disabled state of the Street View Pegman control. This control is part of the default UI, and should be set to false when displaying a map type on which the Street View road overlay should not appear (e.g. a non-Earth map type).

[undefined](#MapOptions.streetViewControlOptions)

**Type:**  [StreetViewControlOptions](/maps/documentation/javascript/reference/3.40/control#StreetViewControlOptions) optional

The initial display options for the Street View Pegman control.

[undefined](#MapOptions.styles)

**Type:**  Array<[MapTypeStyle](/maps/documentation/javascript/reference/3.40/map#MapTypeStyle)\> optional

Styles to apply to each of the default map types. Note that for satellite/hybrid and terrain modes, these styles will only apply to labels and geometry.

[undefined](#MapOptions.tilt)

**Type:**  number optional

Controls the automatic switching behavior for the angle of incidence of the map. The only allowed values are 0 and 45. The value 0 causes the map to always use a 0° overhead view regardless of the zoom level and viewport. The value 45 causes the tilt angle to automatically switch to 45 whenever 45° imagery is available for the current zoom level and viewport, and switch back to 0 whenever 45° imagery is not available (this is the default behavior). 45° imagery is only available for satellite and hybrid map types, within some locations, and at some zoom levels. **Note:** getTilt returns the current tilt angle, not the value specified by this option. Because getTilt and this option refer to different things, do not bind() the tilt property; doing so may yield unpredictable effects.

[undefined](#MapOptions.zoom)

**Type:**  number optional

The initial Map zoom level. Required. Valid values: Integers between zero, and up to the supported [maximum zoom level](/maps/documentation/javascript/maxzoom).

[undefined](#MapOptions.zoomControl)

**Type:**  boolean optional

The enabled/disabled state of the Zoom control.

[undefined](#MapOptions.zoomControlOptions)

**Type:**  [ZoomControlOptions](/maps/documentation/javascript/reference/3.40/control#ZoomControlOptions) optional

The display options for the Zoom control.