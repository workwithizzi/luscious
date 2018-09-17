// Luscious
// @since v0.0.6
// ------------------------------------------------------------------


// Plugins
var g = require('gulp');
		sass = require('gulp-sass'),
		prefix = require('gulp-autoprefixer'),
		sassLint = require('gulp-sass-lint'),
		sourcemaps = require('gulp-sourcemaps');

// SASS Paths
var srcStyles = [
	'./test/**/*.s+(a|c)ss',
	'./core/**/*.s+(a|c)ss',
	'./scaffold/**/*.s+(a|c)ss'
];


g.task('default', ['compile'], () => {
	g.watch(srcStyles, ['compile']);
})


// Compile, Sourcemap, Autoprefix
g.task('compile', () => {
	return g.src(srcStyles)
		.pipe(sourcemaps.init())
		.pipe(sass({
			errLogToConsole: true,
			outputStyle: 'expanded',
			sourceComments: 'true',
			indentType: 'tab',
			indentWidth: '1',
			includePaths: [
				'node_modules/susy/sass',
				'node_modules/sass-true/sass'
			]
		}).on('error', sass.logError))
		.pipe(prefix({ browsers: ['last 2 versions'] }))
		.pipe(sourcemaps.write({ includeContent: false }))
		.pipe(g.dest('./test'))
		// .pipe(browserSync.reload({ stream: true }));
});


g.task('lint', () => {
	return g.src(srcStyles)
		.pipe(sassLint({
			configFile: './.sass-lint.yml'
		}))
		.pipe(sassLint.format())
		// .pipe(sassLint.failOnError())
});