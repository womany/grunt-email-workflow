// Replace compiled template images sources from ../src/html to ../dist/html
module.exports = {
  handlebars: {
    files: [{
      expand: true,
      cwd: '<%= paths.dist %>',  // set working folder / root to copy
      src: "*.html",
      dest: "../",
      ext: '.handlebars'
    }]
  },
  erb: {
    files: [{
      expand: true,
      cwd: '<%= paths.dist %>',  // set working folder / root to copy
      src: "*.html",
      dest: "../",
      ext: '.html.erb'
    }]
  }
};
