module.exports = {
	assets: {
		files: [{
			src: ['**/*'],
			dest: '<%= dir.build %>/assets',
			cwd: '<%= dir.src %>/assets',
			expand: true
		}]
	}
}