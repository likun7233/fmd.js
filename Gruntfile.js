/**
 * the Gruntfile for fmd.js
 * @author Edgar
 * @date 131112
 * */

module.exports = function( grunt ){
    
    var bannerTpl = '/*! fmd.js v<%= pkg.version %> | http://fmdjs.org/ | MIT */\n';
    
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            files: 'src/*.js',
            options: {
                jshintrc: '.jshintrc'
            }
        },
        clean: {
            clear: ['dist']
        },
        concat: {
            aio: {
                options: {
                    separator: '\n\n',
                    banner: bannerTpl
                },
                src: [
                    'src/boot.js',
                    'src/lang.js',
                    'src/event.js',
                    'src/config.js',
                    'src/module.js',
                    'src/alias.js',
                    'src/id2url.js',
                    'src/assets.js',
                    'src/when.js',
                    'src/request.js',
                    'src/loader.js',
                    'src/remote.js',
                    'src/use.js',
                    'src/async.js',
                    'src/logger.js',
                    'src/plugin.js',
                    'src/preload.js',
                    'src/non.js',
                    'src/combo.js'
                ],
                dest: 'dist/fmd-aio-debug.js'
            },
            fmd: {
                options: {
                    separator: '\n\n',
                    banner: bannerTpl
                },
                src: [
                    'src/boot.js',
                    'src/lang.js',
                    'src/event.js',
                    'src/config.js',
                    'src/module.js',
                    'src/alias.js',
                    'src/id2url.js',
                    'src/assets.js',
                    'src/when.js',
                    'src/request.js',
                    'src/loader.js',
                    'src/remote.js',
                    'src/use.js',
                    'src/async.js',
                    'src/logger.js'
                ],
                dest: 'dist/fmd-debug.js'
            },
            base: {
                options: {
                    separator: '\n\n',
                    banner: bannerTpl
                },
                src: [
                    'src/boot.js',
                    'src/lang.js',
                    'src/event.js',
                    'src/config.js',
                    'src/module.js',
                    'src/alias.js'
                ],
                dest: 'dist/fmd-base-debug.js'
            }
        },
        replace: {
            all: {
                options: {
                    patterns: [{
                        match: /\'use\sstrict\';/g,
                        replacement: ''
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['dist/*.js'],
                    dest: 'dist/'
                }]
            },
            dist: {
                options: {
                    patterns: [{
                        match: /\"use\sstrict\";/,
                        replacement: ''
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['dist/fmd/*.js'],
                    dest: 'dist/fmd/'
                }]
            }
        },
        uglify: {
            boot: {
                options: {
                    banner: bannerTpl
                },
                files: {
                    'dist/fmd/boot.js': ['src/boot.js']
                }
            },
            all: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['*.js','!boot.js'],
                    dest: 'dist/fmd/',
                    ext: '.js'
                }]
            },
            base: {
                options: {
                    banner: bannerTpl
                },
                files: {
                    'dist/fmd-base.js': ['dist/fmd-base-debug.js',]
                }
            },
            fmd: {
                options: {
                    banner: bannerTpl
                },
                files: {
                    'dist/fmd.js': ['dist/fmd-debug.js']
                }
            },
            aio: {
                options: {
                    banner: bannerTpl
                },
                files: {
                    'dist/fmd-aio.js': ['dist/fmd-aio-debug.js']
                }
            }
        },
        markdown: {}

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('build', ['jshint','clean','concat','replace:all','uglify','replace:dist']);
    
    grunt.registerTask('default', ['build']);

};
