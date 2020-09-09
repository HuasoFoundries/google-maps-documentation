[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/StreetViewPanoramaOptions.html)

StreetViewPanoramaOptions interface
-----------------------------------

google.maps.StreetViewPanoramaOptions interface

Options defining the properties of a StreetViewPanorama object.

Properties

[undefined](#StreetViewPanoramaOptions.addressControl)

**Type:**  boolean optional

The enabled/disabled state of the address control.

[undefined](#StreetViewPanoramaOptions.addressControlOptions)

**Type:**  [StreetViewAddressControlOptions](/maps/documentation/javascript/reference/3.40/street-view#StreetViewAddressControlOptions) optional

The display options for the address control.

[undefined](#StreetViewPanoramaOptions.clickToGo)

**Type:**  boolean optional

The enabled/disabled state of click-to-go.

[undefined](#StreetViewPanoramaOptions.controlSize)

**Type:**  number optional

Size in pixels of the controls appearing on the panorama. This value must be supplied directly when creating the Panorama, updating this value later may bring the controls into an undefined state. Only governs the controls made by the Maps API itself. Does not scale developer created custom controls.

[undefined](#StreetViewPanoramaOptions.disableDefaultUI)

**Type:**  boolean optional

Enables/disables all default UI. May be overridden individually.

[undefined](#StreetViewPanoramaOptions.disableDoubleClickZoom)

**Type:**  boolean optional

Enables/disables zoom on double click. Disabled by default.

[undefined](#StreetViewPanoramaOptions.enableCloseButton)

**Type:**  boolean optional

If true, the close button is displayed. Disabled by default.

[undefined](#StreetViewPanoramaOptions.fullscreenControl)

**Type:**  boolean optional

The enabled/disabled state of the fullscreen control.

[undefined](#StreetViewPanoramaOptions.fullscreenControlOptions)

**Type:**  [FullscreenControlOptions](/maps/documentation/javascript/reference/3.40/control#FullscreenControlOptions) optional

The display options for the fullscreen control.

[undefined](#StreetViewPanoramaOptions.imageDateControl)

**Type:**  boolean optional

The enabled/disabled state of the imagery acquisition date control. Disabled by default.

[undefined](#StreetViewPanoramaOptions.linksControl)

**Type:**  boolean optional

The enabled/disabled state of the links control.

[undefined](#StreetViewPanoramaOptions.motionTracking)

**Type:**  boolean optional

Whether motion tracking is on or off. Enabled by default when the motion tracking control is present, so that the POV (point of view) follows the orientation of the device. This is primarily applicable to mobile devices. If motionTracking is set to false while motionTrackingControl is enabled, the motion tracking control appears but tracking is off. The user can tap the motion tracking control to toggle this option.

[undefined](#StreetViewPanoramaOptions.motionTrackingControl)

**Type:**  boolean optional

The enabled/disabled state of the motion tracking control. Enabled by default when the device has motion data, so that the control appears on the map. This is primarily applicable to mobile devices.

[undefined](#StreetViewPanoramaOptions.motionTrackingControlOptions)

**Type:**  [MotionTrackingControlOptions](/maps/documentation/javascript/reference/3.40/control#MotionTrackingControlOptions) optional

The display options for the motion tracking control.

[undefined](#StreetViewPanoramaOptions.panControl)

**Type:**  boolean optional

The enabled/disabled state of the pan control.

[undefined](#StreetViewPanoramaOptions.panControlOptions)

**Type:**  [PanControlOptions](/maps/documentation/javascript/reference/3.40/control#PanControlOptions) optional

The display options for the pan control.

[undefined](#StreetViewPanoramaOptions.pano)

**Type:**  string optional

The panorama ID, which should be set when specifying a custom panorama.

[undefined](#StreetViewPanoramaOptions.position)

**Type:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral) optional

The LatLng position of the Street View panorama.

[undefined](#StreetViewPanoramaOptions.pov)

**Type:**  [StreetViewPov](/maps/documentation/javascript/reference/3.40/street-view#StreetViewPov) optional

The camera orientation, specified as heading and pitch, for the panorama.

[undefined](#StreetViewPanoramaOptions.scrollwheel)

**Type:**  boolean optional

If false, disables scrollwheel zooming in Street View. The scrollwheel is enabled by default.

[undefined](#StreetViewPanoramaOptions.showRoadLabels)

**Type:**  boolean optional

The display of street names on the panorama. If this value is not specified, or is set to true, street names are displayed on the panorama. If set to false, street names are not displayed.

[undefined](#StreetViewPanoramaOptions.visible)

**Type:**  boolean optional

If true, the Street View panorama is visible on load.

[undefined](#StreetViewPanoramaOptions.zoom)

**Type:**  number optional

The zoom of the panorama, specified as a number. A zoom of 0 gives a 180 degrees Field of View.

[undefined](#StreetViewPanoramaOptions.zoomControl)

**Type:**  boolean optional

The enabled/disabled state of the zoom control.

[undefined](#StreetViewPanoramaOptions.zoomControlOptions)

**Type:**  [ZoomControlOptions](/maps/documentation/javascript/reference/3.40/control#ZoomControlOptions) optional

The display options for the zoom control.