var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');

gulp.task('less', function() {
    gulp.src('./src/static/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./src/static/css/'))
})

gulp.task('server', function() {
    browserSync.init({
        baseUrl: "./src",
        type: 'get',
        middleware: function(req, res, next) {
            next()
        }
    })
})

gulp.task('watch', function() {
    gulp.watch('./src/static/less/*.less', ['less'])
})

gulp.task('default', ['less', 'server'], function() {})