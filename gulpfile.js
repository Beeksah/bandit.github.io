var browser_sync = require('browser-sync');
var gulp = require('gulp');
var scss = require('gulp-sass');
var del = require('del');
var gulpnewer = require('gulp-newer');

gulp.task('TestTask', function(){
    console.log('I am working!!!');
});

gulp.task('def', function(){
    return gulp.src('created_files/**/*.*')
                .on('data', function(file){console.log(file);})
                .pipe(gulp.dest('copy_files'));
})

gulp.task('clean', function(){
    return del('dest');
})

gulp.task('serv', function(){
    browser_sync.init({
        server:'dest'
    });
    browser_sync.watch('dest/**/*.*').on('change', browser_sync.reload);    
})

gulp.task('scss', function(){
    return gulp.src('./src/style/**/*.scss', {
        since: gulp.lastRun('scss')
    })
    .pipe(scss({outputStyle: 'compressed'}).on('error', scss.logError))
    .pipe(gulp.dest('dest/style'));
})

gulp.task('html', function(){
    return gulp.src('./src/**/*.html', {
        since: gulp.lastRun('html')
    })
    .pipe(gulp.dest('dest'));
})

gulp.task('js', function(){
    return gulp.src('./src/js/**/*.js', {
        since: gulp.lastRun('js')
    })
    .pipe(gulpnewer('dest/js')).pipe(gulp.dest('dest/js'));
})

gulp.task('node_modules', function(){
    return gulp.src(['./node_modules/jquery/dist/**/*.*', './node_modules/owl.carousel/dist/**/*.*'], {
        base: './node_modules',
        since: gulp.lastRun('node_modules')
    })
    .pipe(gulpnewer('dest/node_modules')).pipe(gulp.dest('dest/node_modules'));
})

gulp.task('assets', function(){
    return gulp.src('./src/assets/**/*.*', {
        since: gulp.lastRun('js')
    })
    .pipe(gulpnewer('dest/assets')).pipe(gulp.dest('dest/assets'));
})



gulp.task('build', gulp.series('clean', 
    gulp.parallel('scss', 'html', 'js', 'assets', 'node_modules')))

gulp.task('watch', function(){
    gulp.watch('src/style/**/*.scss', gulp.series('scss'));
    gulp.watch('src/*.html', gulp.series('html'));
    gulp.watch('src/js/**/*.js', gulp.series('js'));
    gulp.watch('src/assets/**/*.*', gulp.series('assets'));
})    

gulp.task('default', gulp.series('build', gulp.parallel('watch', 'serv')));
