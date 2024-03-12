// ******* 계산기 사칙연산 로직 생각해보기 *******

/*
입력값(숫자) + 연산자 + 입력값(숫자) + '=' ----> 결과값 반환
입력값을 쌓으면서 만약 연산자가 들어온다면, 
입력값 쌓아놓은 숫자를 firstNum에 담고
연산자를 담고
다시 '='이 나올때까지 숫자 담고


*/
/**
 * 필요한 함수 : 
 *  1. 우선순위 반환 함수
 *  2. 후위변환 함수
 *  3. 후위식 계산 함수
 */

function fnPriority(operator){
    var res = 0;
    switch(operator){
        case '+':
        case '-':
            res = 1;
            break;
        case '*': 
        case '/':
            res = 2;
            break;
        return res;
    }
}

var infixTxt = ''; //중위표기법
var postfixTxt = ''; //후위표기법
$('.btn').on('click', function(){
    
    var className = $(this).attr('class');
    var inputTxt = $(this).text();
    console.log(className, inputTxt);
    
    //AC 클릭 시 초기화
    // if(className.indexOf('clear') > -1){
    if(inputTxt == 'AC'){
        $('.inout').empty();
        infixTxt = '';
        return false;
    }

    if(inputTxt != '='){
        // = 연산자 클릭할 때까지 (중위표현식)
        infixTxt += inputTxt;
    }
    else{
        //계산
        fnCalc(infixTxt);
    }
    console.log(infixTxt);
        
    $('.inout').html(infixTxt);

    

    var res = 0;

});

function fnCalc(infix){
    console.log('fnCal 함수의 infix', infix);
}

