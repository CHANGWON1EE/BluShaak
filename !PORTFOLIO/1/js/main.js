'use strict';

/* ==================================================================================================== */

/* window.onload = function () {
    var elm = ".mainfullbox";
    var boxcount= $(elm).length;
    var wheelflag = false; //휠 동작중인지 아닌지 체크
    var wheelindex = 0; //첫번째 전체화면 엘리먼트 인덱스값
    
    $(elm).each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            console.log($(this).index());  
            //alert($(this).index());
            //엘리먼트 인덱스값 확인하여 wheelindex 변수에 대입
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } 
            else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollTop();

            var elmSelecter = $(elm).eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try{

                        if($(this).index() == (boxcount-1)) {
                        moveTop = $(elmSelecter).offset().top;
                        
                        } else {
                        moveTop = $(elmSelecter).next().offset().top;
                        $('#mainfull_navi p').removeClass('on');
                        $('#mainfull_navi'+$(elmSelecter).next().index()).addClass('on');
                        }

                    }catch(e){}
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try{

                        if($(this).index() == wheelindex) { //index값 조정 필요. 기본 0이어야 되는데 ㅜㅜ
                        moveTop = $(elmSelecter).offset().top;
                        } else {
                        moveTop = $(elmSelecter).prev().offset().top;
                        $('#mainfull_navi p').removeClass('on');
                        $('#mainfull_navi'+$(elmSelecter).prev().index()).addClass('on');
                        }
                    }catch(e){

                    }
                }
            }
             
            // 화면 이동 0.8초(800)
            //if (wheelflag == false) {
                //wheelflag = true;
                $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
                }, {
                    duration: 800, complete: function () {
                    wheelflag = false;
                }
                });
            //}
        });
    });
}

//네비게이션용 함수
function fnMove(div, num){
    var offset = $(div).offset();
    $('html, body').animate({scrollTop : offset.top}, 400);
    $('#mainfull_navi p').removeClass('on');
    $('#mainfull_navi'+num).addClass('on');
} */

window.onload = function () {
    var elm = ".main";
    $(elm).each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } 
            else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try{
                        moveTop = $(elmSelecter).next().offset().top;
                    }catch(e){}
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try{
                        moveTop = $(elmSelecter).prev().offset().top;
                    }catch(e){}
                }
            }
             
            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800, complete: function () {
                }
            });
        });
    });
}

/* ==================================================================================================== */
// << toggle >>

let toggle_open_btn = document.querySelector('.menu_btn .toggle_open'),
    toggle_close_btn = document.querySelector('.toggle_close'),
    toggle_wrap = document.querySelector('.toggle_wrap');

toggle_open_btn.addEventListener('click', function () {
    // toggle_wrap.classList.add('toggle_switch');
    toggle_wrap.style.display = 'block';
})

toggle_close_btn.addEventListener('click', function () {
    // toggle_wrap.classList.remove('toggle_switch');
    toggle_wrap.style.display = 'none';
})

/* ==================================================================================================== */
// << section1 >>

let background = document.querySelector('.section1 .background');
let background_array = ['main01', 'main02', 'main03'];
let button = document.querySelectorAll('.background a');
// let indexEnd = img_container.length - 1;
let current_index = 0;

/* ================================================== */
// < pager >

let pager = document.querySelectorAll('.section1 .pager li')

pager[current_index].classList.add('black_Active');

for (let i = 0; i < pager.length; i++) {
    pager[i].addEventListener('click', function () {
        pager[current_index].classList.remove('black_Active');
        pager[i].classList.add('black_Active');
        current_index = i;
    })
}


/* ================================================== */
// < section1_pager >

let section1_pager = document.querySelector('.section1_pager');  // .section1_pager

for (let i = 0; i < background_array.length; i++) {
    section1_pager.innerHTML += '<a href ="#" class="dot"></a>'; // background 갯수 만큼 pager 생성
}

let dot = document.querySelectorAll('.section1_pager a');        // pager의 dot

dot[current_index].classList.add('dot_Active');                  // 첫 번째 dot 활성화

for (let i = 0; i < dot.length; i++) {          
    dot[i].addEventListener('click', function () {
        if (i != current_index) {                                // 같은 dot을 눌렀을 때 아무 변화도 없어야 하기에 '!=' 적용
            if (i > current_index) {                             // i(인덱스)가 current_index(현재 인덱스)보다 크다면
                clickForRight(i);                                // 오른쪽 방향으로 이동하는 로직 적용
            } else {                                             // i(인덱스)가 current_index(현재 인덱스)보다 작다면
                clickForLeft(i);                                 // 왼쪽 방향으로 이동하는 로직 적용
            }
        }
    });
}

function dotActive(next_index) {                                 // dot을 활성화 시켜줄 기능을 함수에 적용
    dot[current_index].classList.remove('dot_Active');               // current_index(현재 선택된 인덱스)의 'active' 클래스를 삭제하고,
    dot[next_index].classList.add('dot_Active');                     // next_index(다음에 선택할 인덱스)에 'active' 클래스를 적용
}

/* ================================================== */
// < button >
// < left button >

button[0].addEventListener('click', function () {
    clickForLeft(current_index - 1);  
})

function clickForLeft (previous_index) {
    if(previous_index < 0) {
        previous_index = dot.length - 1;
    }
    dotActive(previous_index);
    current_index = previous_index;
    background.style.background = `url(image/main/${background_array[current_index]}.jpg) no-repeat 0/cover`;
}

/* ================================================== */
// < right button >

button[1].addEventListener('click', function () {
    clickForRight(current_index + 1);
})

function clickForRight (next_index) {
    next_index = next_index % dot.length;
    dotActive(next_index);
    current_index = next_index;
    background.style.background = `url(image/main/${background_array[current_index]}.jpg) no-repeat 0/cover`;
}

/* ================================================== */
// < btnTop >

let btnTop = document.querySelector('.btnTop');

btnTop.addEventListener('click', () => {
    let posY = parseInt(window.scrollY);

    window.scroll(0, 0)

    backScroll(() => window.scroll(0, posY -= 20));
    function backScroll(backSc) {
        let stopTimeout = setInterval(() => {
            backSc();

            if(posY < 0) {
                clearInterval(stopTimeout);
            }
        }, 5);
    }
})

document.addEventListener('scroll', () => {
    let posY = parseInt(window.scrollY);

    if (posY > window.innerHeight * .5) {
        btnTop.classList.add('visibility');
    } else {
        btnTop.classList.remove('visibility');
    }
});

/* ==================================================================================================== */
// << section4 >>
// < tab_btn >

let tab_btn = document.querySelectorAll('.section4 .tab_main .tabs li');
let tab_content = document.querySelectorAll('.section4 .tab_main .tab_content');
let previous_index = 0;

for (let i = 0; i < tab_btn.length; i++) {
    tab_btn[i].addEventListener('click', function () {
        tab_Active();

        tab_btn[i].classList.add('tab_Active');
        tab_content[i].style.display = 'flex';

        previous_index = i;
    })
}

function tab_Active () {
    tab_btn[previous_index].classList.remove('tab_Active');
    tab_content[previous_index].style.display = 'none'
}


/* ================================================== */
// < tab1, 2, 3, 4 >

