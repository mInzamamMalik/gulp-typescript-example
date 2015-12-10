# gulp-typescript-example
 

![alt](img/img.jpg)


[join Inzamam Malik on Facebook](http://link)

###using gulp-typescript is just easy

it will compile your typescript file/files file without pressing any key and put it in a folder of your choice :-)

1. just initialize a project `npm init`
> no need of `npm init` need you already in a project
2. install gulp gloablly `npm install -g gulp`
> you will do `npm install -g gulp` only one time in your PC if you already installed it globally one time, no need to install it again even if you start new project 
3. add gulp to your project `npm install gulp --save`
4. add gulp-typescript to your project `npm install glp-typescript`
> you will do step 3 and 4 each time for each project
5. its time to add a `.js` file in your ***project's Root*** named `gulpfiles.js` 
>you name this file any name but `gulpfile.js`
6. just fill `gulpfile.js` with this code
```
	var gulp = require('gulp');
	var ts = require('gulp-typescript');	
	gulp.task('compile', function () {
		return gulp.src('*.ts')
			.pipe(ts({
				noImplicitAny: true,
				out: 'index.js'
			}))
			.pipe(gulp.dest('output'));
	});
	gulp.task('default',["compile"], function() {
		gulp.watch('*.ts', ['compile']);
	});
```
7. now just run 

