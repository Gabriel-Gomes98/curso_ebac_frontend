const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeJavaScript() {
    return gulp.src('./source/assets/js/main.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/assets/js'));
}

function compilaSass() {
    return gulp.src('./source/assets/css/main.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./build/assets/css'));
}

function comprimeImages() {
    return gulp.src('./source/assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/assets/images'))
} 


exports.default = function() {
    gulp.watch('./source/assets/css/*.scss', {ignoreInitial: false}, gulp.series(compilaSass)); 
    gulp.watch('./source/assets/js/*.js', {ignoreInitial: false}, gulp.series(comprimeJavaScript));
    gulp.watch('./source/assets/images/*', {ignoreInitial: false}, gulp.series(comprimeImages));
}
