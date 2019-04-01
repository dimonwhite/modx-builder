'use strict';

module.exports = function() {
	$.gulp.task('sprite', function () {
	  var spriteData = $.gulp.src($.config.root + '/dev/sprite/*.png').pipe($.gp.spritesmith({
	    imgName: 'sprite.png',
	    cssName: 'sprite.css'
	  }));
	  return spriteData.pipe($.gulp.dest($.config.root + '/templates/img'));
	});
};