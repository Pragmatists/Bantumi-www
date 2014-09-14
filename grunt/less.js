module.exports = {
	build: {
		files: {
			'<%= dir.build %>/main.css': '<%= dir.src %>/main.less'
		}
	},
	compile: {
		files: {
			'<%= dir.build %>/main.css': '<%= dir.src %>/main.less'
		},
		options: {
			cleancss: true,
			compress: true
		}
	}
};
