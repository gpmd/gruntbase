module.exports = function(grunt) {

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {

    jitGrunt: {
      staticMappings: {
        scsslint: 'grunt-scss-lint'
      }
    },

    init: true,

    // Shared task data
    data: {

      // --env=prod, --env=dev
      env: grunt.option('env') || 'prod',

      // Project paths
      project: {
        src: 'src',
        dist: '<% if (env === "prod") { %>tmp<% } else { %>dist<% } %>'
      },

      // Components
      component: {
        jquery: 'bower_components/jquery/dist/jquery.min.js',
        jquerySourceMap: 'bower_components/jquery/dist/jquery.min.map',
        modernizr: 'bower_components/modernizr/modernizr.js',
        picturefill: 'bower_components/picturefill/dist/picturefill.min.js',
        equalizeHeights: 'bower_components/equalize-heights/dist/equalize-heights.min.js',
      }
    }
  });
};
