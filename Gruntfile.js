'use strict';

module.exports = function(grunt) {

  // Show elapsed time after tasks run to visualize performance
  require('time-grunt')(grunt);
  // Load all Grunt tasks that are listed in package.json automagically
  require('load-grunt-tasks')(grunt);

    // All configuration goes here
    grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),

      // shell commands for use in Grunt tasks
      shell: {
        jekyllBuild: {
          command: 'jekyll build'
        },
        jekyllServe: {
          command: 'jekyll serve'
        }
      },

      // watch for files to change and run tasks when they do
      watch: {
        // options: {
        //   livereload: true
        // },
        sass: {
          files: ['_sass/**/*.{scss,sass}'],
          tasks: ['sass', "shell:jekyllBuild"]
        },
        site: {
          files: ["index.html", "_layouts/*.html", "_posts/*.md", "_includes/*.html"],
          tasks: ["shell:jekyllBuild"]
        }
      },

      // sass (libsass) config
      sass: {
        options: {
          sourceMap: true,
          relativeAssets: false,
          outputStyle: 'expanded',
          sassDir: '_sass',
          cssDir: '_site/css'
        },
        build: {
          files: [{
            expand: true,
            cwd: '_sass/',
            src: ['**/*.{scss,sass}'],
            dest: '_site/css',
            ext: '.css'
          }]
        }
      },

      // run tasks in parallel
      concurrent: {
        serve: [
        'sass',
        'watch',
        'shell:jekyllServe',
        'browserSync'
        ],
        options: {
          logConcurrentOutput: true
        }
      },

      browserSync: {
        files: {
          src : ['_site/css/*.css', "*.html", "_layouts/*.html", "_posts/*.md", "_includes/*.html"],
        },
        options: {
          watchTask: true,
          notify: {
            styles: {
              top: 'auto',
              bottom: '0'
            }
          },
          ghostMode: {
            clicks: true,
            scroll: true,
            links: true,
            forms: true
          },
          server: {
            baseDir: '_site'
          }
        }
      },


    });

    // Load the plugins
    // grunt.loadNpmTasks('grunt-sass');
    // grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-jekyll');
    // grunt.loadNpmTasks('grunt-browser-sync');

    // Custom tasks

    // Register the grunt serve task
    grunt.registerTask('serve', ['concurrent:serve']);
    // Register the grunt build task
    grunt.registerTask('build', ['shell:jekyllBuild', 'sass']);
    grunt.registerTask('default', ['sass','shell:jekyllBuild','browserSync','watch']);
  };
