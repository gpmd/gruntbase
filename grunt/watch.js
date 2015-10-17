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
        'concat:modules',
        'uglify:scriptsDev',
        'uglify:modulesDev',
        'copy:modulesDev'
      ]
    },

    styles: {
      files: [
        '<%= project.src %>/styles/**/*.scss'
      ],
      tasks: [
        // 'scsslint',
        'sass:dev'
      ]
    }
  };
};
