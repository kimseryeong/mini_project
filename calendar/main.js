var today = new Date();
var month = today.getMonth(); //getMonth() : 1월 = 0 부터 숫자로 표시
var year = today.getFullYear();
console.log(today);
console.log(month);
console.log(year);

//현재 년도, 월 
switch (month) {
    case 0:
        month = 'January';
        break;
    case 1:
        month = 'February';
        break;
    case 2:
        month = 'March';
        break;
    case 3:
        month = 'April';
        break;
    case 4:
        month = 'May';
        break;
    case 5:
        month = 'June';
        break;
    case 6:
        month = 'July';
        break;
    case 7:
        month = 'August';
        break;
    case 8:
        month = 'September';
        break;
    case 9:
        month = 'October';
        break;
    case 10:
        month = 'November';
        break;
    case 11:
        month = 'December';
        break;
}
document.getElementById('current_month_year').textContent = `${month}, ${year}`;

//월별로 캘린더 생성하기
function fnRenderCal(){
    var firstDay = new Date(year, month, 1); //현재 월의 첫번째 날짜 값 가져오기
    console.log(firstDay);
    var days = new Date(year, month+1, 0).getDate(); //현재 월의 일수 값 가져오기
    console.log(days);
    var first = firstDay.getDay(); //현재 월의 첫번째 날짜 요일 가져오기 (숫자 1 = 월)
    console.log(first);

    document.getElementById('dates').innerHTML = '';
}

fnRenderCal();