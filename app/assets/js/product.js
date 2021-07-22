const btnFilter = document.querySelector('.product-banner_menu');
const optical = document.querySelector('.btn-optial');
const sun = document.querySelector('.btn-sun');
const fun = document.querySelector('.btn-fun');
const dataOptical = document.querySelector('.optical');
const dataSun = document.querySelector('.sunglasses');
const dataFun = document.querySelector('.functional');

btnFilter.addEventListener('click', function (e) {
    btnStatus(e.target);
})

function btnStatus(btnFocus) {
    optical.classList.remove('focus');
    sun.classList.remove('focus');
    fun.classList.remove('focus');
    dataSun.setAttribute('style', 'display: none');
    dataOptical.setAttribute('style', 'display: none');
    dataFun.setAttribute('style', 'display: none');
    if (btnFocus.nodeName !== 'LI') {
        btnFocus = btnFocus.parentNode;
    }
    switch (btnFocus.value) {
        case 1:
            dataOptical.setAttribute('style', 'display: block');
            break;
        case 2:
            dataSun.setAttribute('style', 'display: block');
            break;
        case 3:
            dataFun.setAttribute('style', 'display: block');
            break;
        default:
            return;
    }
    //新增CLASS
    btnFocus.classList.add('focus');
}
