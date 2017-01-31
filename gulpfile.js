var gulp = require('gulp'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    minify = require('gulp-minify'),
    swig = require('gulp-swig');

gulp.task('styles', function() {
    return gulp.src('src/scss/style.scss')
        .pipe(sass())
        .pipe(prefix({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('swig', function() {
    gulp.src('./src/*.html')
        .pipe(swig())
        .pipe(gulp.dest('./dist/'))
});

gulp.task('images', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

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
    .pipe(gulp.dest('dist/js'))
});
