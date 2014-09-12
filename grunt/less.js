module.exports = {
	build: {
		files: {
			'<%= dir.build %>/assets/main.css': '<%= dir.src %>/assets/main.less'
		}
	},
	compile: {
		files: {
			'<%= dir.build %>/assets/main.css': '<%= dir.src %>/assets/main.less'
		},
		options: {
			cleancss: true,
			compress: true
		}
	}
};
