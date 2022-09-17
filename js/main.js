const elSiteHeaderCartLink = document.querySelector('.js-site-header__cart-link');
const elSiteHeaderCarttModal = document.querySelector('.site-header__cart-modal');


if (elSiteHeaderCartLink) {
    elSiteHeaderCartLink.addEventListener('click', function(evt) {
        evt.preventDefault();

        elSiteHeaderCarttModal.classList.toggle('site-header__cart-modal--open');
    });
}