// Sorting css properties
module.exports = {
  csscomb: {
    options: {
      config: 'csscomb.json'
    },
    expand: true,
    cwd: '<%= paths.src %>/css/',
    src: ['*.css', '!*.sorted.css'],
    dest: '<%= paths.dist %>/css/',
    ext: '.resorted.css'
  }
};
