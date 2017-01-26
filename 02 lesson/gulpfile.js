const gulp = require('gulp');

gulp.task('log-start', () => {
  console.log('build started;');
});

gulp.task('build', ['log-start'], () => {
  gulp.src('node_modules/simple-blog-ui/css/styles.css')
  .pipe(gulp.dest('./public/css'));
});