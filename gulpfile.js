import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import cleanCSS from 'gulp-clean-css';
import terser from 'gulp-terser';
import fs from 'fs';

const folderExists = (path) => {
  try {
    return fs.existsSync(path);
  } catch (err) {
    console.log('Ошибка с папкой:', err);
    return false;
  }
};

export const html = () => {
  if (!folderExists('src')) {
    console.log('Папки src нет, пропускаем HTML');
    return Promise.resolve();
  }
  
  return gulp.src('src/*.html')
    .pipe(htmlmin({ 
      collapseWhitespace: true 
    }))
    .pipe(gulp.dest('dist'));
};

export const css = () => {
  if (!folderExists('src/css')) {
    console.log('Папки css нет, пропускаем CSS');
    return Promise.resolve();
  }
  
  return gulp.src('src/css/**/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
};

export const js = () => {
  if (!folderExists('src/js')) {
    console.log('Папки js нет, пропускаем JS');
    return Promise.resolve();
  }
  
  return gulp.src('src/js/**/*.js')
    .pipe(terser())
    .pipe(gulp.dest('dist/js'));
};

export const images = () => {
  if (!folderExists('src/images')) {
    console.log('Папки images нет, пропускаем картинки');
    return Promise.resolve();
  }
  
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('dist/images'));
};

export const fonts = () => {
  if (!folderExists('src/fonts')) {
    console.log('Папки fonts нет, пропускаем шрифты');
    return Promise.resolve();
  }
  
  return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
};

export const watch = () => {
  gulp.watch('src/*.html', html);
  gulp.watch('src/css/**/*.css', css);
  gulp.watch('src/js/**/*.js', js);
  gulp.watch('src/images/**/*', images);
  console.log('Слежу за изменениями...');
};
export const build = gulp.parallel(html, css, js, images, fonts);
export const dev = gulp.series(build, watch);
export default build;