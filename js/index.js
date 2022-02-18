// new fullpage('#fullpage', {
//     //options here
//     licenseKey: 'C5F2D660-6E6F47CC-944F6D71-9819109F'
// });

// //methods
// fullpage_api.setAllowScrolling(false);

let myFullpage = null;
$(document).ready(function() {
    myFullpage = new fullpage('#fullpage', {
        licenseKey: 'C5F2D660-6E6F47CC-944F6D71-9819109F',
        sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        anchors: ['about-me', 'my-projects', 'contact-me'],
        navigation: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        navigationTooltips: ['First page', 'Second page', 'Third and last page'],
        afterLoad: function(origin, destination, direction) {
            if (myFullpage) {
                console.log('Hi')
                if (myFullpage.getActiveSlide()) {
                    $('#fp-nav').css('visibility', 'hidden')
                    $('#fp-nav').css('opacity', '0')
                } else {
                    $('#fp-nav').css('visibility', 'unset')
                    $('#fp-nav').css('opacity', '1')
                }
            }
        }
    });
})