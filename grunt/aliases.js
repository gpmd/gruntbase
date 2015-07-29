module.exports = function(grunt, data) {

    // Vars
    var env = data.env || 'prod';

    return {

        default: {
            description: 'Default build',
            tasks: [
                env
            ]
        },

        dev: {
            description: 'Development build',
            tasks: [
                'concurrent:devFirst',
                'concurrent:devSecond',
                'concurrent:devThird',
                'concurrent:devFourth',
                'concurrent:devFifth',
                'img'
            ]
        },

        prod: {
            description: 'Production build',
            tasks: [
                'concurrent:prodFirst',
                'concurrent:prodSecond',
                'img',
                'concurrent:prodThird',
                'concurrent:prodFourth',
                'concurrent:prodFifth',
                'concurrent:prodSixth',
                'concurrent:prodSeventh'
            ]
        },

        img: {
            description: 'Image tasks',
            tasks: [
                'concurrent:imgFirst'
            ]
        }
    };
};
