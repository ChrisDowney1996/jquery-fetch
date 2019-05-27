module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'src/jquery-fetch.js',
        dest: 'dist/jquery-fetch.min.js'
      },
      options: {
        banner: '/*!\n * <%= pkg.name %> <%= pkg.version %>' +
          '\n * (c) 2019-<%= grunt.template.today("yyyy") %> <%= pkg.author %>' +
          '\n * Released under the MIT License' +
          '\n */'
      },
    },
    jshint: {
      options: {
        eqeqeq: true,
        trailing: true
      },
      files: ['Gruntfile.js', 'src/**/*.js']
    },
  })
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.registerTask('default', ['uglify'])
}
