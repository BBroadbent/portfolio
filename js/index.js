// new fullpage('#fullpage', {
//     //options here
//     licenseKey: 'C5F2D660-6E6F47CC-944F6D71-9819109F'
// });

// //methods
// fullpage_api.setAllowScrolling(false);
$(document).ready(function() {
    var myFullpage = new fullpage('#fullpage', {
        licenseKey: 'C5F2D660-6E6F47CC-944F6D71-9819109F',
        sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        anchors: ['about-me', 'my-projects', 'contact-me'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['First page', 'Second page', 'Third and last page']
    });
})