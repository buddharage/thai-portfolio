module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean : {
			dev : {
				src : [
					'assets/images/icons'
				]
			},
			prod : {
				src : [
					'',
					'',
				]
			},
		},

		compass : {
			dev : {
				options : {
					config : 'config.rb',
				}
			}
		},

		concat : {
			dev : {
				src : [
					'',
				],
				dest : '',
			},
			prod : {
				src : [
					'',
				],
				dest : '',
			},
		},

		grunticon: {
			icons: {
				files: [{
					expand: true,
					cwd: 'assets/images/svg',
					src: ['*.svg', '*.png'],
					dest: 'assets/images/icons'
				}]
			}
		},

		removelogging : {
			dev : {
				src : 'app/**/*.js'
			}
		},

		uglify : {
			prod : {
				src : '',
				dest : '',
			},
		},

		watch : {
			dev_css : {
				files : ['assets/scss/*.scss'],
				tasks : [
					'compass:dev',
				],
				options : {
					spawn : false,
				}
			},
			dev_scripts : {
				files: [
					'Gruntfile.js',
					'app'
				],
				tasks : [
					'clean:dev',
					'concat:dev'
				],
				options : {
					spawn: false,
				}
			},
		},
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', [
		'clean:dev',
		'compass:dev',
		'grunticon:icons',
	]);

	grunt.registerTask('dev', [
		'compass:dev',
		'grunticon:icons',
		'watch',
	]);

	grunt.registerTask('production', [
		'clean:production',
		'concat:production',
		'uglify:production',
		'removelogging:dev',
		'compass:production',
	]);
};
