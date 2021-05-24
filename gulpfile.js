const { src, dest, pipe, watch, parallel } = require('gulp');

const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');

function scripts() {
    return src(['app/js/**/*.js', '!app/js/libs.min.js', '!app/js/main.min.js'])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream());
}

function js() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/slick-carousel/slick/slick.js'
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream());
}


function serve() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });

    watch('app/scss/**/*.scss', styles)
    watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts)
    watch("app/*.html").on('change', browserSync.reload);
}

function styles() {
    return src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/slick-carousel/slick/slick.css',
        'app/scss/style.scss'
    ])
        .pipe(concat('style.min.css'))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream());
};




exports.styles = styles;
exports.scripts = scripts;
exports.serve = serve;
exports.js = js;

exports.default = parallel(styles, js, scripts, serve);