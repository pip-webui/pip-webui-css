var gulp = require('gulp');
var concat = require('gulp-concat');

var pkg = require('./package');
    
// Add standard tasks    
require('pip-webui-tasks').all();

gulp.task('build-less', function() {
    return gulp.src([
            './src/colors/colors_var.less',
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

// Define build tasks        
gulp.task('build', ['build-dev', 'build-prod', 'build-less']);
gulp.task('rebuild', ['build-dev']);
gulp.task('clean', ['build-clean']);
gulp.task('watch', ['build-watch']);
gulp.task('jshint', ['test-jshint']);
gulp.task('launch', ['samples-launch']);
gulp.task('publish', ['samples-publish']);

// Set default task
gulp.task('default', ['build']);