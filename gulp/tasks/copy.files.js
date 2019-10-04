'use strict';

module.exports = function() {
	$.gulp.task('copy', function(){
	    $.gulp.src($.config.root + '/dev/fonts/*.*')
	    .pipe($.gulp.dest($.config.root + '/templates/fonts'));
	    $.gulp.src($.config.root + '/dev/img/*.*')
	    .pipe($.gulp.dest($.config.root + '/templates/img'));
	    return $.gulp.src($.config.root + '/dev/img/*/*.*')
	    .pipe($.gulp.dest($.config.root + '/templates/img'));
	});
};