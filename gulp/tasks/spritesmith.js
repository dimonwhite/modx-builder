'use strict';

module.exports = function() {
	$.gulp.task('sprite', function () {
	  var spriteData = $.gulp.src($.config.root + '/dev/sprite/*.png').pipe($.gp.spritesmith({
	    imgName: 'sprite.png',
	    cssName: '_sprite.scss',
	    padding: 10,
	    algorithm: 'binary-tree',
	    imgPath: '../img/sprite.png'
	  }));
	  spriteData.img.pipe($.gulp.dest($.config.root + '/templates/img'));
	  return spriteData.css.pipe($.gulp.dest($.config.root + '/dev/scss/settings'));
	});
};