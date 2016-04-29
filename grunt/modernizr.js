module.exports = {

  // Distribution settings
  dist: {
    cache : true,
    devFile: '<%= component.modernizrDevFile %>',
    dest: '<%= project.dist %>/scripts/vendor/modernizr.min.js',
    'options' : [
      'setClasses',
      'addTest',
      'html5printshiv',
      'html5shiv',
      'testProp',
      'fnBind'
    ],
    uglify: true,
    matchCommunityTests: true,
    tests : [
      'touchevents'
    ],
    excludeTests: [
      'hidden'
    ],
    crawl : true,
    useBuffers : false,
    files: {
      src: [

        // Scripts
        '<%= project.dist %>/scripts/{,*/}*.js',
        '!<%= project.dist %>/scripts/vendor/*',

        // Styles
        '<%= project.dist %>/styles/{,*/}*.css'
      ]
    },
    customTests: []
  }
};
