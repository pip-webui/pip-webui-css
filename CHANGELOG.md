<a name="1.0.0"></a>
### 1.0.0 (2015-11-20)

#### Features
* **typography** New text styles that match and extend Angular Material
* **flexbox** Flexbox mixins that simplify development of custom styles
* **positions** Various positioning styles for HTML elements
* **sizes** Styles with predefined width, height, margins and paddings
* **effects** Animation, transformation and other visual effects
* **images** SVG image sets to be used with md-icon directive
* **components** New CSS components for titles, lists, actions and reference items

#### Breaking Changes
* This release represents entirely new implementation comparing to 0.0.9 version
* Most generic styles and variables were redefined
* Custom Roboto and Fontastic fonts were deprecated and removed
* Material style overrides were removed
* CSS components were redesigned from scratch
* Begin use $mdMedia Service. Delete size variables
  $sizeSmall    - $mdMedia('xs')
  $sizeMedium   - $mdMedia('sm')
  $sizeLarge    - $mdMedia('md')
  $sizeXLarge   - delete
  $sizeGtSmall  - $mdMedia('gt-xs')
  $sizeGtMedium - $mdMedia('gt-sm')
  $sizeLtLarge  - $mdMedia('gt-md')
  $sizeLtXLarge - delete

#### Bug Fixes
No fixes in this version

