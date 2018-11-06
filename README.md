# Luscious SASS

_A Library of SASS functions/mixin/variables/stuff_

**Current Version: v0.0.8: Unstable**
Don't use this package until v1.0.0

## Installation

```sh
npm install luscious
```

or

```sh
yarn add -D luscious
```

## Setup

### Import

In your main SASS file, import Luscious

```scss
// main.scss
@import 'node_modules/luscious/core/luscious';
```

or, using Gulp:

```js
// gulpfile.js
gulp.task('sass', function() {
	return gulp
		.src('sass/*.scss')
		.pipe(
			sass({
				outputStyle: 'compressed',
				includePaths: ['node_modules/luscious/core'],
			}).on('error', sass.logError)
		)
		.pipe(gulp.dest('dist/css'));
});
```

```scss
// main.scss
@import 'luscious';
```

### Override Luscious Settings

If you want to override default settings in Luscious, copy the settings file to your `sass` directory and import it before Luscious.

```sh
cp node_modules/luscious/core/_settings.scss path/to/sass
```
