module.exports = {
	jade: {
		files: [
			'<%= dir.src %>/**/*.jade',
			'<%= dir.src %>/**/*.md'
		],
		tasks: ['jade:build'],
	},
	less: {
		files: ['<%= dir.src %>/**/*.less'],
		tasks: ['less:build']
	}
};
