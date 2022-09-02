//npm install --save-dev gulp sass gulp-sass gulp-sourcemaps gulp-babel @babel/core @babel/preset-env gulp-minify gulp-autoprefixer gulp-clean-css gulp-rename gulp-concat-util

//**npm init - through the motions

// *************
// => BABEL FOR JS
// *************
const gulp = require("gulp")
const babel = require("gulp-babel")
const minify = require("gulp-minify")

gulp.task("babel", () => {
  return gulp
    .src([`dev/script/script.js`])
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(minify())
    .pipe(gulp.dest("script"))
})

// *************
// => SASS FOR SCSS
// *************
const sass = require("gulp-sass")(require("sass"))
const autoprefixer = require("gulp-autoprefixer")
const cleanCSS = require("gulp-clean-css")
const sourcemaps = require("gulp-sourcemaps")

gulp.task("sass", () => {
  return (
    gulp
      .src([`dev/scss/style.scss`])
      .pipe(sass().on("error", sass.logError))
      .pipe(
        autoprefixer({
          cascade: false,
        })
      )
      // .pipe(cleanCSS({ compatibility: "ie8" }))
      // .pipe(sourcemaps.init())
      // .pipe(sourcemaps.write("dev/maps"))
      .pipe(gulp.dest("./"))
  )
})

// Then execute task with bracket '()' instead of '[]'
gulp.task("watch", function () {
  gulp.watch(["dev/scss/*.scss"], gulp.parallel("sass"))
  gulp.watch(["dev/script/*.js"], gulp.parallel("babel"))
})
