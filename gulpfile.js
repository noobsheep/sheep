const gulp = require("gulp");
const connect = require("gulp-connect");
const sass = require("gulp-sass");



gulp.task("server",function(){
    connect.server({
        root:"./",
        livereload:true
    })
})
gulp.task("sass",function(){
    return gulp.src("css/sass/*.scss")
    .pipe(sass({outputStyle:"expanded"}))
    .pipe(gulp.dest("css"))
})

gulp.task("watch",function(){
    gulp.watch("css/sass/*.scss",["sass"]);
})
gulp.task("default",["server","watch"]);