// Luscious
// @since v0.0.6
// ------------------------------------------------------------------

// Plugins
var g = require("gulp"),
	sass = require("gulp-sass"),
	prefix = require("gulp-autoprefixer"),
	sassLint = require("gulp-sass-lint"),
	sourcemaps = require("gulp-sourcemaps"),
	sassdoc = require("sassdoc"),
	browserSync = require("browser-sync"),
	replaceQuotes = require("gulp-replace-quotes"),
	removeCode = require('gulp-remove-code'),
	run = require("gulp-run");

// ------------------------------------
// Paths
// ------------------------------------
// SASS
var styles = {
	src: [
		"./test/**/*.s+(a|c)ss",
		"./core/**/*.s+(a|c)ss"
		// './scaffold/**/*.s+(a|c)ss'
	],
	dest: "test/",
	lintConfig: {
		configFile: "./.sasslint.yml"
	},
	lintFixConfig: {
		configFile: "./.sasslint-fix.yml"
	},
	settingsFile: {
		src: "./core/_settings.scss",
		dest: "./scaffold"
	}
};

// Sassdoc
var docs = {
	src: "core/**/*.s+(a|c)ss",
	dest: "docs/",
	watch: styles.dest + "test.css"
};

// ------------------------------------
// Main Task
// ------------------------------------
// - Compile & Watch SASS
g.task("default", [
	// 'styles',
	"docs"
]);

// ------------------------------------
// SASS
// ------------------------------------
g.task("styles", ["styles:build", "styles:watch"]);

// - Compile Sass
// - Create Sourcemaps
// - Auto-prefix
g.task("styles:build", ["lint"], () => {
	return g
		.src(styles.src)
		.pipe(sourcemaps.init())
		.pipe(
			sass({
				errLogToConsole: true,
				outputStyle: "expanded",
				sourceComments: "true",
				indentType: "tab",
				indentWidth: "1",
				includePaths: [
					"node_modules/susy/sass",
					"node_modules/sass-true/sass",
					"node_modules/modularscale-sass/stylesheets"
				]
			}).on("error", sass.logError)
		)
		.pipe(prefix({ browsers: ["last 2 versions"] }))
		.pipe(sourcemaps.write({ includeContent: false }))
		.pipe(g.dest(styles.dest))
		.pipe(browserSync.reload({ stream: true }));
});

// Watch Sass
g.task("styles:watch", () => {
	g.watch(styles.src, ["styles"]);
});

// Lint Sass Files
g.task("lint", () => {
	return g
		.src(styles.src)
		.pipe(sassLint(styles.lintConfig))
		.pipe(sassLint.format());
	// .pipe(sassLint.failOnError())
});

g.task("quotes", () => {
	g.src(styles.src, { base: "./" })
		.pipe(replaceQuotes({
			quote: "single"
		}))
		.pipe(g.dest("./"));
});

g.task("clean:settings", () => {
	g.src(styles.settingsFile.src)
		.pipe(removeCode({ scaffold: true }))
		.pipe(g.dest(styles.settingsFile.dest));
});



// Fix Sass Files based on linter
g.task("fix", ["quotes"], () => run("yarn fix").exec());

// ------------------------------------
// Sassdoc
// ------------------------------------
// - Watch & Compile Styles
// - Watch & Compile Sassdoc
// - Run local server
g.task("docs", ["styles:build", "docs:build", "docs:watch"]);

// Use for dev and testing:
// - Run Local Server
// - Watch sass & compile
// - Build sassdoc when sass Compiles
// - Reload server
g.task("docs:watch", () => {
	browserSync.init({
		// proxy: 'yoursite.dev',
		// tunnel: 'yoursite', // yoursite.localtunnel.me
		server: "./docs",
		open: false,
		injectChanges: true,
		notify: false,
		port: 3000,
		ui: { port: 8080 }
	});
	g.watch(styles.src, ["styles:build"]);
	g.watch(docs.watch, ["docs:build"]);
	g.watch(docs.dest + "**/*.html").on("change", browserSync.reload);
});

// Use to produce static docs
g.task("docs:build", () => {
	return g.src(docs.src).pipe(sassdoc());
});
