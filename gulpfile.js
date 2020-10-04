const { prependListener } = require('gulp');
const gulp = require ('gulp');
const sass = require ('gulp-sass');
const browserSync = require ('browser-sync').create();

// compile scss into css
function style() {
    // 1. where scss file is
    return gulp.src('./scss/*.scss')

    // 2. passing the file through compiler
    .pipe(sass())

    // 3. where compiled css files are going to
    .pipe(gulp.dest('./css')) 

    // 4.Stream changes to all browsers
    .pipe(browserSync.stream());

}

function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('./scss/**/*.scss', style);
    gulp.watch ('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;