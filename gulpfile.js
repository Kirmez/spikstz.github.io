let gulp = require("gulp");
let sass = require("gulp-sass")(require("sass")); 
let uglify = require("gulp-uglify");


gulp.task("sass", function () {
  return gulp
    .src("src/scss/**/*.scss") 
    .pipe(sass().on("error", sass.logError)) 
    .pipe(gulp.dest("dist/css")); 
});


gulp.task("scripts", function () {
  return gulp
    .src("src/js/**/*.js") 
    .pipe(uglify())
    .pipe(gulp.dest("dist/js")); 
});


gulp.task("openBrowser", async function () {
  const openPackage = await import("open");
  openPackage.default("http://localhost:5500"); 
});


gulp.task(
  "watch",
  gulp.series("sass", "scripts", "openBrowser", function (done) {
    gulp.watch("src/scss/**/*.scss", gulp.series("sass")); 
    gulp.watch("srcjs/**/*.js", gulp.series("scripts")); 
    done();
  })
);


gulp.task("default", gulp.series("watch")); 
