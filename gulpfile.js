var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass=require('gulp-sass');
var minify = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var sequence = require('gulp-sequence'); 
require('gulp-stats')(gulp);

gulp.task('sass', function () {
    gulp.src('src/lite.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest('debug/'));
});
gulp.task('autoprefixer',function(){
    gulp.src('debug/lite.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('default',sequence('sass', 'autoprefixer'));