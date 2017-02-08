const gulp = require('gulp'),
	  sass = require('gulp-sass'),
	  autoprefixer = require('gulp-autoprefixer');


/*gulp.task('sass', () => 
	gulp.src('./scss/*.scss')
	.pipe(sass({
		outputStyle: 'compressed'
	}))
	.pipe(gulp.dest('./css'))
);*/

gulp.task('sass', function(){ 
	gulp.src('./scss/*.scss')
	.pipe(sass({
		outputStyle: 'expanded',
		sourceComments: true
	}))
	.pipe(autoprefixer({
		versions: ['last 2 browsers']
	}))
	.pipe(gulp.dest('./css'))
});

gulp.task('default', () => {
	gulp.watch('./scss/*.scss', ['sass'])
});

