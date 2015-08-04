module.exports = {

  options: {
    reporter: require('jshint-stylish')
  },

  buildTools: [
    'Gruntfile.js',
    'grunt/*.js'
  ],

  scripts: [
    '<%= project.src %>/scripts/**/*.js',
    '!<%= project.src %>/scripts/**/*-combined.*'
  ]
};
