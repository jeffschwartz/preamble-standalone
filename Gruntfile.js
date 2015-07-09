module.exports = function ( grunt ) {

    // Project configuration.
    grunt.initConfig({
        pkg    : grunt.file.readJSON( 'package.json' ),
        compress: {
            main: {
                options: {
                    archive: 'dist/Preamble-Standalone.zip',
                    mode: 'zip'
                },
                files: [
                    {
                        src: ['lib/*', 'spec/*', 'src/**', 'SpecRunner.html']
                    }
                ]
            }
        },
        watch  : {
            compress : {
                files   : ['lib/*', 'spec/*', 'src/*', 'SpecRunner.html'],
                tasks   : ['compress'],
                options : {
                    interrupt : true
                }
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-compress' );

    // Default task(s).
    grunt.registerTask( 'default', ['watch'] );

};
