module.exports = {
  all: {
    files: [{
      expand: true,
      cwd: '<%= project.src %>/',
      src: ['images/*.{png,jpg,gif}'],
      dest: '<%= project.dist %>/'
    }]
  }
};
