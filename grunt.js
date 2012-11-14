/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        meta: {
            version: '0.0.1',
            banner: '/*! Detect Demo - v<%= meta.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>' +
                '*/'
        },
        lint: {
            files: ['grunt.js', 'js/**/*.js']
        },
        min: {
            detect: {
                src: ['<banner:meta.banner>', '<file_strip_banner:js/detect.js>'],
                dest: 'dist/js/detect.min.js'
            }
        },
        less: {
            detect: {
                options: {
                    compress: true
                },
                files: {
                    'dist/css/detect.min.css': 'css/detect.less'
                }
            }
        },
        watch: {
            js: {
                files: '<config:lint.files>',
                tasks: 'lint min'
            },
            css: {
                files: 'css/**/*.less',
                tasks: 'less'
            }
        },
        server: {
            port: 9999,
            base: '.'
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true
            },
            globals: {
                jQuery: true
            }
        },
        uglify: {}
    });

    grunt.loadNpmTasks('grunt-contrib');

    // Default task.
    grunt.registerTask('default', 'lint min less');

};
