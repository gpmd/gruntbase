module.exports = {

  // Task options
  options: {
    limit: 6
  },

  // Dev tasks
  devFirst: [
    'clean:dist',
    'clean:tmp'
  ],
  devSecond: [
    'jshint',
    'concat:modules'
  ],
  devThird: [
    'sass:dev',
    'uglify:scriptsDev',
    'uglify:modulesDev'
  ],
  devFourth: [
    'copy:components',
    'copy:modulesDev'
  ],
  devFifth: [
    'autoprefixer',
    'modernizr'
  ],
  devSixth: [
    'clean:modules'
  ],

  // Production tasks
  prodFirst: [
    'clean:dist',
    'clean:tmp'
  ],
  prodSecond: [
    'jshint',
    'concat:modules'
  ],
  prodThird: [
    'sass:prod',
    'uglify:scriptsProd',
    'uglify:modulesProd'
  ],
  prodFourth: [
    'copy:components',
    'copy:modulesProd'
  ],
  prodFifth: [
    'autoprefixer',
    'modernizr'
  ],
  prodSixth: [
    'cssmin'
  ],
  prodSeventh: [
    'copy:tmpToDist'
  ],
  prodEighth: [
    'clean:tmp',
    'clean:modules'
  ],

  // Image tasks
  imgFirst: [
    'imagemin'
  ]
};
