# Luscious SASS

_A Library of SASS functions/mixin/variables/stuff_

**Current Version: v0.9.2: Unstable**
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

or, using Node-sass from the command-line

```sh
node-sass --include-path 'node_modules/luscious/core'
```

```scss
// main.scss
@import 'luscious';
```

### Override Luscious Settings

If you want to override default settings in Luscious, copy the settings file to your `styles` directory and import it before Luscious in your `main.scss` file.

```sh
cp node_modules/luscious/scaffold/_settings.scss path/to/styles
```

## Starting With the Boilerplate

Luscious also has a set of boilerplate files (Called 'scaffold'). They have basic styles already set for default html tags based on [normalize.css](https://necolas.github.io/normalize.css/). Using the scaffold is completely optional. If you decide to use it, then you'll want to copy those files directly into your project and track them in git. Tip: if you see `@nrml` tag in the scaffold, that is the related note about that style-rule from the normalize.css docs.

To copy the scaffold into your project replacing your current `./styles` directory:

```sh
cp -r ./node_modules/luscious/scaffold/ ./styles
```

To add the scaffold folder to your current `./styles` directory:

```sh
cp -r ./node_modules/luscious/scaffold ./styles
```

## Linting Your SASS

If you want to use the same linting setup that was used in the core project, copy the lint-config files to your root directory.

```sh
cp -r ./node_modules/luscious/.sasslint.yml ./.sasslint.yml
cp -r ./node_modules/luscious/.sasslint-fix.yml ./.sasslint-fix.yml
```

You can also add these scripts to your `package.json` to make life easier:

```json
"scripts": {
	"lint": "sass-lint -c .sasslint.yml '**/*.s+(a|c)ss' -v -q",
	"fix": "sass-lint-auto-fix -c .sasslint-fix.yml '**/*.s+(a|c)ss' -v -q"
}
```