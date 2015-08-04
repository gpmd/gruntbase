module.exports = function(grunt, data) {

  // Set output directory to dist
  data.project.dist = 'dist';

  return {

    options: {
      spawn: false,
      livereload: true
    },

    scripts: {
      files: [
        '<%= project.src %>/scripts/**/*.js'
      ],
      tasks: [
        'jshint:scripts',
        'concat',
        'uglify',
        'copy:modules'
      ]
    },

    styles: {
      files: [
        '<%= project.src %>/styles/**/*.scss'
      ],
      tasks: [
        'scsslint',
        'sass:dev'
      ]
    },

    templates: {
      files: [
        'templates/**/*.ss'
      ],
      tasks: []
    },
  };
};
