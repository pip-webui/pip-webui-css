# Pip.WebUI.CSS User's Guide

## <a name="contents"></a> Contents
- [Installing](#install)
- [Typography styles and mixins](#typography)
- [Positions styles and mixins](#positions)
- [Sizes styles and mixins](#sizes)
- [Flexbox styles and mixins](#flexbox)
- [Colors styles and mixins](#colors)
- [Animations, transitions and visual effects](#effects)
- [Control properties styles and mixins](#controls)
- [pip-ref-item component](#ref_item)
- [pip-ref-toolbar component](#ref_toolbar)
- [pip-ref-title component](#ref_title)
- [pip-ref-expander component](#ref_expander)
- [pip-ref-list component](#ref_list)
- [pip-simple-list component](#simple_list)
- [pip-details-title component](#details_title)
- [pip-action-list component](#action_list)
- [pip-drilldown-list component](#drilldown_list)
- [pip-divider-\* component](#dividers)
- [pip-check-list component](#check_list)
- [pip-progress-top component](#progress_top)
- [pip-table component](#table)
- [pip-empty component](#empty)
- [pip-chips-\* component](#chips)
- [pip-filter-row component](#filter_row)
- [pip-error-panel component](#error_panel)
- [Questions and bugs](#issues)


## <a name="install"></a> Installing

Add dependency to **pip-webui** into your **bower.json** or **package.json** file depending what you use.
```javascript
"dependencies": {
  ...
  "pip-webui": "*"
  ...
}
```

Alternatively you can install **pip-webui** manually using **bower**:
```bash
bower install pip-webui
```

or install it using **npm**:
```bash
npm install pip-webui
```

Include **pip-webui** files into your web application.
```html
<link rel="stylesheet" href=".../pip-webui-lib.min.css"/>
<link rel="stylesheet" href=".../pip-webui.min.css"/>
...
<script src=".../pip-webui-lib.min.js"></script>
```

## <a name="typography"></a> Typography styles and mixins

CSS classes and mixins to set fonts, sizes, styles and other visual text attributes. 

<img src="images/img-fonts.png"/>

### CSS Classes
* **text-hide** - hide text, add styles font: ~"0/0";
* **text-overflow** - overflow hidden
* **vertical-top** - add styles vertical-align: top;
* **vertical-middle** - add styles vertical-align: middle;
* **vertical-bottom** - add styles vertical-align: bottom;
* **text-left** - add styles text-align: left;
* **text-right** - add styles text-align: right;
* **text-center** - add styles text-align: center;
* **text-display4** - add style font: normal 300 112px Roboto, 'Helvetica Neue', sans-serif;
* **text-display3** - add style font: normal 400 56px Roboto, 'Helvetica Neue', sans-serif;
* **text-display2** - add style font: normal 400 45px Roboto, 'Helvetica Neue', sans-serif;
* **text-display1** - add style font: normal 400 34px Roboto, 'Helvetica Neue', sans-serif;
* **text-headline** - add style font: normal 400 24px Roboto, 'Helvetica Neue', sans-serif;
* **text-title** - add style font: normal 500 20px Roboto, 'Helvetica Neue', sans-serif;
* **text-subhead1** - add style font: normal 400 16px Roboto, 'Helvetica Neue', sans-serif;
* **text-subhead2** - add style font: normal 500 16px Roboto, 'Helvetica Neue', sans-serif;
* **text-body1** - add style font: normal 400 14px Roboto, 'Helvetica Neue', sans-serif;
* **text-body2** - add style font: normal 500 14px Roboto, 'Helvetica Neue', sans-serif;
* **text-caption**  - add style font: normal 400 12px Roboto, 'Helvetica Neue', sans-serif;
* **text-button** - add style font: normal 500 14px Roboto, 'Helvetica Neue', sans-serif;

### LESS Mixins
* **text-hide()** - text hidden 
* **text-overflow()** - overflow text
* **hyphens(@mode: auto)** - optional hyphenation

## <a name="positions"></a> Positions styles and mixins

CSS classes and mixins to position elements on web pages

<img src="images/img-alignment.png"/>

### CSS Classes
* **hidden** - hide from screenreaders and browsers
* **invisible** - add style visibility: hidden
* **display** - add position display 
* **position-relative** - add style position: relative 
* **position-fixed** - add style position: fixed
* **position-fill** - add style position: relative
* **position-top** - add style position: absolute with top: 0 
* **position-bottom** - add style position: absolute with bottom: 0 
* **position-right** - add style position: absolute with right: 0  
* **clearfix** - add style clearfix
* **center-block** - center-align a block level element
* **pull-right** - add style float: right
* **pull-left** - add style float: left

### LESS Mixins
* **center-block()** -
* **content-columns(@column-count; @column-gap: @grid-gutter-width)** -
* **position-relative()** -
* **position-fixed()** -
* **position-absolute(@top, @left, @right, @bottom)** -
* **position-fill()** - 
* **position-top()** -
* **position-bottom()** -


## <a name="sizes"></a>  Sizes styles and mixins

CSS classes and mixins to set width, height, paddings and margins for elements

<img src="images/img-size.png"/>

### CSS Classes
Todo: Describe here all CSS classes

### LESS Mixins
Todo: Describe here all CSS mixins


## <a name="flexbox"></a>  Flexbox styles and mixins

CSS classes and mixins to extend flexbox layouts implemented by Angular Material.

Todo: Add screenshot with flexbox styles here

### CSS Classes

* **flex** - add display flex
* **flex-direction-row** - add row direction
* **flex-direction-column** - add column direction
* **flex-flow-row-wrap** - add display flex + row direction + flex-wrap: wrap
* **flex-fixed** - is equal to flex-element with parameters 0, 0, auto
* **flex-var** - is equal to flex-element with parameters 1, 1, auto
* **flex-grow** - is equal to flex-element with parameters 1, 0, auto
* **flex-shrink** - is equal to flex-element with parameters 0, 1, auto
* **flex-vertical-center** - add  align-items:center
* **flex-vertical-start** - add align-items:start
* **flex-horizontal-start** - add justify-content with parameters - start, flex-start
* **flex-horizontal-center** - add justify-content with parameters - center center
* **flex-horizontal-end** - justify - content with parameters - end, flex-end

### LESS Mixins

* **flex()** - add display flex
* **flex-direction(@direction)** - add direction
* **flex-direction-row()** - add row direction
* **flex-direction-column()** - add column direction
* **flex-flow(@direction, @wrap)** - add flex direction + flex-wrap
* **flex-flow-row-wrap()** - add display flex + row direction + flex-wrap: wrap;
* **flex-element(@grow, @shrink, @initialSize: auto)** - add flex with parameters
* **flex-fixed()** - is equal to flex-element with parameters 0, 0, auto
* **flex-var()** - is equal to flex-element with parameters 1, 1, auto
* **flex-grow()** - is equal to flex-element with parameters 1, 0, auto
* **flex-shrink()** - is equal to flex-element with parameters 0, 1, auto
* **flex-order(@index)** -  add order index
* **flex-vertical-content(@value)** - add  align-items
* **flex-vertical-center()** - add  align-items:center
* **flex-vertical-start()** - add align-items:start
* **flex-justify-content(@value, @oldValue)** - add justify-content with oldValue for webkit and  value for other browsers
* **flex-horizontal-start()** - add justify-content with parameters - start, flex-start
* **flex-horizontal-center()** - add justify-content with parameters - center center
* **flex-horizontal-end()** - justify - content with parameters - end, flex-end

## <a name="colors"></a>  Colors styles and mixins

CSS classes and mixins to set colors from predefined pallettes or special color set.

Todo: Add screenshot with color styles here

### CSS Classes
Todo: Describe here all CSS classes

### LESS Mixins
Todo: Describe here all CSS mixins


## <a name="effects"></a>  Animations, transformations and other visual effects

CSS classes and mixins to specify animations and transformations. It also has CSS classes for dividers and opacity.

Todo: Add screenshot with effects styles here

### CSS Classes
Todo: Describe here all CSS classes

### LESS Mixins
Todo: Describe here all CSS mixins


## <a name="controls"></a> Control properties styles and mixins

CSS styles and mixins to change behavior of HTML controls. They allow to change scrolling, cursors and other control properties.

Todo: Add screenshot with controls styles here

### CSS Classes
Todo: Describe here all CSS classes

### LESS Mixins
Todo: Describe here all CSS mixins


## <a name="ref_item"></a> pip-ref-item component

**pip-ref-item** represents a reference with title, details and avatar.

### Usage
Todo: Add HTML snippet to demonstrate use of the component

<img src="images/img-ref-item.png"/>

### CSS Classes
Todo: Describe CSS classes from this component


## <a name="ref_toolbar"></a> pip-ref-toolbar component

**pip-ref-toolbar** represents a toolbar with item reference and optional action buttons.

### Usage
Todo: Add HTML snippet to demonstrate use of the component

<img src="images/img-ref-toolbar.png"/>

### CSS Classes
Todo: Describe CSS classes from this component


## <a name="ref_title"></a> pip-ref-title component

**pip-ref-title** is used as a header on the top of details page. It shows title, details and avatar.

### Usage
Todo: Add HTML snippet to demonstrate use of the component

<img src="images/img-ref-title.png"/>

### CSS Classes
Todo: Describe CSS classes from this component


## <a name="ref_expander"></a> pip-ref-expander component

**pip-ref-expander** is a clickable elemement that looks similar to **pip-ref-item** but also allows to expand/collapse details.

### Usage
Todo: Add HTML snippet to demonstrate use of the component

<img src="images/img-ref-expander.png"/>

### CSS Classes
Todo: Describe CSS classes from this component


## <a name="ref_list"></a> pip-ref-list component

**pip-ref-list** is a list filled with **pip-ref-item**s.

### Usage
Todo: Add HTML snippet to demonstrate use of the component

<img src="images/img-ref-list.png"/>

### CSS Classes
Todo: Describe CSS classes from this component


## <a name="simple_list"></a> pip-simple-list component

**pip-simple-list** supports hover effects and select marks for the list items.

### Usage
Todo: Add HTML snippet to demonstrate use of the component

Todo: Add screenshot for the simple-list

### CSS Classes
Todo: Describe CSS classes from this component


## <a name="details_title"></a> pip-details-title component

**pip-details-title** is a standard header for detail panels with title and optional subtitle

### Usage
Todo: Add HTML snippet to demonstrate use of the component

<img src="images/img-details-title.png"/>

### CSS Classes
Todo: Describe CSS classes from this component


## <a name="action_list"></a> pip-action-list component

**Action list** is a set of big action buttons that are placed at the bottom of a page.

### Usage
Todo: Add HTML snippet to demonstrate use of the component

<img src="images/img-action-list.png"/>

### CSS Classes
Todo: Describe CSS classes from this component


## <a name="drilldown_list"></a> pip-drilldown-list component

**Drilldown list** is a list with clickable items, that lead to detail information.

### Usage
Todo: Add HTML snippet to demonstrate use of the component

Todo: Add screenshort for the drilldown-list

### CSS Classes
Todo: Describe CSS classes from this component


## <a name="dividers"></a> pip-divider-\* components

**pip-divider**-\* used to separate content in different places

### Usage
Todo: Add HTML snippet to demonstrate use of the component

Todo: Add screenshot for the dividers

### CSS Classes
Todo: Describe CSS classes from this component


## <a name="check_list"></a> pip-check-list component

**pip-check-list** is a list with clickable items and a checkbox as the primary action

### Usage
Todo: Add HTML snippet to demonstrate use of the component

Todo: Add screenshot with check-list

### CSS Classes
Todo: Describe CSS classes from this component


## <a name="progress_top"></a> pip-progress-top component

**progress-top** shows linear progress line at the top of a panel without "jumps" of internal content.

### Usage
Todo: Add HTML snippet to demonstrate use of the component

Todo: Add screenshot with progress-on-top

### CSS Classes
Todo: Describe CSS classes from this component


## <a name="table"></a> pip-table component

**pip-table** is a temporary table component based on Bootstrap code. It will be removed when Angular-Material team release a normal table

### Usage
Todo: Add HTML snippet to demonstrate use of the component

Todo: Add screenshot with table

### CSS Classes
Todo: Describe CSS classes from this component


## <a name="empty"></a> pip-empty component

**pip-empty** component shows a placeholder for pages without data. It gives an explanation and provides one or few actions to get started.

### Usage
Todo: Add HTML snippet to demonstrate use of the component

Todo: Add screenshot with Empty state

### CSS Classes
Todo: Describe CSS classes from this component


## <a name="chips"></a> pip-chip-\* components

**pip-chips**-\* shows a list with read-only chips. It also has special styles for chips that stick to left or right edge.

### Usage
Todo: Add HTML snippet to demonstrate use of the component

Todo: Add screenshot with chips

### CSS Classes
Todo: Describe CSS classes from this component


## <a name="filter_row"></a> pip-filter-row components

**pip-filter-row** is used to style filters on the top of a page or panel.

### Usage
Todo: Add HTML snippet to demonstrate use of the component

Todo: Add screenshot with filter-row

### CSS Classes
Todo: Describe CSS classes from this component


## <a name="error_panel"></a> pip-error-panel components

**pip-error-panel** shows an error embedded into a page.

### Usage
Todo: Add HTML snippet to demonstrate use of the component

Todo: Add screenshot with error panel

### CSS Classes
Todo: Describe CSS classes from this component


## <a name="issues"></a> Questions and bugs

If you have any questions regarding the module, you can ask them using our 
[discussion forum](https://groups.google.com/forum/#!forum/pip-webui).

Bugs related to this module can be reported using [github issues](https://github.com/pip-webui/pip-webui-css/issues).
