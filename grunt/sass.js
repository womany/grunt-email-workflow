// Takes your SCSS files and compiles them to CSS
const sass = require('node-sass');

module.exports = {
  dist: {
    options: {
      style: 'expanded',
      implementation: sass
    },
    files: '<%= themes %>'
  },

  // This task compiles Sass for the browser-baed preview UI.
  // You should not need to edit it.
  preview: {
    options: {
      style: 'compressed',
      implementation: sass
    },
    files: {
      '<%= paths.preview %>/css/preview.css': '<%= paths.preview %>/scss/preview.scss'
    }
  }
};

