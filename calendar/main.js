$(document).ready(function(){});

//현재 일, 월, 년도 
var today = new Date();
var currentMonth = today.getMonth(); //getMonth() : 1월 = 0 부터 숫자로 표시
var currentYear = today.getFullYear();
var currentDate = today.getDate();

fnRenderCal();

//이전 달 버튼
$('#prevBtn').on('click', function (){
    currentMonth --;

    if(currentMonth < 0){
        currentMonth = 11;
        currentYear--;
    }
    
    fnRenderCal();
});

//다음 달 버튼
$('#nextBtn').on('click', ()=>{
    currentMonth ++;

    if(currentMonth > 11){
        currentMonth = 0;
        currentYear ++;
    }
    
    fnRenderCal();
});

//오늘 버튼
$('#todayBtn').on('click', () => {
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();

    fnRenderCal();
});

// $('.btn').on('click', function(){
//     $(this).css('background-color', 'lightgrey');

// });

//월별로 캘린더 생성하기
function fnRenderCal(){
    const year = today.getFullYear();
    const month = today.getMonth();

    var firstDateOfMonth = new Date(currentYear, currentMonth, 1); //현재 월의 첫번째 날짜 값 가져오기
    
    var firstDayOfWeek = firstDateOfMonth.getDay(); //현재 월의 첫번째 날짜 요일 가져오기 (숫자 1 = 월)
    
    var daysInMonth = new Date(currentYear, currentMonth+1, 0).getDate(); //현재 월의 총일수 값 가져오기

    //날짜가 들어갈 공간 초기화
    $('#dates').empty();

    //현재 월의 첫번째 요일 전까지(이전 월) 빈공간으로
    for (let i = 0; i < firstDayOfWeek; i++) {
        $('#dates').append('<div></div>');
    }

    //현재 월의 날짜 삽입
    for (let i = 1; i <= daysInMonth; i++) {
        const $dayElement = $('<div>')
        const $spanElement = $('<span>').text(i);
        
        // 현재 날짜와 비교하여 오늘이면 클래스 추가
        if (year === currentYear && month === currentMonth && i === currentDate) {
            $spanElement.addClass('today');
        }
        
        // 주말인 경우 클래스 추가
        const dayOfWeek = new Date(currentYear, currentMonth, i).getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            $dayElement.addClass('weekend');
        }

        //div 내에 span 삽입 후 
        $dayElement.append($spanElement);
        $('#dates').append($dayElement);

    }

    fnSwtichMonth();
}


//getMonth() 출력값 숫자 -> 영문 변경
function fnSwtichMonth(){
    var engMonth = '';
    switch (currentMonth) {
        case 0:
            engMonth = 'January';
            break;
        case 1:
            engMonth = 'February';
            break;
        case 2:
            engMonth = 'March';
            break;
        case 3:
            engMonth = 'April';
            break;
        case 4:
            engMonth = 'May';
            break;
        case 5:
            engMonth = 'June';
            break;
        case 6:
            engMonth = 'July';
            break;
        case 7:
            engMonth = 'August';
            break;
        case 8:
            engMonth = 'September';
            break;
        case 9:
            engMonth = 'October';
            break;
        case 10:
            engMonth = 'November';
            break;
        case 11:
            engMonth = 'December';
            break;
    }
    $('#current_month_year').text(`${engMonth}, ${currentYear}`);
    
}