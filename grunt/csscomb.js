// Sorting css properties
module.exports = {
  csscomb: {
    options: {
      config: 'csscomb.json'
    },
    src: ['<%= paths.src %>/css/*.css'],
    ext: '.resorted.css'
  }
};
