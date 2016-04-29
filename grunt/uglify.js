module.exports = {

  // Dev tasks
  scriptsDev: {
    options: {
      mangle: false,
      compress: false,
      beautify: true,
      sourceMap: true
    },
    files: [
      {
        expand: true,
        cwd: '<%= project.src %>/scripts',
        src: '*.js',
        dest: '<%= project.dist %>/scripts',
        ext: '.js'
      }, {
        '<%= project.dist %>/scripts/vendor/require.js': ['<%= component.requireJS %>']
      }
    ]
  },

  modulesDev: {
    options: {
      mangle: false,
      compress: false,
      beautify: true,
      sourceMap: true
    },
    files: [
      {
        expand: true,
        cwd: '<%= project.src %>/scripts/modules',
        src: '*.js',
        dest: '<%= project.dist %>/scripts/modules',
        ext: '.js'
      }
    ]
  },

  // Production tasks
  scriptsProd: {
    options: {
      mangle: true,
      compress: true,
      beautify: false,
      sourceMap: false
    },
    files: [
      {
        expand: true,
        cwd: '<%= project.src %>/scripts',
        src: '*.js',
        dest: '<%= project.dist %>/scripts',
        ext: '.js'
      }, {
        '<%= project.dist %>/scripts/vendor/require.js': ['<%= component.requireJS %>']
      }
    ]
  },

  modulesProd: {
    options: {
      mangle: true,
      compress: true,
      beautify: false,
      sourceMap: false
    },
    files: [
      {
        expand: true,
        cwd: '<%= project.src %>/scripts/modules',
        src: '*.js',
        dest: '<%= project.dist %>/scripts/modules',
        ext: '.js'
      }
    ]
  }
};
