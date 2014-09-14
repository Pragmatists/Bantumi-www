module.exports = {
	configFiles: {
		files: [
			'Gruntfile.js',
			'grunt/*.js'
		],
		options: {
			reload: true
		}
	},
	jade: {
		files: [
			'<%= dir.src %>/**/*.jade'
		],
		tasks: ['jade:build'],
		options: {
			spawn: false
		}
	},
	less: {
		files: ['<%= dir.src %>/**/*.less'],
		tasks: ['less:build'],
		options: {
			spawn: false
		}
	},
	assets: {
		files: ['<%= dir.src %>/assets/**/*'],
		tasks: ['copy:assets'],
		options: {
			spawn: false
		}
	}
};
