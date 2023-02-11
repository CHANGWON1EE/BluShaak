var pageindex = $("#fullpage > .fullsection").size(); // fullpage 안에 섹션이(.fullsection) 몇 개인지 확인

for(var i = 1; i <= pageindex; i++){
	$("#fullpage > .quick > ul").append("<li></li>");
}

let fullpage = document.querySelector('#fullpage');
let $quick = $('.quick ul li');
let btnTop = document.querySelector('.btnTop');

fullset();
quickClick();

function fullset() {
	$("#fullpage .quick ul :first-child").addClass("on"); // 일단 화면이 로드 되었을때는 퀵버튼에 1번째에 불이 들어오게
	$("#fullpage .btnTop").addClass("hidden");            // 일단 화면이 로드 되었을때는 btnTop 버튼이 보이지 않게
	
	// if (pageindex <= 0) {
		// $quick[0].style.border = '3px solid #fff';
	// 	btnTop.style.display="none";
	// }

	// $("#fullpage .quick ul li").addClass("white_on");

	$(window).bind("mousewheel", function(event) { // 마우스 휠 이벤트
		var page = $(".quick ul li.on");

		// alert(page.index() + 1);  // 현재 on 되어있는 페이지 번호
		if($("body").find("#fullpage:animated").length >= 1) return false;

		//마우스 휠을 위로
		if(event.originalEvent.wheelDelta >= 1) {
			var before = page.index();
			// if (page.index() >= 0) page.prev().addClass("on").siblings(".on").removeClass("on"); // 퀵버튼 옮기기
			
			if (page.index() >= 0) {
				$quick.next().removeClass("black_on");
				// $quick.prev().removeClass("black_on");
				page.prev().addClass("on").siblings(".on").removeClass("on");
			} 

			if (page.index() >= 1) {
				$quick.next().removeClass("black_on");
				page.prev().addClass("black_on").siblings(".on").removeClass("on"); // 퀵버튼 옮기기
			} 

			// if (page.index() <= $(".quick ul li").size() - 2) {
			// 	$quick.next().removeClass("black_on");
			// 	page.next().addClass("black_on").siblings(".on").removeClass("black_on");
			// }

			// console.log(page.index())
			// console.log(page.prev().index())

			if (page.prev().index() <= 0) {
				btnTop.style.display = "none";
				$quick.prev().removeClass("black_on");
				// page.prev().addClass("on").siblings(".on").removeClass("black_on");
				// page.prev().addClass("on").siblings(".on").removeClass("black_on");
				// page.next().addClass("on").siblings(".on").removeClass("black_on");
				for (let i = 0; i < $quick.length; i++) {
					$quick[i].style.border = '3px dotted #fff';
				}
			}
			
			var pagelength = 0;
			for(var i = 1; i < (before); i++) {
				pagelength += $(".full" + i).height();
			}
			if(page.index() > 0) { // 첫번째 페이지가 아닐때 (index는 0부터 시작임)
				page = page.index() - 1;
				$("#fullpage").animate({"top": -pagelength + "px"}, 800, "swing");
			}
            // else{ btnTop.style.display="none";
				// alert("첫 번째 페이지 입니다.");
			// }
			
		} else { // 마우스 휠을 아래로	
			var nextPage = parseInt(page.index() + 1); // 다음 페이지 번호
			var lastPageNum = parseInt($(".quick ul li").size()); // 마지막 페이지 번호
			//현재 페이지 번호 <= (마지막 페이지 번호 - 1)
			//이럴때 퀵버튼옮기기
			if (page.index() <= $(".quick ul li").size() - 1) { 
				page.next().addClass("on").siblings(".on").removeClass("on");
				btnTop.style.display = "block";
			}

			console.log($(".quick ul li").size() - 4);

			if (page.index() <= $(".quick ul li").size() - 2) {
				$quick.next().removeClass("black_on");
				page.next().addClass("black_on").siblings(".on").removeClass("black_on");
			}

			// $quick.next().addClass("black_on");
			// $("#fullpage .quick ul li").removeClass("black_on");
			// $("#fullpage .quick ul li").addClass("black_on");
			// $("#fullpage .quick ul li").classList.add('white_on');
			// $("#fullpage .quick ul li").classList.add('black_on');
			// $quick[0].style.border = 'none';
			// $quick[0].style.background = '#fff';
			// $quick[0].style.border = '1px solid #fff';
			
			for (let i = 0; i < $quick.length; i++) {
				$quick[i].style.border = '3px dotted #000';
				// $quick[i].style.border = '3px dotted #f8b646';
			}

			if(nextPage < lastPageNum){ //마지막 페이지가 아닐때만 animate !
				var pagelength = 0;
				for(var i = 1; i < (nextPage + 1); i++){ 
					//총 페이지 길이 구하기
					//ex) 현재 1번페이지에서 2번페이지로 내려갈때는 1번페이지 길이 + 2번페이지 길이가 더해짐
					pagelength += $(".full" + i).height();
				}
				$("#fullpage").animate({"top": -pagelength + "px"},800, "swing");
			}
			// else { // 현재 마지막 페이지 일때는
				// alert("마지막 페이지 입니다.");
			// };		

		}
	});

	$(window).resize(function(){ 
		// 페이지가 100% 이기 때문에 브라우저가 resize 될 때마다 스크롤 위치가 그대로 남아있는것을 방지하기 위해
		var resizeindex = $(".quick ul li.on").index() + 1;
		
		var pagelength=0;
		for(var i = 1; i < resizeindex; i++){ 
			// 총 페이지 길이 구하기
			// ex) 현재 1번 페이지에서 2번 페이지로 내려갈때는 1번 페이지 길이 + 2번 페이지 길이가 더해짐
			pagelength += $(".full" + i).height();
		}

		$("#fullpage").animate({"top": -pagelength + "px"}, 0);

		// if ($("#fullpage").animate({"top": -959 + "px"})) {
		// 	btnTop.style.display="none";
		// };
	});
}

/* ================================================== */
// < fullpage - pager > 사이드 퀵버튼 클릭 이동

function quickClick() {
	$(".quick li").click(function() {
		var gnbindex = $(this).index() + 1;
		var length = 0;
		for(var i = 1; i < (gnbindex); i++) {
			length += $(".full" + i).height();
		}
		if($("body").find("#fullpage:animated").length >= 1) return false;
		$(this).addClass("on").siblings("li").removeClass("on");	
		if (gnbindex - 1 <= 0) {
			btnTop.style.display = "none";
			$quick.next().removeClass("black_on");
			for (let i = 0; i < $quick.length; i++) {
				$quick[i].style.border = '3px dotted #fff';
			}
		} else {
			btnTop.style.display = "block";
			$quick.prev().removeClass("black_on");
			$(this).addClass("black_on").siblings("li").removeClass("black_on");	
			for (let i = 0; i < $quick.length; i++) {
				$quick[i].style.border = '3px dotted #000';
			}
		}
		$("#fullpage").animate({"top": -length + "px"},800, "swing");
		return false;
	});
}

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
// << section1 >>

let background = document.querySelector('.full1 .background');
let background_array = ['main01', 'main02', 'main03'];
let button = document.querySelectorAll('.background a');
// let indexEnd = img_container.length - 1;
let current_index = 0;

/* ================================================== */
// < section1 - pager >

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
    dot[current_index].classList.remove('dot_Active');           // current_index(현재 선택된 인덱스)의 'active' 클래스를 삭제하고,
    dot[next_index].classList.add('dot_Active');                 // next_index(다음에 선택할 인덱스)에 'active' 클래스를 적용
}

/* ================================================== */
// < section1 - left button >

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
// < section1 - right button >

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
// < section1 - btnTop >

btnTop.addEventListener('click', function () {
	fullpage.style.top = 0;
	$quick.eq(0).addClass("on").siblings(".on").removeClass("on");
	btnTop.style.display="none";
	for (let i = 0; i < $quick.length; i++) {
		$quick[i].style.border = '3px dotted #fff';
	}
})

// $quick[0].addEventListener('click', function () {
// 	btnTop.style.display="none";
// })

// for (let i = 1; i < 5; i++) {
// 	$quick[i].addEventListener('click', function () {
// 		btnTop.style.display="block";
// 	})	
// }

/* ==================================================================================================== */
// << section4 >>
// < tab_btn >

let tab_btn = document.querySelectorAll('.full4 .tab_main .tabs li');
let tab_content = document.querySelectorAll('.full4 .tab_main .tab_content');
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
// << section5 >>
// < section5_pager >

let section5_pager = document.querySelector('.section5_pager');     // .section5_pager
let section5_banner = document.querySelector('.section5_banner');
let section5_banner_length = section5_banner.children.length;

for (let i = 0; i < section5_banner_length; i++) {
    section5_pager.innerHTML += '<a href ="#" class="square"></a>'; // li 갯수 만큼 pager 생성
}

let square = document.querySelectorAll('.section5_pager a');        // pager의 square

square[current_index].classList.add('square_Active');               // 첫 번째 square 활성화

for (let i = 0; i < section5_banner_length; i++) {
    square[i].addEventListener('click', function () {	
		square[current_index].classList.remove('square_Active');
		square[i].classList.add('square_Active');
		
		section5_banner.children[current_index].style.left = '100%';
		section5_banner.children[i].style.left = 0;

		current_index = i;
	});
}

if (innerWidth >= '1180px') {
	section5_banner.children.style.display = 'block';
}