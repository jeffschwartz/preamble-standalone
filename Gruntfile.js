module.exports = function ( grunt ) {

    // Project configuration.
    grunt.initConfig({
        pkg    : grunt.file.readJSON( 'package.json' ),
        less   : {
            production  : {
                files : {
                    'lib/preamble.css' : 'lib/preamble.less'
                }
            }
        },
        compress: {
            main: {
                options: {
                    archive: 'dist/Preamble-Standalone.zip',
                    mode: 'zip'
                },
                files: [
                    {
                        src: ['lib/*.js', 'lib/*.css', 'spec/*', 'src/**', 'SpecRunner.html']
                    }
                ]
            }
        },
        watch  : {
            less: {
                files   : ['lib/*.less'],
                tasks   : ['less'],
                options : {
                    interrupt : true
                }
            },
            compress : {
                files   : ['lib/*.js', 'lib/*.css', 'spec/*', 'src/*', 'SpecRunner.html'],
                tasks   : ['compress'],
                options : {
                    interrupt : true
                }
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-less' );
    grunt.loadNpmTasks( 'grunt-contrib-compress' );

    // Default task(s).
    grunt.registerTask( 'default', ['watch'] );

};
