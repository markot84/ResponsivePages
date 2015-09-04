module.exports = function(grunt) {
    grunt.initConfig({
      uglify: {
        my_target: {
          files: {
            'dist/js/lib.min.js': ['src/components/jquery/dist/jquery.js', 'src/components/jquery-ui/jquery-ui.js','src/components/handlebars/handlebars.js','src/components/sammy/lib/sammy.js',
					'src/components/jqueryui-timepicker-addon/dist/jquery-ui-timepicker-addon.js','src/components/foundation/js/foundation.js','src/components/jquery.ambiance/assets/js/jquery.ambiance.js',
					'src/js/lib.routes.js','src/js/lib.actions.js','src/js/lib.handlebars-helpers.js','src/js/lib.utilities.js','src/js/lib.draw.js']
          }
        }
      },
      cssmin: {
	target: {
		files:{
			'dist/css/min.css' : ['src/components/foundation/css/foundation.css','src/components/jquery.ambiance/assets/css/jquery.ambiance.css','src/components/jquery-ui/themes/base/jquery-ui.css','src/components/jqueryui-timepicker-addon/src/jquery-ui-timepicker-addon.css','components/font-awesome/css/font-awesome.css','src/css/style.css']
		}
	}  
     }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);   
};
