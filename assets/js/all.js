"use strict";

var btnFilter = document.querySelector('.product-banner_menu');
var optical = document.querySelector('.btn-optial');
var sun = document.querySelector('.btn-sun');
var fun = document.querySelector('.btn-fun');
var dataOptical = document.querySelector('.optical');
var dataSun = document.querySelector('.sunglasses');
var dataFun = document.querySelector('.functional');
btnFilter.addEventListener('click', function (e) {
  btnStatus(e.target);
});

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
  } //新增CLASS


  btnFocus.classList.add('focus');
}
"use strict";

var btnDetail = document.querySelectorAll('.detail');
var list = document.querySelector('.store-list');
var detail = document.querySelector('.store-detail');
var select = document.querySelector('#location');
btnDetail.forEach(function (item) {
  item.addEventListener('click', function (e) {
    detail.setAttribute('style', 'display: flex');
    list.setAttribute('style', 'display: none');
  });
});
select.addEventListener('change', function (e) {
  list.setAttribute('style', 'display: none');
  detail.setAttribute('style', 'display: none');

  if (e.target.value === 'all') {
    list.setAttribute('style', 'display: flex');
  } else {
    detail.setAttribute('style', 'display: flex');
  }
});
//# sourceMappingURL=all.js.map
