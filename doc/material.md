# Material CSS Styles

If you near teg Html add attribute dir=rtl all component flip (зеркально отобразятся)

## Typography

.md-display-4 - The largest 112px title
.md-display-3 - 56px title
.md-display-2 - 45px title
.md-display-1 - 34px title
.md-headline - Section title 24px
.md-title - The smallest content title
.md-subhead - Subtitle
.md-body-1 - Regular text
.md-body-2 - Highlighted (bold) text
.md-button - Button captions (all caps)
.md-caption - Smaller notes, captions, hints

## Buttons

.md-raised - Raised button (default are flat)
.md-cornered - Cornered button (with sharp corners, default are soft)
.md-fab - Floating action button (FAB - big round button)
.md-mini - Small FAB (must be used with .md-fab)
.md-icon-button - Icon flat button with round ripple
.md-no-style - Invisible button

## Colors

.md-primary - Primary color
.md-hue1 - Hue 1 color
.md-hue2 - Hue 2 color
.md-accent - Accent color

## Visual Effects

.md-visually-hidden - Hidden element
.md-ripple-container - Marks ripple container that contains ripple effect

## Dialogs

.md-actions - use when dialog don't have Header, but have actions. class have row layout and layout-end-center with height 52px. Have order = 2
.md-dialog-is-showing - max-height: 100%;
.md-subheader - under md-dialog-container add style margin: 0;
md-dialog-content - layout = column, if we don't have attribute layout="row"
.md-dialog-content - standard class content for dialogs with padding 24px and min-width: 240px; max-width: 80%; max-height: 80%;

## Lists

Under md-list
.md-subheader - Medium 14px

Under md-list-item
.md-no-style - add styles layout-start start. Use under .md-2-line, .md-3-line
.md-with-secondary - add position: relative;
.md-clickable - add cursor pointer
md-divider - absolute position. width is equal to 100%. if we have attribute md-inset width is equal to 100% - 96px
.md-list-item-inner - 1 line text with min-height: 48px;
.md-primary - width: 24px; margin-top: 16px; margin-bottom: 12px;
.md-avatar - Avatar
.md-avatar-icon - Adds 8px padding
.md-2-line - min-height: 72px. 2 line text
.md-3-line - 3 line text, min-height: 88px, margin-top: 16px;
.md-long-text - margin: 1.6em. Use with .md-2-line, .md-3-line or with .md-no-style under .md-2-line, .md-3-line
.md-list-item-text - Regular text

## Selects

Use md-input container for select box

.md-leave - animation for leave md-select
.md-select-value - value in select
.md-select-icon - arrow down on select
.md-select-placeholder - placeholder on select
md-select-menu - menu on select
md-optgroup - select with groups
md-optgroup label - 14px with uppercase

## Progress linear

.md-bar - liner have height 5px
.md-bar1 - liner animation
.md-bar2 - cubic-bezier animation
.md-dashed - in before state have style:  background-position: 0px -23px;

## Sidenav

.md-locked-open - side nav have width 304px
.md-sidenav-left - side nav on left side
.md-sidenav-right - side nav on right side
.md-closed - close side nav

## Subheader

.md-subheader- Text have 14px Medium font and indent is equal to 16 px in right side
.md-subheader-inner - add all indents is equal to 16 px

## Tabs

md-align-tabs="bottom" - attribute add absolute position and puts tabs at the bottom of the screen
md-toolbar + md-tabs - delete toolbar radius on top

## Toast

.md-top - add style for top = 0
.md-capsule - add border-radius: 24px;
.md-action - text-transform: uppercase; float: right;
.md-bottom  - add button = 8px
.md-left - add left = 8px
.md-right - add right = 8px
.md-top - add top = 8px


todo нужно ли описывать md-whiteframe и  если они есть в примерах и в стандартах и в демо
todo md-virtual-repeat-container? непонятно для чего эти штуки вообще используются. Тоже не знаю что делать с ними

