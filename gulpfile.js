var gulp = require('gulp');
var concat = require('gulp-concat');

var pkg = require('./package');

// Add standard tasks    
require('pip-webui-tasks').all(gulp);

var sass = require('gulp-sass');

gulp.task('build-scss', function () {

  return gulp.src(['./src/colors/ColorVariables.scss',
    './src/controls/ControlsMixins.scss',
    './src/effects/AnimationMixins.scss',
    './src/effects/EffectMixins.scss',
    './src/effects/TransformMixins.scss',
    './src/effects/EffectVariables.scss',
    './src/effects/TransitionMixins.scss',
    './src/flexbox/FlexboxMixins.scss',
    './src/positions/PositionsMixins.scss',
    './src/positions/PositionsVariables.scss',
    './src/sizes/SizeMixins.scss',
    './src/typography/TypographyVariables.scss',
    './src/typography/TypographyMixins.scss'])
    .pipe(concat(pkg.name + '.scss'))
    .pipe(gulp.dest('./dist'));
});

// Define build tasks      
gulp.task('build-sass', ['build-scss', 'build-sass-dev', 'build-sass-prod']);
gulp.task('rebuild', ['build-dev', 'build-prod', 'build-sass']); // 'build-less'
gulp.task('build', ['build-dev', 'build-scss']);
gulp.task('clean', ['build-clean']);
gulp.task('watch', ['build-watch']);
gulp.task('jshint', ['test-jshint']);
gulp.task('launch', ['samples-launch']);
gulp.task('publish', ['samples-publish']);

// Set default task
gulp.task('default', ['build']);