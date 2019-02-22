module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'src/jquery-fetch.js',
        dest: 'dist/jquery-fetch.min.js'
      }
    },
    jshint: {
      options: {
        eqeqeq: true,
        trailing: true
      },
      files: ['Gruntfile.js', 'src/**/*.js']
    },
  })

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify')

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify'])
}
