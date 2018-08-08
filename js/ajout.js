// Bloc Slider (Partner) - Set premier <li> actif
var element = $('.partner .tn-item-link');
if ($('.partner .tn-item-link').hasClass('is-active')) {}
else {
    $('.partner .tn-item:first-child .tn-item-link').addClass('is-active');
}

// D�placement div article/Image => article/div/h2
for (var i=1, nb_articles=$('.breve article.la-item').length; i<= nb_articles; i++) {
	var img2move= $('.breve article.la-item:nth-child('+i+') > img.la-item-img').detach();
	var toDiv = $('.breve article.la-item:nth-child('+i+') div.la-item-content > h2.la-item-title');
	img2move.insertAfter(toDiv);
}
///////////////////////////////////////////////////////////////////
// Page Actus : Déplacement <h2> => <p class="gla-item-desc">

for (var i=1, nb_articles=$('.grid-la-list > .gla-item > a > div.gla-item-content').length; i<= nb_articles; i++) {

    // on ignore les elements de type choc (a > img)
    if (!$('.grid-la-list > .gla-item:nth-child('+i+') > a > img:first-child').length) {
        console.log('element Normal : ');

        // s'il y a une image
        if ($('.grid-la-list > .gla-item:nth-child('+i+') .fl').length)
        {
            var h2Move= $('.grid-la-list > .gla-item:nth-child('+i+') > a > div.gla-item-content:first-child > h2.gla-item-title');
            var afterDiv = $('.grid-la-list > .gla-item:nth-child('+i+') > a > div.gla-item-content:first-child .gla-item-desc .fl');
            console.log('Img : ');
            h2Move.insertAfter(afterDiv);
        }

        else {
            var h2Move= $('.grid-la-list > .gla-item:nth-child('+i+') > a > div.gla-item-content:first-child > h2.gla-item-title');
            var toDiv = $('.grid-la-list > .gla-item:nth-child('+i+') > a > div.gla-item-content:first-child .gla-item-desc');
            toDiv.prepend(h2Move);
            console.log('No Img : ');
        }
    }
}