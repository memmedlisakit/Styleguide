var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var svgSprite = require("gulp-svg-sprites");

DIST_PATH = './public/assets/dist';


gulp.task('less', function() {
	return gulp.src('./public/assets/styles.less')
	.pipe(plumber(function(err) {
		console.log(err);
		this.emit('end')
	}))
	.pipe(sourcemaps.init())
	.pipe(autoprefixer())
	.pipe(less())
	.pipe(minifyCSS())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(DIST_PATH));
});

gulp.task('custom', function() {
	return gulp.src('./public/assets/custom.less')
	.pipe(plumber(function(err) {
		console.log(err);
		this.emit('end')
	}))
	.pipe(sourcemaps.init())
	.pipe(autoprefixer())
	.pipe(less())
	.pipe(minifyCSS())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(DIST_PATH));
});


 
gulp.task('sprites', function () {
    return gulp.src('./public/svg/*.svg')
        .pipe(svgSprite())
        .pipe(gulp.dest(DIST_PATH));
});