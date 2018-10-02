//adciona os módulos instalados
const gulp = require ('gulp');
const sass = require ('gulp-sass');
const autoprefixer = require ('gulp-autoprefixer');
const browserSync = require ('browser-sync').create();

//função para compilar o SASS e adicionar os prefixos
function compilaSass(){
  return gulp.src('css/scss/*.scss')
  .pipe(sass({
    outputStyle: 'compressed'
  }))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('css/'))
  .pipe(browserSync.stream());
}

//tarefa de gulp para a função de SASS
gulp.task('sass', compilaSass);

//função para iniciar o browser
function browser(){
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
}

//tarefa para iniciar o browser-sync
gulp.task('browser-sync', browser);

//função de watch do Gulp
function watch() {
  gulp.watch('css/scss/*.scss', compilaSass);
  gulp.watch('*.html').on('change', browserSync.reload);
}

//inicia a tarefa de Watch
gulp.task('watch', watch);

//tarefa padrão do Gulp que inicia o Watch e o Browser Sync
gulp.task('default', gulp.parallel('watch','browser-sync', 'sass'));