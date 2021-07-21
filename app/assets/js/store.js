const btnDetail = document.querySelectorAll('.detail');
const list = document.querySelector('.store-list');
const detail = document.querySelector('.store-detail');
const select = document.querySelector('#location');

btnDetail.forEach(function (item) {
    item.addEventListener('click', function (e) {
        detail.setAttribute('style', 'display: flex');
        list.setAttribute('style', 'display: none');
    })
})

select.addEventListener('change', function (e) {
    list.setAttribute('style', 'display: none');
    detail.setAttribute('style', 'display: none');
    if (e.target.value === 'all') {
        list.setAttribute('style', 'display: flex');
    } else {
        detail.setAttribute('style', 'display: flex');
    }
})
