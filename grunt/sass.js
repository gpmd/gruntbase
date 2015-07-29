module.exports = {

    // Development settings
    dev: {
        options: {
            outputStyle: 'nested',
            sourceMap: true,
            sourceMapEmbed: true,
            sourceMapContents: true
        },
        files: [{
            expand: true,
            cwd: '<%= project.src %>/styles',
            src: ['*.scss'],
            dest: '<%= project.dist %>/styles',
            ext: '.css'
        }]
    },

    // Production settings
    prod: {
        options: {
            outputStyle: 'compressed',
            sourceMap: false
        },
        files: [{
            expand: true,
            cwd: '<%= project.src %>/styles',
            src: ['*.scss'],
            dest: '<%= project.dist %>/styles',
            ext: '.css'
        }]
    }
};
