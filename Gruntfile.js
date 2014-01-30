module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean : {
			dev : {
				src : [
					'',
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
					basePath : 'assets/',
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

		removelogging : {
			dev : {
				src : ''
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

	grunt.registerTask('watch', [
		'compass:dev',
		'watch'
	]);

	grunt.registerTask('default', [
		'clean:dev',
		'concat:dev',
		'compass:dev',
	]);

	grunt.registerTask('dev', [
		'clean:dev',
		'concat:dev',
		'compass:dev',
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
