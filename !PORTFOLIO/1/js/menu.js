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

/* ==================================================================================================== */
// << menu >>
// < menu bar >

let menu_bar = document.querySelectorAll('.menu_bar li');
let menu_detail_wrap = document.querySelectorAll('.menu_detail_wrap');
let current_index = 0;

// for (let i = 0; i < menu_bar.length; i++) {
//     menu_bar[i].addEventListener('click', function () {
//         // menu_bar[current_index].style.backgroundColor = 'black';
//         // menu_bar[i].style.backgroundColor = 'white';
//         // menu_bar[current_index].style.color = 'black';
//         // menu_bar[i].style.color = 'white';

//         menu_detail_wrap[current_index].classList.add('hidden');
//         menu_detail_wrap[i].classList.remove('hidden');
//         current_index = i;
//     })
// }

/* ================================================== */
// < menu - popup >

// let button = document.querySelectorAll('button');
let menu_detail_first_container = document.querySelectorAll('.menu_detail_first_container');
let menu_detail_first_container_selected = document.querySelectorAll('.menu_detail_first_container li');
let menu_detail_big = document.querySelector('.menu_detail_big');
let popup1, popup2;
let locationX = (screen.width - 500) / 2;
let locationY = (screen.height - 500) / 2;
for (let i = 0; i < menu_detail_first_container_selected.length; i++) {
    menu_detail_first_container_selected[i].addEventListener('click', function () {
        // popup1 = open(`new&best${i}.html`, `new&best${i}`, `left=${locationX}px, top=${locationY}px`); 
        // popup1.resizeTo('100%', '100%');
        // menu_detail_first_container_selected[i].children[0].setAttribute('src', `image/menu/new & best/big${i+1}.jpg`)
        // menu_detail_first_container_selected[i].children[0] = open(`image/menu/new & best/big${i+1}.jpg`);
        for (let j = 0; j < menu_detail_first_container_selected.length; j++) {
            menu_detail_first_container_selected[j].style.opacity = .5;
            menu_detail_first_container_selected[j].classList.add('pointer_none');
        }
        menu_detail_big.children[i].classList.remove('hidden');
        menu_detail_first_container_selected[i].style.opacity = 1;
        
    })

    menu_detail_big.children[i].addEventListener('click', function() {
        menu_detail_big.children[i].classList.add('hidden');
        // menu_detail_first_container_selected[i].classList.remove('pointer');
        // menu_detail_first_container_selected[i].style.opacity = 1;
        for (let j = 0; j < menu_detail_first_container_selected.length; j++) {
            menu_detail_first_container_selected[j].style.opacity = 1;
            menu_detail_first_container_selected[j].classList.remove('pointer_none');
        }
    })
    

    // menu_detail_first_container_selected[i].addEventListener('mousemove', function () {
    //     menu_detail_big.children[i].classList.add('hidden');
    // })
}

/* ================================================== */
// < menu - pager >

let menu_pager = document.querySelectorAll('.menu_pager');
// let menu_pager_btn = document.querySelectorAll('.menu_pager li');
let menu_detail_container = document.querySelectorAll('.menu_detail_container');
let current_idx = 0;

for (let i = 0; i < menu_detail_first_container.length; i++) {
    menu_pager[0].children[i].addEventListener('click', function () {
        menu_detail_first_container[current_idx].classList.add('hidden');
        menu_pager[0].children[current_idx].classList.remove('active_White');
        menu_detail_first_container[i].classList.remove('hidden');
        menu_pager[0].children[i].classList.add('active_White');
        current_idx = i;
    })
}

for (let i = 0; i < menu_detail_container.length; i++) {
    menu_pager[0].children[i].addEventListener('click', function () {
        menu_detail_container[current_idx].classList.add('hidden');
        menu_pager[0].children[current_idx].classList.remove('active_White');
        menu_detail_container[i].classList.remove('hidden');
        menu_pager[0].children[i].classList.add('active_White');
        current_idx = i;
    })
}



// console.log(menu_pager.length);
// console.log(menu_pager[1].children);
// console.log(menu_pager[1].children.length);
// console.log(menu_detail_wrap);
// console.log(menu_detail_wrap[1].children);

// pageSet();

// function pageSet() {
//     menu_detail_wrap[i].children[current_idx].classList.add('hidden');
//     menu_detail_wrap[i].children[i].classList.remove('hidden');
//     current_idx = i;
// }

// coffee
// for (let i = 0; i < menu_pager[1].children.length; i++) {
//     menu_pager[1].children[i].addEventListener('click', function () {
//         menu_detail_wrap[1].children[current_idx].classList.add('hidden');
//         menu_pager[1].children[current_idx].classList.remove('active_White');
//         menu_detail_wrap[1].children[i].classList.remove('hidden');
//         menu_pager[1].children[i].classList.add('active_White');
//         current_idx = i;
//     })
// }

// berverage
// for (let i = 0; i < menu_pager[2].children.length; i++) {
//     menu_pager[2].children[i].addEventListener('click', function () {
//         menu_detail_wrap[2].children[current_idx].classList.add('hidden');
//         menu_pager[2].children[current_idx].classList.remove('active_White');
//         menu_detail_wrap[2].children[i].classList.remove('hidden');
//         menu_pager[2].children[i].classList.add('active_White');
//         current_idx = i;
//     })
// }

// for (let i = 0; i < menu_bar.length; i++) {
//     for (let j = 0; j < menu_pager[i].children.length; j++) {
//         menu_pager[i].children[j].addEventListener('click', function () {
//             menu_detail_wrap[i].children[current_idx].classList.add('hidden');
//             menu_pager[i].children[current_idx].classList.remove('active_White');
//             menu_detail_wrap[i].children[j].classList.remove('hidden');
//             menu_pager[i].children[j].classList.add('active_White');
//             current_idx = j;
//             // console.log(i);
//             // console.log(menu_pager[i].children.length);
//         })
//     }
// }