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
    files: {
      'src/scripts/modules/modules-combined.js': ['src/scripts/modules/modules-combined.js']
    }
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
    files: {
      'src/scripts/modules/modules-combined.js': ['src/scripts/modules/modules-combined.js']
    }
  }
};
