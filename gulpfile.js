// Include gulp.
var gulp = require('gulp');

gulp.task('copy_bower_components', function() {
  gulp.src([
    'bower_components/superslides/dist/stylesheets/superslides.css',
    'bower_components/owl-carousel/owl-carousel/owl.carousel.css'
  ]).pipe(gulp.dest('./assets/css/'));
  gulp.src([
    'bower_components/masonry/masonry.js',
    'bower_components/superslides/dist/jquery.superslides.min.js',
    'bower_components/owl-carousel/owl-carousel/owl.carousel.min.js',
    'bower_components/html5shiv/html5shiv.min.js',
    'bower_components/respond/dest/respond.min.js',
    'bower_components/excanvas/excanvas.js'
  ]).pipe(gulp.dest('./assets/js/'));
});

// Default Task
gulp.task('default', ['copy_bower_components']);
