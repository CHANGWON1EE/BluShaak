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
// << franchise_detail_wrap >>

let franchise_detail_container = document.querySelectorAll('.franchise_detail_container li');
let button = document.querySelectorAll('.franchise_btn');
let menu_pager = document.querySelectorAll('.menu_pager li');
let current_index = 0;

for (let i = 0; i < menu_pager.length; i++) {          
    menu_pager[i].addEventListener('click', function () {
        if (i != current_index) {                                // 같은 dot을 눌렀을 때 아무 변화도 없어야 하기에 '!=' 적용
            if (i > current_index) {                             // i(인덱스)가 current_index(현재 인덱스)보다 크다면
                clickForRight(i);                                // 오른쪽 방향으로 이동하는 로직 적용
            } else {                                             // i(인덱스)가 current_index(현재 인덱스)보다 작다면
                clickForLeft(i);                                 // 왼쪽 방향으로 이동하는 로직 적용
            }
        }
    });
}

function square_Active(next_index) {                                 // dot을 활성화 시켜줄 기능을 함수에 적용
    menu_pager[current_index].classList.remove('square_Active');           // current_index(현재 선택된 인덱스)의 'active' 클래스를 삭제하고,
    menu_pager[next_index].classList.add('square_Active');                 // next_index(다음에 선택할 인덱스)에 'active' 클래스를 적용
}

/* ================================================== */
// < franchise_detail_wrap - left button >

button[0].addEventListener('click', function () {
    clickForLeft(current_index - 1);  
})

function clickForLeft (previous_index) {
    if(previous_index < 0) {
        previous_index = franchise_detail_container.length - 1;
    }
    square_Active(previous_index);
    
    current_index = previous_index;

    franchise_detail_container[current_index].classList.remove('hidden');
    franchise_detail_container[(current_index + 3) % franchise_detail_container.length].classList.add('hidden');

    let i = 1;
    franchise_detail_container[current_index].style.order -= i;
}

/* ================================================== */
// < franchise_detail_wrap - right button >

button[1].addEventListener('click', function () {
    clickForRight(current_index + 1);
})

function clickForRight (next_index) {
    let i = -1;
    franchise_detail_container[current_index].style.order -= i;
    
    franchise_detail_container[current_index].classList.add('hidden');
    franchise_detail_container[(current_index + 3) % franchise_detail_container.length].classList.remove('hidden');

    next_index = next_index % franchise_detail_container.length;

    square_Active(next_index);

    current_index = next_index;
}

// +=: 문자 형태로 결합
// -=:숫자 형태로 변환