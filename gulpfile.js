var gulp              = require('gulp'),
    browserSync       = require('browser-sync'),
    postcss           = require('gulp-postcss'),
    jade              = require('gulp-jade'),
    sass              = require('gulp-sass'),
    autoprefixer      = require('gulp-autoprefixer'),
    rucksack          = require('gulp-rucksack'),
    lost              = require('lost');

var paths = {
      cssSource: 'dist/css/',
      cssDestination: 'dist/css/'
    };

//Compile Jade
//
gulp.task('jade', function() {
  gulp.src('src/jade/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('dist'));
});

gulp.task('jade-watch', ['jade'], browserSync.reload);

//Rucksack
//
gulp.task('rucksack', function() {
  gulp.src(paths.cssSource + '**/*.css')
  .pipe(rucksack())
  .pipe(autoprefixer())
  .pipe(gulp.dest(paths.cssDestination));

});

gulp.task('styles', function() {

  var processors = [
    lost
  ]

  return gulp.src('src/css/*.scss')
  .pipe(sass())
  .pipe(postcss(processors))
  .pipe(rucksack())
  .pipe(autoprefixer())
  .pipe(gulp.dest(paths.cssDestination));


});

  gulp.task('styles-watch', ['styles'], browserSync.reload);

//Watch Task
//
gulp.task('watch', function() {

  browserSync({
        server: {
            baseDir: "dist"
        },
        port: 3010,
        reloadDelay: 1000
    });
  gulp.watch('src/jade/*.jade', ['jade-watch'])
  gulp.watch('src/css/*.scss', ['styles-watch'])
});

//Default Task
//
gulp.task('default', ['jade', 'sass']);
