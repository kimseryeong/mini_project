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



var infixTxt = ''; //중위표기법
var postfixTxt = ''; //후위표기법
$('.btn').on('click', function(){
    $('.inout').html('');

    var inputTxt = $(this).text();
    
    //AC 클릭 시 초기화
    if(inputTxt == 'AC'){
        $('.inout').empty();
        infixTxt = '';
        return false;
    }

    if(inputTxt != '='){
        // = 연산자 클릭할 때까지 (중위표현식)
        infixTxt += inputTxt;
        $('.inout').html(infixTxt);
    }
    else{
        //계산
        var result = fnCalculate(infixTxt);
        $('.inout').html(result);
        infixTxt = result;
        // return false;
    }
    //console.log(infixTxt);
        

});

//중위표현식 -> 후위표현식 변환
function fnCalculate(infix){
    var infixStr = infix.split('')
    var res = '';
    var stack = [];
    var postfix = [];

    
    /**
     * 피연산자(숫자)는 res에 담기
     * 첫번째 연산자는 스택에 담기
     * 두번째 연산자~는 '넣으려는 연산자' 와 '스택에 있는 연산자' 우선순위 비교
     *      -> 넣으려는 연산자 <= 스택 상단 연산자 : 스택 상단 연산자 pop() & 넣으려는 연산자 push()
     *      -> 넣으려는 연산자 >  스택 상단 연산자 : 넣으려는 연산자 push()
     * 더이상 처리할 문자가 없고 스택에 연산자가 있는 경우 res에 담기
     */
    for(var i = 0; i < infixStr.length; i++){
        
        if(!isNaN(infixStr[i])){
            res += infixStr[i];
            // postfix.push(infixStr[i]);
        }
        else{
            while(fnPriority(infixStr[i]) <= fnPriority(stack[stack.length - 1]) && stack.length > 0){
                // var popVal = stack.pop();
                // res += popVal;
                // postfix.push(popVal);
                res += stack.pop();
            }
            stack.push(infixStr[i]);
        }
        if(i == infixStr.length-1 && stack.length > 0){
            res += stack.pop();
            // var popVal = stack.pop();
            // res += popVal;
            // postfix.push(popVal);
        }
        
    }
    console.log('res: ', res);
    // console.log('postfix: ', postfix);
    var postfixRes = fnCalcPostfix(res);
    return postfixRes;
}

//후위표현식 계산 함수
function fnCalcPostfix(postfix){
    /**
     * 피연산자는 스택에 담기
     * 연산자는 스택에서 두 개의 피연산자를 꺼내 계산 후 결과를 다시 스택에 넣기
     */

    // var arr = [];
    var stack=[];
    var res = 0;
    
    //debugger;
    for(var char of postfix){
        //숫자라면
        if(!isNaN(char)){
            stack.push(parseFloat(char)); //문자가 아닌 숫자로
        }
        else{
            var num1 = stack.pop();
            var num2 = stack.pop();
            switch(char){
                case '+':
                    stack.push(num2 + num1);
                    break;
                case '-':
                    stack.push(num2 - num1);
                    break;
                case '*':
                    stack.push(num2 * num1);
                    break;
                case '/':
                    stack.push(num2 / num1);
                    break;
                }
                
        }
    }
    res = stack.pop();

    console.log('최종 계산 : ', res);
    return res;
}

//연산자 우선순위 반환
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
    }
    return res;
}
