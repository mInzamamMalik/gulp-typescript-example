var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('compile', function () {
	return gulp.src('*.ts')
		.pipe(ts({
			noImplicitAny: true,
			out: 'index.js'
		}))
		.pipe(gulp.dest('output')); //if you want output in root folder: .pipe(gulp.dest(''));
});


gulp.task('default',["compile"], function() {
    gulp.watch('*.ts', ['compile']);
});