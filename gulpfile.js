import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import cleanCSS from 'gulp-clean-css';
import terser from 'gulp-terser';
import fs from 'fs';

// Функция для проверки существования папки
const folderExists = (path) => {
  try {
    return fs.existsSync(path);
  } catch (err) {
    return false;
  }
};

// Копирование и минификация HTML
export const html = () => {
  if (!folderExists('src')) {
    console.log('Папка src не существует, пропускаем обработку HTML');
    return Promise.resolve();
  }
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
};

// Обработка CSS
export const css = () => {
  if (!folderExists('src/css')) {
    console.log('Папка src/css не существует, пропускаем обработку CSS');
    return Promise.resolve();
  }
  return gulp.src('src/css/**/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
};

// Обработка JavaScript
export const js = () => {
  if (!folderExists('src/js')) {
    console.log('Папка src/js не существует, пропускаем обработку JS');
    return Promise.resolve();
  }
  return gulp.src('src/js/**/*.js')
    .pipe(terser())
    .pipe(gulp.dest('dist/js'));
};

// Копирование изображений
export const images = () => {
  if (!folderExists('src/images')) {
    console.log('Папка src/images не существует, пропускаем обработку изображений');
    return Promise.resolve();
  }
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('dist/images'));
};

// Копирование шрифтов
export const fonts = () => {
  if (!folderExists('src/fonts')) {
    console.log('Папка src/fonts не существует, пропускаем обработку шрифтов');
    return Promise.resolve();
  }
  return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
};

// Слежение за изменениями
export const watch = () => {
  gulp.watch('src/*.html', html);
  gulp.watch('src/css/**/*.css', css);
  gulp.watch('src/js/**/*.js', js);
  gulp.watch('src/images/**/*', images);
};

// Сборка проекта
export const build = gulp.parallel(html, css, js, images, fonts);

// Режим разработки
export const dev = gulp.series(build, watch);

// Задача по умолчанию
export default build;