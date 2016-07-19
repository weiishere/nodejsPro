module.exports = function (grunt) {
    // Project configuration.
    //console.log(grunt.file.readJSON('package.json'));
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            target1: {
                files: {
                    'build/<%= pkg.name %>.min.js': ['public/script/*.js']
                }
            }
            //   build: {
            //     src: 'public/script/<%= pkg.name %>.js',
            //     dest: 'build/<%= pkg.name %>.min.js'
            //   }
        }
    });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Default task(s).
    grunt.registerTask('default', ['uglify']);
};