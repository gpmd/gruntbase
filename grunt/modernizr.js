module.exports = {

  // Distribution settings
  dist: {
    devFile: '<%= component.modernizr %>',
    outputFile: '<%= project.dist %>/scripts/vendor/modernizr.min.js',
    'extra': {
      'shiv': true,
      'picture': true,
      'mq': true,
      'csscolumns': true,
      'flexbox': true
    },
    files: {
      src: [

        // Scripts
        '<%= project.dist %>/scripts/{,*/}*.js',
        '!<%= project.dist %>/scripts/vendor/*',

        // Styles
        '<%= project.dist %>/styles/{,*/}*.css',
      ]
    }
  }
};
