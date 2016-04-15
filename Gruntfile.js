module.exports = function(grunt) {

    grunt.initConfig({
        compass: {
            dev: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css',
                    //outputStyle: 'compressed',
                    noLineComments: true,
                    imagesDir: 'imgs',
                    relativeAssets: true,
                    httpPath: '/'
                }
            }
        },

        watch: {
            files: ['sass/**/*.scss'],
            tasks: ['compass:dev'],
            options: {
                spawn: false,
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['compass:dev']);

};
