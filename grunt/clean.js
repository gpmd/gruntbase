module.exports = {

    dist: [
        'dist'
    ],

    tmp: [
        'tmp'
    ],

    modules: [
        '<%= project.src %>/scripts/modules/modules-combined.js',
        '<%= project.src %>/scripts/modules/modules-combined.min.js'
    ]
};
