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
        src: '<%= component.picturefill %>',
        dest: '<%= project.dist %>/scripts/vendor/picturefill.min.js'
      }, {
        src: '<%= component.equalizeHeights %>',
        dest: '<%= project.dist %>/scripts/vendor/equalize-heights.min.js'
      }
    ]
  },

  // Modules - Dev tasks
  modulesDev: {
    files: [
      {
        src: '<%= project.src %>/scripts/modules/modules-combined.js',
        dest: '<%= project.dist %>/scripts/modules/modules-combined.js'
      },
      {
        src: '<%= project.src %>/scripts/modules/modules-combined.js.map',
        dest: '<%= project.dist %>/scripts/modules/modules-combined.js.map'
      }
    ]
  },

  // Modules - Production tasks
  modulesProd: {
    files: [
      {
        src: '<%= project.src %>/scripts/modules/modules-combined.js',
        dest: '<%= project.dist %>/scripts/modules/modules-combined.js'
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
