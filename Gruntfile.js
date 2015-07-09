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
        shell: {
            phantomjs: {
                command: 'phantomjs lib/phantom-runner.js SpecRunner.html',
                options: {
                    stdout: true
                }
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
    grunt.loadNpmTasks('grunt-shell');

    // Default task(s).
    grunt.registerTask( 'default', ['watch'] );
    grunt.registerTask( 'phantomjs', ['shell'] );

};
