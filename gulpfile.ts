import * as gulp from 'gulp';
import * as ts from 'gulp-typescript';

const project = ts.createProject('tsconfig.json');

gulp.task('default', () => {
  gulp
  .src('./src/**/*.ts')
  .pipe(ts(project))
  .js.pipe(gulp.dest(''))
});

gulp.task('bundle', () => {

});