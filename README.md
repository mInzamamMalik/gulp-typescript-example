# Gulp Typescript Example
 

![alt](img/img.jpg)

Author:<br/>Muhammad Inzamam Malik<br/>
[join Inzamam Malik on Facebook](http://facebook.com/minzamammalik)

---
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
```javascript
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
7. now just goto cmd and type `gulp` and hit enter
now gulp is watching your ts file and when detect changes in your `typescript` file
instantly compile a `.js` file for you

---

#Bisect ***gulpfile.js*** file:

its time to look at the code in slight depth

1. requiring some files from `node_modules` folder
```javascript
	var gulp = require('gulp');
	var ts = require('gulp-typescript');	
```

2. this is a gulp task, named `compile` which will pick `"*.ts"` files 
compile it and then put a `index.js` file in a folder named `output`
```javascript
	gulp.task('compile', function () {
		return gulp.src('*.ts')
			.pipe(ts({
				noImplicitAny: true,
				out: 'index.js'
			}))
			.pipe(gulp.dest('output'));
	});
```
>`*.ts` means any file with `.ts` extension,	
>if output folder not exist it will be
>created, you can change `"*.ts"` &nbsp; to &nbsp;
>`"**/*.ts"` or `"tsFiles/*.ts"` according to your 
>case and same thing you can do with `output` folder name

3. this is also a gulp task named `default`
when you type `gulp` on cmd and hit enter actually this
task comes in action and firstly run another task named `compile`
which will compile your code immediately and then start watching
your typescript file, as it detects any change in your code 
it compiles again and again and again :-) until you go to cmd again
and stop watching by pressing `Ctrl
+C` 
```javascript
	gulp.task('default',["compile"], function() {
		gulp.watch('*.ts', ['compile']);
	});
```

Thank You,<br/>
Your favorite<br/> [Muhammad Inzamam Malik](http://facebook.com/malikasinger)<br/><br/>







