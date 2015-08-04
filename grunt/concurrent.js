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
        'scsslint',
        'concat:modules'
    ],
    devThird: [
        'sass:dev',
        'uglify:scripts',
        'uglify:modules'
    ],
    devFourth: [
        'copy:components',
        'copy:modules'
    ],
    devFifth: [
        'autoprefixer',
        'modernizr',
        'clean:modules'
    ],
    devSixth: [
        'stylestats'
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
        'uglify:scripts',
        'uglify:modules'
    ],
    prodFourth: [
        'copy:components',
        'copy:modules'
    ],
    prodFifth: [
        'autoprefixer',
        'modernizr'
    ],
    prodSixth: [
        'copy:tmpToDist'
    ],
    prodSeventh: [
        'clean:tmp',
        'clean:modules'
    ],

    // Image tasks
    imgFirst: [
        'imagemin'
    ]
};
