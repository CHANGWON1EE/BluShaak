/* ==================================================================================================== */
// << main >>
// < toggle >

let toggle_open_btn = document.querySelector('.menu_btn .toggle_open'),
    toggle_close_btn = document.querySelectorAll('.toggle_close'),
    toggle_wrap = document.querySelector('.toggle_wrap');

toggle_open_btn.addEventListener('click', function () {
    toggle_wrap.style.display = 'block';
})

toggle_close_btn[0].addEventListener('click', function () {
    toggle_wrap.style.display = 'none';
})

toggle_close_btn[1].addEventListener('click', function () {
    toggle_wrap.style.display = 'none';
})
