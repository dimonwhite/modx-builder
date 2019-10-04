'use strict';

module.exports = function() {
  $.gulp.task('sass', function() {
    return $.gulp.src($.config.root + '/dev/scss/main.scss')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass()).on('error', $.gp.notify.onError({ title: 'Style' }))
      .pipe($.gp.autoprefixer({ overrideBrowserslist: $.config.autoprefixerConfig }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/templates/css'));
  })
};