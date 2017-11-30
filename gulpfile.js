var gulp = require('gulp'),
watch = require ('gulp-watch');

gulp.task('default', function(){
	console.log("OK");
});

gulp.task('html', function (){
	console.log("BLABLABLA");
});

gulp.task('styles', function (){
	console.log("Imagine Sass or PostCSS tasks running here.");
});

gulp.task('watch', function(){
	
	watch('./app/index.html', function(){
		gulp.start('html');
	});
	
	watch('./app/assets/styles/**/+.css', function(){
		gulp.start('styles');
	});
});