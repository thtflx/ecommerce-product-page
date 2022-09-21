const modifier = {
    imgThumbnailActive: 'img-showcase__thumbnail--active'
};

//  Shopping cart modal
const elSiteHeaderCartLink = document.querySelector('.js-site-header__cart-link');
const elSiteHeaderCarttModal = document.querySelector('.site-header__cart-modal');


if (elSiteHeaderCartLink) {
    elSiteHeaderCartLink.addEventListener('click', function(evt) {
        evt.preventDefault();

        elSiteHeaderCarttModal.classList.toggle('site-header__cart-modal--open');
    });
}


// Img showcase
const elImgShowcaseActiveImg = document.querySelector('.img-showcase__active-img');
const elsImgShowcaseThumbnailButton = document.querySelectorAll('.js-img-showcase__thumbnail-button');
const elsImgThumbnail = document.querySelectorAll('.img-showcase__thumbnail');


elsImgShowcaseThumbnailButton.forEach(function(elButton) {
    elButton.addEventListener('click', function() {
        // Remove active state from all buttons
        elsImgThumbnail.forEach(function(elsImgThumbnail) {
            elsImgThumbnail.classList.remove(modifier.imgThumbnailActive);
        });

        // Add active state to clicked button
        elButton.parentElement.classList.add(modifier.imgThumbnailActive);

        // Update active image src accordingly
        elImgShowcaseActiveImg.src = elButton.dataset.imgShowcaseBig;
        elImgShowcaseActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x,${elButton.dataset.imgShowcaseRetina} 2x`;
    });
});