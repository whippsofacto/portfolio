var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    compass = require('gulp-compass');
    sourcemaps = require('gulp-sourcemaps'),
    webserver = require('gulp-webserver'),


gulp.task('js', function() {
  return gulp.src('public/js/script.js')
    .pipe(jshint('./.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('compass', function() {
   gulp.src('./process/sass/*.scss')
  .pipe(compass({
    style: "expanded",
    // Gulp-compass options and paths
    css: './public/css',
    sass: './process/sass',
    require: ['susy']
  }))
  .on('error', function (err) {
      console.error('Error!', err.message);
  })
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function() {
  gulp.watch('public/js/**/*', ['js']);
  gulp.watch(['process/sass/**/*'], ['compass']);
});

gulp.task('webserver', function() {
    gulp.src('./public')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('default', ['compass', 'watch', 'webserver']);
