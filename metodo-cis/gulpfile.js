'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-cleanhtml');

gulp.task('optimage', function(done){
  gulp.src('./src/assets/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./dist/assets/images'))
  done();
});

gulp.task('workflow', function(done){
  gulp.src('./src/scss/index.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(cssnano())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./src/css'))
  .pipe(gulp.dest('./dist/css'))
  done();
});

gulp.task('htmlmin', function(done){
  gulp.src('./src/**/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('./dist'))

  done();
});

gulp.task('copyfonts', function(done){
  gulp.src('./src/assets/fonts/*')
  .pipe(gulp.dest('./dist/assets/fonts'))

  done();
});

gulp.task('copyjs', function(done){
  gulp.src('./src/js/**/*')
  .pipe(gulp.dest('./dist/js'));

  done();
});

gulp.task('copyvideos', function(done){
  gulp.src('./src/assets/videos/**/*')
  .pipe(gulp.dest('./dist/assets/videos'));

  done();
});

gulp.task('default', function (){
  gulp.watch('./src/scss/**/*.scss', gulp.series('workflow'));
  gulp.watch('./src/**/*.html', gulp.series('htmlmin'));
});