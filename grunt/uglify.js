module.exports = {

    scripts: {
        files: [
            {
                expand: true,
                cwd: '<%= project.src %>/scripts',
                src: '*.js',
                dest: '<%= project.dist %>/scripts',
                ext: '.min.js'
            }
        ]
    },

    modules: {
        files: {
            'src/scripts/modules/modules-combined.min.js': ['src/scripts/modules/modules-combined.js']
        }
    }
};
