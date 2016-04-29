module.exports = {

  // Components
  components: {
    files: [
      {
        src: '<%= component.jquery %>',
        dest: '<%= project.dist %>/scripts/vendor/jquery.min.js'
      }, {
        src: '<%= component.jquerySourceMap %>',
        dest: '<%= project.dist %>/scripts/vendor/jquery.min.map'
      }, {
        src: '<%= component.requireJS %>',
        dest: '<%= project.dist %>/scripts/vendor/require.js'
      }, {
        src: '<%= component.picturefill %>',
        dest: '<%= project.dist %>/scripts/vendor/picturefill.min.js'
      }, {
        src: '<%= component.equalizeHeights %>',
        dest: '<%= project.dist %>/scripts/vendor/equalize-heights.min.js'
      }
    ]
  },

  // Tmp dir to dist dir
  tmpToDist: {
    files: [
      {
        expand: true,
        cwd: 'tmp/',
        src: ['**'],
        dest: 'dist/'
      }
    ]
  },
};
