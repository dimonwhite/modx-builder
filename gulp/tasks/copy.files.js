'use strict';

module.exports = function() {
	$.gulp.task('copy', function(){
	    $.gulp.src($.config.root + '/dev/img/*.*')
	    .pipe($.gulp.dest($.config.root + '/templates/img'));
	});
};