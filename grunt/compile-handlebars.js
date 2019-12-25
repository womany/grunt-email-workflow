module.exports = {
    weekly_author: {
        template: '<%= paths.dist %>/weekly_author.html',
        templateData: '<%= paths.src %>/data/weekly_author.json',
        output: '<%= paths.dist %>/weekly_author_with_data.html'
    },
};
