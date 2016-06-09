/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Sass compiling
    sass: {
      development: {
        options: {
          style: 'nested',
          sourcemap: 'auto'
        },
        files: {
          'css/style.css' : 'styles/style.scss'
        }       
      },
      production: {
        options: {
          style: 'compressed',
          sourcemap: 'none'
        },
        files: {
          'css/style.min.css' : 'styles/style.scss'
        } 
      }
    },
    // Auto vendor prefix
    autoprefixer: {
      dist:{
        files:{
          'css/style.css':'css/style.css',
          'css/style.min.css':'css/style.min.css'
        }
      }
    },
    // JS compression
    uglify: {
      dist: {
        files: {
          'js/app.min.js': ['js/app.js']
        }
      }
    },
    // JSHint
    jshint: {
      files: {
        src: ['js/**/*.js']
      }
    },
    // HTML build
    processhtml: {
      options: {
        process: true
      },
      dist: {
        files: {
          'index.html': ['index-dev.html'],
          'edit-retailer.html': ['edit-retailer-dev.html'],
          'edit-server.html': ['edit-server-dev.html'],
          'env-sel.html': ['env-sel-dev.html'],
          'results.html': ['results-dev.html'],
          'retailer.html': ['retailer-dev.html'],
          'retailer-sel.html': ['retailer-sel-dev.html'],
          'server.html': ['server-dev.html']
        }
      },
    },
    // Watch tasks for dev
    watch: {
      options: {
        livereload: true,
      },
      html: {
        files: ['*.html'],
        tasks: [] 
      },
      js: {
        files: ['js/*.js'],
        tasks: []
      },
      css: {
        files: ['styles/*.scss'],
        tasks: ['sass:development', 'autoprefixer']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Default task.
  grunt.registerTask('default', ['watch']);

  // Production task.
  grunt.registerTask('prod', ['sass:production', 'autoprefixer', 'uglify', 'processhtml']);
};
