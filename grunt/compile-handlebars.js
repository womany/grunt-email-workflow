module.exports = {
    weekly_author: {
        template: '<%= paths.dist %>/weekly_author.html',
        templateData: '<%= paths.src %>/data/weekly_author.json',
        output: '<%= paths.dist %>/weekly_author_with_data.html'
    },
    weekly_site_genderpower: {
        template: '<%= paths.dist %>/weekly_site_genderpower.html',
        templateData: '<%= paths.src %>/data/weekly_site_genderpower.json',
        output: '<%= paths.dist %>/weekly_site_genderpower_with_data.html'
    },
  weekly_site_imhome: {
    template: '<%= paths.dist %>/weekly_site_imhome.html',
    templateData: '<%= paths.src %>/data/weekly_site_imhome.json',
    output: '<%= paths.dist %>/weekly_site_imhome_with_data.html'
  }
};
