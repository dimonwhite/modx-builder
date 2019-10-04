'use strict';

module.exports = function() {
  $.gulp.task('js:process', function() {
    return $.gulp.src($.path.app)
      .pipe($.gp.concat('main.js'))
      .pipe($.gulp.dest($.config.root + '/templates/js'))
  })
};