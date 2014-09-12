module.exports = function ( grunt ) {
	'use strict';

	// Load plugin to profiling build time
	if (grunt.option('time')) {
		require('time-grunt')(grunt);
	}

	require('load-grunt-config')(grunt, {
		jitGrunt: true
	});
};
