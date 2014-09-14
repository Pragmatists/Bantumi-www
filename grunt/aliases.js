module.exports = {
	'default': [
		'watch'
	],

	'build': [
		'clean',
		'less:build',
		'copy:assets',
		'jade:build'
	],

	'compile': [
		'clean',
		'less:compile',
		'copy:assets',
		'jade:compile'
	]
};
