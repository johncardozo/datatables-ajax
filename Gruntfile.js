module.exports = function (grunt) {

  // Inicialización
  grunt.initConfig({
    
    // ------------------------- COPY -------------------------
    copy: {
      main: {
        files: [
          // Vendors
          { expand: true, cwd: 'bower_components/bootstrap/fonts/', src: '**', dest: 'public/assets/fonts/', flatten: true, filter: 'isFile' },
          { expand: true, cwd: 'bower_components/datatables/media/css', src: '**', dest: 'public/assets/stylesheets/', flatten: true, filter: 'isFile' },         
          { expand: true, cwd: 'bower_components/datatables/media/images', src: '**', dest: 'public/assets/images/', flatten: true, filter: 'isFile' },
         
          // Aplicacion
          { expand: true, cwd: 'app/assets/images/', src: '**', dest: 'public/assets/images/', flatten: true, filter: 'isFile' },
          { expand: true, cwd: 'app/assets/json/', src: '**', dest: 'public/assets/json/', flatten: true, filter: 'isFile' },
          { expand: true, cwd: 'app/', src: 'index.html', dest: 'public' }
        ]
      },
    },
    
    // ------------------------- CONCAT -------------------------
    concat: {
      options: {
        separator: ';',
      },
      front_end: {
        src: [
          './bower_components/jquery/dist/jquery.js',
          './bower_components/bootstrap/dist/js/bootstrap.js',
          './bower_components/datatables/media/js/jquery.dataTables.js',
          './app/assets/javascript/app.js',
        ],
        dest: './public/assets/javascript/app.js',
      }
    },
    
    // ------------------------- UGLIFY -------------------------
    uglify: {
      options: {
        mangle: false  // Evita que cambien los nombres de funciones y variables
      },
      frontend: {
        files: {
          // output: input (sobreescribe app.js)
          './public/assets/javascript/app.js': './public/assets/javascript/app.js',
        }
      },
    },
    
    // ------------------------- LESS ------------------------- 
    less: {
      front_end: {
        options: { compress: true },
        files: { "./public/assets/stylesheets/frontend.css": "./app/assets/stylesheets/frontend.less" }
      }
    },
    
    // ------------------------- CONNECT -------------------------
    connect: {
      server: {
        options: {
          livereload: true,
          base: 'public/',
          port: 9009
        }
      }
    },
    
    // ------------------------- WATCH -------------------------
    watch: {
      app: {
        files: ['./app/**'],
        tasks: ['less', 'concat', 'copy'],
        options: { livereload: true }
      }
    }

  });

  // Carga plugins de Grunt
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  
  // Definición de tareas
  grunt.registerTask('deploy', ['less', 'concat', 'uglify', 'copy']);
  grunt.registerTask('default', ['deploy', 'connect', 'watch']);

};