var gulp = require('gulp');
var rename = require('gulp-rename');
var styleSRC ='./src/scss/style.scss';
var styleDIST= './dist/css/';
var sass = require ('gulp-sass');



gulp.task('style', function() {


gulp.src(styleSRC)
.pipe(sass(

{errorLogToConsole:true,}

	) )
.on('error', console.error.bind( console ) )
.pipe(rename({suffix:'.min'} ) )
.pipe(gulp.dest(styleDIST) );

} );