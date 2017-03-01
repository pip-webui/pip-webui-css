var gulp = require('gulp');
var concat = require('gulp-concat');

var pkg = require('./package');
    
// Add standard tasks    
require('pip-webui-tasks').all(gulp);

gulp.task('build-less', function() {
    return gulp.src([
            './src/colors/colors_var.less',
            './src/colors/colors_mixins.less',
            './src/colors/colors_bootbarn.less',
            './src/colors/colors_default.less',
            './src/flexbox/flexbox_mixins.less',
            './src/positions/positions_var.less',
            './src/positions/positions_mixins.less',
            './src/sizes/sizes_mixins.less',
            './src/typography/typography_var.less',
            './src/typography/typography_mixins.less',
            './src/effects/animation_mixins.less',
            './src/effects/transition_mixins.less',
            './src/effects/transform_mixins.less',
            './src/effects/effects_var.less',
            './src/effects/effects_mixins.less',
            './src/controls/controls_mixins.less',
        ])
        .pipe(concat(pkg.name + '.less'))
        .pipe(gulp.dest('./dist'));
});

var sass = require('gulp-sass');

gulp.task('build-scss', function () {
    
  return gulp.src(['./src/colors/colors_var.scss',
            './src/colors/colors_mixins.scss',
            './src/colors/colors_bootbarn.scss',
            './src/colors/colors_default.scss',
            './src/flexbox/flexbox_mixins.scss',
            './src/positions/positions_var.scss',
            './src/positions/positions_mixins.scss',
            './src/sizes/sizes_mixins.scss',
            './src/typography/typography_var.scss',
            './src/typography/typography_mixins.scss',
            './src/effects/animation_mixins.scss',
            './src/effects/transition_mixins.scss',
            './src/effects/transform_mixins.scss',
            './src/effects/effects_var.scss',
            './src/effects/effects_mixins.scss',
            './src/controls/controls_mixins.scss'])
    .pipe(concat(pkg.name + '.scss'))
    .pipe(gulp.dest('./dist'));
});

// Define build tasks      
gulp.task('build-sass', ['build-scss', 'build-sass-dev', 'build-sass-prod']);  
gulp.task('build', ['build-dev', 'build-prod']); // 'build-less'
gulp.task('rebuild', ['build-dev']);
gulp.task('clean', ['build-clean']);
gulp.task('watch', ['build-watch']);
gulp.task('jshint', ['test-jshint']);
gulp.task('launch', ['samples-launch']);
gulp.task('publish', ['samples-publish']);

// Set default task
gulp.task('default', ['build']);