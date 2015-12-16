var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        port: 4000,
        server: {
            baseDir: "./_site/"
        }
    });
});

gulp.task('watch', ['browser-sync'], function() {

});

gulp.task('default', function() {

});
