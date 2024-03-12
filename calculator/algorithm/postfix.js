//중위표현식 -> 후위표현식 변환
function fnPostfix(infix){
    var infixStr = infix.split('')
    var res = '';
    var stack = [];

    
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
        }
        else{
            while(fnPriority(infixStr[i]) <= fnPriority(stack[stack.length - 1]) && stack.length > 0){
                res += stack.pop();
            }
            stack.push(infixStr[i]);
        }
        if(i == infixStr.length-1 && stack.length > 0){
            res += stack.pop();
        }
    }
    console.log('postfix: ', res);
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