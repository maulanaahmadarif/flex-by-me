const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass:dev', () => {
  gulp.src('./src/scss/main.+(scss|sass)')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:build', () => {
  gulp.src('./src/scss/main.+(scss|sass)')
    .pipe(sass({
      outputStyle: 'compressed',
    })).on('error', sass.logError)
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true,
    }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('default', ['sass:dev']);
gulp.task('build', ['sass:build']);
