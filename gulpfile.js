const gulp = require('gulp');
const util = require('gulp-util');
const del = require('del');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const htmlmin = require('gulp-htmlmin');
const replace = require('gulp-replace');
const uglify = require('gulp-uglify');
const header = require('gulp-header');
const rename = require('gulp-rename');
const sass = require('gulp-ruby-sass');
const cssnano = require('gulp-cssnano');
const browserSync = require('browser-sync');

const server = browserSync.create();

const production = !!util.env.production
const imagesonly = !!util.env.imagesonly


// --- delete old files
function cleancss(){
	return del(['dist/css/*']);
}

function cleanimages(){
	return del(['dist/images/*']);
}

function cleanjs(){
	return del(['dist/js/*', '!dist/js/modernizr.js']);
}


// --- copy fonts
function copyfonts(){
	return gulp.src(['node_modules/font-awesome/fonts/**/*.*', 'src/fonts/**/*.*'])
		.pipe(gulp.dest('dist/fonts'));
}


// --- copy special font css
function copyfontcss(){
	return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
		.pipe(gulp.dest('dist/css'));
}


// --- minify images
function images(){
	return gulp.src(['src/images/**/*.*', '!src/images/**/*.svg'])
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'));
}


// --- copy svgs
function copysvg(){
	return gulp.src('src/images/**/*.svg')
		.pipe(gulp.dest('dist/images'));
}


// --- combine javascript
const configJS = {
	thirdParty: [
		// Third-Party Libraries
		'node_modules/babel-polyfill/dist/polyfill.js',
		'node_modules/jquery/dist/jquery.js',
		'node_modules/underscore/underscore.js',
		'node_modules/foundation-sites/dist/js/foundation.js'
	],

	appFiles: [
		// Site Implementation Files
		'src/js/**/*.js'
	]
};

// use Babel to enable some ES6 features
function javascripts(){
	return gulp.src(configJS.thirdParty.concat(configJS.appFiles))
		.pipe( babel({
			presets: ['es2015'],
			compact: false,
			ignore: configJS.thirdParty // Some libraries break when put through Babel
		}) )
		.pipe(concat('app.js'))
		.pipe(gulp.dest('dist/js'));
}


// --- minify html for production
const configHTML = [
	'src/html/head.html',
	'src/html/end.html'
];

function minifyhtml(){
	return gulp.src(configHTML)
		.pipe(concat('index.html'))
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('.'))
		.pipe(replace('/js/app.js', '/js/app.min.js'))
		.pipe(gulp.dest('dist'));
}


// --- minify javascript for production
var today = new Date();
var dateTime = today.toUTCString();

const banner = [
	'/*',
	'Crescendo Evaluation Production Build',
	'Created: ' + dateTime,
	'*/',
	''
].join("\n");

function minifyjs(){
	return gulp.src('dist/js/app.js')
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(header(banner))
		.pipe(gulp.dest('dist/js'));
}


// --- process scss into css
function stylesheets(){
	return sass('src/scss/main.scss', {
			style: 'expanded',
			loadPath: ['src/scss', 'node_modules/foundation-sites/scss']
		})
		.pipe(cssnano({
			discardComments: {removeAll: true}
		}))
		.pipe(rename('app.css'))
		.pipe(gulp.dest('dist/css'))
		.pipe(server.stream());
}


// --- browserSync
function serve(done){
	server.init({
        proxy: "localhost:5050"
    });
    done();
}


// --- reload browser
function reload(done) {
	server.reload();
	done();
}


// --- watch for changes
function watch(){
	gulp.watch('src/scss/**/*.scss', gulp.parallel(stylesheets));
	gulp.watch('src/js/**/*.js', gulp.series(javascripts, reload));
	gulp.watch('src/html/**/*', gulp.series(minifyhtml, reload));
}


// --- set up command line tasks
const dev = gulp.series(gulp.parallel(stylesheets, javascripts, minifyhtml, copyfonts, copyfontcss), serve, watch);
const img = gulp.series(cleanimages, images, copysvg);
const prod = gulp.series(cleanimages, gulp.parallel(stylesheets, javascripts, minifyhtml, images, copysvg, copyfonts, copyfontcss), minifyjs);

// --- create default task according to command line flags
if (production){
	// default task for production environment
	// run it like:
	// > gulp --production
	gulp.task('default', prod);
}else if (imagesonly){
	// task to process images and nothing else
	// run it like:
	// > gulp --imagesonly
	gulp.task('default', img);
}else{
	// default when just typing "gulp"
	gulp.task('default', dev);
}