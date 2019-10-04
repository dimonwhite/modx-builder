'use strict';

global.$ = {
	package: require('./package.json'),
	config: require('./gulp/config'),
	path: {
		task: require('./gulp/paths/tasks.js'),
		jsFoundation: require('./gulp/paths/js.foundation.js'),
	    cssFoundation: require('./gulp/paths/css.foundation.js'),
	    app: require('./gulp/paths/app.js')
	},
	gulp: require('gulp'),
	del: require('del'),
	gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  'sprite',
  $.gulp.parallel(
    'sass',
    'js:foundation',
    'js:process',
    'css:foundation',
    'sprite:svg',
    'copy',
  ),
  $.gulp.parallel(
    'watch',
  )
));