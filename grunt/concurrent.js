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
    'jshint'
  ],
  devThird: [
    'sass:dev',
    'uglify:scriptsDev',
    'uglify:modulesDev'
  ],
  devFourth: [
    'copy:components'
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
    'jshint'
  ],
  prodThird: [
    'sass:prod',
    'uglify:scriptsProd',
    'uglify:modulesProd'
  ],
  prodFourth: [
    'copy:components'
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
