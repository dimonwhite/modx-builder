'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch($.config.root + '/dev/js/**/*.js', $.gulp.series('js:process'));
    $.gulp.watch($.config.root + '/dev/scss/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch($.config.root + '/dev/img/**/*.*', $.gulp.series('copy'));
    $.gulp.watch($.config.root + '/dev/sprite/**/*.svg', $.gulp.series('sprite:svg'));
    $.gulp.watch($.config.root + '/dev/sprite/**/*.png', $.gulp.series('sprite'));
  });
};
