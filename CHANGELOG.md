Luscious Changelog
==================

0.9.0
----------------
- All the updates...
- Updated info parameters for all mixins/functions so that the are more helpful and stable
- Removed some experimental features and other features that were not that usefull
- Cleaned up a lot of code and structure

0.1.1 - HOTFIX
----------------
- Cleaned up a few files in `scaffold/`. Removed an old Susy mixin that was deprecated in `v0.1.0`

0.1.0 - HOTFIX
----------------
- Removed Susy dependency
- Scaffold
	- Moved button configs and utility classes to `utils/`.
	- Moved typography import file to `utils/` and changed the import method from local font files to Google font import.
	- Moved button file from `objects/` to `components/` and deleted `objects/`.

0.0.9 - HOTFIX
----------------
- Deleted a deprecated vendor import for Susy at `core/_luscious.scss`.
- Fixed paths at `core/_luscious.scss` for `modularscale-sass` dependency and at `scaffold/main.sass` for production.

0.0.8
----------------
- Set proper file imports in `./scaffold/main.sass` so that compiling/linting doesn't cause errors.
- Fixed issues with Susy3 Grid functions.
- Updated Font paths: Font paths are updated in `core/_settings.scss` and `scaffold/base/_typo-font_import.scss` to match the open-sans fonts installed from npm `open-sans-fonts` and matching the install path in [fresh](https://git.io/fpf3e) `./src/fonts/open-sans/`.
- Organized `_settings.scss` Table of Contents.
- Each var/map in `_settings.scss` have the `!default` flag now so that they can be overridden as needed from the project.


0.0.7 - HOTFIX
----------------
- Fixed broken `@import` for [susy](https://www.npmjs.com/package/susy) and [modularscale](https://github.com/modularscale/modularscale-sass).
- Added install and setup info to the readme


0.0.6
----------------
- Almost everything changed. Seriously. Consider this another "new" starting point for Luscious.


0.0.5
----------------
- Added function alias to `rem()` or `rem_calc()` function. You can now use `r()` to calculate the rem equivalent or a `px` unit.
- Changed units used in Scaffold to now use the `r()` (rem) function instead of using rem units directly in the SASS.


0.0.4
----------------
- A bunch of minor updates to scaffold files.
- Added basic navigation styling.
- Added variables to settings file for accessibility.
- Added skipnav/skiplink styling.
- Removed Font-Awesome from Luscious-core in favor of using npm to get it.
- Added default animation to settings.


0.0.3
----------------
- Moved styles scaffold to the root directory and removed `__rsc__` directory
- Added import for Font Awesome sass to `main.sass`.


0.0.2
----------------
- So. Many. Changes. This is why it's still a beta version. I'm not even going to write them down here. :)


0.0.1
----------------
	- Added initial task files
