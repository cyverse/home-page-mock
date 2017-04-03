var gulp = require('gulp'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    minify = require('gulp-minify'),
    browserSync = require('browser-sync'),
    swig = require('gulp-swig');

var data = require('./src/data.js');


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'docs'
    },
  })
});

gulp.task('styles', function() {
    return gulp.src('src/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('docs/css'))
	.pipe(browserSync.reload({
	    stream: true
    	}));
});

var swigOpt = {
    data: data,
    defaults: { cache: false },
};
gulp.task('swig', function() {
    gulp.src('./src/index.html')
        .pipe(swig(swigOpt))
        .pipe(gulp.dest('./docs/'))
});

gulp.task('images', () => {
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('docs/images'))
});

gulp.task('compress', function() {
  gulp.src('src/js/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('docs/js'))
});

gulp.task('watch', ['browserSync', 'styles'], () => {
    gulp.watch('src/scss/**/*.scss', ['styles'] );
    gulp.watch('src/*.html', ['swig'], browserSync.reload);
    gulp.watch('src/js/**/*.js', ['compress'], browserSync.reload);
});
