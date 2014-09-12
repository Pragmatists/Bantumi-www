module.exports = {
	build: {
		options: {
			pretty: true
		},
		files: {
			'<%= dir.build %>/index.html': ['<%= dir.src %>/index.jade']
		}
	},
	compile: {
		files: {
			'<%= dir.build %>/index.html': ['<%= dir.src %>/index.jade']
		}
	}
};
