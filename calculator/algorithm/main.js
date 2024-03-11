// ******* 계산기 사칙연산 로직 생각해보기 *******

/*
입력값(숫자) + 연산자 + 입력값(숫자) + '=' ----> 결과값 반환
입력값을 쌓으면서 만약 연산자가 들어온다면, 
입력값 쌓아놓은 숫자를 firstNum에 담고
연산자를 담고
다시 '='이 나올때까지 숫자 담고


*/

var txt = '';
$('.btn').on('click', function(){
    
    var className = $(this).attr('class');
    var inputTxt = $(this).text();
    
    //AC 클릭 시 초기화
    if(className.indexOf('clear') > -1){
        $('.inout').empty();
        txt = '';
        return false;
    }

    firsttxt += $(this).text();
    console.log(className, txt);
    
    if(inputTxt == '*'){

    }
    
    $('.inout').html(txt);

    

    var res = 0;

});

function fnCalc(){
    
}

